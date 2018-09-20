import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

/** Third Party Modules **/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/** Modules **/
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BaseModule } from './base/base.module';
import { DirectivesModule } from './directives/directives.module';
import { ShowcaseModule } from './showcase/showcase.module';
import { SvgModule } from './svg/svg.module';
import { ComponentsModule } from './components/components.module';

/** Components **/
import { AppComponent } from './app.component';
import { CallBackComponent } from './call-back/call-back.component';
import { FooterComponent } from './interface/footer/footer.component';
import { HeaderComponent } from './interface/header/header.component';
import { NavbarComponent } from './interface/navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        CallBackComponent,
        FooterComponent,
        HeaderComponent,
        NavbarComponent,
    ],
    imports: [
        AppRoutingModule,
        BaseModule,
        BrowserModule,
        DirectivesModule,
        ComponentsModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule.forRoot(),
        ShowcaseModule,
        SvgModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
