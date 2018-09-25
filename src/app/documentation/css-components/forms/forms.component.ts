import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'sb-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

    public sampleCB: FormControl;
    public sampleRadio: FormControl;

    constructor() {

    }

    ngOnInit() {
        this.sampleCB = new FormControl('');
        this.sampleRadio = new FormControl('');
    }

}
