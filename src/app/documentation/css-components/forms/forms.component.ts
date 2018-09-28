import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { CopyToClipboardService } from '../../../base/services/copy-to-clipboard.service';


@Component({
    selector: 'sb-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {

    public sampleButtonGroup: FormControl;


    public copied: boolean = false;

    constructor(
        private ctc: CopyToClipboardService
    ) { }

    private sample1 = ``;



    public copyCode(code: string): void {
        this.ctc.copy(code).then(() => {
            this.copied = true;
            setTimeout(() => {
                this.copied = false;
            }, 2000);
        });
    }

    ngOnInit() {
        this.sampleButtonGroup = new FormControl('');
    }

}