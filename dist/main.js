(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../showcase/showcase.component */ "./src/app/showcase/showcase.component.ts");
/* harmony import */ var _svg_svg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/svg.component */ "./src/app/svg/svg.component.ts");
/* harmony import */ var _showcase_forms_forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../showcase/forms/forms.component */ "./src/app/showcase/forms/forms.component.ts");
/* harmony import */ var _showcase_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../showcase/buttons/buttons.component */ "./src/app/showcase/buttons/buttons.component.ts");
/* harmony import */ var _showcase_miscellaneous_miscellaneous_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../showcase/miscellaneous/miscellaneous.component */ "./src/app/showcase/miscellaneous/miscellaneous.component.ts");
/* harmony import */ var _directives_directives_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/directives.component */ "./src/app/directives/directives.component.ts");
/* harmony import */ var _directives_circles_loader_circles_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/circles-loader/circles-loader.component */ "./src/app/directives/circles-loader/circles-loader.component.ts");
/* harmony import */ var _pipes_pipes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pipes/pipes.component */ "./src/app/pipes/pipes.component.ts");
/* harmony import */ var _directives_btl_svg_btl_svg_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../directives/btl-svg/btl-svg.component */ "./src/app/directives/btl-svg/btl-svg.component.ts");
/* harmony import */ var _pipes_currency_currency_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/currency/currency.component */ "./src/app/pipes/currency/currency.component.ts");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _components_btl_price_btl_price_demo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/btl-price/btl-price-demo.component */ "./src/app/components/btl-price/btl-price-demo.component.ts");
/* harmony import */ var _components_page_title_page_title_demo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/page-title/page-title-demo.component */ "./src/app/components/page-title/page-title-demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: 'svg',
        component: _svg_svg_component__WEBPACK_IMPORTED_MODULE_3__["SvgComponent"]
    },
    {
        path: 'directives',
        component: _directives_directives_component__WEBPACK_IMPORTED_MODULE_7__["DirectivesComponent"],
        children: [
            {
                path: '',
                redirectTo: 'circles-loader',
                pathMatch: 'full'
            },
            {
                path: 'circles-loader',
                component: _directives_circles_loader_circles_loader_component__WEBPACK_IMPORTED_MODULE_8__["CirclesLoaderComponent"]
            },
            {
                path: 'btl-svg',
                component: _directives_btl_svg_btl_svg_component__WEBPACK_IMPORTED_MODULE_10__["BtlSvgComponent"]
            }
        ]
    },
    {
        path: 'pipes',
        component: _pipes_pipes_component__WEBPACK_IMPORTED_MODULE_9__["PipesComponent"],
        children: [
            {
                path: '',
                redirectTo: 'currency',
                pathMatch: 'full'
            },
            {
                path: 'currency',
                component: _pipes_currency_currency_component__WEBPACK_IMPORTED_MODULE_11__["CurrencyComponent"]
            }
        ]
    },
    {
        path: 'components',
        component: _components_components_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsComponent"],
        children: [
            {
                path: '',
                redirectTo: 'btl-price',
                pathMatch: 'full'
            },
            {
                path: 'btl-price',
                component: _components_btl_price_btl_price_demo_component__WEBPACK_IMPORTED_MODULE_13__["BtlPriceDemoComponent"]
            },
            {
                path: 'page-title',
                component: _components_page_title_page_title_demo_component__WEBPACK_IMPORTED_MODULE_14__["PageTitleDemoComponent"]
            }
        ]
    },
    {
        path: 'showcase',
        component: _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_2__["ShowcaseComponent"],
        children: [
            {
                path: '',
                redirectTo: 'buttons',
                pathMatch: 'full'
            },
            {
                path: 'buttons',
                component: _showcase_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ButtonsComponent"]
            },
            {
                path: 'forms',
                component: _showcase_forms_forms_component__WEBPACK_IMPORTED_MODULE_4__["FormsComponent"]
            },
            {
                path: 'misc',
                component: _showcase_miscellaneous_miscellaneous_component__WEBPACK_IMPORTED_MODULE_6__["MiscellaneousComponent"]
            }
        ]
    },
    {
        path: '',
        redirectTo: 'showcase',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <app-header></app-header>\n</header>\n<div class=\"sticky-top\">\n    <app-navbar></app-navbar>\n</div>\n<section class=\"content\">\n    <router-outlet></router-outlet>\n</section>\n<footer class=\"footer\">\n    <app-footer></app-footer>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Spacing converted to fit font size base\n * All values below are imported from default BS variables\n * ==================================== */\n.content {\n  background-color: #ececec;\n  min-height: 50rem;\n  padding-bottom: 2rem; }\n.footer {\n  border-top: #b5b5b5 0.1rem solid;\n  padding: 1rem; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base/base.module */ "./src/app/base/base.module.ts");
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/directives.module */ "./src/app/directives/directives.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _showcase_showcase_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./showcase/showcase.module */ "./src/app/showcase/showcase.module.ts");
/* harmony import */ var _svg_svg_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./svg/svg.module */ "./src/app/svg/svg.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _call_back_call_back_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./call-back/call-back.component */ "./src/app/call-back/call-back.component.ts");
/* harmony import */ var _interface_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./interface/footer/footer.component */ "./src/app/interface/footer/footer.component.ts");
/* harmony import */ var _interface_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interface/header/header.component */ "./src/app/interface/header/header.component.ts");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/modals.component */ "./src/app/modals/modals.component.ts");
/* harmony import */ var _interface_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./interface/navbar/navbar.component */ "./src/app/interface/navbar/navbar.component.ts");
/* harmony import */ var _plans_wall_plans_wall_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./plans-wall/plans-wall.component */ "./src/app/plans-wall/plans-wall.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/** Third Party Modules **/

/** Modules **/







/** Components **/







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _call_back_call_back_component__WEBPACK_IMPORTED_MODULE_11__["CallBackComponent"],
                _interface_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _interface_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _modals_modals_component__WEBPACK_IMPORTED_MODULE_14__["ModalsComponent"],
                _interface_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _plans_wall_plans_wall_component__WEBPACK_IMPORTED_MODULE_16__["PlansWallComponent"]
            ],
            imports: [
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _base_base_module__WEBPACK_IMPORTED_MODULE_4__["BaseModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__["DirectivesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _showcase_showcase_module__WEBPACK_IMPORTED_MODULE_7__["ShowcaseModule"],
                _svg_svg_module__WEBPACK_IMPORTED_MODULE_8__["SvgModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base/base.module.ts":
/*!*************************************!*\
  !*** ./src/app/base/base.module.ts ***!
  \*************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _directives_svg_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/svg.directive */ "./src/app/base/directives/svg.directive.ts");
/* harmony import */ var _baseBtl_base_directives_circles_loader_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../baseBtl/base/directives/circles-loader.directive */ "./src/app/baseBtl/base/directives/circles-loader.directive.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/helper.service */ "./src/app/base/services/helper.service.ts");
/* harmony import */ var _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/copy-to-clipboard.service */ "./src/app/base/services/copy-to-clipboard.service.ts");
/* harmony import */ var _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/keys.pipe */ "./src/app/base/pipes/keys.pipe.ts");
/* harmony import */ var _baseBtl_base_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../baseBtl/base/pipes/currency.pipe */ "./src/app/baseBtl/base/pipes/currency.pipe.ts");
/* harmony import */ var _components_btl_price_btl_price_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/btl-price/btl-price.component */ "./src/app/base/components/btl-price/btl-price.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/** Directives **/


/** Services **/


/** Pipes **/


/** Components **/

var BaseModule = /** @class */ (function () {
    function BaseModule() {
    }
    BaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _baseBtl_base_directives_circles_loader_directive__WEBPACK_IMPORTED_MODULE_4__["CirclesLoaderDirective"],
                _baseBtl_base_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_8__["CustomCurrencyPipe"],
                _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_7__["KeysPipe"],
                _directives_svg_directive__WEBPACK_IMPORTED_MODULE_3__["SvgDirective"],
                _components_btl_price_btl_price_component__WEBPACK_IMPORTED_MODULE_9__["BtlPriceComponent"]
            ],
            exports: [
                _baseBtl_base_directives_circles_loader_directive__WEBPACK_IMPORTED_MODULE_4__["CirclesLoaderDirective"],
                _baseBtl_base_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_8__["CustomCurrencyPipe"],
                _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_7__["KeysPipe"],
                _directives_svg_directive__WEBPACK_IMPORTED_MODULE_3__["SvgDirective"],
                _components_btl_price_btl_price_component__WEBPACK_IMPORTED_MODULE_9__["BtlPriceComponent"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [
                _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_6__["CopyToClipboardService"],
                _services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]
            ]
        })
    ], BaseModule);
    return BaseModule;
}());



/***/ }),

/***/ "./src/app/base/components/btl-price/btl-price.component.html":
/*!********************************************************************!*\
  !*** ./src/app/base/components/btl-price/btl-price.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"product-price-container\">\n    <div class=\"product-price\">\n        <div class=\"old pos-{{position}}\" *ngIf=\"(promoPrice && showPromoPrice) || oldPrice\">\n            <div class=\"product-price\">\n                <p class=\"regular\">{{ oldPriceFormatted[0] }}</p>\n                <p class=\"cents\">\n                    <span class=\"amount\">€{{ oldPriceFormatted[1] }}</span>\n                </p>\n            </div>\n        </div>\n        <p class=\"regular\">{{ priceFormatted[0] }}</p>\n        <p class=\"cents\">\n            <span class=\"amount\">€{{ priceFormatted[1] }}</span>\n            <span class=\"monthly\" *ngIf=\"monthly\">/mois</span>\n        </p>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/base/components/btl-price/btl-price.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/base/components/btl-price/btl-price.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Spacing converted to fit font size base\n * All values below are imported from default BS variables\n * ==================================== */\n/deep/ .product-price-container {\n  display: inline-flex;\n  flex-flow: row nowrap;\n  justify-content: center; }\n/deep/ .product-price {\n  align-items: stretch;\n  display: flex;\n  flex: 1 0 auto;\n  flex-flow: row nowrap;\n  font-family: \"open_sans_semibold\", Arial, sans-serif;\n  font-size: 20px;\n  justify-content: center;\n  line-height: 0.7;\n  position: relative; }\n/deep/ .product-price .regular,\n  /deep/ .product-price .old,\n  /deep/ .product-price .cents,\n  /deep/ .product-price .conditions {\n    flex-basis: auto;\n    flex-grow: 1;\n    margin: 0; }\n/deep/ .product-price .old,\n  /deep/ .product-price .cents,\n  /deep/ .product-price .conditions {\n    flex-shrink: 1; }\n/deep/ .product-price .regular,\n  /deep/ .product-price .cents .amount,\n  /deep/ .product-price .cents .monthly,\n  /deep/ .product-price .conditions {\n    color: #c8007b; }\n/deep/ .product-price .regular {\n    flex-shrink: 0;\n    font-size: 100%; }\n/deep/ .product-price .cents {\n    display: flex;\n    flex-flow: column nowrap;\n    font-size: inherit;\n    justify-content: space-between;\n    line-height: 0.7; }\n/deep/ .product-price .cents .amount {\n      align-self: flex-start;\n      font-size: 50%; }\n/deep/ .product-price .cents .monthly {\n      font-family: \"open_sans_regular\", Arial, sans-serif;\n      font-size: 30%; }\n.inline-price /deep/ .product-price .cents .amount {\n    font-size: 100%; }\n/deep/ .product-price .conditions {\n    font-size: 40%; }\n/deep/ .clr-primary /deep/ .product-price .regular,\n  /deep/ .clr-primary /deep/ .product-price .cents .amount,\n  /deep/ .clr-primary /deep/ .product-price .cents .monthly,\n  /deep/ .clr-primary /deep/ .product-price .conditions {\n    color: #c8007b; }\n/deep/ .clr-secondary /deep/ .product-price .regular,\n  /deep/ .clr-secondary /deep/ .product-price .cents .amount,\n  /deep/ .clr-secondary /deep/ .product-price .cents .monthly,\n  /deep/ .clr-secondary /deep/ .product-price .conditions {\n    color: #0055a4; }\n/deep/ .clr-regular /deep/ .product-price .regular,\n  /deep/ .clr-regular /deep/ .product-price .cents .amount,\n  /deep/ .clr-regular /deep/ .product-price .cents .monthly,\n  /deep/ .clr-regular /deep/ .product-price .conditions {\n    color: #666666; }\n/deep/ .clr-info /deep/ .product-price .regular,\n  /deep/ .clr-info /deep/ .product-price .cents .amount,\n  /deep/ .clr-info /deep/ .product-price .cents .monthly,\n  /deep/ .clr-info /deep/ .product-price .conditions {\n    color: #009dcc; }\n/deep/ .clr-success /deep/ .product-price .regular,\n  /deep/ .clr-success /deep/ .product-price .cents .amount,\n  /deep/ .clr-success /deep/ .product-price .cents .monthly,\n  /deep/ .clr-success /deep/ .product-price .conditions {\n    color: #05d0a6; }\n/deep/ .clr-pro /deep/ .product-price .regular,\n  /deep/ .clr-pro /deep/ .product-price .cents .amount,\n  /deep/ .clr-pro /deep/ .product-price .cents .monthly,\n  /deep/ .clr-pro /deep/ .product-price .conditions {\n    color: #583273; }\n/deep/ .clr-byou-b /deep/ .product-price .regular,\n  /deep/ .clr-byou-b /deep/ .product-price .cents .amount,\n  /deep/ .clr-byou-b /deep/ .product-price .cents .monthly,\n  /deep/ .clr-byou-b /deep/ .product-price .conditions {\n    color: #00b5de; }\n/deep/ .clr-byou-y /deep/ .product-price .regular,\n  /deep/ .clr-byou-y /deep/ .product-price .cents .amount,\n  /deep/ .clr-byou-y /deep/ .product-price .cents .monthly,\n  /deep/ .clr-byou-y /deep/ .product-price .conditions {\n    color: #007dc5; }\n/deep/ .clr-byou-o /deep/ .product-price .regular,\n  /deep/ .clr-byou-o /deep/ .product-price .cents .amount,\n  /deep/ .clr-byou-o /deep/ .product-price .cents .monthly,\n  /deep/ .clr-byou-o /deep/ .product-price .conditions {\n    color: #39bdab; }\n/deep/ .clr-byou-u /deep/ .product-price .regular,\n  /deep/ .clr-byou-u /deep/ .product-price .cents .amount,\n  /deep/ .clr-byou-u /deep/ .product-price .cents .monthly,\n  /deep/ .clr-byou-u /deep/ .product-price .conditions {\n    color: #00b25a; }\n/deep/ .clr-light /deep/ .product-price .regular,\n  /deep/ .clr-light /deep/ .product-price .cents .amount,\n  /deep/ .clr-light /deep/ .product-price .cents .monthly,\n  /deep/ .clr-light /deep/ .product-price .conditions {\n    color: #fff; }\n/deep/ .product-price .old {\n    position: absolute; }\n/deep/ .product-price .old.pos-right {\n      left: auto;\n      right: -1em;\n      top: -0.2em; }\n/deep/ .product-price .old.pos-left {\n      left: -1.1em;\n      right: auto; }\n/deep/ .product-price .old.pos-top {\n      left: auto;\n      right: auto;\n      top: -0.5em; }\n/deep/ .product-price .old .regular,\n    /deep/ .product-price .old .cents .amount {\n      color: #454545; }\n/deep/ .product-price .old .regular {\n      font-family: \"open_sans_regular\", Arial, sans-serif;\n      font-size: 35%; }\n/deep/ .product-price .old .cents .amount {\n      font-size: 25%; }\n/deep/ .product-price .old.pos-old-price {\n      left: auto;\n      right: -2.4em;\n      top: 0.2em; }\n/deep/ .product-price .old.pos-old-price .regular {\n        font-size: 65%; }\n/deep/ .product-price .old.pos-old-price .cents .amount {\n        font-size: 55%; }\n/deep/ .product-price .old .product-price {\n      font-size: inherit;\n      position: relative; }\n/deep/ .product-price .old .product-price::after {\n        position: absolute;\n        top: 50%;\n        -webkit-transform: translateY(-50%);\n                transform: translateY(-50%);\n        background: #454545;\n        content: '';\n        height: 0.1rem;\n        left: 0;\n        -webkit-transform: rotate(-15deg) translateY(-50%);\n                transform: rotate(-15deg) translateY(-50%);\n        width: 110%; }\n.price-duration {\n  color: #454545;\n  flex: 1 0 100%;\n  font-size: 1.2rem;\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/base/components/btl-price/btl-price.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/base/components/btl-price/btl-price.component.ts ***!
  \******************************************************************/
/*! exports provided: BtlPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtlPriceComponent", function() { return BtlPriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _baseBtl_base_components_btl_price_btl_price_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../baseBtl/base/components/btl-price/btl-price.component */ "./src/app/baseBtl/base/components/btl-price/btl-price.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BtlPriceComponent = /** @class */ (function (_super) {
    __extends(BtlPriceComponent, _super);
    function BtlPriceComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BtlPriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'btl-price',
            template: __webpack_require__(/*! ./btl-price.component.html */ "./src/app/base/components/btl-price/btl-price.component.html"),
            styles: [__webpack_require__(/*! ./btl-price.component.scss */ "./src/app/base/components/btl-price/btl-price.component.scss")]
        })
    ], BtlPriceComponent);
    return BtlPriceComponent;
}(_baseBtl_base_components_btl_price_btl_price_component__WEBPACK_IMPORTED_MODULE_1__["BtlPriceComponentBase"]));



