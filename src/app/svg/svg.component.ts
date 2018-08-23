import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CopyToClipboardService } from "../base/services/copy-to-clipboard.service";

@Component({
    selector: 'app-svg',
    templateUrl: './svg.component.html',
    styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit, OnDestroy {

    svgData: Object;
    httpSub;
    copied: Boolean = false;
    currentCategory:string = 'all';

    constructor(private http: HttpClient, private ctc: CopyToClipboardService) { }

    ngOnInit() {

        this.httpSub = this.http.get('./assets/json/svg/svg.json').subscribe((data)=>{
            this.svgData = data;
        })

    }

    copyIcon(data, category){
        let str = '<i class="icon-item">\n'+
                        '<span btlSvg file="'+category+'-defs" name="shape-'+data.file+'" class="'+data.class+'"></span>\n'+
                    '</i>';
        this.ctc.copy(str).then(()=>{
            this.copied = true;
            setTimeout(() => {
                this.copied = false;
            }, 2000);
        })
    }

    ngOnDestroy() {
        this.httpSub.unsubscribe();
    }

}
