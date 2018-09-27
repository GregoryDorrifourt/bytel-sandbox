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

    private sample1 = `<button type="button" class="btn btn-primary">Primary</button>`;
    private sample2 = `<button type="button" class="btn btn-outline-primary">Primary</button>`;
    private sample3 = `<button type="button" class="btn btn-primary btn-lg">Large button</button>`;
    private sample4 = `<button type="button" class="btn btn-primary btn-sm">Small button</button>`;
    private sample5 = `<button type="button" class="btn btn-primary btn-lg btn-block">Block button</button>`;
    private sample6 = `<button type="button" class="btn btn-primary btn-lg" disabled>Disabled button</button>`;


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