/***/ }),

/***/ "./src/app/base/directives/svg.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/base/directives/svg.directive.ts ***!
  \**************************************************/
/*! exports provided: SvgDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgDirective", function() { return SvgDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SvgDirective = /** @class */ (function () {
    /**
     *
     * @param el
     */
    function SvgDirective(el) {
        this.el = el;
    }
    /**
     * [ngAfterViewInit description]
     * @return {[type]} [description]
     */
    SvgDirective.prototype.ngAfterViewInit = function () {
        var nodeParent = this.el.nativeElement.parentNode;
        nodeParent.removeChild(this.el.nativeElement);
        if (!this.role) {
            this.role = 'img';
        }
        if (!this.title) {
            this.title = ' ';
        }
        var xhref = "./assets/svgs-def/" + this.file + ".svg#" + this.name;
        nodeParent.innerHTML = "<svg role=\"" + this.role + "\" title=\"" + this.title + "\" class=\"" + this.class + "\">\n        <use xlink:href=\"" + xhref + "\"></use></svg>";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SvgDirective.prototype, "role", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SvgDirective.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SvgDirective.prototype, "file", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SvgDirective.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SvgDirective.prototype, "class", void 0);
    SvgDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[btlSvg]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SvgDirective);
    return SvgDirective;
}());



/***/ }),

/***/ "./src/app/base/pipes/keys.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/base/pipes/keys.pipe.ts ***!
  \*****************************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/base/services/copy-to-clipboard.service.ts":
/*!************************************************************!*\
  !*** ./src/app/base/services/copy-to-clipboard.service.ts ***!
  \************************************************************/
/*! exports provided: CopyToClipboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyToClipboardService", function() { return CopyToClipboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CopyToClipboardService = /** @class */ (function () {
    function CopyToClipboardService(document) {
        this.document = document;
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I copy the given value to the user's system clipboard. Returns a promise that
    // resolves to the given value on success or rejects with the raised Error.
    CopyToClipboardService.prototype.copy = function (value) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var textarea = null;
            try {
                // In order to execute the "Copy" command, we actually have to have
                // a "selection" in the currently rendered document. As such, we're
                // going to inject a Textarea element and .select() it in order to
                // force a selection.
                // --
                // NOTE: This Textarea is being rendered off-screen.
                textarea = _this.document.createElement("textarea");
                textarea.style.height = "0px";
                textarea.style.left = "-100px";
                textarea.style.opacity = "0";
                textarea.style.position = "fixed";
                textarea.style.top = "-100px";
                textarea.style.width = "0px";
                _this.document.body.appendChild(textarea);
                // Set and select the value (creating an active Selection range).
                textarea.value = value;
                textarea.select();
                // Ask the browser to copy the current selection to the clipboard.
                _this.document.execCommand("copy");
                resolve(value);
            }
            finally {
                // Cleanup - remove the Textarea from the DOM if it was injected.
                if (textarea && textarea.parentNode) {
                    textarea.parentNode.removeChild(textarea);
                }
            }
        });
        return (promise);
    };
    CopyToClipboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], CopyToClipboardService);
    return CopyToClipboardService;
}());



/***/ }),

/***/ "./src/app/base/services/helper.service.ts":
/*!*************************************************!*\
  !*** ./src/app/base/services/helper.service.ts ***!
  \*************************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelperService = /** @class */ (function () {
    function HelperService() {
        /**
         * @var formPatterns
         * @description Patterns for forms validation.
         * @type {}
         */
        this.formPatterns = {
            'EMAIL': /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'PHONE_NUMBER': /^0[1-9]{1}[0-9]{8}$/,
            'MOBILE_PHONE_NUMBER': /^0[6-7]{1}[0-9]{8}$/
        };
    }
    HelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HelperService);
    return HelperService;
}());



/***/ }),

/***/ "./src/app/baseBtl/base/components/btl-price/btl-price.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/baseBtl/base/components/btl-price/btl-price.component.ts ***!
  \**************************************************************************/
/*! exports provided: BtlPriceComponentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtlPriceComponentBase", function() { return BtlPriceComponentBase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BtlPriceComponentBase = /** @class */ (function () {
    function BtlPriceComponentBase() {
        this.oldPrice = null;
        this.showPromoPrice = true;
        this.monthly = false;
        this.position = 'left';
        this.priceFormatted = [];
        this.oldPriceFormatted = [];
        this.OLD_PRICE_POSITION_SUFFIX = 'old-price';
    }
    BtlPriceComponentBase.prototype.ngOnInit = function () {
        if (typeof this.price === 'undefined') {
            throw Error('You must at least set price attribute');
        }
        if (typeof this.promoPrice !== 'undefined') {
            this.priceFormatted = this.splitPrice(this.promoPrice);
            this.oldPriceFormatted = this.splitPrice(this.price);
        }
        else {
            this.priceFormatted = this.splitPrice(this.price);
        }
        if (this.oldPrice !== null && typeof this.oldPrice !== 'undefined') {
            this.oldPriceFormatted = this.splitPrice(this.oldPrice);
            this.position = this.OLD_PRICE_POSITION_SUFFIX;
        }
    };
    BtlPriceComponentBase.prototype.splitPrice = function (price) {
        return parseFloat(price.toString()).toFixed(2).split('.');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BtlPriceComponentBase.prototype, "price", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BtlPriceComponentBase.prototype, "promoPrice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BtlPriceComponentBase.prototype, "oldPrice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BtlPriceComponentBase.prototype, "showPromoPrice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BtlPriceComponentBase.prototype, "monthly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BtlPriceComponentBase.prototype, "position", void 0);
    return BtlPriceComponentBase;
}());



/***/ }),

/***/ "./src/app/baseBtl/base/directives/circles-loader.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/app/baseBtl/base/directives/circles-loader.directive.ts ***!
  \*********************************************************************/
/*! exports provided: CirclesLoaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CirclesLoaderDirective", function() { return CirclesLoaderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CirclesLoaderDirective = /** @class */ (function () {
    function CirclesLoaderDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.speed = 1;
        this.size = 'xs';
        this.isRunning = false;
    }
    CirclesLoaderDirective.prototype.ngOnInit = function () {
        var allowedSize = ['xs', 'sm', 'md', 'lg']; // @Note: Update if any new breakpoint size added
        this.size = (allowedSize.join(',').indexOf(this.size) > -1) ? this.size : 'xs';
    };
    CirclesLoaderDirective.prototype.ngAfterViewInit = function () {
        var loaderContent = document.createElement('div');
        loaderContent.innerHTML = "\n        <div class=\"loaders-wrapper size-" + this.size + "\">\n            <span class=\"loader\"></span>\n            <span class=\"loader\"></span>\n            <span class=\"loader\"></span>\n            <span class=\"loader\"></span>\n            <span class=\"loader\"></span>\n            <span class=\"loader\"></span>\n            <span class=\"loader\"></span>\n            <span class=\"loader\"></span>\n        </div>\n        ";
        this.renderer.appendChild(this.el.nativeElement, loaderContent);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CirclesLoaderDirective.prototype, "speed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CirclesLoaderDirective.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CirclesLoaderDirective.prototype, "isRunning", void 0);
    CirclesLoaderDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[circlesLoader]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], CirclesLoaderDirective);
    return CirclesLoaderDirective;
}());



/***/ }),

/***/ "./src/app/baseBtl/base/pipes/currency.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/baseBtl/base/pipes/currency.pipe.ts ***!
  \*****************************************************/
/*! exports provided: CustomCurrencyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCurrencyPipe", function() { return CustomCurrencyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomCurrencyPipe = /** @class */ (function () {
    function CustomCurrencyPipe() {
    }
    CustomCurrencyPipe.prototype.transform = function (value, args) {
        if (!value && value !== 0) {
            return '';
        }
        var price = parseFloat(value.toString()).toFixed(2).split('.');
        if (price[1].length === 1) {
            price[1] += '0';
        }
        return "<span>" + price[0] + "</span><sup>\u20AC" + price[1] + "</sup>";
    };
    CustomCurrencyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'customCurrency'
        })
    ], CustomCurrencyPipe);
    return CustomCurrencyPipe;
}());



/***/ }),

