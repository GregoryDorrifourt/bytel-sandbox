import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CopyToClipboardService } from '../base/services/copy-to-clipboard.service';
import { HelperService } from '../base/services/helper.service';
import { forkJoin, pipe, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
    selector: 'app-svg',
    templateUrl: './svg.component.html',
    styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit, OnDestroy {

    public svgData: Object = {};
    public svgDataNew: {[key: string]: any} = {};
    public copied: Boolean = false;
    public sortByCanal: FormGroup;

    constructor(private http$: HttpClient, private ctc: CopyToClipboardService, private frb: FormBuilder) { }

    public ngOnInit() {

        this.buildForm();

        forkJoin(
            // @TODO: How to catch errors
            this.http$.get('../../gulp/svg.json'),
            this.http$.get('../../gulp/web-svg.json'),
            this.http$.get('../../gulp/tlv-svg.json')
        ).subscribe((data) => {
            const canals = ['web', 'angular2_web', 'angular2_telesales'];
            for (const canal in data) {
                if (data[canal]) {
                    this.svgData[canals[canal]] = data[canal];
                }
            }
            this.sortByCanal.controls['category'].setValue(canals[0]);
            this.sortByCanal.controls['page'].setValue( Object.keys(this.svgData[canals[0]])[0] );
        });
    }

    private buildForm() {

        this.sortByCanal = this.frb.group({
            category: [],
            page: []
        });

        this.sortByCanal.controls['category'].valueChanges.subscribe((category) => {

            if (this.svgData[category]) {
                this.sortByCanal.controls['page'].setValue( Object.keys(this.svgData[category])[0] );
            }
        });
    }
    // @TODO: Replace with native function
    private copyIcon(data, category) {
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

    /**
     *
     *
     * @param {{[key: string]: any}} object
     * @returns {number}
     * @memberof SvgComponent
     */
    public sizeOf(object: {[key: string]: any}): number {
        return HelperService.sizeOf(object);
    }

    public unCamelString(key: string) {
        return key.replace('_', ' ');
    }

    public ngOnDestroy() {}

}
