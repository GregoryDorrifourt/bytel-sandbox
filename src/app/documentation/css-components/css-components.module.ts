import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../../base/base.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { CssComponentsComponent } from './css-components.component';

@NgModule({
    imports: [
        AppRoutingModule,
        CommonModule,
        NgbModule,
        BaseModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [
        ButtonsComponent,
        FormsComponent,
        MiscellaneousComponent,
        CssComponentsComponent
    ]
})
export class CssComponentsModule { }