/***/ "./src/app/call-back/call-back.component.html":
/*!****************************************************!*\
  !*** ./src/app/call-back/call-back.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h1 class=\"display-3\">Rappelez-moi</h1>\n        <p class=\"lead\">Recréer la page rappelez-moi <a href=\"http://local.bouyguestelecom.fr/rappelez-moi\" class=\"link\" target=\"_blank\">Voir ici.</a></p>\n        <hr class=\"my-4\">\n    </div>\n</div>\n\n\n<div class=\"container webcallback\">\n    <div class=\"row\">\n\n        <!-- Advice -->\n        <div class=\"col-12 col-lg-7 mb-4 mb-lg-0 advice\">\n            <div class=\"advice-offer\">\n                <i class=\"icon-item d-none d-lg-block\">\n                    <span btlSvg file=\"common-defs\" name=\"shape-icon-rounded-advisor\" class=\"icon s-rounded-advisor\"></span>\n                </i>\n\n                <h2 class=\"title-callback\">Un conseil <br class=\"d-md-none\">sur l'une de nos offres ?</h2>\n\n                <div>\n                    <p class=\"free-call\">Laissez-nous votre numéro de téléphone</p>\n                    <!-- Form -->\n                     <form class=\"form-inline form-call-me c2call\" method=\"post\" role=\"form\" name=\"\">\n\n                         <div class=\"form-group\">\n                             <label class=\"sr-only\">Ex : 06 23 45 67 89</label>\n                             <span class=\"form-control-wrapper\">\n                                <input class=\"form-control\" type=\"text\" name=\"phone\" placeholder=\"Ex : 06 23 45 67 89\" maxlength=\"10\" >\n                             </span>\n                         </div>\n\n                         <button type=\"submit\" class=\"btn btn-primary btn-callback\">Rappelez-moi</button>\n\n                         <ul class=\"errors\">\n                             <li class=\"help-block\">\n                                 Oups... Ce numéro ne semble pas correct. Vérifiez-le bien et essayer à nouveau.\n                             </li>\n                         </ul>\n                    </form>\n                </div>\n            </div>\n        </div>\n\n\n        <!-- Need -->\n        <div class=\"col-12 col-lg-5\">\n            <div class=\"need-assistance\">\n                <h2 class=\"assistance-title\">Besoin d'assistance</h2>\n                <h3 class=\"assistance-subtitle\">Pour une commande mobile en cours</h3>\n                <p class=\"mb-0\">Composer le <span class=\"call-me\"><a href=\"tel:+33981662666\" class=\"call-me\">09 81 66 26 66</a></span></p>\n\n                <hr class=\"separator\">\n\n                <h3 class=\"assistance-subtitle\">Pour une ligne mobile <br/> ou Bbox déjà activée ?</h3>\n                <p class=\"mb-0\">Composer le <br/><span class=\"call-me\"><a href=\"tel:+33614\" class=\"call-me\">614</a> depuis votre mobile</span></p>\n                <p class=\"mb-0\">ou <br/><span class=\"call-me\">1064 depuis un poste fixe</span></p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/call-back/call-back.component.scss":
/*!****************************************************!*\
  !*** ./src/app/call-back/call-back.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Spacing converted to fit font size base\n * All values below are imported from default BS variables\n * ==================================== */\n/deep/\n.webcallback .advice-offer,\n/deep/\n.webcallback .need-assistance {\n  background-color: #fff;\n  padding: 3rem 1.5rem;\n  text-align: center; }\n/deep/\n.webcallback .advice {\n  display: flex; }\n/deep/\n.webcallback .advice .advice-offer {\n    align-items: center;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: center; }\n/deep/\n.webcallback .advice .advice-offer .icon-item .icon {\n      fill: #009dcc; }\n/deep/\n.webcallback .advice .advice-offer .title-callback {\n      font-size: 2rem;\n      font-weight: 600;\n      line-height: 1.3;\n      margin-top: 2rem; }\n/deep/\n.webcallback .need-assistance .assistance-title {\n  border-bottom: 0.1rem solid #ececec;\n  font-size: 1.8rem;\n  font-weight: 600;\n  margin-bottom: 2rem;\n  padding-bottom: 2rem; }\n/deep/\n.webcallback .need-assistance .assistance-subtitle {\n  font-size: 1.4rem;\n  font-weight: 700;\n  line-height: 1.5; }\n/deep/\n.webcallback .need-assistance .separator {\n  width: 30%; }\n/deep/\n.webcallback .need-assistance .call-me {\n  color: #009dcc; }\n"

/***/ }),

/***/ "./src/app/call-back/call-back.component.ts":
/*!**************************************************!*\
  !*** ./src/app/call-back/call-back.component.ts ***!
  \**************************************************/
/*! exports provided: CallBackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallBackComponent", function() { return CallBackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallBackComponent = /** @class */ (function () {
    function CallBackComponent() {
    }
    CallBackComponent.prototype.ngOnInit = function () {
    };
    CallBackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-call-back',
            template: __webpack_require__(/*! ./call-back.component.html */ "./src/app/call-back/call-back.component.html"),
            styles: [__webpack_require__(/*! ./call-back.component.scss */ "./src/app/call-back/call-back.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CallBackComponent);
    return CallBackComponent;
}());



/***/ }),

/***/ "./src/app/components/btl-price/btl-price-demo.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/btl-price/btl-price-demo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- COLORS AND BACKGROUND-->\n<div class=\"box\">\n\n    <div class=\"alert alert-success notification-alert\" *ngIf=\"copied\">\n        Copié dans le presse-papier avec succes !\n    </div>\n\n    <div class=\"row box-header justify-content-between\">\n        <div class=\"col-auto\">\n            <h2 class=\"box-title\"><span class=\"anchor\" id=\"colors\"></span>BtlPriceComponent <span class=\"badge badge-success\">COMPONENT</span></h2>\n        </div>\n\n    </div>\n\n    <div class=\"row box-content\">\n\n        <section class=\"col-12\">\n\n            <table class=\"table table-bordered table-description\">\n\n                <tbody>\n                <tr>\n                    <th scope=\"row\">Nom</th>\n                    <td class=\"c-info\">BtlPriceComponent</td>\n                </tr>\n                <tr>\n                    <th scope=\"row\">Selecteur</th>\n                    <td class=\"c-info\">< btl-price ></td>\n                </tr>\n                <tr>\n                    <th scope=\"row\">Source</th>\n                    <td class=\"c-info\">src/baseBtl/base/btl-price/btl-price.component.ts</td>\n                </tr>\n                <tr>\n                    <th scope=\"row\">Module</th>\n                    <td class=\"c-info\">BaseModule</td>\n                </tr>\n                </tbody>\n            </table>\n            <div class=\"module-description\">\n                <p>Composant prix du site.</p>\n            </div>\n        </section>\n\n        <section class=\"col-12\">\n            <h3 class=\"title-description\">Utilisation</h3>\n            <div class=\"showcase text-align-center\">\n                <btl-price class=\"demo\" [price]=\"32.99\" [monthly]=\"true\" [promoPrice]=\"20.99\" position=\"right\"></btl-price>\n            </div>\n            <p align=\"center\">\n                <span class=\"showcase-code\">&lt;<span class=\"component\">btl-price</span> [<span class=\"c-primary\">price</span>]=\"32.99\" [<span class=\"c-primary\">promoPrice</span>]=\"20.99\" [<span class=\"c-primary\">position</span>]=\"'right'\" [<span class=\"c-primary\">monthly</span>]=\"true\" &gt;&lt;/<span class=\"component\">btl-price</span>&gt;</span>\n            </p>\n        </section>\n\n        <section class=\"col-12\">\n            <h3 class=\"title-description\">Attributs</h3>\n\n            <table class=\"table table-bordered table-description\">\n                <tbody>\n                <tr>\n                    <th scope=\"row\"><span class=\"showcase-code primary\">[price]</span><span class=\"badge badge-danger\">OBLIGATOIRE</span><br><em class=\"type\">number</em></th>\n                    <td>Il s'agit du prix principal. Seul attribut obligatoire. L'absence de cet attribut log une erreur en console. Toujours s'assurer de le valoriser</td>\n                </tr>\n                <tr>\n                    <th scope=\"row\"><span class=\"showcase-code primary\">[promoPrice]</span><br><em class=\"type\">number</em></th>\n                    <td>Prix promotionnel. Si cet attribut est valorisé, il devient le prix principal et l'attribut price devient le prix secondaire.</td>\n                </tr>\n                <tr>\n                    <th scope=\"row\"><span class=\"showcase-code primary\">[showPromoPrice]</span><br><em class=\"type\">boolean</em></th>\n                    <td>Définit si le prix secondaire doit s'afficher ou pas. Par défaut à <span class=\"showcase-code primary\">true</span>. Si on le set à <span class=\"showcase-code primary\">false</span>, le prix secondaire (uniquement s'il s'agit du <span class=\"showcase-code primary\">promoPrice</span>) ne s'affichera pas.</td>\n                </tr>\n                <tr>\n                    <th scope=\"row\"><span class=\"showcase-code primary\">[position]</span><br><em class=\"type\">string</em></th>\n                    <td>Positionne le prix secondaire autour du prix principal. Valeurs autorisées :\n                        <ul>\n                            <li><span class=\"showcase-code primary\">left</span> : valeur par défaut. Le prix secondaire sera positionné à gauche du prix principal.</li>\n                            <li><span class=\"showcase-code primary\">top</span> : Le prix secondaire sera positionné au dessus du prix principal.</li>\n                            <li><span class=\"showcase-code primary\">right</span> : Le prix secondaire sera positionné à droite du prix principal.</li>\n                        </ul>\n                    </td>\n                </tr>\n                <tr>\n                    <th scope=\"row\"><span class=\"showcase-code primary\">[oldPrice]</span><br><em class=\"type\">number</em></th>\n                    <td>Permet d'afficher un prix secondaire. Contrairement au <span class=\"showcase-code primary\">promoPrice</span>, il ne tient pas compte de l'attribut <span class=\"showcase-code primary\">showPromoPrice</span> et ne remplacera pas le prix principal. Il s'affichera forcement s'il est valorisé. Exemple d'utilisation: Mur de téléphone B&You</td>\n                </tr>\n                <tr>\n                    <th scope=\"row\"><span class=\"showcase-code primary\">[monthly]</span><br><em class=\"type\">boolean</em></th>\n                    <td>Définit s'il s'agit d'un prix mensuel ou non. Par défaut à <span class=\"showcase-code primary\">false</span></td>\n                </tr>\n                </tbody>\n            </table>\n        </section>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/btl-price/btl-price-demo.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/btl-price/btl-price-demo.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Spacing converted to fit font size base\n * All values below are imported from default BS variables\n * ==================================== */\n.w-25 {\n  width: 25% !important; }\n.w-50 {\n  width: 50% !important; }\n.w-75 {\n  width: 75% !important; }\n.w-100 {\n  width: 100% !important; }\n.h-25 {\n  height: 25% !important; }\n.h-50 {\n  height: 50% !important; }\n.h-75 {\n  height: 75% !important; }\n.h-100 {\n  height: 100% !important; }\n.mw-100 {\n  max-width: 100% !important; }\n.mh-100 {\n  max-height: 100% !important; }\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: rootFontSize(1rem);\n  background-color: transparent; }\n.table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6; }\n.table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n.table tbody + tbody {\n    border-top: 2px solid #dee2e6; }\n.table .table {\n    background-color: #fff; }\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n.table-bordered {\n  border: 1px solid #dee2e6; }\n.table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6; }\n.table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-default,\n.table-default > th,\n.table-default > td {\n  background-color: #cbcbcb; }\n.table-hover .table-default:hover {\n  background-color: #bebebe; }\n.table-hover .table-default:hover > td,\n  .table-hover .table-default:hover > th {\n    background-color: #bebebe; }\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #f0b8da; }\n.table-hover .table-primary:hover {\n  background-color: #eca3cf; }\n.table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #eca3cf; }\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #b8cfe6; }\n.table-hover .table-secondary:hover {\n  background-color: #a5c2df; }\n.table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #a5c2df; }\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #b9f2e6; }\n.table-hover .table-success:hover {\n  background-color: #a3eede; }\n.table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #a3eede; }\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #b8e4f1; }\n.table-hover .table-info:hover {\n  background-color: #a3dced; }\n.table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #a3dced; }\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffe2d4; }\n.table-hover .table-warning:hover {\n  background-color: #ffd1bb; }\n.table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffd1bb; }\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #feb8cd; }\n.table-hover .table-danger:hover {\n  background-color: #fe9fbb; }\n.table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #fe9fbb; }\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n.table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n.table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n.table-blue,\n.table-blue > th,\n.table-blue > td {\n  background-color: #b8dded; }\n.table-hover .table-blue:hover {\n  background-color: #a4d3e8; }\n.table-hover .table-blue:hover > td,\n  .table-hover .table-blue:hover > th {\n    background-color: #a4d3e8; }\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e; }\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n.table-dark {\n  color: #fff;\n  background-color: #212529; }\n.table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #32383e; }\n.table-dark.table-bordered {\n    border: 0; }\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n.table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-sm > .table-bordered {\n      border: 0; } }\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-md > .table-bordered {\n      border: 0; } }\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-lg > .table-bordered {\n      border: 0; } }\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xl > .table-bordered {\n      border: 0; } }\n@media (max-width: 1439.98px) {\n  .table-responsive-xlg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xlg > .table-bordered {\n      border: 0; } }\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n.table-responsive > .table-bordered {\n    border: 0; }\n.showcase {\n  align-items: baseline;\n  display: flex;\n  justify-content: center;\n  width: 100%; }\n.text-align-center {\n  text-align: center; }\n/deep/\n.demo .product-price {\n  font-size: 10rem; }\n.showcase {\n  align-items: center;\n  display: flex;\n  flex-flow: row nowrap;\n  height: 13rem; }\n"

/***/ }),

/***/ "./src/app/components/btl-price/btl-price-demo.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/btl-price/btl-price-demo.component.ts ***!
  \******************************************************************/
