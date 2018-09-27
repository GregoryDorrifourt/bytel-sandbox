import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CopyToClipboardService } from '../../../base/services/copy-to-clipboard.service';

@Component({
    selector: 'sb-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {

    public sampleCB: FormControl;
    public sampleRadio: FormControl;

    public copied: boolean = false;

    constructor(
        private ctc: CopyToClipboardService
    ) { }

    private sample1 = `<label class="check-box-container" for="cb">
                            <input type="checkbox" class="check-box-input" id="cb" [formControl]="sampleCB">
                            <span class="check-box">
                                <i class="icon-item">
                                    <span btlSvg defsFolder="web" file="common-defs" name="shape-icon-check" class="icon s-check"></span>
                                </i>
                            </span>
                            Sélectionnez moi
                      </label>`;

    private sample2 = `<div class="form-group">
                            <div class="label-field">
                                <label for="name1">
                                    <input class="form-control radio-input-field" hidden type="radio" id="name1" value="0" name="sampleRadio" [formControl]="sampleRadio">
                                    <span class="radio-input-check"></span>
                                    <span class="label-offer label">Choix 1</span>
                                </label>
                            </div>
                            <div class="label-field">
                                <label for="name2">
                                    <input class="form-control radio-input-field" hidden type="radio" id="name2" value="1" name="sampleRadio" [formControl]="sampleRadio">
                                    <span class="radio-input-check"></span>
                                    <span class="label-offer label">Choix 2</span>
                                </label>
                            </div>
                        </div>`;

    public copyCode(code: string): void {
        this.ctc.copy(code).then(() => {
            this.copied = true;
            setTimeout(() => {
                this.copied = false;
            }, 2000);
        });
    }

    ngOnInit() {
        this.sampleCB = new FormControl('');
        this.sampleRadio = new FormControl('');
    }

}