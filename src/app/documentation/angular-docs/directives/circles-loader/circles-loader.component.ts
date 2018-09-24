import { Component, OnInit } from '@angular/core';
import { CopyToClipboardService } from "../../../../base/services/copy-to-clipboard.service";

@Component({
    selector: 'sb-circles-loader',
    templateUrl: './circles-loader.component.html',
    styleUrls: ['./circles-loader.component.scss']
})
export class CirclesLoaderComponent implements OnInit {

    sizes: Array<string> = ['lg', 'md', 'sm', 'xs'];
    copied: Boolean = false;

    constructor( private ctc: CopyToClipboardService) { }

    ngOnInit() {
    }

    copyToClipboard(size){
        let str = '<div circlesLoader [size]="\''+size+'\'"></div>';
        this.ctc.copy(str).then(()=>{
            this.copied = true;
            setTimeout(() => {
                this.copied = false;
            }, 2000);
        })
    }

}
