import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDocsModule } from './angular-docs/angular-docs.module';
import { CssComponentsModule } from './css-components/css-components.module';

@NgModule({
    imports: [
        CommonModule,
        AngularDocsModule,
        CssComponentsModule
    ],
    declarations: []
})
export class DocumentationModule { }
