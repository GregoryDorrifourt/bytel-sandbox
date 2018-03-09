import { AppRoutingModule } from "../app-routing/app-routing.module";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../base/base.module';
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { PipesComponent } from './pipes.component';
import { CurrencyComponent } from './currency/currency.component';

@NgModule({
    imports: [
        AppRoutingModule,
        CommonModule,
        NgbModule,
        BaseModule,
        BrowserModule,
        HttpClientModule
    ],
    declarations: [PipesComponent, CurrencyComponent]
})
export class PipesModule { }
