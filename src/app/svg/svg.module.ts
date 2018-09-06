import { NgModule } from '@angular/core';
import { BaseModule } from '../base/base.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SvgComponent } from './svg.component';

@NgModule({
    imports: [
        BaseModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
    ],
    declarations: [
        SvgComponent
    ]
})
export class SvgModule { }