/*! exports provided: BtlPriceDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtlPriceDemoComponent", function() { return BtlPriceDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BtlPriceDemoComponent = /** @class */ (function () {
    function BtlPriceDemoComponent() {
    }
    BtlPriceDemoComponent.prototype.ngOnInit = function () {
    };
    BtlPriceDemoComponent.prototype.update = function () {
    };
    BtlPriceDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-btl-price',
            template: __webpack_require__(/*! ./btl-price-demo.component.html */ "./src/app/components/btl-price/btl-price-demo.component.html"),
            styles: [__webpack_require__(/*! ./btl-price-demo.component.scss */ "./src/app/components/btl-price/btl-price-demo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BtlPriceDemoComponent);
    return BtlPriceDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"top\" class=\"container\">\n  <div class=\"jumbotron\">\n    <h1 class=\"display-3\">Components</h1>\n    <p class=\"lead\">Components.</p>\n    <hr class=\"my-4\">\n    <p>\n      <a [routerLink]=\"['btl-price']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:false}\" class=\"link\">BtlPriceComponent</a> |\n      <a [routerLink]=\"['page-title']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:false}\" class=\"link\">PageTitleComponent</a>\n    </p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/components/components.component.scss":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Spacing converted to fit font size base\n * All values below are imported from default BS variables\n * ==================================== */\n.w-25 {\n  width: 25% !important; }\n.w-50 {\n  width: 50% !important; }\n.w-75 {\n  width: 75% !important; }\n.w-100 {\n  width: 100% !important; }\n.h-25 {\n  height: 25% !important; }\n.h-50 {\n  height: 50% !important; }\n.h-75 {\n  height: 75% !important; }\n.h-100 {\n  height: 100% !important; }\n.mw-100 {\n  max-width: 100% !important; }\n.mh-100 {\n  max-height: 100% !important; }\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: rootFontSize(1rem);\n  background-color: transparent; }\n.table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6; }\n.table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n.table tbody + tbody {\n    border-top: 2px solid #dee2e6; }\n.table .table {\n    background-color: #fff; }\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n.table-bordered {\n  border: 1px solid #dee2e6; }\n.table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6; }\n.table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-default,\n.table-default > th,\n.table-default > td {\n  background-color: #cbcbcb; }\n.table-hover .table-default:hover {\n  background-color: #bebebe; }\n.table-hover .table-default:hover > td,\n  .table-hover .table-default:hover > th {\n    background-color: #bebebe; }\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #f0b8da; }\n.table-hover .table-primary:hover {\n  background-color: #eca3cf; }\n.table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #eca3cf; }\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #b8cfe6; }\n.table-hover .table-secondary:hover {\n  background-color: #a5c2df; }\n.table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #a5c2df; }\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #b9f2e6; }\n.table-hover .table-success:hover {\n  background-color: #a3eede; }\n.table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #a3eede; }\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #b8e4f1; }\n.table-hover .table-info:hover {\n  background-color: #a3dced; }\n.table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #a3dced; }\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffe2d4; }\n.table-hover .table-warning:hover {\n  background-color: #ffd1bb; }\n.table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffd1bb; }\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #feb8cd; }\n.table-hover .table-danger:hover {\n  background-color: #fe9fbb; }\n.table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #fe9fbb; }\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n.table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n.table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n.table-blue,\n.table-blue > th,\n.table-blue > td {\n  background-color: #b8dded; }\n.table-hover .table-blue:hover {\n  background-color: #a4d3e8; }\n.table-hover .table-blue:hover > td,\n  .table-hover .table-blue:hover > th {\n    background-color: #a4d3e8; }\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e; }\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n.table-dark {\n  color: #fff;\n  background-color: #212529; }\n.table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #32383e; }\n.table-dark.table-bordered {\n    border: 0; }\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n.table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-sm > .table-bordered {\n      border: 0; } }\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-md > .table-bordered {\n      border: 0; } }\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-lg > .table-bordered {\n      border: 0; } }\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xl > .table-bordered {\n      border: 0; } }\n@media (max-width: 1439.98px) {\n  .table-responsive-xlg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xlg > .table-bordered {\n      border: 0; } }\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n.table-responsive > .table-bordered {\n    border: 0; }\n.showcase {\n  align-items: baseline;\n  display: flex;\n  justify-content: center;\n  width: 100%; }\n.text-align-center {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent() {
    }
    ComponentsComponent.prototype.ngOnInit = function () {
    };
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/components/components.component.html"),
            styles: [__webpack_require__(/*! ./components.component.scss */ "./src/app/components/components.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _btl_price_btl_price_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./btl-price/btl-price-demo.component */ "./src/app/components/btl-price/btl-price-demo.component.ts");
/* harmony import */ var _page_title_page_title_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-title/page-title-demo.component */ "./src/app/components/page-title/page-title-demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _base_base_module__WEBPACK_IMPORTED_MODULE_3__["BaseModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            declarations: [_components_component__WEBPACK_IMPORTED_MODULE_7__["ComponentsComponent"], _btl_price_btl_price_demo_component__WEBPACK_IMPORTED_MODULE_8__["BtlPriceDemoComponent"], _page_title_page_title_demo_component__WEBPACK_IMPORTED_MODULE_9__["PageTitleDemoComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/page-title/page-title-demo.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/page-title/page-title-demo.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- COLORS AND BACKGROUND-->\n<div class=\"box\">\n\n  <div class=\"alert alert-success notification-alert\" *ngIf=\"copied\">\n    Copié dans le presse-papier avec succes !\n  </div>\n\n  <div class=\"row box-header justify-content-between\">\n    <div class=\"col-auto\">\n      <h2 class=\"box-title\"><span class=\"anchor\" id=\"colors\"></span>CirclesLoader <span class=\"badge badge-success\">COMPONENT</span></h2>\n    </div>\n\n  </div>\n\n  <div class=\"row box-content\">\n\n    <section class=\"col-12\">\n\n      <table class=\"table table-bordered table-description\">\n\n        <tbody>\n        <tr>\n          <th scope=\"row\">Nom</th>\n          <td class=\"c-info\">CirclesLoaderDirective</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Source</th>\n          <td class=\"c-info\">src/baseBtl/base/directives/circles-loader.directive.ts</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Module</th>\n          <td class=\"c-info\">BaseModule</td>\n        </tr>\n        </tbody>\n      </table>\n      <div class=\"module-description\">\n        <p>Loader coloré de base du site.</p>\n      </div>\n    </section>\n\n    <section class=\"col-12\">\n      <h3 class=\"title-description\">Démonstration</h3>\n      <div class=\"showcase text-align-center\">\n        <div circlesLoader [size]=\"'lg'\" class=\"text-align-center\"></div>\n      </div>\n    </section>\n\n    <section class=\"col-12\">\n      <h3 class=\"title-description\">Comment l'utiliser</h3>\n      <p>\n        Appliquer la directive <span class=\"showcase-code danger\">circlesLoader</span> à un container : <span class=\"showcase-code\">&lt;div <span class=\"directive\">circlesLoader</span> <span class=\"attr\">[size]</span>=<span class=\"string\">\"'lg'\"</span>&gt;&lt;/div&gt;</span>.\n      </p>\n      <p>\n        Cette directive accepte en paramètre l'attribut <span class=\"showcase-code primary\">[size]</span> permettant de changer la taille du loader (par défaut à <span class=\"showcase-code warning\">'xs'</span>).\n      </p>\n      <table class=\"table table-bordered table-description\">\n        <tbody>\n        <tr>\n          <th scope=\"row\">Size <span class=\"showcase-code primary\">[size]</span><br><em class=\"type\">string</em></th>\n          <td *ngFor=\"let size of sizes\" class=\"text-align-center\">{{size}}</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Résultat :</th>\n          <td *ngFor=\"let size of sizes\" class=\"text-align-center\">\n            <div circlesLoader [size]=\"size\"></div>\n          </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Cliquer pour copier :</th>\n          <td *ngFor=\"let size of sizes\" class=\"text-align-center\">\n            <button role=\"button\" (click)=\"copyToClipboard(size)\" class=\"btn btn-primary\">Copier en taille '{{size}}'</button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </section>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/page-title/page-title-demo.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/page-title/page-title-demo.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Spacing converted to fit font size base\n * All values below are imported from default BS variables\n * ==================================== */\n.w-25 {\n  width: 25% !important; }\n.w-50 {\n  width: 50% !important; }\n.w-75 {\n  width: 75% !important; }\n.w-100 {\n  width: 100% !important; }\n.h-25 {\n  height: 25% !important; }\n.h-50 {\n  height: 50% !important; }\n.h-75 {\n  height: 75% !important; }\n.h-100 {\n  height: 100% !important; }\n.mw-100 {\n  max-width: 100% !important; }\n.mh-100 {\n  max-height: 100% !important; }\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: rootFontSize(1rem);\n  background-color: transparent; }\n.table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6; }\n.table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n.table tbody + tbody {\n    border-top: 2px solid #dee2e6; }\n.table .table {\n    background-color: #fff; }\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n.table-bordered {\n  border: 1px solid #dee2e6; }\n.table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6; }\n.table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-default,\n.table-default > th,\n.table-default > td {\n  background-color: #cbcbcb; }\n.table-hover .table-default:hover {\n  background-color: #bebebe; }\n.table-hover .table-default:hover > td,\n  .table-hover .table-default:hover > th {\n    background-color: #bebebe; }\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #f0b8da; }\n.table-hover .table-primary:hover {\n  background-color: #eca3cf; }\n.table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #eca3cf; }\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #b8cfe6; }\n.table-hover .table-secondary:hover {\n  background-color: #a5c2df; }\n.table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #a5c2df; }\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #b9f2e6; }\n.table-hover .table-success:hover {\n  background-color: #a3eede; }\n.table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #a3eede; }\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #b8e4f1; }\n.table-hover .table-info:hover {\n  background-color: #a3dced; }\n.table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #a3dced; }\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffe2d4; }\n.table-hover .table-warning:hover {\n  background-color: #ffd1bb; }\n.table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffd1bb; }\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #feb8cd; }\n.table-hover .table-danger:hover {\n  background-color: #fe9fbb; }\n.table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #fe9fbb; }\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n.table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n.table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n.table-blue,\n.table-blue > th,\n.table-blue > td {\n  background-color: #b8dded; }\n.table-hover .table-blue:hover {\n  background-color: #a4d3e8; }\n.table-hover .table-blue:hover > td,\n  .table-hover .table-blue:hover > th {\n    background-color: #a4d3e8; }\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e; }\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n.table-dark {\n  color: #fff;\n  background-color: #212529; }\n.table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #32383e; }\n.table-dark.table-bordered {\n    border: 0; }\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n.table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-sm > .table-bordered {\n      border: 0; } }\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-md > .table-bordered {\n      border: 0; } }\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-lg > .table-bordered {\n      border: 0; } }\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xl > .table-bordered {\n      border: 0; } }\n@media (max-width: 1439.98px) {\n  .table-responsive-xlg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xlg > .table-bordered {\n      border: 0; } }\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n.table-responsive > .table-bordered {\n    border: 0; }\n.showcase {\n  align-items: baseline;\n  display: flex;\n  justify-content: center;\n  width: 100%; }\n.text-align-center {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/page-title/page-title-demo.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/page-title/page-title-demo.component.ts ***!
  \********************************************************************/
/*! exports provided: PageTitleDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleDemoComponent", function() { return PageTitleDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageTitleDemoComponent = /** @class */ (function () {
    function PageTitleDemoComponent() {
    }
    PageTitleDemoComponent.prototype.ngOnInit = function () {
    };
    PageTitleDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-title',
            template: __webpack_require__(/*! ./page-title-demo.component.html */ "./src/app/components/page-title/page-title-demo.component.html"),
            styles: [__webpack_require__(/*! ./page-title-demo.component.scss */ "./src/app/components/page-title/page-title-demo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageTitleDemoComponent);
    return PageTitleDemoComponent;
}());



/***/ }),

/***/ "./src/app/directives/btl-svg/btl-svg.component.html":
/*!***********************************************************!*\
  !*** ./src/app/directives/btl-svg/btl-svg.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- COLORS AND BACKGROUND-->\n<div class=\"box\">\n\n  <div class=\"alert alert-success notification-alert\" *ngIf=\"copied\">\n    Copié dans le presse-papier avec succes !\n  </div>\n\n  <div class=\"row box-header justify-content-between\">\n    <div class=\"col-auto\">\n      <h2 class=\"box-title\"><span class=\"anchor\" id=\"colors\"></span>BtlSvg <span class=\"badge badge-danger\">DIRECTIVE</span></h2>\n    </div>\n\n  </div>\n\n  <div class=\"row box-content\">\n\n    <section class=\"col-12\">\n      <table class=\"table table-bordered table-description\">\n\n        <tbody>\n        <tr>\n          <th scope=\"row\">Nom</th>\n          <td class=\"c-info\">SvgDirectiveBase</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Source</th>\n          <td class=\"c-info\">src/baseBtl/base/directives/svg.directive.ts</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Module</th>\n          <td class=\"c-info\">BaseModule</td>\n        </tr>\n        </tbody>\n      </table>\n      <div class=\"module-description\">\n        <p>Directive servant à l'affichage des icones SVG.</p>\n      </div>\n    </section>\n\n    <section class=\"col-12\">\n      <h3 class=\"title-description\">Comment l'utiliser</h3>\n      <p>\n        Appliquer la directive <span class=\"showcase-code danger\">btlSvg</span> à un <span class=\"showcase-code\">&lt;span&gt;</span>. Elle doit être accompagnée d'attributs obligatoires qui sont :\n      </p>\n      <div class=\"w-100\"></div>\n      <ul>\n        <li><span class=\"showcase-code primary\">file</span> : <span class=\"badge badge-warning\">string</span> : Nom du fichier SVG contenant l'icone que l'on souhaite afficher.</li>\n        <li><span class=\"showcase-code primary\">name</span> : <span class=\"badge badge-warning\">string</span> : Id de l'icone souhaitée.</li>\n        <li><span class=\"showcase-code primary\">class</span> : <span class=\"badge badge-warning\">string</span> : La classe globale <span class=\"showcase-code warning\">icon</span>.</li>\n      </ul>\n      <div class=\"w-100\"></div>\n      <p>\n        <strong>Exemple : </strong>\n        <span class=\"showcase-code\">&lt;span <span class=\"directive\">btlSvg</span> <span class=\"attr\">file</span>=<span class=\"string\">\"<em>elig-tlv-defs</em>\"</span> <span class=\"attr\">name</span>=<span class=\"string\">\"<em>shape-icon-arrow-l</em>\"</span> <span class=\"attr\">class</span>=<span class=\"string\">\"icon <em>s-arrow-l</em>\"</span>&gt;&lt;/span&gt;</span>\n      </p>\n    </section>\n    <section class=\"col-12\">\n      <h3 class=\"title-description\">Resources</h3>\n      <a class=\"link c-info lead\" href=\"./svg\">Consulter la liste des SVG triés par dossier.</a>\n    </section>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/directives/btl-svg/btl-svg.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/directives/btl-svg/btl-svg.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Spacing converted to fit font size base\n * All values below are imported from default BS variables\n * ==================================== */\n.w-25 {\n  width: 25% !important; }\n.w-50 {\n  width: 50% !important; }\n.w-75 {\n  width: 75% !important; }\n.w-100 {\n  width: 100% !important; }\n.h-25 {\n  height: 25% !important; }\n.h-50 {\n  height: 50% !important; }\n.h-75 {\n  height: 75% !important; }\n.h-100 {\n  height: 100% !important; }\n.mw-100 {\n  max-width: 100% !important; }\n.mh-100 {\n  max-height: 100% !important; }\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: rootFontSize(1rem);\n  background-color: transparent; }\n.table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6; }\n.table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n.table tbody + tbody {\n    border-top: 2px solid #dee2e6; }\n.table .table {\n    background-color: #fff; }\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n.table-bordered {\n  border: 1px solid #dee2e6; }\n.table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6; }\n.table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-default,\n.table-default > th,\n.table-default > td {\n  background-color: #cbcbcb; }\n.table-hover .table-default:hover {\n  background-color: #bebebe; }\n.table-hover .table-default:hover > td,\n  .table-hover .table-default:hover > th {\n    background-color: #bebebe; }\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #f0b8da; }\n.table-hover .table-primary:hover {\n  background-color: #eca3cf; }\n.table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #eca3cf; }\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #b8cfe6; }\n.table-hover .table-secondary:hover {\n  background-color: #a5c2df; }\n.table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #a5c2df; }\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #b9f2e6; }\n.table-hover .table-success:hover {\n  background-color: #a3eede; }\n.table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #a3eede; }\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #b8e4f1; }\n.table-hover .table-info:hover {\n  background-color: #a3dced; }\n.table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #a3dced; }\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffe2d4; }\n.table-hover .table-warning:hover {\n  background-color: #ffd1bb; }\n.table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffd1bb; }\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #feb8cd; }\n.table-hover .table-danger:hover {\n  background-color: #fe9fbb; }\n.table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #fe9fbb; }\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n.table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n.table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n.table-blue,\n.table-blue > th,\n.table-blue > td {\n  background-color: #b8dded; }\n.table-hover .table-blue:hover {\n  background-color: #a4d3e8; }\n.table-hover .table-blue:hover > td,\n  .table-hover .table-blue:hover > th {\n    background-color: #a4d3e8; }\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e; }\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n.table-dark {\n  color: #fff;\n  background-color: #212529; }\n.table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #32383e; }\n.table-dark.table-bordered {\n    border: 0; }\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n.table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-sm > .table-bordered {\n      border: 0; } }\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-md > .table-bordered {\n      border: 0; } }\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-lg > .table-bordered {\n      border: 0; } }\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xl > .table-bordered {\n      border: 0; } }\n@media (max-width: 1439.98px) {\n  .table-responsive-xlg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xlg > .table-bordered {\n      border: 0; } }\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n.table-responsive > .table-bordered {\n    border: 0; }\n.showcase {\n  align-items: baseline;\n  display: flex;\n  justify-content: center;\n  width: 100%; }\n.text-align-center {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/directives/btl-svg/btl-svg.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/btl-svg/btl-svg.component.ts ***!
  \*********************************************************/
/*! exports provided: BtlSvgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtlSvgComponent", function() { return BtlSvgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BtlSvgComponent = /** @class */ (function () {
    function BtlSvgComponent() {
    }
    BtlSvgComponent.prototype.ngOnInit = function () {
    };
    BtlSvgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-btl-svg',
            template: __webpack_require__(/*! ./btl-svg.component.html */ "./src/app/directives/btl-svg/btl-svg.component.html"),
            styles: [__webpack_require__(/*! ./btl-svg.component.scss */ "./src/app/directives/btl-svg/btl-svg.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BtlSvgComponent);
    return BtlSvgComponent;
}());



/***/ }),

/***/ "./src/app/directives/circles-loader/circles-loader.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/directives/circles-loader/circles-loader.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- COLORS AND BACKGROUND-->\n<div class=\"box\">\n\n    <div class=\"alert alert-success notification-alert\" *ngIf=\"copied\">\n        Copié dans le presse-papier avec succes !\n    </div>\n\n    <div class=\"row box-header justify-content-between\">\n        <div class=\"col-auto\">\n            <h2 class=\"box-title\"><span class=\"anchor\" id=\"colors\"></span>CirclesLoader <span class=\"badge badge-danger\">DIRECTIVE</span></h2>\n        </div>\n\n    </div>\n\n    <div class=\"row box-content\">\n\n        <section class=\"col-12\">\n\n            <table class=\"table table-bordered table-description\">\n\n                <tbody>\n                <tr>\n                    <th scope=\"row\">Nom</th>\n                    <td class=\"c-info\">CirclesLoaderDirective</td>\n                </tr>\n                <tr>\n                    <th scope=\"row\">Source</th>\n                    <td class=\"c-info\">src/baseBtl/base/directives/circles-loader.directive.ts</td>\n                </tr>\n                <tr>\n                    <th scope=\"row\">Module</th>\n                    <td class=\"c-info\">BaseModule</td>\n                </tr>\n                </tbody>\n            </table>\n            <div class=\"module-description\">\n                <p>Loader coloré de base du site.</p>\n            </div>\n        </section>\n\n        <section class=\"col-12\">\n            <h3 class=\"title-description\">Démonstration</h3>\n            <div class=\"showcase text-align-center\">\n                <div circlesLoader [size]=\"'lg'\" class=\"text-align-center\"></div>\n            </div>\n        </section>\n\n        <section class=\"col-12\">\n            <h3 class=\"title-description\">Comment l'utiliser</h3>\n            <p>\n                Appliquer la directive <span class=\"showcase-code danger\">circlesLoader</span> à un container : <span class=\"showcase-code\">&lt;div <span class=\"directive\">circlesLoader</span> <span class=\"attr\">[size]</span>=<span class=\"string\">\"'lg'\"</span>&gt;&lt;/div&gt;</span>.\n            </p>\n            <p>\n                Cette directive accepte en paramètre l'attribut <span class=\"showcase-code primary\">[size]</span> permettant de changer la taille du loader (par défaut à <span class=\"showcase-code warning\">'xs'</span>).\n            </p>\n            <table class=\"table table-bordered table-description\">\n                <tbody>\n                <tr>\n                    <th scope=\"row\">Size <span class=\"showcase-code primary\">[size]</span><br><em class=\"type\">string</em></th>\n                    <td *ngFor=\"let size of sizes\" class=\"text-align-center\">{{size}}</td>\n                </tr>\n                <tr>\n                    <th scope=\"row\">Résultat :</th>\n                    <td *ngFor=\"let size of sizes\" class=\"text-align-center\">\n                        <div circlesLoader [size]=\"size\"></div>\n                    </td>\n                </tr>\n                <tr>\n                    <th scope=\"row\">Cliquer pour copier :</th>\n                    <td *ngFor=\"let size of sizes\" class=\"text-align-center\">\n                        <button role=\"button\" (click)=\"copyToClipboard(size)\" class=\"btn btn-primary\">Copier en taille '{{size}}'</button>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </section>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/directives/circles-loader/circles-loader.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/directives/circles-loader/circles-loader.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Spacing converted to fit font size base\n * All values below are imported from default BS variables\n * ==================================== */\n.w-25 {\n  width: 25% !important; }\n.w-50 {\n  width: 50% !important; }\n.w-75 {\n  width: 75% !important; }\n.w-100 {\n  width: 100% !important; }\n.h-25 {\n  height: 25% !important; }\n.h-50 {\n  height: 50% !important; }\n.h-75 {\n  height: 75% !important; }\n.h-100 {\n  height: 100% !important; }\n.mw-100 {\n  max-width: 100% !important; }\n.mh-100 {\n  max-height: 100% !important; }\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: rootFontSize(1rem);\n  background-color: transparent; }\n.table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6; }\n.table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n.table tbody + tbody {\n    border-top: 2px solid #dee2e6; }\n.table .table {\n    background-color: #fff; }\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n.table-bordered {\n  border: 1px solid #dee2e6; }\n.table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6; }\n.table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-default,\n.table-default > th,\n.table-default > td {\n  background-color: #cbcbcb; }\n.table-hover .table-default:hover {\n  background-color: #bebebe; }\n.table-hover .table-default:hover > td,\n  .table-hover .table-default:hover > th {\n    background-color: #bebebe; }\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #f0b8da; }\n.table-hover .table-primary:hover {\n  background-color: #eca3cf; }\n.table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #eca3cf; }\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #b8cfe6; }\n.table-hover .table-secondary:hover {\n  background-color: #a5c2df; }\n.table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #a5c2df; }\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #b9f2e6; }\n.table-hover .table-success:hover {\n  background-color: #a3eede; }\n.table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #a3eede; }\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #b8e4f1; }\n.table-hover .table-info:hover {\n  background-color: #a3dced; }\n.table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #a3dced; }\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffe2d4; }\n.table-hover .table-warning:hover {\n  background-color: #ffd1bb; }\n.table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffd1bb; }\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #feb8cd; }\n.table-hover .table-danger:hover {\n  background-color: #fe9fbb; }\n.table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #fe9fbb; }\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n.table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n.table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n.table-blue,\n.table-blue > th,\n.table-blue > td {\n  background-color: #b8dded; }\n.table-hover .table-blue:hover {\n  background-color: #a4d3e8; }\n.table-hover .table-blue:hover > td,\n  .table-hover .table-blue:hover > th {\n    background-color: #a4d3e8; }\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e; }\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n.table-dark {\n  color: #fff;\n  background-color: #212529; }\n.table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #32383e; }\n.table-dark.table-bordered {\n    border: 0; }\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n.table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-sm > .table-bordered {\n      border: 0; } }\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-md > .table-bordered {\n      border: 0; } }\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-lg > .table-bordered {\n      border: 0; } }\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xl > .table-bordered {\n      border: 0; } }\n@media (max-width: 1439.98px) {\n  .table-responsive-xlg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xlg > .table-bordered {\n      border: 0; } }\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n.table-responsive > .table-bordered {\n    border: 0; }\n.showcase {\n  align-items: baseline;\n  display: flex;\n  justify-content: center;\n  width: 100%; }\n.text-align-center {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/directives/circles-loader/circles-loader.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/directives/circles-loader/circles-loader.component.ts ***!
  \***********************************************************************/
/*! exports provided: CirclesLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CirclesLoaderComponent", function() { return CirclesLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _base_services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/services/copy-to-clipboard.service */ "./src/app/base/services/copy-to-clipboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CirclesLoaderComponent = /** @class */ (function () {
    function CirclesLoaderComponent(ctc) {
        this.ctc = ctc;
        this.sizes = ['lg', 'md', 'sm', 'xs'];
        this.copied = false;
    }
    CirclesLoaderComponent.prototype.ngOnInit = function () {
    };
    CirclesLoaderComponent.prototype.copyToClipboard = function (size) {
        var _this = this;
        var str = '<div circlesLoader [size]="\'' + size + '\'"></div>';
        this.ctc.copy(str).then(function () {
            _this.copied = true;
            setTimeout(function () {
                _this.copied = false;
            }, 2000);
        });
    };
    CirclesLoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-circles-loader',
            template: __webpack_require__(/*! ./circles-loader.component.html */ "./src/app/directives/circles-loader/circles-loader.component.html"),
            styles: [__webpack_require__(/*! ./circles-loader.component.scss */ "./src/app/directives/circles-loader/circles-loader.component.scss")]
        }),
        __metadata("design:paramtypes", [_base_services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboardService"]])
    ], CirclesLoaderComponent);
    return CirclesLoaderComponent;
}());



/***/ }),

