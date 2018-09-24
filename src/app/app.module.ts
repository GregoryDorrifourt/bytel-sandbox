import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Third Party Modules **/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/** Modules **/
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BaseModule } from './base/base.module';
import { DocumentationModule } from './documentation/documentation.module';

/** Components **/
import { AppComponent } from './app.component';
import { FooterComponent } from './interface/footer/footer.component';
import { HeaderComponent } from './interface/header/header.component';
import { NavbarComponent } from './interface/navbar/navbar.component';
import { ToolsModule } from './tools/tools.module';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        NavbarComponent,
    ],
    imports: [
        AppRoutingModule,
        BaseModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule.forRoot(),
        DocumentationModule,
        ToolsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
