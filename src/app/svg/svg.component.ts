import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CopyToClipboardService } from '../base/services/copy-to-clipboard.service';
import { HelperService } from '../base/services/helper.service';
import { forkJoin, pipe, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Component({
    selector: 'app-svg',
    templateUrl: './svg.component.html',
    styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit, OnDestroy {

    public svgData: Object = {};
    public svgDataNew: {[key: string]: any} = {};
    public copied: Boolean = false;
    public currentCategory: string = 'all';

    constructor(private http$: HttpClient, private ctc: CopyToClipboardService) { }

    ngOnInit() {

        forkJoin(
            // @TODO: How to catch errors
            this.http$.get('../../gulp/svg.json'),
            this.http$.get('../../gulp/tlv-svg.json'),
            this.http$.get('../../gulp/web-svg.json')
        ).subscribe((data) => {
            const canals = ['web', 'angular2_web', 'angular2_telesales'];
            for (const canal in data) {
                if (data[canal]) {
                    this.svgData[canals[canal]] = data[canal];
                }
            }
        });
    }

    copyIcon(data, category) {
        const str = `<i class='icon-item">
                        <span btlSvg file="${category}-defs" name="shape-${data.file}" class="${data.class}"></span>
                    </i>`;
        this.ctc.copy(str).then(() => {
            this.copied = true;
            setTimeout(() => {
                this.copied = false;
            }, 2000);
        });
    }

    sizeOf(object: {[key: string]: any}) {
        return HelperService.sizeOf(object);
    }

    unCamelString(key: string) {
        // return key;
        return key.replace('_', ' ');
    }

    ngOnDestroy() {}

}