/***/ "./src/app/directives/directives.component.html":
/*!******************************************************!*\
  !*** ./src/app/directives/directives.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"top\" class=\"container\">\n  <div class=\"jumbotron\">\n    <h1 class=\"display-3\">Directives</h1>\n    <p class=\"lead\">Directives.</p>\n    <hr class=\"my-4\">\n    <p>\n      <a [routerLink]=\"['circles-loader']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:false}\" class=\"link\">CirclesLoader</a> |\n      <a [routerLink]=\"['btl-svg']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:false}\" class=\"link\">BtlSvg</a>\n    </p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/directives/directives.component.scss":
/*!******************************************************!*\
  !*** ./src/app/directives/directives.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Spacing converted to fit font size base\n * All values below are imported from default BS variables\n * ==================================== */\n.w-25 {\n  width: 25% !important; }\n.w-50 {\n  width: 50% !important; }\n.w-75 {\n  width: 75% !important; }\n.w-100 {\n  width: 100% !important; }\n.h-25 {\n  height: 25% !important; }\n.h-50 {\n  height: 50% !important; }\n.h-75 {\n  height: 75% !important; }\n.h-100 {\n  height: 100% !important; }\n.mw-100 {\n  max-width: 100% !important; }\n.mh-100 {\n  max-height: 100% !important; }\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: rootFontSize(1rem);\n  background-color: transparent; }\n.table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6; }\n.table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n.table tbody + tbody {\n    border-top: 2px solid #dee2e6; }\n.table .table {\n    background-color: #fff; }\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n.table-bordered {\n  border: 1px solid #dee2e6; }\n.table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6; }\n.table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-default,\n.table-default > th,\n.table-default > td {\n  background-color: #cbcbcb; }\n.table-hover .table-default:hover {\n  background-color: #bebebe; }\n.table-hover .table-default:hover > td,\n  .table-hover .table-default:hover > th {\n    background-color: #bebebe; }\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #f0b8da; }\n.table-hover .table-primary:hover {\n  background-color: #eca3cf; }\n.table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #eca3cf; }\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #b8cfe6; }\n.table-hover .table-secondary:hover {\n  background-color: #a5c2df; }\n.table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #a5c2df; }\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #b9f2e6; }\n.table-hover .table-success:hover {\n  background-color: #a3eede; }\n.table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #a3eede; }\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #b8e4f1; }\n.table-hover .table-info:hover {\n  background-color: #a3dced; }\n.table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #a3dced; }\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffe2d4; }\n.table-hover .table-warning:hover {\n  background-color: #ffd1bb; }\n.table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffd1bb; }\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #feb8cd; }\n.table-hover .table-danger:hover {\n  background-color: #fe9fbb; }\n.table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #fe9fbb; }\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n.table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n.table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n.table-blue,\n.table-blue > th,\n.table-blue > td {\n  background-color: #b8dded; }\n.table-hover .table-blue:hover {\n  background-color: #a4d3e8; }\n.table-hover .table-blue:hover > td,\n  .table-hover .table-blue:hover > th {\n    background-color: #a4d3e8; }\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e; }\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n.table-dark {\n  color: #fff;\n  background-color: #212529; }\n.table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #32383e; }\n.table-dark.table-bordered {\n    border: 0; }\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n.table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-sm > .table-bordered {\n      border: 0; } }\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-md > .table-bordered {\n      border: 0; } }\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-lg > .table-bordered {\n      border: 0; } }\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xl > .table-bordered {\n      border: 0; } }\n@media (max-width: 1439.98px) {\n  .table-responsive-xlg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xlg > .table-bordered {\n      border: 0; } }\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n.table-responsive > .table-bordered {\n    border: 0; }\n.showcase {\n  align-items: baseline;\n  display: flex;\n  justify-content: center;\n  width: 100%; }\n.text-align-center {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/directives/directives.component.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/directives.component.ts ***!
  \****************************************************/
/*! exports provided: DirectivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesComponent", function() { return DirectivesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DirectivesComponent = /** @class */ (function () {
    function DirectivesComponent() {
    }
    DirectivesComponent.prototype.ngOnInit = function () {
    };
    DirectivesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-directives',
            template: __webpack_require__(/*! ./directives.component.html */ "./src/app/directives/directives.component.html"),
            styles: [__webpack_require__(/*! ./directives.component.scss */ "./src/app/directives/directives.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DirectivesComponent);
    return DirectivesComponent;
}());



/***/ }),

/***/ "./src/app/directives/directives.module.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/directives.module.ts ***!
  \*************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _circles_loader_circles_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./circles-loader/circles-loader.component */ "./src/app/directives/circles-loader/circles-loader.component.ts");
