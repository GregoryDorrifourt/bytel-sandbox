import { Component, OnInit } from '@angular/core';
import { CopyToClipboardService } from '../../../base/services/copy-to-clipboard.service';

@Component({
    selector: 'sb-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss']
})


export class ButtonsComponent implements OnInit {

    public copied: boolean = false;

    constructor(
        private ctc: CopyToClipboardService
    ) { }

    public sample1 = `<button type="button" class="btn btn-primary">Primary</button>`;
    public sample2 = `<button type="button" class="btn btn-outline-primary">Primary</button>`;
    public sample3 = `<button type="button" class="btn btn-primary btn-lg">Large button</button>`;
    public sample4 = `<button type="button" class="btn btn-primary btn-sm">Small button</button>`;
    public sample5 = `<button type="button" class="btn btn-primary btn-lg btn-block">Block button</button>`;
    public sample6 = `<button type="button" class="btn btn-primary btn-lg" disabled>Disabled button</button>`;


    ngOnInit() {

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
