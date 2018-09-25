import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import {CopyToClipboardService} from "../../base/services/copy-to-clipboard.service";

@Component({
    selector: 'sb-template-code-generator',
    templateUrl: './template-code-generator.component.html',
    styleUrls: ['./template-code-generator.component.scss']
})
export class TemplateCodeGeneratorComponent implements OnInit {

    public copied: boolean = false;
    public inputCode: FormControl;
    public outputCode: string;

    private readonly directives: string[] = [
        '*ngIf',
        '*ngFor',
        '(click)',
        'btlSvg',
        'btlSticky',
        'circlesLoader',
        'formControlName'
    ];

    private readonly components: string[] = [
        'btl-price'
    ];

    private readonly commonAttrs: string[] = [
        'clss',
        ' role',
        ' data-toggle',
        ' name',
        ' id',
        ' for=',
        ' file',
        ' type='
    ];

    constructor(private ctc: CopyToClipboardService) { }

    ngOnInit() {

        this.inputCode = new FormControl(``);
    }

    public generateCode(code: string): void {
        // 1 - Securize class attribute
        code = code.split('class=').join('clss=');
        // 2 - Replace tags
        code = code.split('<').join('&lt;').split('>').join('&gt;');
        // 3 - Highlight code
        code = this.highlightCode(code);
        // 4 - Restore class attribute
        code = code.split('clss').join('class');

        this.outputCode = code;
    }

    public highlightCode(code: string): string {
        // Brace what's between quotes with '.c-value' class
        code = code.replace(/("([^"]|"")*")/g, `<span class="c-value">$1</span>`);

        // Brace what's between quotes with '.c-value' class
        code = code.replace(/('([^"]|'')*')/g, `<span class="c-string-value">$1</span>`);

        // Brace what's between tags with '.c-string' class
        code = code.replace(/&gt;(.*[^])&lt;/g, `&gt;<span class="c-string">$1</span>&lt;`);

        // Brace what's between double braces with '.c-string' class
        code = code.replace(/{{(.*[^])}}/g, `<span class="c-string">{{$1}}</span>`);

        // Brace attributes between hooks with '.directive" class
        code = code.split(' [').join(` <span class="directive">[`).split(']=').join(`]</span>=`);

        for(let item of this.directives){
            code = code.split(item).join(`<span class="directive">${item}</span>`)
        }
        for(let item of this.components){
            code = code.split(item).join(`<span class="component">${item}</span>`)
        }
        for(let item of this.commonAttrs){
            code = code.split(item).join(`<span class="c-attr">${item}</span>`)
        }

        return code;
    }

    public copyCode(code: string): void {
        this.ctc.copy(code).then(() => {
            this.copied = true;
            setTimeout(() => {
                this.copied = false;
            }, 2000);
        });
    }
}