/* harmony import */ var _directives_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives.component */ "./src/app/directives/directives.component.ts");
/* harmony import */ var _btl_svg_btl_svg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./btl-svg/btl-svg.component */ "./src/app/directives/btl-svg/btl-svg.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _base_base_module__WEBPACK_IMPORTED_MODULE_3__["BaseModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            declarations: [
                _circles_loader_circles_loader_component__WEBPACK_IMPORTED_MODULE_7__["CirclesLoaderComponent"],
                _directives_component__WEBPACK_IMPORTED_MODULE_8__["DirectivesComponent"],
                _btl_svg_btl_svg_component__WEBPACK_IMPORTED_MODULE_9__["BtlSvgComponent"]
            ]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());



/***/ }),

/***/ "./src/app/interface/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/interface/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <p>\n        Made with <span class=\"red\">&hearts;</span>\n    </p>\n</div>\n"

/***/ }),

/***/ "./src/app/interface/footer/footer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/interface/footer/footer.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Spacing converted to fit font size base\n * All values below are imported from default BS variables\n * ==================================== */\n.red {\n  color: #fb004c; }\n"

/***/ }),

/***/ "./src/app/interface/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/interface/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/interface/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/interface/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/interface/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/interface/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row title-wrapper\">\n        <img width=\"45\" height=\"45\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n        <h1 class=\"title\">Bytel Sandbox</h1>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/interface/header/header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/interface/header/header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-wrapper {\n  padding: 1rem 0; }\n  .title-wrapper .title {\n    margin-left: 1rem; }\n"

/***/ }),

/***/ "./src/app/interface/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/interface/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/interface/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/interface/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/interface/navbar/navbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/interface/navbar/navbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-wrapper\">\n    <div class=\"container\">\n        <nav class=\"row navbar navbar-expand-lg navbar-light\">\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                <ul class=\"navbar-nav mr-auto\">\n                    <li class=\"nav-item active\">\n                        <a [routerLink]=\"['/showcase']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:false}\" class=\"nav-link\">Showcase</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a [routerLink]=\"['/directives']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-link\">Directives</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a [routerLink]=\"['/pipes']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-link\">Pipes</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a [routerLink]=\"['/components']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-link\">Components</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a [routerLink]=\"['/svg']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-link\">SVG</a>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/interface/navbar/navbar.component.scss":
/*!********************************************************!*\
  !*** ./src/app/interface/navbar/navbar.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Spacing converted to fit font size base\n * All values below are imported from default BS variables\n * ==================================== */\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem; }\n.navbar > .container,\n  .navbar > .container-fluid {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between; }\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n.navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n.navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0; }\n.navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n.navbar-text {\n  display: inline-block;\n  padding-top: rootFontSize(0.5rem);\n  padding-bottom: rootFontSize(0.5rem); }\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center; }\n.navbar-toggler {\n  padding: rootFontSize(0.25rem) rootFontSize(0.75rem);\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n.navbar-toggler:hover, .navbar-toggler:focus {\n    text-decoration: none; }\n.navbar-toggler:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%; }\n@media (max-width: 575.98px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-sm .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-sm .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-sm > .container,\n    .navbar-expand-sm > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-sm .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-sm .navbar-toggler {\n      display: none; }\n    .navbar-expand-sm .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n@media (max-width: 767.98px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-md .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-md .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-md .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-md .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-md > .container,\n    .navbar-expand-md > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-md .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-md .navbar-toggler {\n      display: none; }\n    .navbar-expand-md .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n@media (max-width: 991.98px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-lg .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-lg > .container,\n    .navbar-expand-lg > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-lg .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-lg .navbar-toggler {\n      display: none; }\n    .navbar-expand-lg .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-xl .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-xl .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-xl > .container,\n    .navbar-expand-xl > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-xl .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-xl .navbar-toggler {\n      display: none; }\n    .navbar-expand-xl .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n@media (max-width: 1439.98px) {\n  .navbar-expand-xlg > .container,\n  .navbar-expand-xlg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n@media (min-width: 1440px) {\n  .navbar-expand-xlg {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-xlg .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-xlg .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xlg .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-xlg .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-xlg > .container,\n    .navbar-expand-xlg > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-xlg .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-xlg .navbar-toggler {\n      display: none; }\n    .navbar-expand-xlg .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n.navbar-expand {\n  flex-flow: row nowrap;\n  justify-content: flex-start; }\n.navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; }\n.navbar-expand .navbar-nav {\n    flex-direction: row; }\n.navbar-expand .navbar-nav .dropdown-menu {\n      position: absolute; }\n.navbar-expand .navbar-nav .dropdown-menu-right {\n      right: 0;\n      left: auto; }\n.navbar-expand .navbar-nav .nav-link {\n      padding-right: 0.5rem;\n      padding-left: 0.5rem; }\n.navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    flex-wrap: nowrap; }\n.navbar-expand .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto; }\n.navbar-expand .navbar-toggler {\n    display: none; }\n.navbar-expand .dropup .dropdown-menu {\n    top: auto;\n    bottom: 100%; }\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n    color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n    color: rgba(0, 0, 0, 0.7); }\n.navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1); }\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n.navbar-light .navbar-text a {\n    color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\n      color: rgba(0, 0, 0, 0.9); }\n.navbar-dark .navbar-brand {\n  color: #fff; }\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n    color: #fff; }\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n    color: rgba(255, 255, 255, 0.75); }\n.navbar-dark .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25); }\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff; }\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1); }\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5); }\n.navbar-dark .navbar-text a {\n    color: #fff; }\n.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\n      color: #fff; }\n.nav-wrapper {\n  background-color: #009dcc;\n  padding: .5rem 0; }\n.nav-wrapper .nav-link {\n    border: transparent .1rem solid;\n    color: #fff !important;\n    padding: 0 1rem; }\n.nav-wrapper .nav-link.router-link-active {\n      border: #fff 0.1rem solid; }\n"

/***/ }),

/***/ "./src/app/interface/navbar/navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/interface/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/interface/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/interface/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/modals/modals.component.html":
/*!**********************************************!*\
  !*** ./src/app/modals/modals.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h1 class=\"display-3\">Modals</h1>\n        <p class=\"lead\">Créer un système d'ouverture de modals. <a href=\"http://getbootstrap.com/docs/4.0/components/modal/\" class=\"link\">Bootstrap 4 / Modals</a></p>\n        <hr class=\"my-4\">\n        <p><strong>Objectifs :</strong></p>\n        <ul>\n            <li>Création d'un template par défaut <span class=\"badge badge-primary\">INTE</span></li>\n            <li>Création d'un système d'ouverture/fermeture dynamique avec passage de paramètres entrants/sortants (templates, variables, actions au close) <span class=\"badge badge-secondary\">DEV</span></li>\n        </ul>\n    </div>\n</div>\n\n\n<div class=\"container\">\n\n    <!-- Button trigger modal -->\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-md\">\n      Demo modal\n    </button>\n\n    <!-- Modal -->\n    <div class=\"modal fade bd-example-modal-md\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-md\">\n            <div class=\"modal-content\">\n\n                <div class=\"modal-header\">\n                \n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fermer\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n\n                    <h3 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h3>\n                </div>\n\n                <div class=\"modal-body\">\n                     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                </div>\n\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-primary\">Envoyer</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modals/modals.component.scss":
/*!**********************************************!*\
  !*** ./src/app/modals/modals.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modals/modals.component.ts":
/*!********************************************!*\
  !*** ./src/app/modals/modals.component.ts ***!
  \********************************************/
/*! exports provided: ModalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsComponent", function() { return ModalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalsComponent = /** @class */ (function () {
    function ModalsComponent() {
    }
    ModalsComponent.prototype.ngOnInit = function () {
    };
    ModalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modals',
            template: __webpack_require__(/*! ./modals.component.html */ "./src/app/modals/modals.component.html"),
            styles: [__webpack_require__(/*! ./modals.component.scss */ "./src/app/modals/modals.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalsComponent);
    return ModalsComponent;
}());



/***/ }),

