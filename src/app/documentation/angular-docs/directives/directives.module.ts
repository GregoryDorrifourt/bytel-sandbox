import { AppRoutingModule } from '../../../app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../../../base/base.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { CirclesLoaderComponent } from './circles-loader/circles-loader.component';
import { DirectivesComponent } from "./directives.component";
import { BtlSvgComponent } from './btl-svg/btl-svg.component';

@NgModule({
    imports: [
        AppRoutingModule,
        CommonModule,
        NgbModule,
        BaseModule,
        BrowserModule,
        HttpClientModule
    ],
    declarations: [
        CirclesLoaderComponent,
        DirectivesComponent,
        BtlSvgComponent
    ]
})
export class DirectivesModule { }
