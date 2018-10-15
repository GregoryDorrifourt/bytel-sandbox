import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { AngularDocsComponent } from './angular-docs.component';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        DirectivesModule
    ],
    declarations: [
        AngularDocsComponent
    ]
})
export class AngularDocsModule { }
