import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Directives **/
import { SvgDirective } from './directives/svg.directive';
import { CirclesLoaderDirective } from '../baseBtl/base/directives/circles-loader.directive';

/** Services **/
import { HelperService } from "./services/helper.service";
import { CopyToClipboardService } from "./services/copy-to-clipboard.service";

/** Pipes **/
import { KeysPipe } from './pipes/keys.pipe';
import { CustomCurrencyPipe } from "../baseBtl/base/pipes/currency.pipe";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CirclesLoaderDirective,
        CustomCurrencyPipe,
        KeysPipe,
        SvgDirective
    ],
    exports: [
        CirclesLoaderDirective,
        CustomCurrencyPipe,
        KeysPipe,
        SvgDirective
    ],
    providers: [
        CopyToClipboardService,
        HelperService
    ]
})
export class BaseModule { }
