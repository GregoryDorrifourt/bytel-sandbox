import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CopyToClipboardService } from '../../base/services/copy-to-clipboard.service';

@Component({
    selector: 'sb-template-code-generator',
    templateUrl: './template-code-generator.component.html',
    styleUrls: ['./template-code-generator.component.scss']
})
export class TemplateCodeGeneratorComponent implements OnInit {

    public copied: boolean = false;
    public inputCode: FormControl;
    public codeType: FormControl;
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
        '*class',
        ' role',
        ' data-toggle',
        ' name',
        ' id',
        ' for=',
        ' file',
        ' type='
    ];

    private readonly declarators: string[] = [
        'let',
        'const',
        '*class',
        'interface',
        'import',
        'export',
        'from',
        'public',
        'private',
        'protected',
        'implements',
        'extends',
        ' = ',
        ' == ',
        ' === ',
        'new',
        'this',
        ' if',
        ' else ',
        'for'
    ];

    private readonly types: string[] = [
        '*string',
        'boolean',
        'FormControl',
        'number',
        'void'
    ];

    private readonly values: string[] = [
        'false',
        'true'
    ];

    private readonly operators: string[] = [
        '++',
        '.split',
        '.join',
        '.push',
        '.sort'
    ];

    constructor(private ctc: CopyToClipboardService) { }

    ngOnInit() {

        this.inputCode = new FormControl(``);
        this.codeType = new FormControl(`html`);
    }

    public generateCode(code: string): void {
        if(this.codeType.value === "html"){
            code = this.highlightHTML(code);
        } else {
            code = this.highlightJS(code);
        }

        this.outputCode = code;
    }

    public highlightHTML(code: string): string {
        // 1 - Securing class attribute
        code = code.split('class=').join('*class=');

        // 2 - Replace tags
        code = code.split('<').join('&lt;').split('>').join('&gt;');

        // 3 - Code highlight
        //     - Brace what's between quotes with '.c-value' class
        code = code.replace(/("([^"]|"")*")/g, `<span class="c-value">$1</span>`);

        //     - Brace what's between simple quotes with '.c-value' class
        code = code.replace(/('([^']|'')*')/g, `<span class="c-string-value">$1</span>`);

        //     - Brace what's between tags with '.c-string' class
        code = code.replace(/&gt;(.*[^])&lt;/g, `&gt;<span class="c-string">$1</span>&lt;`);

        //     - Brace what's between double braces with '.c-string' class
        code = code.replace(/{{(.*[^])}}/g, `<span class="c-string">{{$1}}</span>`);

        //     - Brace attributes between hooks with '.directive" class
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

        // 4 - Restore class attribute
        code = code.split('*class').join('class');

        return code;
    }

    public highlightJS(code: string){
        // 1 - Securing class attribute
        code = code.split('class').join('*class');

        // 2 - Securing string attribute
        code = code.split('string').join('*string');

        // Replace tags
        code = code.split('<').join('&lt;').split('>').join('&gt;');

        // 3 - Highlight
        //     - Brace what's between quotes with '.c-value' class
        code = code.replace(/("([^"]|"")*")/g, `<span class="c-string-value">$1</span>`);
        //     - Brace what's between simple quotes with '.c-value' class
        code = code.replace(/('([^']|'')*')/g, `<span class="c-string-value">$1</span>`);

        //     - Brace numbers with '.c-value' class
        code = code.replace(/([0-9])/g, `<span class="directive">$1</span>`);

        for(let item of this.declarators){
            code = code.split(item).join(`<span class="c-value">${item}</span>`)
        }
        for(let item of this.types){
            code = code.split(item).join(`<span class="c-attr">${item}</span>`)
        }
        for(let item of this.values){
            code = code.split(item).join(`<span class="directive">${item}</span>`)
        }
        for(let item of this.operators){
            code = code.split(item).join(`<span class="c-attr">${item}</span>`)
        }
        // 4 - Restore class
        code = code.split('*class').join('class');

        // 5 - Restore class attribute
        code = code.split('*string').join('string');

        return code;
    }

    public copyCode(code: string): void {
        code = `<pre class="showcase-code">${code}</pre>`;
        this.ctc.copy(code).then(() => {
            this.copied = true;
            setTimeout(() => {
                this.copied = false;
            }, 2000);
        });
    }
}
