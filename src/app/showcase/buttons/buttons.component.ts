import { Component, OnInit } from '@angular/core';
import {CopyToClipboardService} from "../../base/services/copy-to-clipboard.service";

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['../showcase.component.scss']
})
export class ButtonsComponent implements OnInit {

    copied: Boolean = false;

    colors: Array<string> = ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'default'];
    sizes: Array<string> = ['btn-sm', 'btn-lg'];
    states: Array<string> = ['', 'reversed', 'transparent', 'reversed transparent', 'disabled'];

    constructor(private ctc: CopyToClipboardService) { }

    ngOnInit() {

    }


    copyBtn(classes){
        let str = '<i class="icon-item">\n'+
            //'<span btlSvg file="'+category+'-defs" name="shape-'+data.file+'" class="'+data.class+'"></span>\n'+
            '</i>';
        this.ctc.copy(str).then(()=>{
            this.copied = true;
            setTimeout(() => {
                this.copied = false;
            }, 2000);
        })
    }


}
