import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadComponent } from '../dad/dad.component';
import { PlansWallComponent } from '../plans-wall/plans-wall.component';
import { ModalsComponent } from '../modals/modals.component';
import { CallBackComponent } from "../call-back/call-back.component";
import { ShowcaseComponent } from "../showcase/showcase.component";
import { SvgComponent } from "../svg/svg.component";
import { FormsComponent } from "../showcase/forms/forms.component";
import { ButtonsComponent } from "../showcase/buttons/buttons.component";
import { MiscellaneousComponent } from "../showcase/miscellaneous/miscellaneous.component";
import { DirectivesComponent } from "../directives/directives.component";
import { CirclesLoaderComponent } from "../directives/circles-loader/circles-loader.component";
import { PipesComponent } from "../pipes/pipes.component";
import { BtlSvgComponent } from "../directives/btl-svg/btl-svg.component";
import {CurrencyComponent} from "../pipes/currency/currency.component";

const routes: Routes = [
    {
        path: 'call-back',
        component: CallBackComponent
    },
    {
        path: 'modals',
        component: ModalsComponent
    },
    {
        path: 'svg',
        component: SvgComponent
    },
    {
        path: 'plans-wall',
        component: PlansWallComponent
    },
    {
        path: 'form',
        component: DadComponent
    },
    {
        path: 'directives',
        component: DirectivesComponent,
        children: [
            {
                path: '',
                redirectTo: 'circles-loader',
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
        path: 'pipes',
        component: PipesComponent,
        children: [
            {
                path: '',
                redirectTo: 'currency',
                pathMatch: 'full'
            },
            {
                path: 'currency',
                component: CurrencyComponent
            }
        ]
    },
    {
        path: 'showcase',
        component: ShowcaseComponent,
        children: [
            {
                path: '',
                redirectTo: 'buttons',
                pathMatch: 'full'
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
        path: '',
        redirectTo: 'showcase',
        pathMatch: 'full'
    },
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

export class AppRoutingModule { }