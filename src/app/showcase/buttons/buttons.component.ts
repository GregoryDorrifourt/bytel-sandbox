import { Component, OnInit } from '@angular/core';
import {CopyToClipboardService} from "../../base/services/copy-to-clipboard.service";

@Component({
    selector: 'sb-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['../showcase.component.scss']
})
export class ButtonsComponent implements OnInit {

    constructor(private ctc: CopyToClipboardService) { }

    ngOnInit() {

    }

}