/***/ "./src/app/pipes/currency/currency.component.html":
/*!********************************************************!*\
  !*** ./src/app/pipes/currency/currency.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- COLORS AND BACKGROUND-->\n<div class=\"box\">\n\n  <div class=\"alert alert-success notification-alert\" *ngIf=\"copied\">\n    Copié dans le presse-papier avec succes !\n  </div>\n\n  <div class=\"row box-header justify-content-between\">\n    <div class=\"col-auto\">\n      <h2 class=\"box-title\"><span class=\"anchor\" id=\"colors\"></span>CustomCurrency <span class=\"badge badge-info\">PIPE</span></h2>\n    </div>\n\n  </div>\n\n  <div class=\"row box-content\">\n\n    <section class=\"col-12\">\n\n      <table class=\"table table-bordered table-description\">\n\n        <tbody>\n        <tr>\n          <th scope=\"row\">Nom</th>\n          <td class=\"c-info\">CustomCurrencyPipe</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Source</th>\n          <td class=\"c-info\">src/baseBtl/base/pipes/currency.pipe.ts</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Module</th>\n          <td class=\"c-info\">BaseModule</td>\n        </tr>\n        </tbody>\n      </table>\n      <div class=\"module-description\">\n        <p>Loader coloré de base du site.</p>\n      </div>\n    </section>\n\n    <section class=\"col-12\">\n      <h3 class=\"title-description\">Démonstration</h3>\n      <div class=\"showcase text-align-center\">\n        <div [innerHTML]=\"15.99 | customCurrency\"></div>\n      </div>\n    </section>\n\n    <section class=\"col-12\">\n      <h3 class=\"title-description\">Comment l'utiliser</h3>\n      <p>\n        Appliquer la directive <span class=\"showcase-code danger\">circlesLoader</span> à un container : <span class=\"showcase-code\">&lt;div <span class=\"directive\">circlesLoader</span> <span class=\"attr\">[size]</span>=<span class=\"string\">\"'lg'\"</span>&gt;&lt;/div&gt;</span>.\n      </p>\n      <p>\n        Cette directive accepte en paramètre l'attribut <span class=\"showcase-code primary\">[size]</span> permettant de changer la taille du loader (par défaut à <span class=\"showcase-code warning\">'xs'</span>).\n      </p>\n      <table class=\"table table-bordered table-description\">\n        <tbody>\n        <tr>\n          <th scope=\"row\">Size <span class=\"showcase-code primary\">[size]</span><br><em class=\"type\">string</em></th>\n          <td *ngFor=\"let size of sizes\" class=\"text-align-center\">{{size}}</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Résultat :</th>\n          <td *ngFor=\"let size of sizes\" class=\"text-align-center\">\n            <div circlesLoader [size]=\"size\"></div>\n          </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Cliquer pour copier :</th>\n          <td *ngFor=\"let size of sizes\" class=\"text-align-center\">\n            <button role=\"button\" (click)=\"copyToClipboard(size)\" class=\"btn btn-primary\">Copier en taille '{{size}}'</button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </section>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pipes/currency/currency.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pipes/currency/currency.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Spacing converted to fit font size base\n * All values below are imported from default BS variables\n * ==================================== */\n.w-25 {\n  width: 25% !important; }\n.w-50 {\n  width: 50% !important; }\n.w-75 {\n  width: 75% !important; }\n.w-100 {\n  width: 100% !important; }\n.h-25 {\n  height: 25% !important; }\n.h-50 {\n  height: 50% !important; }\n.h-75 {\n  height: 75% !important; }\n.h-100 {\n  height: 100% !important; }\n.mw-100 {\n  max-width: 100% !important; }\n.mh-100 {\n  max-height: 100% !important; }\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: rootFontSize(1rem);\n  background-color: transparent; }\n.table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6; }\n.table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n.table tbody + tbody {\n    border-top: 2px solid #dee2e6; }\n.table .table {\n    background-color: #fff; }\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n.table-bordered {\n  border: 1px solid #dee2e6; }\n.table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6; }\n.table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-default,\n.table-default > th,\n.table-default > td {\n  background-color: #cbcbcb; }\n.table-hover .table-default:hover {\n  background-color: #bebebe; }\n.table-hover .table-default:hover > td,\n  .table-hover .table-default:hover > th {\n    background-color: #bebebe; }\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #f0b8da; }\n.table-hover .table-primary:hover {\n  background-color: #eca3cf; }\n.table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #eca3cf; }\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #b8cfe6; }\n.table-hover .table-secondary:hover {\n  background-color: #a5c2df; }\n.table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #a5c2df; }\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #b9f2e6; }\n.table-hover .table-success:hover {\n  background-color: #a3eede; }\n.table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #a3eede; }\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #b8e4f1; }\n.table-hover .table-info:hover {\n  background-color: #a3dced; }\n.table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #a3dced; }\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffe2d4; }\n.table-hover .table-warning:hover {\n  background-color: #ffd1bb; }\n.table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffd1bb; }\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #feb8cd; }\n.table-hover .table-danger:hover {\n  background-color: #fe9fbb; }\n.table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #fe9fbb; }\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n.table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n.table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n.table-blue,\n.table-blue > th,\n.table-blue > td {\n  background-color: #b8dded; }\n.table-hover .table-blue:hover {\n  background-color: #a4d3e8; }\n.table-hover .table-blue:hover > td,\n  .table-hover .table-blue:hover > th {\n    background-color: #a4d3e8; }\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e; }\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n.table-dark {\n  color: #fff;\n  background-color: #212529; }\n.table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #32383e; }\n.table-dark.table-bordered {\n    border: 0; }\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n.table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-sm > .table-bordered {\n      border: 0; } }\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-md > .table-bordered {\n      border: 0; } }\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-lg > .table-bordered {\n      border: 0; } }\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xl > .table-bordered {\n      border: 0; } }\n@media (max-width: 1439.98px) {\n  .table-responsive-xlg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xlg > .table-bordered {\n      border: 0; } }\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n.table-responsive > .table-bordered {\n    border: 0; }\n.showcase {\n  align-items: baseline;\n  display: flex;\n  justify-content: center;\n  width: 100%; }\n.text-align-center {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/pipes/currency/currency.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pipes/currency/currency.component.ts ***!
  \******************************************************/
/*! exports provided: CurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyComponent", function() { return CurrencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrencyComponent = /** @class */ (function () {
    function CurrencyComponent() {
    }
    CurrencyComponent.prototype.ngOnInit = function () {
    };
    CurrencyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currency',
            template: __webpack_require__(/*! ./currency.component.html */ "./src/app/pipes/currency/currency.component.html"),
            styles: [__webpack_require__(/*! ./currency.component.scss */ "./src/app/pipes/currency/currency.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CurrencyComponent);
    return CurrencyComponent;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.component.html":
/*!********************************************!*\
  !*** ./src/app/pipes/pipes.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"top\" class=\"container\">\n  <div class=\"jumbotron\">\n    <h1 class=\"display-3\">Pipes</h1>\n    <p class=\"lead\">Pipes.</p>\n    <hr class=\"my-4\">\n    <p>\n      <a [routerLink]=\"['currency']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:false}\" class=\"link\">Currency</a> |\n      <a [routerLink]=\"['btl-svg']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:false}\" class=\"link\">BtlSvg</a>\n    </p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/pipes/pipes.component.scss":
/*!********************************************!*\
  !*** ./src/app/pipes/pipes.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Spacing converted to fit font size base\n * All values below are imported from default BS variables\n * ==================================== */\n.w-25 {\n  width: 25% !important; }\n.w-50 {\n  width: 50% !important; }\n.w-75 {\n  width: 75% !important; }\n.w-100 {\n  width: 100% !important; }\n.h-25 {\n  height: 25% !important; }\n.h-50 {\n  height: 50% !important; }\n.h-75 {\n  height: 75% !important; }\n.h-100 {\n  height: 100% !important; }\n.mw-100 {\n  max-width: 100% !important; }\n.mh-100 {\n  max-height: 100% !important; }\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: rootFontSize(1rem);\n  background-color: transparent; }\n.table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6; }\n.table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n.table tbody + tbody {\n    border-top: 2px solid #dee2e6; }\n.table .table {\n    background-color: #fff; }\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n.table-bordered {\n  border: 1px solid #dee2e6; }\n.table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6; }\n.table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-default,\n.table-default > th,\n.table-default > td {\n  background-color: #cbcbcb; }\n.table-hover .table-default:hover {\n  background-color: #bebebe; }\n.table-hover .table-default:hover > td,\n  .table-hover .table-default:hover > th {\n    background-color: #bebebe; }\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #f0b8da; }\n.table-hover .table-primary:hover {\n  background-color: #eca3cf; }\n.table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #eca3cf; }\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #b8cfe6; }\n.table-hover .table-secondary:hover {\n  background-color: #a5c2df; }\n.table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #a5c2df; }\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #b9f2e6; }\n.table-hover .table-success:hover {\n  background-color: #a3eede; }\n.table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #a3eede; }\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #b8e4f1; }\n.table-hover .table-info:hover {\n  background-color: #a3dced; }\n.table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #a3dced; }\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffe2d4; }\n.table-hover .table-warning:hover {\n  background-color: #ffd1bb; }\n.table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffd1bb; }\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #feb8cd; }\n.table-hover .table-danger:hover {\n  background-color: #fe9fbb; }\n.table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #fe9fbb; }\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n.table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n.table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n.table-blue,\n.table-blue > th,\n.table-blue > td {\n  background-color: #b8dded; }\n.table-hover .table-blue:hover {\n  background-color: #a4d3e8; }\n.table-hover .table-blue:hover > td,\n  .table-hover .table-blue:hover > th {\n    background-color: #a4d3e8; }\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e; }\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n.table-dark {\n  color: #fff;\n  background-color: #212529; }\n.table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #32383e; }\n.table-dark.table-bordered {\n    border: 0; }\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n.table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-sm > .table-bordered {\n      border: 0; } }\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-md > .table-bordered {\n      border: 0; } }\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-lg > .table-bordered {\n      border: 0; } }\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xl > .table-bordered {\n      border: 0; } }\n@media (max-width: 1439.98px) {\n  .table-responsive-xlg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xlg > .table-bordered {\n      border: 0; } }\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n.table-responsive > .table-bordered {\n    border: 0; }\n.showcase {\n  align-items: baseline;\n  display: flex;\n  justify-content: center;\n  width: 100%; }\n.text-align-center {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/pipes/pipes.component.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/pipes.component.ts ***!
  \******************************************/
/*! exports provided: PipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesComponent", function() { return PipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PipesComponent = /** @class */ (function () {
    function PipesComponent() {
    }
    PipesComponent.prototype.ngOnInit = function () {
    };
    PipesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pipes',
            template: __webpack_require__(/*! ./pipes.component.html */ "./src/app/pipes/pipes.component.html"),
            styles: [__webpack_require__(/*! ./pipes.component.scss */ "./src/app/pipes/pipes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PipesComponent);
    return PipesComponent;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _pipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes.component */ "./src/app/pipes/pipes.component.ts");
/* harmony import */ var _currency_currency_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./currency/currency.component */ "./src/app/pipes/currency/currency.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _base_base_module__WEBPACK_IMPORTED_MODULE_3__["BaseModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            declarations: [_pipes_component__WEBPACK_IMPORTED_MODULE_7__["PipesComponent"], _currency_currency_component__WEBPACK_IMPORTED_MODULE_8__["CurrencyComponent"]]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/plans-wall/plans-wall.component.html":
/*!******************************************************!*\
  !*** ./src/app/plans-wall/plans-wall.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h1 class=\"display-3\">Page des Forfaits</h1>\n        <p class=\"lead\">Recréer les pages forfaits du site. Sensation, B&You, FAIM et renouvellement. <a class=\"link\" href=\"https://www.bouyguestelecom.fr/forfaits-mobiles/forfaits-sans-engagement\">Voir ici.</a></p>\n        <p class=\"lead\">Une étude doit être faite au préalable concernant les performances SEO et sur la façon d'intégrer cette page au mieux. Doit-on toujours utiliser le productList ? Doit-on charger le catalogue sur cette page ? </p>\n        <hr class=\"my-4\">\n        <p><strong>Compétences :</strong></p>\n        <ul>\n            <li>Intégration des slides et du carousel <span class=\"badge badge-primary\">INTE</span> <span class=\"badge badge-secondary\">DEV</span></li>\n            <li>Dynamisation Angular 4 <span class=\"badge badge-secondary\">DEV</span></li>\n            <li>Intégration du prix <span class=\"badge badge-primary\">INTE</span></li>\n            <li>Développement de la directive prix <span class=\"badge badge-secondary\">DEV</span></li>\n            <li>Développement d'une directive permettant d'intégrer des SVG (btl-svg) <span class=\"badge badge-secondary\">DEV</span></li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/plans-wall/plans-wall.component.scss":
/*!******************************************************!*\
  !*** ./src/app/plans-wall/plans-wall.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/plans-wall/plans-wall.component.ts":
/*!****************************************************!*\
  !*** ./src/app/plans-wall/plans-wall.component.ts ***!
  \****************************************************/
/*! exports provided: PlansWallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlansWallComponent", function() { return PlansWallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlansWallComponent = /** @class */ (function () {
    function PlansWallComponent() {
    }
    PlansWallComponent.prototype.ngOnInit = function () {
    };
    PlansWallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plans-wall',
            template: __webpack_require__(/*! ./plans-wall.component.html */ "./src/app/plans-wall/plans-wall.component.html"),
            styles: [__webpack_require__(/*! ./plans-wall.component.scss */ "./src/app/plans-wall/plans-wall.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlansWallComponent);
    return PlansWallComponent;
}());



/***/ }),

/***/ "./src/app/showcase/buttons/buttons.component.html":
/*!*********************************************************!*\
  !*** ./src/app/showcase/buttons/buttons.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- BUTTONS -->\n<div class=\"box\">\n    <div class=\"alert alert-success notification-alert\" *ngIf=\"copied\">\n        Copié dans le presse-papier avec succes !\n    </div>\n    <div class=\"row box-header justify-content-between\">\n        <div class=\"col-auto\">\n            <h2 class=\"box-title\"><span class=\"anchor\" id=\"buttons\"></span>Boutons</h2>\n        </div>\n\n    </div>\n\n    <div class=\"row box-content\">\n        <div class=\"col-12\">\n            <div class=\"alert alert-info\">\n                Liste des boutons du site et leurs déclinaisons.\n            </div>\n        </div>\n        <div class=\"col-12 buttons\">\n            <div class=\"row align-items-center\" *ngFor=\"let color of colors\">\n                <div class=\"col-12\">\n                    <h3>Couleur : {{color}}</h3>\n                    Classe <span class=\"showcase-code\">.btn-{{color}}</span>\n                </div>\n                <div class=\"col-12\">\n                    <div class=\"row\">\n                        <div class=\"col dark showcase-state\" *ngFor=\"let state of states\">\n                            <button [class]=\"'btn btn-'+color+' '+state+' btn-block'\">Valider</button>\n                        </div>\n                        <div class=\"w-100\"></div>\n                        <div class=\"col align-items-center\" *ngFor=\"let state of states\">\n                            <span *ngIf=\"state\">+ <span class=\"showcase-code\">{{state === '' ? '':state}}</span></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row align-items-center\">\n                <div class=\"col-12\">\n                    <h3>Couleur : contrast</h3>\n                    <div class=\"alert alert-warning\">\n                        Bouton à utiliser sur fond foncé\n                    </div>\n                </div>\n                <div class=\"col-4 darker\">\n                    <button class=\"btn btn-default contrast btn-block\">Valider</button>\n                </div>\n                <div class=\"col-8\">\n                    Classe <span class=\"showcase-code\">.btn-default</span><span class=\"showcase-code\">.contrast</span>\n                </div>\n            </div>\n            <div class=\"row align-items-center\">\n                <div class=\"col-12\">\n                    <h3>Tailles</h3>\n                </div>\n                <div class=\"col-12\" *ngFor=\"let size of sizes\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            Classe <span class=\"showcase-code\">.{{size}}</span>\n                        </div>\n                        <div class=\"col dark showcase-state\" *ngFor=\"let state of states\">\n                            <button [class]=\"'btn btn-primary '+size+' '+state+' btn-block'\">Valider</button>\n                        </div>\n                        <div class=\"w-100\"></div>\n                        <div class=\"col align-items-center\" *ngFor=\"let state of states\">\n                            <span *ngIf=\"state\">+ <span class=\"showcase-code\">{{state === '' ? '':state}}</span></span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            Classe <span class=\"showcase-code\">.btn-block</span> + <span class=\"showcase-code\">.btn-lg</span>\n                        </div>\n                        <div class=\"col dark showcase-state\" >\n                            <button [class]=\"'btn btn-primary btn-lg btn-block'\">Valider</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/buttons/buttons.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/showcase/buttons/buttons.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _base_services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/services/copy-to-clipboard.service */ "./src/app/base/services/copy-to-clipboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(ctc) {
        this.ctc = ctc;
        this.copied = false;
        this.colors = ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'default'];
        this.sizes = ['btn-sm', 'btn-lg'];
        this.states = ['', 'reversed', 'transparent', 'reversed transparent', 'disabled'];
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent.prototype.copyBtn = function (classes) {
        var _this = this;
        var str = '<i class="icon-item">\n' +
            //'<span btlSvg file="'+category+'-defs" name="shape-'+data.file+'" class="'+data.class+'"></span>\n'+
            '</i>';
        this.ctc.copy(str).then(function () {
            _this.copied = true;
            setTimeout(function () {
                _this.copied = false;
            }, 2000);
        });
    };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/showcase/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ../showcase.component.scss */ "./src/app/showcase/showcase.component.scss")]
        }),
        __metadata("design:paramtypes", [_base_services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboardService"]])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/showcase/forms/forms.component.html":
/*!*****************************************************!*\
  !*** ./src/app/showcase/forms/forms.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FORMS -->\n<div class=\"box\">\n    <div class=\"row box-header justify-content-between\">\n        <div class=\"col-auto\">\n            <h2 class=\"box-title\"><span class=\"anchor\" id=\"forms\"></span>Formulaires</h2>\n        </div>\n\n    </div>\n\n    <div class=\"row box-content\">\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/showcase/forms/forms.component.ts":
/*!***************************************************!*\
  !*** ./src/app/showcase/forms/forms.component.ts ***!
  \***************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
    }
    FormsComponent.prototype.ngOnInit = function () {
    };
    FormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/showcase/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ../showcase.component.scss */ "./src/app/showcase/showcase.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/showcase/miscellaneous/miscellaneous.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/miscellaneous/miscellaneous.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- COLORS AND BACKGROUND-->\n<div class=\"box\">\n    <div class=\"row box-header justify-content-between\">\n        <div class=\"col-auto\">\n            <h2 class=\"box-title\"><span class=\"anchor\" id=\"colors\"></span>BTL Loader</h2>\n        </div>\n\n    </div>\n\n    <div class=\"row box-content\">\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/miscellaneous/miscellaneous.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/miscellaneous/miscellaneous.component.ts ***!
  \*******************************************************************/
/*! exports provided: MiscellaneousComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousComponent", function() { return MiscellaneousComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MiscellaneousComponent = /** @class */ (function () {
    function MiscellaneousComponent() {
    }
    MiscellaneousComponent.prototype.ngOnInit = function () {
    };
    MiscellaneousComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-miscellaneous',
            template: __webpack_require__(/*! ./miscellaneous.component.html */ "./src/app/showcase/miscellaneous/miscellaneous.component.html"),
            styles: [__webpack_require__(/*! ../showcase.component.scss */ "./src/app/showcase/showcase.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MiscellaneousComponent);
    return MiscellaneousComponent;
}());



/***/ }),

/***/ "./src/app/showcase/showcase.component.html":
/*!**************************************************!*\
  !*** ./src/app/showcase/showcase.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"top\" class=\"container\">\n    <div class=\"jumbotron\">\n        <h1 class=\"display-3\">Showcase</h1>\n        <p class=\"lead\">Petit espace pour montrer les différents composants créés/brandés et la façon de les utiliser.<br>\n            <a class=\"link\" target=\"_blank\" href=\"https://getbootstrap.com/docs/4.0/getting-started/introduction/\">Aller sur le site de Bootstrap</a></p>\n        <hr class=\"my-4\">\n        <p>\n            <a [routerLink]=\"['buttons']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:false}\" class=\"link\">Boutons</a> |\n            <a [routerLink]=\"['forms']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:false}\" class=\"link\">Formulaires</a> |\n            <a [routerLink]=\"['misc']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:false}\" class=\"link\">Divers</a>\n        </p>\n    </div>\n</div>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/showcase.component.scss":
/*!**************************************************!*\
  !*** ./src/app/showcase/showcase.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/showcase.component.ts":
/*!************************************************!*\
  !*** ./src/app/showcase/showcase.component.ts ***!
  \************************************************/
/*! exports provided: ShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function() { return ShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseComponent = /** @class */ (function () {
    function ShowcaseComponent() {
    }
    ShowcaseComponent.prototype.ngOnInit = function () {
    };
    ShowcaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showcase',
            template: __webpack_require__(/*! ./showcase.component.html */ "./src/app/showcase/showcase.component.html"),
            styles: [__webpack_require__(/*! ./showcase.component.scss */ "./src/app/showcase/showcase.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowcaseComponent);
    return ShowcaseComponent;
}());



/***/ }),

/***/ "./src/app/showcase/showcase.module.ts":
/*!*********************************************!*\
  !*** ./src/app/showcase/showcase.module.ts ***!
  \*********************************************/
/*! exports provided: ShowcaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseModule", function() { return ShowcaseModule; });
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/showcase/buttons/buttons.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/showcase/forms/forms.component.ts");
/* harmony import */ var _miscellaneous_miscellaneous_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./miscellaneous/miscellaneous.component */ "./src/app/showcase/miscellaneous/miscellaneous.component.ts");
/* harmony import */ var _showcase_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./showcase.component */ "./src/app/showcase/showcase.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ShowcaseModule = /** @class */ (function () {
    function ShowcaseModule() {
    }
    ShowcaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _base_base_module__WEBPACK_IMPORTED_MODULE_3__["BaseModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            declarations: [
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__["ButtonsComponent"],
                _forms_forms_component__WEBPACK_IMPORTED_MODULE_8__["FormsComponent"],
                _miscellaneous_miscellaneous_component__WEBPACK_IMPORTED_MODULE_9__["MiscellaneousComponent"],
                _showcase_component__WEBPACK_IMPORTED_MODULE_10__["ShowcaseComponent"]
            ]
        })
    ], ShowcaseModule);
    return ShowcaseModule;
}());



