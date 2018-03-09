import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Modules **/
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BaseModule } from "../base/base.module";

/** Components **/
import { DadComponent } from "./dad.component";


@NgModule({
    imports: [
    CommonModule,
        FormsModule,
        BaseModule,
        ReactiveFormsModule
    ],
    declarations: [
        DadComponent
    ]
})
export class DadModule { }
