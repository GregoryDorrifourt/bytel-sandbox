import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './svg/svg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseModule } from '../base/base.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
export class ToolsModule { }
