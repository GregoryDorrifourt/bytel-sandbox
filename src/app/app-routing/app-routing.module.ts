import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponentsComponent } from '../documentation/css-components/css-components.component';
import { SvgComponent } from '../tools/svg/svg.component';
import { FormsComponent } from '../documentation/css-components/forms/forms.component';
import { ButtonsComponent } from '../documentation/css-components/buttons/buttons.component';
import { MiscellaneousComponent } from '../documentation/css-components/miscellaneous/miscellaneous.component';
import { DirectivesComponent } from '../documentation/angular-docs/directives/directives.component';
import { CirclesLoaderComponent } from '../documentation/angular-docs/directives/circles-loader/circles-loader.component';
import { BtlSvgComponent } from '../documentation/angular-docs/directives/btl-svg/btl-svg.component';
import { ComponentsComponent } from '../documentation/angular-docs/components/components.component';
import { BtlPriceDemoComponent } from '../documentation/angular-docs/components/btl-price/btl-price-demo.component';
import {TemplateCodeGeneratorComponent} from "../tools/template-code-generator/template-code-generator.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'directives',
        pathMatch: 'full'
    },
    {
        path: 'tools',
        children: [
            {
                path: '',
                redirectTo: 'svg',
                pathMatch: 'full'
            },
            {
                path: 'svg',
                component: SvgComponent

            },
            {
                path: 'generator',
                component: TemplateCodeGeneratorComponent
            },
            {
                path: '**',
                redirectTo: 'svg',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'directives',
        component: DirectivesComponent,
        children: [
            {
                path: '',
                redirectTo: 'btl-svg',
                pathMatch: 'full'
            },
            {
                path: 'circles-loader',
                component: CirclesLoaderComponent
            },
            {
                path: 'btl-svg',
                component: BtlSvgComponent
            }
        ]
    },
    {
        path: 'components',
        component: ComponentsComponent,
        children: [
            {
                path: '',
                redirectTo: 'btl-price',
                pathMatch: 'full'
            },
            {
                path: 'btl-price',
                component: BtlPriceDemoComponent
            }
        ]
    },
    {
        path: 'css-components',
        children: [
            {
                path: '',
                component: CssComponentsComponent,
            },
            {
                path: 'buttons',
                component: ButtonsComponent
            },
            {
                path: 'forms',
                component: FormsComponent
            },
            {
                path: 'misc',
                component: MiscellaneousComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'directives'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class AppRoutingModule {}
