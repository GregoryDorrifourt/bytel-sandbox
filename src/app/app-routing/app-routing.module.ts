import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from '../showcase/showcase.component';
import { SvgComponent } from '../svg/svg.component';
import { FormsComponent } from '../showcase/forms/forms.component';
import { ButtonsComponent } from '../showcase/buttons/buttons.component';
import { MiscellaneousComponent } from '../showcase/miscellaneous/miscellaneous.component';
import { DirectivesComponent } from '../directives/directives.component';
import { CirclesLoaderComponent } from '../directives/circles-loader/circles-loader.component';
import { BtlSvgComponent } from '../directives/btl-svg/btl-svg.component';
import { ComponentsComponent } from '../components/components.component';
import { BtlPriceDemoComponent } from '../components/btl-price/btl-price-demo.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'directives',
        pathMatch: 'full'
    },
    {
        path: 'svg',
        component: SvgComponent
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
        path: 'showcase',
        children: [
            {
                path: '',
                component: ShowcaseComponent,
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
