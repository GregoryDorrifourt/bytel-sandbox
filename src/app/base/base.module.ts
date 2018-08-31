import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Form, FormsModule} from '@angular/forms';


/** Directives **/
import { SvgDirective } from './directives/svg.directive';
import { CirclesLoaderDirective } from '../baseBtl/base/directives/circles-loader.directive';

/** Services **/
import { HelperService } from "./services/helper.service";
import { CopyToClipboardService } from "./services/copy-to-clipboard.service";

/** Pipes **/
import { KeysPipe } from './pipes/keys.pipe';
import { CustomCurrencyPipe } from "../baseBtl/base/pipes/currency.pipe";

/** Components **/
import { BtlPriceComponent } from "./components/btl-price/btl-price.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        CirclesLoaderDirective,
        CustomCurrencyPipe,
        KeysPipe,
        SvgDirective,
        BtlPriceComponent
    ],
    exports: [
        CirclesLoaderDirective,
        CustomCurrencyPipe,
        KeysPipe,
        SvgDirective,
        BtlPriceComponent,
        FormsModule
    ],
    providers: [
        CopyToClipboardService,
        HelperService
    ]
})
export class BaseModule { }
