import { NgModule } from '@angular/core';
import { BaseModule } from "../base/base.module";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { SvgComponent } from "./svg.component";

@NgModule({
    imports: [
        BaseModule,
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        SvgComponent
    ]
})
export class SvgModule { }