/***/ }),

/***/ "./src/app/svg/svg.component.html":
/*!****************************************!*\
  !*** ./src/app/svg/svg.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"jumbotron\">\n        <h1 class=\"display-3\">SVG</h1>\n        <p class=\"lead\">Liste des SVG utilisés sur le site dans le cadre de la migration. Cliquer sur un svg afin de le copier dans le presse-papier.</p>\n        <p class=\"lead\"><strong>Filtrer par catégorie :</strong>\n            <select [(ngModel)]=\"currentCategory\">\n                <option [ngValue]=\"'all'\"> - Tous</option>\n                <option *ngFor=\"let category of svgData | keys\" [ngValue]=\"category.key\"> - {{category.key}}</option>\n            </select>\n        </p>\n    </div>\n    <!-- SVG -->\n    <div class=\"box\">\n        <div class=\"alert alert-success notification-alert\" *ngIf=\"copied\">\n            Copié dans le presse-papier avec succes !\n        </div>\n\n        <div class=\"row box-content\">\n            <div class=\"col-12\">\n                <div *ngFor=\"let category of svgData | keys\">\n                    <div class=\"row svg-category\" *ngIf=\"currentCategory == category.key || currentCategory == 'all'\">\n                        <div class=\"col-12 category-header\" data-toggle=\"collapse\">\n                            <h3>{{category.key+'-defs'}}</h3>\n                        </div>\n                        <div class=\"col-12\">\n                            <div class=\"row\">\n                                <div class=\"col-3 icon-showcase\" *ngFor=\"let icon of category.value | keys\" (click)=\"copyIcon(icon.value, category.key)\" placement=\"top\" ngbTooltip=\"Cliquer pour copier\">\n                                    <i class=\"icon-item\">\n                                        <span btlSvg [file]=\"category.key+'-defs'\" [name]=\"'shape-'+icon.value.file\" [class]=\"icon.value.class\"></span>\n                                    </i>\n                                    <p>{{icon.value.file}}</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/svg/svg.component.scss":
/*!****************************************!*\
  !*** ./src/app/svg/svg.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Spacing converted to fit font size base\n * All values below are imported from default BS variables\n * ==================================== */\n.notification-alert {\n  left: 50%;\n  margin-left: -28rem;\n  position: fixed;\n  text-align: center;\n  top: 7rem;\n  width: 56rem;\n  z-index: 9999; }\n.svg-category {\n  margin-bottom: 5rem; }\n.svg-category + .svg-category {\n    padding-top: 1rem;\n    border-top: 0.2rem solid #ececec; }\n.svg-category .category-header {\n    margin: 1.5rem 0;\n    text-transform: uppercase; }\n.svg-category .icon-showcase {\n    align-items: center;\n    background: rgba(100, 100, 100, 0.05);\n    border: 0.1rem solid #fff;\n    display: flex;\n    flex-flow: column;\n    padding: 1.5rem; }\n.svg-category .icon-showcase /deep/\n.icon-item .icon {\n      height: 5rem;\n      width: 11rem; }\n.svg-category .icon-showcase:hover {\n      background: #ececec;\n      cursor: pointer; }\n.svg-category .icon-showcase:hover /deep/\n.icon-item .icon {\n        fill: #c8007b; }\n.box {\n  color: #454545;\n  margin-bottom: 3rem; }\n.box .anchor {\n    position: absolute;\n    top: -9rem; }\n.box .box-header {\n    background-color: #fff;\n    padding: 1.9rem 1.9rem 1.5rem; }\n.box .box-content {\n    background-color: #fff;\n    margin-top: .2rem;\n    padding: 2rem 2rem 2rem; }\n.box .box-content .content-title {\n      margin-bottom: 3rem; }\n.box .box-content .buttons .row {\n      padding: 1.5rem 0; }\n.box .box-content .buttons .row .dark {\n        border: 0.1rem solid #fff;\n        background-color: #ececec;\n        padding: 1rem 1.5rem; }\n.box .box-content .buttons .row .darker {\n        background-color: #454545;\n        padding: 1rem 1.5rem; }\n"

/***/ }),

/***/ "./src/app/svg/svg.component.ts":
/*!**************************************!*\
  !*** ./src/app/svg/svg.component.ts ***!
  \**************************************/
/*! exports provided: SvgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgComponent", function() { return SvgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _base_services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/services/copy-to-clipboard.service */ "./src/app/base/services/copy-to-clipboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SvgComponent = /** @class */ (function () {
    function SvgComponent(http, ctc) {
        this.http = http;
        this.ctc = ctc;
        this.copied = false;
        this.currentCategory = 'all';
    }
    SvgComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpSub = this.http.get('./assets/json/svg/svg.json').subscribe(function (data) {
            _this.svgData = data;
        });
    };
    SvgComponent.prototype.copyIcon = function (data, category) {
        var _this = this;
        var str = '<i class="icon-item">\n' +
            '<span btlSvg file="' + category + '-defs" name="shape-' + data.file + '" class="' + data.class + '"></span>\n' +
            '</i>';
        this.ctc.copy(str).then(function () {
            _this.copied = true;
            setTimeout(function () {
                _this.copied = false;
            }, 2000);
        });
    };
    SvgComponent.prototype.ngOnDestroy = function () {
        this.httpSub.unsubscribe();
    };
    SvgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-svg',
            template: __webpack_require__(/*! ./svg.component.html */ "./src/app/svg/svg.component.html"),
            styles: [__webpack_require__(/*! ./svg.component.scss */ "./src/app/svg/svg.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _base_services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_2__["CopyToClipboardService"]])
    ], SvgComponent);
    return SvgComponent;
}());



/***/ }),

/***/ "./src/app/svg/svg.module.ts":
/*!***********************************!*\
  !*** ./src/app/svg/svg.module.ts ***!
  \***********************************/
/*! exports provided: SvgModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgModule", function() { return SvgModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _svg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg.component */ "./src/app/svg/svg.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SvgModule = /** @class */ (function () {
    function SvgModule() {
    }
    SvgModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _base_base_module__WEBPACK_IMPORTED_MODULE_1__["BaseModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            declarations: [
                _svg_component__WEBPACK_IMPORTED_MODULE_5__["SvgComponent"]
            ]
        })
    ], SvgModule);
    return SvgModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/GDORRIFO/sites/bytel/boutique/doc/sandbox/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map