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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.condicion = true;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _modules_global_services_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/global/services/interceptor/interceptor */ "./src/app/modules/global/services/interceptor/interceptor.ts");
/* harmony import */ var _modules_inicio_inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/inicio/inicio-routing.module */ "./src/app/modules/inicio/inicio-routing.module.ts");
/* harmony import */ var _modules_registro_registro_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/registro/registro-routing.module */ "./src/app/modules/registro/registro-routing.module.ts");
/* harmony import */ var _modules_complementos_complementos_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/complementos/complementos-routing.module */ "./src/app/modules/complementos/complementos-routing.module.ts");
/* harmony import */ var _modules_global_global_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/global/global-routing.module */ "./src/app/modules/global/global-routing.module.ts");
/* harmony import */ var _modules_global_global_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/global/global.module */ "./src/app/modules/global/global.module.ts");
/* harmony import */ var _modules_inicio_inicio_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/inicio/inicio.module */ "./src/app/modules/inicio/inicio.module.ts");
/* harmony import */ var _modules_registro_registro_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/registro/registro.module */ "./src/app/modules/registro/registro.module.ts");
/* harmony import */ var _modules_complementos_complementos_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/complementos/complementos.module */ "./src/app/modules/complementos/complementos.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// ROUTING




// MODULES




// PROVIDERS/SERVICES
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            exports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                // ROUTING
                _modules_inicio_inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioRoutingModule"],
                _modules_registro_registro_routing_module__WEBPACK_IMPORTED_MODULE_6__["RegistroRoutingModule"],
                _modules_complementos_complementos_routing_module__WEBPACK_IMPORTED_MODULE_7__["ComplementosRoutingModule"],
                _modules_global_global_routing_module__WEBPACK_IMPORTED_MODULE_8__["GlobalRoutingModule"],
                // MODULES
                _modules_global_global_module__WEBPACK_IMPORTED_MODULE_9__["GlobalModule"],
                _modules_inicio_inicio_module__WEBPACK_IMPORTED_MODULE_10__["InicioModule"],
                _modules_registro_registro_module__WEBPACK_IMPORTED_MODULE_11__["RegistroModule"],
                _modules_complementos_complementos_module__WEBPACK_IMPORTED_MODULE_12__["ComplementosModule"],
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _modules_global_services_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_4__["InterceptorProvider"],
                    multi: true,
                }
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/complementos/complementos-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/complementos/complementos-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ComplementosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplementosRoutingModule", function() { return ComplementosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_pages_skeleton_dashboard_skeleton_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/pages/skeleton-dashboard/skeleton-dashboard.component */ "./src/app/modules/global/pages/skeleton-dashboard/skeleton-dashboard.component.ts");
/* harmony import */ var _pages_segunda_atencion_segunda_atencion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/segunda-atencion/segunda-atencion.component */ "./src/app/modules/complementos/pages/segunda-atencion/segunda-atencion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// PAGES


var routes = [
    {
        path: 'main-dashboard',
        component: _global_pages_skeleton_dashboard_skeleton_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["SkeletonDashboardComponent"],
        children: [
            {
                path: 'segunda-atencion',
                component: _pages_segunda_atencion_segunda_atencion_component__WEBPACK_IMPORTED_MODULE_3__["SegundaAtencionComponent"],
                data: { breadcrumb: 'Segunda atención' }
            }
        ]
    }
];
var ComplementosRoutingModule = /** @class */ (function () {
    function ComplementosRoutingModule() {
    }
    ComplementosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ComplementosRoutingModule);
    return ComplementosRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/complementos/complementos.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/complementos/complementos.module.ts ***!
  \*************************************************************/
/*! exports provided: ComplementosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplementosModule", function() { return ComplementosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _complementos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complementos-routing.module */ "./src/app/modules/complementos/complementos-routing.module.ts");
/* harmony import */ var _pages_segunda_atencion_segunda_atencion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/segunda-atencion/segunda-atencion.component */ "./src/app/modules/complementos/pages/segunda-atencion/segunda-atencion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// PAGES

var ComplementosModule = /** @class */ (function () {
    function ComplementosModule() {
    }
    ComplementosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _complementos_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComplementosRoutingModule"]
            ],
            declarations: [_pages_segunda_atencion_segunda_atencion_component__WEBPACK_IMPORTED_MODULE_3__["SegundaAtencionComponent"]]
        })
    ], ComplementosModule);
    return ComplementosModule;
}());



/***/ }),

/***/ "./src/app/modules/complementos/pages/segunda-atencion/segunda-atencion.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/complementos/pages/segunda-atencion/segunda-atencion.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  segunda-atencion works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/complementos/pages/segunda-atencion/segunda-atencion.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/complementos/pages/segunda-atencion/segunda-atencion.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/complementos/pages/segunda-atencion/segunda-atencion.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/complementos/pages/segunda-atencion/segunda-atencion.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SegundaAtencionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegundaAtencionComponent", function() { return SegundaAtencionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SegundaAtencionComponent = /** @class */ (function () {
    function SegundaAtencionComponent() {
    }
    SegundaAtencionComponent.prototype.ngOnInit = function () {
    };
    SegundaAtencionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-segunda-atencion',
            template: __webpack_require__(/*! ./segunda-atencion.component.html */ "./src/app/modules/complementos/pages/segunda-atencion/segunda-atencion.component.html"),
            styles: [__webpack_require__(/*! ./segunda-atencion.component.scss */ "./src/app/modules/complementos/pages/segunda-atencion/segunda-atencion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SegundaAtencionComponent);
    return SegundaAtencionComponent;
}());



/***/ }),

/***/ "./src/app/modules/global/components/barra-superior/barra-superior.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/global/components/barra-superior/barra-superior.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *appCanAccess=\"['inicio', 'tableroDeOperaciones']\" class=\"topbar bar-top\">\n  \n  <nav class=\"navbar-custom\">\n\n      <ul class=\"list-unstyled topbar-right-menu float-right mb-0\">\n\n        <li class=\"dropdown notification-list\">\n            <a class=\"nav-link dropdown-toggle arrow-none\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\n                aria-haspopup=\"false\" aria-expanded=\"false\">\n                <i class=\"fi-bell noti-icon\"></i>\n                <span class=\"badge badge-danger badge-pill noti-icon-badge\">4</span>\n            </a>\n        </li>\n\n        <li class=\"dropdown notification-list\">\n            <a class=\"nav-link dropdown-toggle nav-user\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\n                aria-haspopup=\"false\" aria-expanded=\"false\">\n                <img src=\"assets/images/users/avatar-1.jpg\" alt=\"user\" class=\"rounded-circle\">\n                <span class=\"ml-1\">Usuario \n                  <i class=\"mdi mdi-chevron-down\"></i>\n                </span>\n            </a>\n        </li>\n\n      </ul>\n\n      <ul class=\"list-inline menu-left mb-0\">\n          <li class=\"float-left\">\n            <button class=\"button-menu-mobile open-left _disable-btn font-size-24\" (click)=\"clickBtnMenu()\">\n              <!-- <i class=\"dripicons-menu\"></i> -->\n              <i class=\"mdi mdi-menu\"></i>\n            </button>\n            <button class=\"button-menu-mobile open-left _disable-btn font-size-24\" (click)=\"toggleFullScreen()\">\n              <i class=\"mdi mdi-crop-free\"></i>\n            </button>\n          </li>\n      </ul>\n\n  </nav>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/global/components/barra-superior/barra-superior.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/global/components/barra-superior/barra-superior.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bar-top {\n  border-top: 6px solid #2fb3e3;\n  border-bottom: 1px solid #d1d0d0; }\n\n.font-size-24 {\n  font-size: 24px; }\n"

/***/ }),

/***/ "./src/app/modules/global/components/barra-superior/barra-superior.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/global/components/barra-superior/barra-superior.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BarraSuperiorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarraSuperiorComponent", function() { return BarraSuperiorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarraSuperiorComponent = /** @class */ (function () {
    function BarraSuperiorComponent() {
        this.clickButtonMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BarraSuperiorComponent.prototype.ngOnInit = function () {
    };
    BarraSuperiorComponent.prototype.clickBtnMenu = function () {
        jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__("body").toggleClass("enlarged");
        this.clickButtonMenu.emit(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__('body').hasClass('enlarged'));
    };
    BarraSuperiorComponent.prototype.isFullScreen = function () {
        var fsDoc = document;
        return !!(fsDoc.fullscreenElement
            || fsDoc.mozFullScreenElement
            || fsDoc.webkitFullscreenElement
            || fsDoc.msFullscreenElement);
    };
    BarraSuperiorComponent.prototype.toggleFullScreen = function () {
        var fsDoc = document;
        if (!this.isFullScreen()) {
            var fsDocElem = document.documentElement;
            if (fsDocElem.requestFullscreen)
                fsDocElem.requestFullscreen();
            else if (fsDocElem.msRequestFullscreen)
                fsDocElem.msRequestFullscreen();
            else if (fsDocElem.mozRequestFullScreen)
                fsDocElem.mozRequestFullScreen();
            else if (fsDocElem.webkitRequestFullscreen)
                fsDocElem.webkitRequestFullscreen();
        }
        else if (fsDoc.exitFullscreen)
            fsDoc.exitFullscreen();
        else if (fsDoc.msExitFullscreen)
            fsDoc.msExitFullscreen();
        else if (fsDoc.mozCancelFullScreen)
            fsDoc.mozCancelFullScreen();
        else if (fsDoc.webkitExitFullscreen)
            fsDoc.webkitExitFullscreen();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BarraSuperiorComponent.prototype, "clickButtonMenu", void 0);
    BarraSuperiorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-barra-superior',
            template: __webpack_require__(/*! ./barra-superior.component.html */ "./src/app/modules/global/components/barra-superior/barra-superior.component.html"),
            styles: [__webpack_require__(/*! ./barra-superior.component.scss */ "./src/app/modules/global/components/barra-superior/barra-superior.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BarraSuperiorComponent);
    return BarraSuperiorComponent;
}());



/***/ }),

/***/ "./src/app/modules/global/components/breadcrumb/breadcrumb.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/global/components/breadcrumb/breadcrumb.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\" *ngFor=\"let item of breadcrumb\">{{item.label}}</li>\n  </ol>\n</div>"

/***/ }),

/***/ "./src/app/modules/global/components/breadcrumb/breadcrumb.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/global/components/breadcrumb/breadcrumb.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-breadcrumb {\n  font-size: 13px;\n  padding: 10px 35px;\n  border-bottom: 1px solid #d1d0d0;\n  color: #98a6ad; }\n\n.box-breadcrumb ol {\n  padding: 0;\n  margin: 0; }\n\n@media (max-width: 1024px) {\n  .box-breadcrumb {\n    margin-top: 70px; } }\n"

/***/ }),

/***/ "./src/app/modules/global/components/breadcrumb/breadcrumb.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/global/components/breadcrumb/breadcrumb.component.ts ***!
  \******************************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.breadcrumb = [];
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe(function () { return _this.breadcrumb = _this.getBreadcrumb(_this.route.root); });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    BreadcrumbComponent.prototype.getBreadcrumb = function (route, breadcrumbs) {
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var breadCrumbs = breadcrumbs;
        var breadcrumb = route && route.routeConfig && route.routeConfig.data ? { label: route.routeConfig.data['breadcrumb'] } : { label: 'eDua' };
        if (route.routeConfig)
            breadCrumbs.push(breadcrumb);
        if (route.firstChild)
            return (this.getBreadcrumb(route.firstChild, breadCrumbs));
        return breadCrumbs;
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/modules/global/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/modules/global/components/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/modules/global/components/menu-lateral/menu-lateral.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/global/components/menu-lateral/menu-lateral.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"left side-menu\">\n  \n      <div class=\"slimscroll-menu\" id=\"remove-scroll\">\n\n          <!-- LOGO -->\n          <div class=\"topbar-left box-logo _center-items\">\n              <a class=\"logo\">\n                  <span class=\"logo-container\">\n                      <img src=\"assets/images/logos/edua.png\">\n                  </span>\n                  <i class=\"logo-child-container\">\n                       <img src=\"assets/images/logos/edua-child.png\" alt=\"\" height=\"28\">\n                  </i>\n              </a>\n          </div>\n\n          <!-- User box -->\n          <div class=\"user-box\">\n              <!-- <div class=\"user-img\">\n                  <img src=\"assets/images/users/avatar-1.jpg\" alt=\"user-img\" title=\"Mat Helme\" class=\"rounded-circle img-fluid\">\n              </div>\n              <h5><a href=\"#\">Maxine Kennedy</a> </h5>\n              <p class=\"text-muted\">Admin Head</p> -->\n          </div>\n\n          <!--- Sidemenu -->\n          <div id=\"sidebar-menu\">\n              <ul class=\"metismenu\" id=\"side-menu\">\n\n                  <li *ngFor=\"let itemMenu of (menu | canAccess)\">\n                      <a *ngIf=\"!itemMenu.childs; else hasChild\"\n                          [routerLink]=\"[itemMenu.url + '/' + itemMenu.path]\"\n                          routerLinkActive=\"active\">\n                          <i [class]=\"itemMenu.icon\"></i>\n                          <span>{{itemMenu.nombre}}</span>\n                      </a>\n                      <ng-template #hasChild >\n                          <a data-toggle=\"collapse\"\n                             (click)=\"itemMenu.isCollapsed = !itemMenu.isCollapsed\"\n                             [attr.aria-expanded]=\"!itemMenu?.isCollapsed\" \n                             aria-controls=\"itemMenu.idCollapsed\">\n\n                             <i [class]=\"itemMenu.icon\"></i>\n                             <span>{{itemMenu.nombre}}</span>\n                             <span class=\"menu-arrow\"></span>\n                          </a>\n\n                          <ul class=\"nav-second-level\"  \n                              [id]=\"itemMenu.idCollapsed\" \n                              [ngbCollapse]=\"!itemMenu?.isCollapsed\">\n                              <li *ngFor=\"let child of itemMenu.childs\" routerLinkActive=\"active\">\n                                  <a [routerLink]=\"[itemMenu.url + '/' + child.path]\">\n                                      {{child.nombre}}\n                                  </a>\n                              </li>\n                          </ul>\n                      </ng-template>\n                  </li>\n\n              </ul>\n          </div>\n          <!-- Sidebar -->\n\n          <div class=\"clearfix\"></div>\n\n      </div>\n      <!-- Sidebar -left -->\n\n  </div>\n"

/***/ }),

/***/ "./src/app/modules/global/components/menu-lateral/menu-lateral.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/global/components/menu-lateral/menu-lateral.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-menu {\n  box-shadow: 0px 2px 3px #888888; }\n\n.box-logo {\n  height: 117px;\n  border-top: 6px solid #dddddd;\n  border-bottom: 1px solid #dddddd;\n  padding-left: 0; }\n\n.logo {\n  width: 100%; }\n\n.box-logo img {\n  height: 100%;\n  width: auto; }\n\n.logo-container {\n  display: inline-block;\n  margin: auto;\n  position: relative;\n  width: 100%;\n  padding: 40px; }\n\n.logo-child-container {\n  padding: 10px; }\n\n.logo-container img, .logo-child-container img {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/modules/global/components/menu-lateral/menu-lateral.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/global/components/menu-lateral/menu-lateral.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MenuLateralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLateralComponent", function() { return MenuLateralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuLateralComponent = /** @class */ (function () {
    function MenuLateralComponent() {
    }
    MenuLateralComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dataMenu'),
        __metadata("design:type", Array)
    ], MenuLateralComponent.prototype, "menu", void 0);
    MenuLateralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-lateral',
            template: __webpack_require__(/*! ./menu-lateral.component.html */ "./src/app/modules/global/components/menu-lateral/menu-lateral.component.html"),
            styles: [__webpack_require__(/*! ./menu-lateral.component.scss */ "./src/app/modules/global/components/menu-lateral/menu-lateral.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuLateralComponent);
    return MenuLateralComponent;
}());



/***/ }),

/***/ "./src/app/modules/global/components/pie-de-pagina/pie-de-pagina.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/global/components/pie-de-pagina/pie-de-pagina.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer text-right\">\n  ©Copyright, ©AMIS {{ year }}. Todos los derechos reservados\n</footer>"

/***/ }),

/***/ "./src/app/modules/global/components/pie-de-pagina/pie-de-pagina.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/global/components/pie-de-pagina/pie-de-pagina.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/global/components/pie-de-pagina/pie-de-pagina.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/global/components/pie-de-pagina/pie-de-pagina.component.ts ***!
  \************************************************************************************/
/*! exports provided: PieDePaginaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieDePaginaComponent", function() { return PieDePaginaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PieDePaginaComponent = /** @class */ (function () {
    function PieDePaginaComponent() {
        this.year = new Date().getFullYear();
    }
    PieDePaginaComponent.prototype.ngOnInit = function () {
    };
    PieDePaginaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pie-de-pagina',
            template: __webpack_require__(/*! ./pie-de-pagina.component.html */ "./src/app/modules/global/components/pie-de-pagina/pie-de-pagina.component.html"),
            styles: [__webpack_require__(/*! ./pie-de-pagina.component.scss */ "./src/app/modules/global/components/pie-de-pagina/pie-de-pagina.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PieDePaginaComponent);
    return PieDePaginaComponent;
}());



/***/ }),

/***/ "./src/app/modules/global/directives/can-access.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/global/directives/can-access.directive.ts ***!
  \*******************************************************************/
/*! exports provided: CanAccessDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanAccessDirective", function() { return CanAccessDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_configurations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/configurations */ "./src/app/modules/global/services/configurations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanAccessDirective = /** @class */ (function () {
    function CanAccessDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(CanAccessDirective.prototype, "appCanAccess", {
        set: function (conditions) {
            var permisos = _services_configurations__WEBPACK_IMPORTED_MODULE_1__["CONTENIDO_ROLES_PERMISOS"];
            var usuario = _services_configurations__WEBPACK_IMPORTED_MODULE_1__["USUARIO"];
            var canAccess = false;
            console.log("==>>> DIRECTIVA appCanAccess: PARASMS " + conditions[0] + conditions[1]);
            permisos[conditions[0]][conditions[1]].permisosRol.forEach(function (rol) {
                if (rol == usuario.rol)
                    canAccess = true;
            });
            if (canAccess) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], CanAccessDirective.prototype, "appCanAccess", null);
    CanAccessDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appCanAccess]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], CanAccessDirective);
    return CanAccessDirective;
}());



/***/ }),

/***/ "./src/app/modules/global/global-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/global/global-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: GlobalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalRoutingModule", function() { return GlobalRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/modules/global/pages/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// PAGES

var routes = [
    {
        path: '',
        redirectTo: '/inicio-sesion',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"],
    },
];
var GlobalRoutingModule = /** @class */ (function () {
    function GlobalRoutingModule() {
    }
    GlobalRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GlobalRoutingModule);
    return GlobalRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/global/global.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/global/global.module.ts ***!
  \*************************************************/
/*! exports provided: GlobalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalModule", function() { return GlobalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/modules/global/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_skeleton_dashboard_skeleton_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/skeleton-dashboard/skeleton-dashboard.component */ "./src/app/modules/global/pages/skeleton-dashboard/skeleton-dashboard.component.ts");
/* harmony import */ var _components_barra_superior_barra_superior_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/barra-superior/barra-superior.component */ "./src/app/modules/global/components/barra-superior/barra-superior.component.ts");
/* harmony import */ var _components_menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu-lateral/menu-lateral.component */ "./src/app/modules/global/components/menu-lateral/menu-lateral.component.ts");
/* harmony import */ var _components_pie_de_pagina_pie_de_pagina_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pie-de-pagina/pie-de-pagina.component */ "./src/app/modules/global/components/pie-de-pagina/pie-de-pagina.component.ts");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "./src/app/modules/global/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _pipes_can_access_can_access_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/can-access/can-access.pipe */ "./src/app/modules/global/pipes/can-access/can-access.pipe.ts");
/* harmony import */ var _directives_can_access_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/can-access.directive */ "./src/app/modules/global/directives/can-access.directive.ts");
/* harmony import */ var _global_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global-routing.module */ "./src/app/modules/global/global-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// PAGES


// COMPONENTS




// PIPES

// DIRECTIVES


var GlobalModule = /** @class */ (function () {
    function GlobalModule() {
    }
    GlobalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                // ROUTING
                _global_routing_module__WEBPACK_IMPORTED_MODULE_11__["GlobalRoutingModule"],
                // NGBOOTSTRAP
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
            ],
            declarations: [
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"],
                _pages_skeleton_dashboard_skeleton_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["SkeletonDashboardComponent"],
                _directives_can_access_directive__WEBPACK_IMPORTED_MODULE_10__["CanAccessDirective"],
                _pipes_can_access_can_access_pipe__WEBPACK_IMPORTED_MODULE_9__["CanAccessPipe"],
                _components_barra_superior_barra_superior_component__WEBPACK_IMPORTED_MODULE_5__["BarraSuperiorComponent"],
                _components_menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_6__["MenuLateralComponent"],
                _components_pie_de_pagina_pie_de_pagina_component__WEBPACK_IMPORTED_MODULE_7__["PieDePaginaComponent"],
                _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"]
            ],
            exports: [
                // NGBOOTSTRAP
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"],
                _pages_skeleton_dashboard_skeleton_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["SkeletonDashboardComponent"],
                _directives_can_access_directive__WEBPACK_IMPORTED_MODULE_10__["CanAccessDirective"],
                _pipes_can_access_can_access_pipe__WEBPACK_IMPORTED_MODULE_9__["CanAccessPipe"],
                _components_barra_superior_barra_superior_component__WEBPACK_IMPORTED_MODULE_5__["BarraSuperiorComponent"],
                _components_menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_6__["MenuLateralComponent"],
                _components_pie_de_pagina_pie_de_pagina_component__WEBPACK_IMPORTED_MODULE_7__["PieDePaginaComponent"],
                _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"]
            ]
        })
    ], GlobalModule);
    return GlobalModule;
}());



/***/ }),

/***/ "./src/app/modules/global/pages/page-not-found/page-not-found.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/global/pages/page-not-found/page-not-found.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/global/pages/page-not-found/page-not-found.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/global/pages/page-not-found/page-not-found.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/global/pages/page-not-found/page-not-found.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/global/pages/page-not-found/page-not-found.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/modules/global/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/modules/global/pages/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/modules/global/pages/skeleton-dashboard/skeleton-dashboard.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/global/pages/skeleton-dashboard/skeleton-dashboard.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n    <app-menu-lateral [dataMenu]='menu'></app-menu-lateral>\n\n    <div class=\"content-page no-pading\">\n  \n        <app-barra-superior (clickButtonMenu)=\"changeMenu($event)\"></app-barra-superior>\n\n        <app-breadcrumb></app-breadcrumb>\n\n        <div class=\"content dash-content\">\n            <div class=\"container-fluid\">\n                <router-outlet></router-outlet>\n            </div> \n        </div>\n        \n        <app-pie-de-pagina></app-pie-de-pagina>\n  \n    </div>\n\n  </div>\n  \n  \n"

/***/ }),

/***/ "./src/app/modules/global/pages/skeleton-dashboard/skeleton-dashboard.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/global/pages/skeleton-dashboard/skeleton-dashboard.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-pading {\n  padding: 0; }\n\n.dash-content {\n  margin: 10px 20px; }\n"

/***/ }),

/***/ "./src/app/modules/global/pages/skeleton-dashboard/skeleton-dashboard.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/global/pages/skeleton-dashboard/skeleton-dashboard.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SkeletonDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonDashboardComponent", function() { return SkeletonDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_configurations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/configurations */ "./src/app/modules/global/services/configurations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SkeletonDashboardComponent = /** @class */ (function () {
    function SkeletonDashboardComponent() {
        this.menu = _services_configurations__WEBPACK_IMPORTED_MODULE_2__["MENU"];
    }
    SkeletonDashboardComponent.prototype.changeMenu = function (ev) {
        if (ev) {
            this.menu.forEach(function (item) {
                if (item.childs)
                    item.isCollapsed = false;
            });
        }
    };
    SkeletonDashboardComponent.prototype.ngOnInit = function () {
        if (jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__(document).width() < 1024) {
            jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__('body').addClass('enlarged');
        }
    };
    SkeletonDashboardComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 1024) {
            jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__('body').addClass('enlarged');
            this.changeMenu(true);
        }
        else {
            jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__('body').removeClass('enlarged');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SkeletonDashboardComponent.prototype, "onResize", null);
    SkeletonDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'skeleton-dashboard',
            template: __webpack_require__(/*! ./skeleton-dashboard.component.html */ "./src/app/modules/global/pages/skeleton-dashboard/skeleton-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./skeleton-dashboard.component.scss */ "./src/app/modules/global/pages/skeleton-dashboard/skeleton-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SkeletonDashboardComponent);
    return SkeletonDashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/global/pipes/can-access/can-access.pipe.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/global/pipes/can-access/can-access.pipe.ts ***!
  \********************************************************************/
/*! exports provided: CanAccessPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanAccessPipe", function() { return CanAccessPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_configurations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/configurations */ "./src/app/modules/global/services/configurations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CanAccessPipe = /** @class */ (function () {
    function CanAccessPipe() {
    }
    CanAccessPipe.prototype.transform = function (items, args) {
        var itemsFiltred = [];
        var permisos = _services_configurations__WEBPACK_IMPORTED_MODULE_1__["CONTENIDO_ROLES_PERMISOS"];
        var usuario = _services_configurations__WEBPACK_IMPORTED_MODULE_1__["USUARIO"];
        if (items && permisos && usuario) {
            items.forEach(function (item) {
                if (!item.childs) {
                    permisos[item.modulo][item.accion].permisosRol.forEach(function (rol) {
                        if (rol == usuario.rol)
                            itemsFiltred.push(item);
                    });
                }
                else if (item.childs.length != 0) {
                    var childsFiltred_1 = [];
                    item.childs.forEach(function (child) {
                        permisos[child.modulo][child.accion].permisosRol.forEach(function (rol) {
                            if (rol == usuario.rol)
                                childsFiltred_1.push(child);
                        });
                    });
                    if (childsFiltred_1.length != 0) {
                        item.childs = childsFiltred_1;
                        itemsFiltred.push(item);
                    }
                    ;
                }
            });
            return itemsFiltred;
        }
        else {
            return items;
        }
    };
    CanAccessPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'canAccess'
        })
    ], CanAccessPipe);
    return CanAccessPipe;
}());



/***/ }),

/***/ "./src/app/modules/global/services/configurations.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/global/services/configurations.ts ***!
  \***********************************************************/
/*! exports provided: CONTENIDO_ROLES_PERMISOS, USUARIO, MENU, SECCIONES, FLUJO_REGISTRO_SINIESTRO, FLUJO_REGISTRO_NO_COLISION, FLUJO_REGISTRO_COLISION, REGISTRO_CATEGORIAS_CAUSA, REGISTRO_CATEGORIAS_COBERTURA, ENVIROMENT, ULTIMA_VERSION_APP, Configurations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENIDO_ROLES_PERMISOS", function() { return CONTENIDO_ROLES_PERMISOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USUARIO", function() { return USUARIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU", function() { return MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECCIONES", function() { return SECCIONES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLUJO_REGISTRO_SINIESTRO", function() { return FLUJO_REGISTRO_SINIESTRO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLUJO_REGISTRO_NO_COLISION", function() { return FLUJO_REGISTRO_NO_COLISION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLUJO_REGISTRO_COLISION", function() { return FLUJO_REGISTRO_COLISION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRO_CATEGORIAS_CAUSA", function() { return REGISTRO_CATEGORIAS_CAUSA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRO_CATEGORIAS_COBERTURA", function() { return REGISTRO_CATEGORIAS_COBERTURA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENVIROMENT", function() { return ENVIROMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ULTIMA_VERSION_APP", function() { return ULTIMA_VERSION_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configurations", function() { return Configurations; });
var ENVIROMENTS = {
    'MOCK': {
        enviroment: 'MOCK',
        url: 'https://90f33f64-3e0a-4e3a-bd21-71afa43fec9d.mock.pstmn.io/' //configurar MOCK-SERVICE en Postman
    },
    'LOCAL': {
        enviroment: 'LOCAL',
        url: ''
    },
    'PRUEBAS': {
        enviroment: 'PRUEBAS',
        url: ''
    },
    'PRODUCCION': {
        enviroment: 'PRODUCCION',
        url: ''
    }
};
var VERSIONES_APP = [
    {
        version: '1.0.0',
        revision: '0000001',
        descripcion: 'Primer versión app'
    }
];
var CONTENIDO_ROLES_PERMISOS = {
    'inicio': {
        'tableroDeOperaciones': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP', 'USR_N4', 'USR_N5', 'USR_N6']
        },
        'visualizarInformacion': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP', 'USR_N4', 'USR_N5', 'USR_N6']
        },
        'cancelarFolios': {
            permisosRol: ['ADMR_TI', 'USR_N4', 'USR_N5', 'USR_N6']
        },
        'complementarInformacion': {
            permisosRol: ['ADMR_TI', 'USR_N4', 'USR_N5', 'USR_N6']
        },
        'segundaAtencion': {
            permisosRol: ['ADMR_TI', 'USR_N4', 'USR_N5', 'USR_N6']
        }
    },
    'registroDeSiniestro': {
        'enLinea': {
            permisosRol: ['ADMR_TI', 'USR_N6']
        },
        'porLotes': {
            permisosRol: ['ADMR_TI', 'USR_N6']
        }
    },
    'complementos': {
        'segundaAtencion': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP', 'USR_N4', 'USR_N5', 'USR_N6']
        },
        'asignacionDeFolios': {
            permisosRol: ['ADMR_TI', 'USR_N4', 'USR_N5']
        },
        'visualizarInformacion': {
            permisosRol: ['ADMR_TI', 'USR_N4', 'USR_N5', 'USR_N6']
        },
        'seguimientosDeFolios': {
            permisosRol: ['ADMR_TI', 'USR_N6']
        }
    },
    'consultas': {
        'historicoDeMovimientos': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP', 'USR_N1', 'USR_N2', 'USR_N3', 'USR_N4', 'USR_N5', 'USR_N6']
        },
        'calidadDeInformacion': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP', 'USR_N1', 'USR_N2', 'USR_N3', 'USR_N4', 'USR_N5', 'USR_N6']
        },
        'tiemposDeAtencion': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP', 'USR_N1', 'USR_N2', 'USR_N3', 'USR_N4', 'USR_N5', 'USR_N6']
        },
        'complementosYConsultas': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP', 'USR_N1', 'USR_N2', 'USR_N3', 'USR_N4', 'USR_N5', 'USR_N6']
        },
        'modificacionDeUsuario': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP', 'USR_N1', 'USR_N2', 'USR_N3', 'USR_N4', 'USR_N5', 'USR_N6']
        },
        'productividad': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP', 'USR_N1', 'USR_N2', 'USR_N3', 'USR_N4', 'USR_N5', 'USR_N6']
        },
        'colision': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP', 'USR_N1', 'USR_N2', 'USR_N3', 'USR_N4', 'USR_N5', 'USR_N6']
        },
        'lugarDeOcurrencia': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP', 'USR_N1', 'USR_N2', 'USR_N3', 'USR_N4', 'USR_N5', 'USR_N6']
        }
    },
    'administracion': {
        'administracionDeUsuarios': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP']
        },
        'alta': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP']
        },
        'activarInactivar': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP']
        },
        'visualizarInformacion': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP']
        },
        'modificacion': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP']
        },
        'baja': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP']
        },
        'asignacionYPerfilamiento': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP']
        },
        'registroDeCertificado': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP']
        },
        'notiDUA': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP']
        },
        'temporizador': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP']
        },
        'editar': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP']
        },
        'eliminar': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP']
        },
        'cambioDeContrasena': {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP', 'USR_N6']
        }
    },
    'notificaciones': {
        notificaciones: {
            permisosRol: ['ADMR_TI', 'ADMR_AMIS', 'ADMR_COMP', 'USR_N1', 'USR_N2', 'USR_N3', 'USR_N4', 'USR_N5', 'USR_N6']
        }
    }
};
var USUARIO = {
    nombre: 'Usuario 1',
    apellidoPaterno: 'Apellido00',
    apellidoMaterno: 'Apellido01',
    id: 123,
    rol: 'ADMR_TI',
    token: 'NCKNDSIJSDV89SD798797'
};
var MENU = [
    {
        nombre: 'Principal',
        idCollapsed: null,
        isCollapsed: null,
        icon: 'fi-air-play',
        url: '/main-dashboard',
        path: 'noticias-edua',
        outlet: 'contentDashboard',
        childs: null,
        modulo: 'inicio',
        accion: 'visualizarInformacion'
    },
    {
        nombre: 'Inicio',
        idCollapsed: 'collapsedInicio',
        isCollapsed: false,
        icon: 'fi-paper-stack',
        url: '/main-dashboard',
        path: null,
        outlet: null,
        childs: [
            {
                nombre: 'Tablero de operaciones',
                url: null,
                path: 'tablero-operaciones',
                outlet: 'contentDashboard',
                modulo: 'inicio',
                accion: 'tableroDeOperaciones'
            }
        ],
        modulo: 'inicio',
        accion: null
    },
    {
        nombre: 'Registro de siniestros',
        idCollapsed: 'collapsedRegistro',
        isCollapsed: false,
        icon: 'fi-clipboard',
        url: '/main-dashboard',
        path: null,
        outlet: null,
        childs: [
            {
                nombre: 'En linea',
                url: null,
                path: 'registro-en-linea/inicio',
                outlet: 'contentDashboard',
                modulo: 'registroDeSiniestro',
                accion: 'enLinea'
            },
            {
                nombre: 'Por lotes',
                url: null,
                path: 'registro-por-lotes',
                outlet: 'contentDashboard',
                modulo: 'registroDeSiniestro',
                accion: 'porLotes'
            }
        ],
        modulo: 'registroDeSiniestro',
        accion: null
    },
    {
        nombre: 'Complementos',
        idCollapsed: 'collapsedComplementos',
        isCollapsed: false,
        icon: 'fi-file-add',
        url: '/main-dashboard',
        path: null,
        outlet: null,
        childs: [
            {
                nombre: 'Segunda atención',
                url: null,
                path: 'segunda-atencion',
                outlet: 'contentDashboard',
                modulo: 'complementos',
                accion: 'segundaAtencion'
            }
        ],
        modulo: 'complementos',
        accion: null
    },
    {
        nombre: 'Acerca de',
        idCollapsed: null,
        isCollapsed: null,
        icon: 'fi-ellipsis',
        url: '/main-dashboard',
        path: 'acerca-de',
        outlet: 'contentDashboard',
        childs: null,
        modulo: 'inicio',
        accion: 'visualizarInformacion'
    }
];
var SECCIONES = {
    inicio: {
        id: 1,
        nombre: 'Inicio',
        icono: 'ico__tab_aseg',
        url: '/principal-registro/registro-inicio',
        path: null,
        params: '',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    },
    siniestro: {
        id: 2,
        nombre: 'Datos del siniestro',
        icono: 'ico__tab_siniest',
        url: '/principal-registro',
        path: 'datos-siniestro',
        params: '',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    },
    poliza: {
        id: 3,
        nombre: 'Datos de poliza',
        icono: 'ico__tab_poliza',
        url: '/principal-registro',
        path: 'busqueda-poliza',
        params: '',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    },
    asegurado: {
        id: 4,
        nombre: 'Datos del asegurado',
        icono: 'ico__tab_aseg',
        url: '/principal-registro',
        path: 'datos-asegurado',
        params: '',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    },
    conductor: {
        id: 5,
        nombre: 'Datos del conductor',
        icono: 'ico__tab_conduct',
        url: '/principal-registro',
        path: 'datos-conductor',
        params: '',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    },
    vehiculo: {
        id: 6,
        nombre: 'Datos del vehículo',
        icono: 'ico__tab_vehic',
        url: '/principal-registro',
        path: 'datos-vehiculo',
        params: '',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    },
    involucrados: {
        id: 7,
        nombre: 'Involucrados y lesionados',
        icono: 'ico__tab_involuc',
        url: '/principal-registro',
        path: 'involucrados-lesionados',
        params: '',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    },
    narracion: {
        id: 8,
        nombre: 'Punto de choque y daños',
        icono: 'ico__tab_narrat',
        url: '/principal-registro',
        path: 'narracion-accidente',
        params: '',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    },
    puntosChoque: {
        id: 9,
        nombre: 'Punto de choque y daños',
        icono: 'ico__tab_choque',
        url: '/principal-registro',
        path: 'punto-choque-danos',
        params: '',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    },
    circunstancias: {
        id: 10,
        nombre: 'Circunstancia',
        icono: 'ico__tab_circuns',
        url: '/principal-registro',
        path: 'circunstancia',
        params: '',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    },
    fotos: {
        id: 11,
        nombre: 'Fotos',
        icono: 'ico__tab_fotos',
        url: '/principal-registro',
        path: 'fotos',
        params: '',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    },
    croquis: {
        id: 12,
        nombre: 'Croquis del accidente',
        icono: 'ico__tab_croquis',
        url: '/principal-registro',
        path: 'croquis',
        params: '',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    },
    generacionOrdenes: {
        id: 13,
        nombre: 'Generación de ordenes',
        icono: 'ico__tab_aseg',
        url: '/principal-registro/generacion-ordenes',
        path: null,
        params: '',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    },
    terminoAtencion: {
        id: 14,
        nombre: 'Término de atención',
        icono: 'ico__tab_termino',
        url: '/principal-registro/termino-atencion',
        path: null,
        params: '',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    },
    informeAjustador: {
        id: 15,
        nombre: 'Informe del ajustador',
        icono: 'ico__tab_siniest',
        url: '/principal-registro/informe-ajustador',
        path: null,
        params: '',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    },
    responsable: {
        id: 16,
        nombre: 'Registro responsable',
        icono: 'ico__tab_aseg',
        url: '/principal-registro/responsable',
        path: 'datos-siniestro',
        params: 'seccionResponsable',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    },
    afectado: {
        id: 17,
        nombre: 'Registro afectado',
        icono: 'ico__tab_aseg',
        url: '/principal-registro/afectado',
        path: 'datos-siniestro',
        params: 'seccionAfectado',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    },
    involucrado: {
        id: 18,
        nombre: 'Registro involucrado',
        icono: 'ico__tab_aseg',
        url: '/principal-registro/involucrado',
        path: 'datos-siniestro',
        params: 'seccionInvolucrado',
        estatus: {
            esActiva: false,
            esCompleta: false,
            esHabilitada: false
        }
    }
};
var FLUJO_REGISTRO_SINIESTRO = [
    {
        id: 1,
        nombre: 'Datos del siniestro',
        url: '/flujo-registro',
        path: 'datos-siniestro',
        icon: 'ico__tab_siniest',
        isActive: true,
        isComplete: true,
        disabled: false
    },
    {
        id: 3,
        nombre: 'Datos de póliza',
        url: '/flujo-registro',
        path: 'busqueda-poliza',
        icon: 'ico__tab_poliza',
        isActive: true,
        isComplete: true,
        disabled: false
    },
    {
        id: 4,
        nombre: 'Datos del asegurado',
        url: '/flujo-registro',
        path: 'datos-asegurado',
        icon: 'ico__tab_aseg',
        isActive: true,
        isComplete: true,
        disabled: false
    },
    {
        id: 5,
        nombre: 'Datos del conductor',
        url: '/flujo-registro',
        path: 'datos-conductor',
        icon: 'ico__tab_conduct',
        isActive: true,
        isComplete: true,
        disabled: false
    },
    {
        id: 6,
        nombre: 'Datos del vehículo',
        url: '/flujo-registro',
        path: 'datos-vehiculo',
        icon: 'ico__tab_vehic',
        isActive: true,
        isComplete: true,
        disabled: false
    },
    {
        id: 7,
        nombre: 'Involucrados y lesionados',
        url: '/flujo-registro',
        path: 'involucrados-lesionados',
        icon: 'ico__tab_involuc',
        isActive: true,
        isComplete: true,
        disabled: false
    },
    {
        id: 8,
        nombre: 'Narración del Accidente',
        url: '/flujo-registro',
        path: 'narracion-accidente',
        icon: 'ico__tab_narrat',
        isActive: true,
        isComplete: true,
        disabled: false
    },
    {
        id: 9,
        nombre: 'Punto de choque y daños',
        url: '/flujo-registro',
        path: 'punto-choque-danos',
        icon: 'ico__tab_choque',
        isActive: true,
        isComplete: true,
        disabled: false
    },
    {
        id: 10,
        nombre: 'Circunstancia',
        url: '/flujo-registro',
        path: 'circunstancia',
        icon: 'ico__tab_circuns',
        isActive: true,
        isComplete: true,
        disabled: false
    },
    {
        id: 11,
        nombre: 'Fotos',
        url: '/flujo-registro',
        path: 'fotos',
        icon: 'ico__tab_fotos',
        isActive: true,
        isComplete: true,
        disabled: false
    },
    {
        id: 12,
        nombre: 'Croquis del accidente',
        url: '/flujo-registro',
        path: 'croquis',
        icon: 'ico__tab_croquis',
        isActive: true,
        isComplete: true,
        disabled: false
    },
];
var FLUJO_REGISTRO_NO_COLISION = [
    {
        id: 1,
        nombre: 'Responsable',
        url: '/flujo-registro',
        path: 'datos-siniestro',
        icon: 'ico__tab_aseg',
        isActive: true,
        isComplete: true,
        disabled: false
    },
    {
        id: 2,
        nombre: 'Generación de ordenes',
        url: '/principal-registro',
        path: 'informe',
        icon: 'ico__tab_aseg',
        isActive: true,
        isComplete: true,
        disabled: false
    },
    {
        id: 3,
        nombre: 'Término de atención',
        url: '/principal-registro',
        path: 'termino-atencion',
        icon: 'ico__tab_termino',
        isActive: true,
        isComplete: true,
        disabled: false
    },
    {
        id: 4,
        nombre: 'Informe del ajustador',
        url: '/principal-registro',
        path: 'informe-ajustador',
        icon: 'ico__tab_siniest',
        isActive: true,
        isComplete: true,
        disabled: false
    }
];
var FLUJO_REGISTRO_COLISION = [
    {
        id: 1,
        nombre: 'Responsable',
        url: '/flujo-registro',
        path: 'datos-siniestro',
        icon: 'ico__tab_aseg',
        isActive: false,
        isComplete: true,
        disabled: false
    },
    {
        id: 2,
        nombre: 'Afectado',
        url: '/flujo-registro',
        path: 'datos-siniestro',
        icon: 'ico__tab_aseg',
        isActive: true,
        isComplete: true,
        disabled: false
    },
    {
        id: 3,
        nombre: 'Generación de ordenes',
        url: '/principal-registro',
        path: 'generacion-ordenes',
        icon: 'ico__tab_genord',
        isActive: true,
        isComplete: true,
        disabled: false
    },
    {
        id: 4,
        nombre: 'Término de atención',
        url: '/principal-registro',
        path: 'termino-atencion',
        icon: 'ico__tab_termino',
        isActive: true,
        isComplete: true,
        disabled: false
    },
    {
        id: 5,
        nombre: 'Informe del ajustador',
        url: '/principal-registro',
        path: 'informe-ajustador',
        icon: 'ico__tab_siniest',
        isActive: true,
        isComplete: true,
        disabled: false
    }
];
var REGISTRO_CATEGORIAS_CAUSA = [
    {
        "id": 1,
        "text": "Circulaba sobre av. principal / glorieta (Colisión)"
    },
    {
        "id": 2,
        "text": "Circulaba sobre vías secundarias"
    },
    {
        "id": 3,
        "text": "Choqué en la parte de atras de otro vehículo (Colisión)"
    },
    {
        "id": 4,
        "text": "Circulaba en reversa"
    },
    {
        "id": 5,
        "text": "Circulaba en sentido contrario (Colisión)"
    },
    {
        "id": 6,
        "text": "Paso un semaforo"
    },
    {
        "id": 7,
        "text": "Dió vuelta en 'U'"
    }
];
var REGISTRO_CATEGORIAS_COBERTURA = [
    {
        "id": 1,
        "text": "Amplia"
    },
    {
        "id": 2,
        "text": "Terceros"
    },
    {
        "id": 3,
        "text": "Terceros Ampliados"
    }
];
var ENVIROMENT = ENVIROMENTS['MOCK'];
var ULTIMA_VERSION_APP = VERSIONES_APP[VERSIONES_APP.length - 1];
var Configurations = /** @class */ (function () {
    function Configurations() {
    }
    return Configurations;
}());



/***/ }),

/***/ "./src/app/modules/global/services/interceptor/interceptor.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/global/services/interceptor/interceptor.ts ***!
  \********************************************************************/
/*! exports provided: InterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorProvider", function() { return InterceptorProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InterceptorProvider = /** @class */ (function () {
    function InterceptorProvider() {
    }
    InterceptorProvider.prototype.intercept = function (req, next) {
        var dataBody = {};
        //   let usuario = this.storageService.getUsuario();
        //   dataBody.idUsuario = usuario ? usuario.idUsuario : null;
        // let cat = req.url.search('obtenerCategoriaQueja');
        // let est = req.url.search('estatusQuejas');
        // let rep = req.url.search('obtenerQuejas');
        // let repUsr = req.url.search('obtenerQuejasPropias');
        // let urlVerTarjFis = req.url.search('verificarProgramaTarjetaFisica');
        // if(!(cat || est || rep || repUsr)){this.utilsService.showLoading();}
        //   this.utilsService.showLoading();
        var update = {
            // headers?: HttpHeaders;
            // headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')
            // reportProgress?: boolean;
            // params?: HttpParams;
            // responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
            // withCredentials: true,
            // body: req.body,
            // method?: string;
            // url?: string;
            setHeaders: {
                'Content-Type': 'application/json',
            }
            // setParams?: {
            //     [param: string]: string;
            // };
        };
        lodash__WEBPACK_IMPORTED_MODULE_4__["assign"](req.body, dataBody);
        var authReq = req.clone(update);
        console.log("==>> EN INTERCEPTOR... REQUEST:" + JSON.stringify(authReq));
        return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                //   this.utilsService.hideLoading();
                console.log('==>> EN INTERCEPTOR... RESPONSE:', JSON.stringify(event));
                if (event.body.success && event.body.success.message) {
                    // this.utilsService.showToast(`${event.body.success.message}`);
                }
                if (event.body.error && event.body.error.length > 0) {
                    event.body.error.forEach(function (error) {
                        // this.utilsService.showToast(`${error.title} ${error.message}`);
                    });
                    console.log('==>> EN INTERCEPTOR... RESPONSE_ERROR_CLIENT:' + JSON.stringify(event.body.error));
                }
            }
        }, function (error) {
            // this.utilsService.hideLoading();
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                // if(!error.url.search('verificarProgramaTarjetaFisica')){
                // this.utilsService.showToast(`${error.status} ${error.statusText}`);
                // }
                // this.storage.setDialog(error);
                console.log('==>> EN INTERCEPTOR... RESPONSE_ERROR_SERVER:' + JSON.stringify(error));
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
            }
        }));
    };
    InterceptorProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], InterceptorProvider);
    return InterceptorProvider;
}());



/***/ }),

/***/ "./src/app/modules/inicio/inicio-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/inicio/inicio-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: InicioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioRoutingModule", function() { return InicioRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/inicio-sesion/inicio-sesion.component */ "./src/app/modules/inicio/pages/inicio-sesion/inicio-sesion.component.ts");
/* harmony import */ var _pages_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/noticias/noticias.component */ "./src/app/modules/inicio/pages/noticias/noticias.component.ts");
/* harmony import */ var _global_pages_skeleton_dashboard_skeleton_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/pages/skeleton-dashboard/skeleton-dashboard.component */ "./src/app/modules/global/pages/skeleton-dashboard/skeleton-dashboard.component.ts");
/* harmony import */ var _pages_tablero_de_operaciones_tablero_de_operaciones_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/tablero-de-operaciones/tablero-de-operaciones.component */ "./src/app/modules/inicio/pages/tablero-de-operaciones/tablero-de-operaciones.component.ts");
/* harmony import */ var _pages_acerca_de_acerca_de_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/acerca-de/acerca-de.component */ "./src/app/modules/inicio/pages/acerca-de/acerca-de.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// PAGES





var routes = [
    {
        path: 'inicio-sesion',
        component: _pages_inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_2__["InicioSesionComponent"],
        data: { breadcrumb: 'Inicio de sesión' }
    },
    {
        path: 'main-dashboard',
        component: _global_pages_skeleton_dashboard_skeleton_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["SkeletonDashboardComponent"],
        children: [
            {
                path: 'noticias-edua',
                component: _pages_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_3__["NoticiasComponent"],
                data: { breadcrumb: 'Noticias eDUA' }
            },
            {
                path: 'tablero-operaciones',
                component: _pages_tablero_de_operaciones_tablero_de_operaciones_component__WEBPACK_IMPORTED_MODULE_5__["TableroDeOperacionesComponent"],
                data: { breadcrumb: 'Tablero de operaciones' }
            },
            {
                path: 'acerca-de',
                component: _pages_acerca_de_acerca_de_component__WEBPACK_IMPORTED_MODULE_6__["AcercaDeComponent"],
                data: { breadcrumb: 'Acerca de' }
            }
        ]
    }
];
var InicioRoutingModule = /** @class */ (function () {
    function InicioRoutingModule() {
    }
    InicioRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InicioRoutingModule);
    return InicioRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/inicio/inicio.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/inicio/inicio.module.ts ***!
  \*************************************************/
/*! exports provided: InicioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioModule", function() { return InicioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio-routing.module */ "./src/app/modules/inicio/inicio-routing.module.ts");
/* harmony import */ var _pages_inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/inicio-sesion/inicio-sesion.component */ "./src/app/modules/inicio/pages/inicio-sesion/inicio-sesion.component.ts");
/* harmony import */ var _pages_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/noticias/noticias.component */ "./src/app/modules/inicio/pages/noticias/noticias.component.ts");
/* harmony import */ var _pages_tablero_de_operaciones_tablero_de_operaciones_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/tablero-de-operaciones/tablero-de-operaciones.component */ "./src/app/modules/inicio/pages/tablero-de-operaciones/tablero-de-operaciones.component.ts");
/* harmony import */ var _pages_acerca_de_acerca_de_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/acerca-de/acerca-de.component */ "./src/app/modules/inicio/pages/acerca-de/acerca-de.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// PLUGINS

// PAGES




var InicioModule = /** @class */ (function () {
    function InicioModule() {
    }
    InicioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _inicio_routing_module__WEBPACK_IMPORTED_MODULE_2__["InicioRoutingModule"],
            ],
            declarations: [
                _pages_inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_3__["InicioSesionComponent"],
                _pages_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_4__["NoticiasComponent"],
                _pages_tablero_de_operaciones_tablero_de_operaciones_component__WEBPACK_IMPORTED_MODULE_5__["TableroDeOperacionesComponent"],
                _pages_acerca_de_acerca_de_component__WEBPACK_IMPORTED_MODULE_6__["AcercaDeComponent"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], InicioModule);
    return InicioModule;
}());



/***/ }),

/***/ "./src/app/modules/inicio/pages/acerca-de/acerca-de.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/inicio/pages/acerca-de/acerca-de.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  acerca-de works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/inicio/pages/acerca-de/acerca-de.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/inicio/pages/acerca-de/acerca-de.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/inicio/pages/acerca-de/acerca-de.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/inicio/pages/acerca-de/acerca-de.component.ts ***!
  \***********************************************************************/
/*! exports provided: AcercaDeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcercaDeComponent", function() { return AcercaDeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AcercaDeComponent = /** @class */ (function () {
    function AcercaDeComponent() {
    }
    AcercaDeComponent.prototype.ngOnInit = function () {
    };
    AcercaDeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-acerca-de',
            template: __webpack_require__(/*! ./acerca-de.component.html */ "./src/app/modules/inicio/pages/acerca-de/acerca-de.component.html"),
            styles: [__webpack_require__(/*! ./acerca-de.component.scss */ "./src/app/modules/inicio/pages/acerca-de/acerca-de.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AcercaDeComponent);
    return AcercaDeComponent;
}());



/***/ }),

/***/ "./src/app/modules/inicio/pages/inicio-sesion/inicio-sesion.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/inicio/pages/inicio-sesion/inicio-sesion.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\"></div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4 offset-md-4 card-box\">      \n        <form>\n            <div class=\"dua-e text-center\">\n                <img src=\"assets/images/logos/edua.png\">\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-form-label\">Correo electrónico</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese su correo\">\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-form-label\">Contraseña</label>\n                <label class=\"col-form-label text-muted pull-right rpasword\">¿Olvido su contraseña?</label>\n                <div class=\"input-group\">\n                    <input [type]=\"!hide ? 'password' : 'text'\" class=\"form-control\" placeholder=\"Ingrese su contraseña\">\n                    <!--<div class=\"input-group-append\">\n                        <button (click)=\"hide = !hide\" type=\"button\" class=\"btn btn-light\">\n                            <i class=\"mdi\" [ngClass]=\"{'mdi-eye': hide, 'mdi-eye-off': !hide}\"></i>\n                        </button>\n                    </div>-->\n                </div>\n            </div>\n            <div class=\"form-group mt-4 mb-4 ml-2\">\n                <div class=\"checkbox checkbox-info\">\n                    <input id=\"remember\" type=\"checkbox\">\n                    <label for=\"remember\">Recuerdame</label>\n                </div>\n            </div>\n            \n            <button [routerLink]=\"['/main-dashboard/registro-en-linea']\" type=\"button\" class=\"btn btn-info btn-lg btn-block\">Ingresar</button>\n            <button type=\"button\" class=\"btn btn-link text-muted btn-sm btn-block mt-5 mb-4\">¿Necesita <strong>ayuda</strong> para ingresar?</button>\n        </form>\n        </div>\n    </div>\n</div>\n\n<footer class=\"footer footer-login\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6 col-sm-12\">\n                <ul class=\"list-inline\">\n                    <li class=\"list-inline-item\">\n                        <ul class=\"list-unstyled\">\n                            <li >DUA Electrónica</li>\n                            <li class=\"mt-2\">Aviso de privacidad</li>\n                            <li class=\"mt-2\">Derechos ARCO</li>\n                        </ul>\n                    </li>\n                    <li class=\"list-inline-item separator\"></li>\n                    <li class=\"list-inline-item\">\n                        <ul class=\"list-unstyled\">\n                            <li>Francisco I. Madero #21, Col. Tlalcopac</li>\n                            <li>Del. Álvaro Obregón, C.P. 01040</li>\n                            <li>Tel. 54.80.06.46</li>\n                            <li>xxxxxx@amis.com.mx</li>\n                        </ul>\n                    </li>\n                </ul>\n                <p class=\"mt-3\">©Copyright, ©AMIS 2018. Todos los derechos reservados</p>\n            </div>\n            <div class=\"col-md-6 col-sm-12\">\n                <div class=\"logo pull-right\">\n                        <img src=\"assets/images/logos/amis.svg\" alt=\"AMIS\" >\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/modules/inicio/pages/inicio-sesion/inicio-sesion.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/inicio/pages/inicio-sesion/inicio-sesion.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay, .overlay::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: url(\"/amis-edua/--prod/assets/images/background/fondo_coche.jpg\");\n  background-size: cover;\n  -o-background-size: cover;\n  -moz-background-size: cover;\n  -webkit-background-size: cover; }\n\n.overlay::before {\n  content: '';\n  background: rgba(17, 111, 158, 0.9); }\n\n.rpasword {\n  font-weight: 400;\n  font-size: 12px; }\n\n.footer {\n  left: 0;\n  border: 0; }\n\n.footer-login {\n  background: #313131;\n  color: #ffff;\n  padding: 25px 30px 5px 30px; }\n\n.logo img {\n  width: 200px;\n  margin: 20px 0; }\n\n.dua-e img {\n  width: 40%; }\n\n@media screen and (min-width: 962px) {\n  .separator:after {\n    content: '';\n    width: 1px;\n    height: 78px;\n    margin: -4px 15px;\n    background: #5f5e5e;\n    display: inline-block; } }\n\n@media screen and (max-width: 900px) {\n  .list-inline > li:first-child {\n    margin-bottom: 18px; } }\n\n@media screen and (min-height: 730px) {\n  .card-box {\n    margin-top: 10vh; } }\n\n@media screen and (max-height: 690px) {\n  .footer {\n    visibility: hidden; } }\n"

/***/ }),

/***/ "./src/app/modules/inicio/pages/inicio-sesion/inicio-sesion.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/inicio/pages/inicio-sesion/inicio-sesion.component.ts ***!
  \*******************************************************************************/
/*! exports provided: InicioSesionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioSesionComponent", function() { return InicioSesionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InicioSesionComponent = /** @class */ (function () {
    function InicioSesionComponent() {
        this.hide = false;
    }
    InicioSesionComponent.prototype.ngOnInit = function () { };
    InicioSesionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inicio-sesion',
            template: __webpack_require__(/*! ./inicio-sesion.component.html */ "./src/app/modules/inicio/pages/inicio-sesion/inicio-sesion.component.html"),
            styles: [__webpack_require__(/*! ./inicio-sesion.component.scss */ "./src/app/modules/inicio/pages/inicio-sesion/inicio-sesion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InicioSesionComponent);
    return InicioSesionComponent;
}());



/***/ }),

/***/ "./src/app/modules/inicio/pages/noticias/noticias.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/inicio/pages/noticias/noticias.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  noticias works!\n</p>\n<div class=\"col-sm-4\">\n    <div class=\"\">\n        <!-- <h4 class=\"m-t-0 header-title\">Cube grid</h4> -->\n\n        <div class=\"sk-cube-grid\">\n            <div class=\"sk-cube sk-cube1\"></div>\n            <div class=\"sk-cube sk-cube2\"></div>\n            <div class=\"sk-cube sk-cube3\"></div>\n            <div class=\"sk-cube sk-cube4\"></div>\n            <div class=\"sk-cube sk-cube5\"></div>\n            <div class=\"sk-cube sk-cube6\"></div>\n            <div class=\"sk-cube sk-cube7\"></div>\n            <div class=\"sk-cube sk-cube8\"></div>\n            <div class=\"sk-cube sk-cube9\"></div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/inicio/pages/noticias/noticias.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/inicio/pages/noticias/noticias.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/inicio/pages/noticias/noticias.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/inicio/pages/noticias/noticias.component.ts ***!
  \*********************************************************************/
/*! exports provided: NoticiasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasComponent", function() { return NoticiasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent() {
    }
    NoticiasComponent.prototype.ngOnInit = function () {
    };
    NoticiasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-noticias',
            template: __webpack_require__(/*! ./noticias.component.html */ "./src/app/modules/inicio/pages/noticias/noticias.component.html"),
            styles: [__webpack_require__(/*! ./noticias.component.scss */ "./src/app/modules/inicio/pages/noticias/noticias.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NoticiasComponent);
    return NoticiasComponent;
}());



/***/ }),

/***/ "./src/app/modules/inicio/pages/tablero-de-operaciones/tablero-de-operaciones.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/inicio/pages/tablero-de-operaciones/tablero-de-operaciones.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tablero-de-operaciones works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/inicio/pages/tablero-de-operaciones/tablero-de-operaciones.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/inicio/pages/tablero-de-operaciones/tablero-de-operaciones.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/inicio/pages/tablero-de-operaciones/tablero-de-operaciones.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/inicio/pages/tablero-de-operaciones/tablero-de-operaciones.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TableroDeOperacionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableroDeOperacionesComponent", function() { return TableroDeOperacionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableroDeOperacionesComponent = /** @class */ (function () {
    function TableroDeOperacionesComponent() {
    }
    TableroDeOperacionesComponent.prototype.ngOnInit = function () {
    };
    TableroDeOperacionesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tablero-de-operaciones',
            template: __webpack_require__(/*! ./tablero-de-operaciones.component.html */ "./src/app/modules/inicio/pages/tablero-de-operaciones/tablero-de-operaciones.component.html"),
            styles: [__webpack_require__(/*! ./tablero-de-operaciones.component.scss */ "./src/app/modules/inicio/pages/tablero-de-operaciones/tablero-de-operaciones.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableroDeOperacionesComponent);
    return TableroDeOperacionesComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/classes/registro.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/registro/classes/registro.ts ***!
  \******************************************************/
/*! exports provided: SubSeccionesClass, Seccion, SeccionInicio, SeccionSiniestro, SeccionPoliza, SeccionAsegurado, SeccionConductor, SeccionVehiculo, SeccionInvolucrados, SeccionNarracion, SeccionPuntosChoque, SeccionCircunstancias, SeccionFotos, SeccionCroquis, SeccionGeneracionOrdenes, SeccionTerminoAtencion, SeccionInformeAjustador, SeccionInvolucrado, RegistroColision, RegistroNoColision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubSeccionesClass", function() { return SubSeccionesClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seccion", function() { return Seccion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionInicio", function() { return SeccionInicio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionSiniestro", function() { return SeccionSiniestro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionPoliza", function() { return SeccionPoliza; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionAsegurado", function() { return SeccionAsegurado; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionConductor", function() { return SeccionConductor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionVehiculo", function() { return SeccionVehiculo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionInvolucrados", function() { return SeccionInvolucrados; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionNarracion", function() { return SeccionNarracion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionPuntosChoque", function() { return SeccionPuntosChoque; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionCircunstancias", function() { return SeccionCircunstancias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionFotos", function() { return SeccionFotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionCroquis", function() { return SeccionCroquis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionGeneracionOrdenes", function() { return SeccionGeneracionOrdenes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionTerminoAtencion", function() { return SeccionTerminoAtencion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionInformeAjustador", function() { return SeccionInformeAjustador; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionInvolucrado", function() { return SeccionInvolucrado; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroColision", function() { return RegistroColision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroNoColision", function() { return RegistroNoColision; });
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
var SubSeccionesClass = /** @class */ (function () {
    function SubSeccionesClass(seccionSiniestro, seccionPoliza, seccionAsegurado, seccionConductor, seccionVehiculo, seccionInvolucrados, seccionNarracion, seccionPuntosDeChoque, seccionCircunstancias, seccionFotos, seccionCroquis) {
        this.seccionSiniestro = seccionSiniestro;
        this.seccionPoliza = seccionPoliza;
        this.seccionAsegurado = seccionAsegurado;
        this.seccionConductor = seccionConductor;
        this.seccionVehiculo = seccionVehiculo;
        this.seccionInvolucrados = seccionInvolucrados;
        this.seccionNarracion = seccionNarracion;
        this.seccionPuntosDeChoque = seccionPuntosDeChoque;
        this.seccionCircunstancias = seccionCircunstancias;
        this.seccionFotos = seccionFotos;
        this.seccionCroquis = seccionCroquis;
    }
    return SubSeccionesClass;
}());

var Seccion = /** @class */ (function () {
    function Seccion(id, nombre, icono, url, path, params, estatus) {
        this.id = id;
        this.nombre = nombre;
        this.icono = icono;
        this.url = url;
        this.path = path;
        this.params = params;
        this.estatus = estatus;
    }
    return Seccion;
}());

// SECCIONES
var SeccionInicio = /** @class */ (function (_super) {
    __extends(SeccionInicio, _super);
    function SeccionInicio(seccion, data) {
        var _this = _super.call(this, seccion.id, seccion.nombre, seccion.icono, seccion.url, seccion.path, seccion.params, seccion.estatus) || this;
        _this.data = data;
        return _this;
    }
    return SeccionInicio;
}(Seccion));

var SeccionSiniestro = /** @class */ (function (_super) {
    __extends(SeccionSiniestro, _super);
    function SeccionSiniestro(seccion, data) {
        var _this = _super.call(this, seccion.id, seccion.nombre, seccion.icono, seccion.url, seccion.path, seccion.params, seccion.estatus) || this;
        _this.data = data;
        return _this;
    }
    return SeccionSiniestro;
}(Seccion));

var SeccionPoliza = /** @class */ (function (_super) {
    __extends(SeccionPoliza, _super);
    function SeccionPoliza(seccion, data) {
        var _this = _super.call(this, seccion.id, seccion.nombre, seccion.icono, seccion.url, seccion.path, seccion.params, seccion.estatus) || this;
        _this.data = data;
        return _this;
    }
    return SeccionPoliza;
}(Seccion));

var SeccionAsegurado = /** @class */ (function (_super) {
    __extends(SeccionAsegurado, _super);
    function SeccionAsegurado(seccion, data) {
        var _this = _super.call(this, seccion.id, seccion.nombre, seccion.icono, seccion.url, seccion.path, seccion.params, seccion.estatus) || this;
        _this.data = data;
        return _this;
    }
    return SeccionAsegurado;
}(Seccion));

var SeccionConductor = /** @class */ (function (_super) {
    __extends(SeccionConductor, _super);
    function SeccionConductor(seccion, data) {
        var _this = _super.call(this, seccion.id, seccion.nombre, seccion.icono, seccion.url, seccion.path, seccion.params, seccion.estatus) || this;
        _this.data = data;
        return _this;
    }
    return SeccionConductor;
}(Seccion));

var SeccionVehiculo = /** @class */ (function (_super) {
    __extends(SeccionVehiculo, _super);
    function SeccionVehiculo(seccion, data) {
        var _this = _super.call(this, seccion.id, seccion.nombre, seccion.icono, seccion.url, seccion.path, seccion.params, seccion.estatus) || this;
        _this.data = data;
        return _this;
    }
    return SeccionVehiculo;
}(Seccion));

var SeccionInvolucrados = /** @class */ (function (_super) {
    __extends(SeccionInvolucrados, _super);
    function SeccionInvolucrados(seccion, data) {
        var _this = _super.call(this, seccion.id, seccion.nombre, seccion.icono, seccion.url, seccion.path, seccion.params, seccion.estatus) || this;
        _this.data = data;
        return _this;
    }
    return SeccionInvolucrados;
}(Seccion));

var SeccionNarracion = /** @class */ (function (_super) {
    __extends(SeccionNarracion, _super);
    function SeccionNarracion(seccion, data) {
        var _this = _super.call(this, seccion.id, seccion.nombre, seccion.icono, seccion.url, seccion.path, seccion.params, seccion.estatus) || this;
        _this.data = data;
        return _this;
    }
    return SeccionNarracion;
}(Seccion));

var SeccionPuntosChoque = /** @class */ (function (_super) {
    __extends(SeccionPuntosChoque, _super);
    function SeccionPuntosChoque(seccion, data) {
        var _this = _super.call(this, seccion.id, seccion.nombre, seccion.icono, seccion.url, seccion.path, seccion.params, seccion.estatus) || this;
        _this.data = data;
        return _this;
    }
    return SeccionPuntosChoque;
}(Seccion));

var SeccionCircunstancias = /** @class */ (function (_super) {
    __extends(SeccionCircunstancias, _super);
    function SeccionCircunstancias(seccion, data) {
        var _this = _super.call(this, seccion.id, seccion.nombre, seccion.icono, seccion.url, seccion.path, seccion.params, seccion.estatus) || this;
        _this.data = data;
        return _this;
    }
    return SeccionCircunstancias;
}(Seccion));

var SeccionFotos = /** @class */ (function (_super) {
    __extends(SeccionFotos, _super);
    function SeccionFotos(seccion, data) {
        var _this = _super.call(this, seccion.id, seccion.nombre, seccion.icono, seccion.url, seccion.path, seccion.params, seccion.estatus) || this;
        _this.data = data;
        return _this;
    }
    return SeccionFotos;
}(Seccion));

var SeccionCroquis = /** @class */ (function (_super) {
    __extends(SeccionCroquis, _super);
    function SeccionCroquis(seccion, data) {
        var _this = _super.call(this, seccion.id, seccion.nombre, seccion.icono, seccion.url, seccion.path, seccion.params, seccion.estatus) || this;
        _this.data = data;
        return _this;
    }
    return SeccionCroquis;
}(Seccion));

var SeccionGeneracionOrdenes = /** @class */ (function (_super) {
    __extends(SeccionGeneracionOrdenes, _super);
    function SeccionGeneracionOrdenes(seccion, data) {
        var _this = _super.call(this, seccion.id, seccion.nombre, seccion.icono, seccion.url, seccion.path, seccion.params, seccion.estatus) || this;
        _this.data = data;
        return _this;
    }
    return SeccionGeneracionOrdenes;
}(Seccion));

var SeccionTerminoAtencion = /** @class */ (function (_super) {
    __extends(SeccionTerminoAtencion, _super);
    function SeccionTerminoAtencion(seccion, data) {
        var _this = _super.call(this, seccion.id, seccion.nombre, seccion.icono, seccion.url, seccion.path, seccion.params, seccion.estatus) || this;
        _this.data = data;
        return _this;
    }
    return SeccionTerminoAtencion;
}(Seccion));

var SeccionInformeAjustador = /** @class */ (function (_super) {
    __extends(SeccionInformeAjustador, _super);
    function SeccionInformeAjustador(seccion, data) {
        var _this = _super.call(this, seccion.id, seccion.nombre, seccion.icono, seccion.url, seccion.path, seccion.params, seccion.estatus) || this;
        _this.data = data;
        return _this;
    }
    return SeccionInformeAjustador;
}(Seccion));

var SeccionInvolucrado = /** @class */ (function (_super) {
    __extends(SeccionInvolucrado, _super);
    function SeccionInvolucrado(seccion, subsecciones) {
        var _this = _super.call(this, seccion.id, seccion.nombre, seccion.icono, seccion.url, seccion.path, seccion.params, seccion.estatus) || this;
        _this.data = subsecciones;
        return _this;
    }
    return SeccionInvolucrado;
}(Seccion));

// GLOBAL
var RegistroColision = /** @class */ (function () {
    function RegistroColision(inicio, responsable, afectado, generacionOrdenes, terminoAtencion, informeAjustador) {
        this.seccionInicio = inicio;
        this.seccionResponsable = responsable;
        this.seccionAfectado = afectado;
        this.seccionGeneracionOrdenes = generacionOrdenes;
        this.seccionTerminoAtencion = terminoAtencion;
        this.seccionInformeAjustador = informeAjustador;
    }
    return RegistroColision;
}());

var RegistroNoColision = /** @class */ (function () {
    function RegistroNoColision(inicio, involucrado, generacionOrdenes, terminoAtencion, informeAjustador) {
        this.seccionInicio = inicio;
        this.seccionInvolucrado = involucrado;
        this.seccionGeneracionOrdenes = generacionOrdenes;
        this.seccionTerminoAtencion = terminoAtencion;
        this.seccionInformeAjustador = informeAjustador;
    }
    return RegistroNoColision;
}());



/***/ }),

/***/ "./src/app/modules/registro/components/causa-colision/causa-colision.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/registro/components/causa-colision/causa-colision.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"groupForm\">\n    <hr class=\"hr mt-20\"/>\n    <h4 class=\"header-title mt-10 mb-20\">{{ header.propio }}</h4>\n    <p class=\"text-muted m-b-30\">{{ badge.propio }}</p>\n        \n    <div class=\"form-row\">\n        <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">{{ labels.folio }}</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{ labels.folio }}\" formControlName=\"{{ inputs.folio }}\">\n        </div>\n\n        <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">{{ labels.rol }}</label>\n            <select class=\"form-control selectpicker mb-2\" formControlName=\"{{ inputs.rol }}\">\n                <option value=\"\">Selecciona una opción</option>\n                <option value=\"1\">Afectado</option>\n                <option value=\"2\">Responsable</option>\n                <option value=\"3\">Corresponsabilidad</option>\n            </select>\n        </div>\n\n        <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">{{ labels.compania }}</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{ labels.compania }}\" formControlName=\"{{ inputs.companiaPropio }}\">\n        </div>\n\n        <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">{{ labels.siniestro }}</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{ labels.siniestro }}\" formControlName=\"{{ inputs.siniestroPropio }}\">\n        </div>\n    </div>\n\n    <h4 class=\"header-title m-t-0\">{{ header.contraparte }}</h4>\n    <p class=\"text-muted m-b-30\">{{ badge.contraparte }}</p>\n\n    <div class=\"form-row\">\n        <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">{{ labels.compania }}</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{ labels.compania }}\" formControlName=\"{{ inputs.companiaContraparte }}\">\n        </div>\n            \n        <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">{{ labels.siniestro }}</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{ labels.siniestro }}\" formControlName=\"{{ inputs.siniestroContraparte }}\">\n        </div>\n    </div>\n              \n    <div class=\"form-row\">\n        <div class=\"col-md-6 mt-2\">\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"clear()\">\n              {{ labels.btnCancel }}\n            </button>\n        </div>\n        <div class=\"col-md-6 mt-2\">\n            <input type=\"submit\" class=\"btn btn-info pull-right\" value=\"{{ labels.btnNext }}\" [disabled]=\"!groupForm.valid\">\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/modules/registro/components/causa-colision/causa-colision.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/registro/components/causa-colision/causa-colision.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngb-tabset /deep/ .nav-pills > li > a {\n  background: #7c7e81;\n  color: #fff;\n  border-radius: 50%;\n  margin: 10px;\n  width: 38px; }\n\nngb-tabset /deep/ .nav-pills > li > a::before {\n  content: '';\n  background: #9b9b9b;\n  width: 35px;\n  height: 3px;\n  position: absolute;\n  display: inline-block;\n  margin: 10px;\n  z-index: -1; }\n\nngb-tabset /deep/ .nav-pills .nav-link.active {\n  background: #2d7bf4; }\n"

/***/ }),

/***/ "./src/app/modules/registro/components/causa-colision/causa-colision.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/registro/components/causa-colision/causa-colision.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CausaColisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CausaColisionComponent", function() { return CausaColisionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interfaces_labels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/labels */ "./src/app/modules/registro/interfaces/labels.ts");
/* harmony import */ var _interfaces_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interfaces/inputs */ "./src/app/modules/registro/interfaces/inputs.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author    christian.vargas
 * @version 	0.0.2
 */





var CausaColisionComponent = /** @class */ (function () {
    function CausaColisionComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.dataForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // inputs
        this.inputs = {
            folio: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_4__["causaColision"].folio,
            rol: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_4__["causaColision"].rol,
            companiaPropio: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_4__["causaColision"].companiaPropio,
            siniestroPropio: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_4__["causaColision"].siniestroPropio,
            companiaContraparte: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_4__["causaColision"].companiaContraparte,
            siniestroContraparte: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_4__["causaColision"].siniestroContraparte
        };
        // validaciones
        this.groupForm = formBuilder.group((_a = {},
            _a[this.inputs.folio] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            _a[this.inputs.rol] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            _a[this.inputs.companiaPropio] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            _a[this.inputs.siniestroPropio] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            _a[this.inputs.companiaContraparte] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            _a[this.inputs.siniestroContraparte] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            _a));
        var _a;
    }
    CausaColisionComponent.prototype.ngOnInit = function () {
        // labels
        this.header = _interfaces_labels__WEBPACK_IMPORTED_MODULE_3__["causaColision"].header;
        this.badge = _interfaces_labels__WEBPACK_IMPORTED_MODULE_3__["causaColision"].badge;
        this.labels = {
            folio: _interfaces_labels__WEBPACK_IMPORTED_MODULE_3__["causaColision"].folio,
            rol: _interfaces_labels__WEBPACK_IMPORTED_MODULE_3__["causaColision"].rol,
            compania: _interfaces_labels__WEBPACK_IMPORTED_MODULE_3__["causaColision"].compania,
            siniestro: _interfaces_labels__WEBPACK_IMPORTED_MODULE_3__["causaColision"].siniestro,
            btnNext: _interfaces_labels__WEBPACK_IMPORTED_MODULE_3__["btn"].next,
            btnCancel: _interfaces_labels__WEBPACK_IMPORTED_MODULE_3__["btn"].cancel
        };
    };
    CausaColisionComponent.prototype.onSubmit = function () {
        //this.dataForm.emit(this.groupForm);
        this.router.navigate([
            '/main-dashboard/registro-en-linea/principal-registro/registro-inicio',
        ]);
    };
    CausaColisionComponent.prototype.clear = function () {
        this.groupForm.reset();
        this.reset.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CausaColisionComponent.prototype, "dataForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CausaColisionComponent.prototype, "reset", void 0);
    CausaColisionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-causa-colision',
            template: __webpack_require__(/*! ./causa-colision.component.html */ "./src/app/modules/registro/components/causa-colision/causa-colision.component.html"),
            styles: [__webpack_require__(/*! ./causa-colision.component.scss */ "./src/app/modules/registro/components/causa-colision/causa-colision.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CausaColisionComponent);
    return CausaColisionComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/components/causa-no-colision/causa-no-colision.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/registro/components/causa-no-colision/causa-no-colision.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"groupForm\">\n    <hr class=\"hr mt-20\"/>\n    <h4 class=\"header-title mt-10 mb-20\">{{ header }}</h4>\n    <p class=\"text-muted m-b-30\">{{ badge }}</p>\n        \n    <div class=\"form-row\">\n        <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">{{ labels.folio }}</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{ labels.folio }}\" formControlName=\"{{ inputs.folio }}\">\n        </div>\n        <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">{{ labels.siniestro }}</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{ labels.siniestro }}\" formControlName=\"{{ inputs.siniestro }}\">\n        </div>\n    </div>\n\n    <div class=\"form-row\">\n        <div class=\"col-md-6 mt-2\">\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"clear()\">\n              {{ labels.btnCancel }}\n            </button>\n        </div>\n        <div class=\"col-md-6 mt-2\">\n            <input type=\"submit\" class=\"btn btn-info pull-right\" value=\"{{ labels.btnNext }}\" [disabled]=\"!groupForm.valid\">\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/modules/registro/components/causa-no-colision/causa-no-colision.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/registro/components/causa-no-colision/causa-no-colision.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngb-tabset /deep/ .nav-pills > li > a {\n  background: #7c7e81;\n  color: #fff;\n  border-radius: 50%;\n  margin: 10px;\n  width: 38px; }\n\nngb-tabset /deep/ .nav-pills > li > a::before {\n  content: '';\n  background: #9b9b9b;\n  width: 35px;\n  height: 3px;\n  position: absolute;\n  display: inline-block;\n  margin: 10px;\n  z-index: -1; }\n\nngb-tabset /deep/ .nav-pills .nav-link.active {\n  background: #2d7bf4; }\n"

/***/ }),

/***/ "./src/app/modules/registro/components/causa-no-colision/causa-no-colision.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/registro/components/causa-no-colision/causa-no-colision.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CausaNoColisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CausaNoColisionComponent", function() { return CausaNoColisionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interfaces_labels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/labels */ "./src/app/modules/registro/interfaces/labels.ts");
/* harmony import */ var _interfaces_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interfaces/inputs */ "./src/app/modules/registro/interfaces/inputs.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author    christian.vargas
 * @version 	0.0.2
 */





var CausaNoColisionComponent = /** @class */ (function () {
    function CausaNoColisionComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.dataForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // inputs 
        this.inputs = {
            folio: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_4__["causaNoColision"].folio,
            siniestro: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_4__["causaNoColision"].siniestro
        };
        // validaciones
        this.groupForm = formBuilder.group((_a = {},
            _a[this.inputs.folio] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            _a[this.inputs.siniestro] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            _a));
        var _a;
    }
    CausaNoColisionComponent.prototype.ngOnInit = function () {
        // labels
        this.header = _interfaces_labels__WEBPACK_IMPORTED_MODULE_3__["causaNoColision"].header;
        this.badge = _interfaces_labels__WEBPACK_IMPORTED_MODULE_3__["causaNoColision"].badge;
        this.labels = {
            folio: _interfaces_labels__WEBPACK_IMPORTED_MODULE_3__["causaNoColision"].folio,
            siniestro: _interfaces_labels__WEBPACK_IMPORTED_MODULE_3__["causaNoColision"].siniestro,
            btnNext: _interfaces_labels__WEBPACK_IMPORTED_MODULE_3__["btn"].next,
            btnCancel: _interfaces_labels__WEBPACK_IMPORTED_MODULE_3__["btn"].cancel
        };
    };
    CausaNoColisionComponent.prototype.onSubmit = function () {
        this.router.navigate([
            '/main-dashboard/registro-en-linea/principal-registro/registro-inicio',
        ]);
    };
    CausaNoColisionComponent.prototype.clear = function () {
        this.groupForm.reset();
        this.reset.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CausaNoColisionComponent.prototype, "dataForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CausaNoColisionComponent.prototype, "reset", void 0);
    CausaNoColisionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-causa-no-colision',
            template: __webpack_require__(/*! ./causa-no-colision.component.html */ "./src/app/modules/registro/components/causa-no-colision/causa-no-colision.component.html"),
            styles: [__webpack_require__(/*! ./causa-no-colision.component.scss */ "./src/app/modules/registro/components/causa-no-colision/causa-no-colision.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CausaNoColisionComponent);
    return CausaNoColisionComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/components/header-flujo-registro/header-flujo-registro.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/registro/components/header-flujo-registro/header-flujo-registro.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6 col-sm-12\">\n        <h4 class=\"header-title m-t-0\">1. Datos del siniestro</h4>\n    </div>\n    <div class=\"col-md-6 col-sm-12 text-right\">\n        <span class=\"text-muted span-order\"><i class=\"mdi mdi-city\"></i> Compañia Seguros S.A. de C.V.</span>\n        <span class=\"text-muted span-order\">Deudora</span>\n        <span>AB13A</span>\n    </div>\n</div>\n<hr class=\"mt-0\">"

/***/ }),

/***/ "./src/app/modules/registro/components/header-flujo-registro/header-flujo-registro.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/registro/components/header-flujo-registro/header-flujo-registro.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registro/components/header-flujo-registro/header-flujo-registro.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/registro/components/header-flujo-registro/header-flujo-registro.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: HeaderFlujoRegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFlujoRegistroComponent", function() { return HeaderFlujoRegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderFlujoRegistroComponent = /** @class */ (function () {
    function HeaderFlujoRegistroComponent() {
    }
    HeaderFlujoRegistroComponent.prototype.ngOnInit = function () {
    };
    HeaderFlujoRegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-flujo-registro',
            template: __webpack_require__(/*! ./header-flujo-registro.component.html */ "./src/app/modules/registro/components/header-flujo-registro/header-flujo-registro.component.html"),
            styles: [__webpack_require__(/*! ./header-flujo-registro.component.scss */ "./src/app/modules/registro/components/header-flujo-registro/header-flujo-registro.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderFlujoRegistroComponent);
    return HeaderFlujoRegistroComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/components/inicio/inicio.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/registro/components/inicio/inicio.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"inicioForm\">\n    <h4 class=\"header-title m-t-0\">{{ header }}</h4>\n    <p class=\"text-muted m-b-30\">{{ badge }}</p>\n    <div class=\"form-row\">\n        <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">{{ labels.cobertura }}</label>\n            <select class=\"form-control selectpicker mb-2\" formControlName=\"{{ inputs.cobertura }}\">\n                <option *ngFor=\"let cobertura of catCoberturas\" [value]=\"cobertura.id\">\n                    {{ cobertura.text }}\n                </option>\n            </select>\n        </div>\n        <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">{{ labels.causa }}</label>\n            <select class=\"form-control selectpicker mb-2\" formControlName=\"{{ inputs.causa }}\">\n                <option *ngFor=\"let causa of catCausas\" [value]=\"causa.id\">\n                    {{ causa.text }}\n                </option>\n            </select> \n        </div>\n    </div>  \n        \n    <div class=\"form-row\">\n        <div class=\"col-md-12 form-group\">\n            <input type=\"submit\" class=\"btn btn-info pull-right\" value=\"{{ labels.btnNext }}\" [disabled]=\"!inicioForm.valid || disabledSubmit\">\n        </div>\n    </div>\n</form>\n\n    "

/***/ }),

/***/ "./src/app/modules/registro/components/inicio/inicio.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/registro/components/inicio/inicio.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registro/components/inicio/inicio.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/registro/components/inicio/inicio.component.ts ***!
  \************************************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _interfaces_labels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/labels */ "./src/app/modules/registro/interfaces/labels.ts");
/* harmony import */ var _interfaces_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/inputs */ "./src/app/modules/registro/interfaces/inputs.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author    christian.vargas
 * @version 	0.0.2
 */




var InicioComponent = /** @class */ (function () {
    function InicioComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.reset = false;
        this.dataForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // hidden
        this.disabledSubmit = false;
        // inputs
        this.inputs = {
            causa: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_3__["inicioRegistro"].causa,
            cobertura: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_3__["inicioRegistro"].cobertura
        };
        // validaciones
        this.inicioForm = formBuilder.group((_a = {},
            _a[this.inputs.causa] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            _a[this.inputs.cobertura] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            _a));
        var _a;
    }
    InicioComponent.prototype.onSubmit = function () {
        this.dataForm.emit(this.inicioForm);
        this.disabledSubmit = true;
    };
    InicioComponent.prototype.ngOnInit = function () {
        // labels
        this.header = _interfaces_labels__WEBPACK_IMPORTED_MODULE_2__["inicioRegistro"].header;
        this.badge = _interfaces_labels__WEBPACK_IMPORTED_MODULE_2__["inicioRegistro"].badge;
        this.labels = {
            causa: _interfaces_labels__WEBPACK_IMPORTED_MODULE_2__["inicioRegistro"].causa,
            cobertura: _interfaces_labels__WEBPACK_IMPORTED_MODULE_2__["inicioRegistro"].cobertura,
            btnNext: _interfaces_labels__WEBPACK_IMPORTED_MODULE_2__["btn"].next
        };
    };
    InicioComponent.prototype.ngOnChanges = function (changes) {
        var reset = changes.reset;
        if (reset !== undefined) {
            if (reset)
                this.disabledSubmit = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InicioComponent.prototype, "catCausas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InicioComponent.prototype, "catCoberturas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InicioComponent.prototype, "reset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InicioComponent.prototype, "dataForm", void 0);
    InicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/modules/registro/components/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.scss */ "./src/app/modules/registro/components/inicio/inicio.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/components/stepper-parent/stepper-parent.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/registro/components/stepper-parent/stepper-parent.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row margin-top-50px\">\n  <div class=\"col-sm-12\">\n\n    <div class=\"box-content-stepper\">\n\n      <div class=\"box-step\" *ngFor=\"let item of data;\" \n          [class.activa]=\"item.estatus.esActiva && !item.estatus.esCompleta\"\n          [class.disabled]=\"!item.estatus.esHabilitada\" \n          [class.completa]=\"item.estatus.esCompleta\">\n        <div *ngIf=\"item.path\" class=\"step\" \n            [routerLink]=\"['/main-dashboard/registro-en-linea' + item.url, {params: item.params}, { outlets: { registroEnLinea: [item.path] } }]\">\n            {{item.nombre}}\n        </div>\n        <div *ngIf=\"!item.path\" class=\"step\"\n            [routerLink]=\"['/main-dashboard/registro-en-linea' + item.url, {params: item.params}]\">\n            {{item.nombre}}\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/registro/components/stepper-parent/stepper-parent.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/registro/components/stepper-parent/stepper-parent.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n._center-items {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n._right-items {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end; }\n._footer-bottom {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0 30px; }\n/* \n * Biaani Perzonalizado \n * ---------------------------------------------------------\n*/\n/* Sobre escritura de botones */\n.btn-info {\n  background-color: #3399CC;\n  border: 1px solid #3399CC; }\n.btn-info.disabled, .btn-info:disabled {\n  color: #FFFFFF;\n  background-color: #3399CC;\n  border: 1px solid #3399CC; }\n.btn-info:hover, .btn-info:focus, .btn-info:active, .btn-info.active, .btn-info.focus, .btn-info:active, .btn-info:focus, .btn-info:hover, .open > .dropdown-toggle.btn-info, .btn-info:not([disabled]):not(.disabled).active, .btn-info:not([disabled]):not(.disabled):active, .show > .btn-info.dropdown-toggle {\n  background-color: #3366CC;\n  border-color: #3366CC; }\n.btn-outline-danger {\n  color: #FF6666;\n  border-color: #FF6666; }\n.btn-outline-danger:hover, .btn-outline-danger:focus, .btn-outline-danger:active {\n  background-color: #FF6666;\n  border-color: #FF6666; }\n/* OTHER */\n.card-box {\n  padding: 15px 20px 20px 20px;\n  box-shadow: 0px 0px 3px #999999; }\n.span-order::after {\n  content: \"\";\n  width: 1px;\n  height: 20px;\n  margin: -4px 15px;\n  background: #CCCCCC;\n  display: inline-block; }\n.content-page .content {\n  padding-top: 0px; }\n.rd-btn {\n  border-radius: 50%;\n  padding: 0px;\n  width: 15.5px;\n  margin-right: 9px;\n  font-size: 9px;\n  background: #CCCCCC;\n  border-color: #CCCCCC;\n  color: #CCCCCC; }\n.rd-btn:not(:disabled):not(.disabled):active,\n.rd-btn:not(:disabled):not(.disabled).active,\n.show > .rd-btn.dropdown-toggle {\n  color: #FFFFFF;\n  background-color: #33CC66;\n  border-color: #33CC66; }\n.box-content-stepper, .step {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n.step {\n  padding: 0;\n  margin: 0; }\n.margin-top-50px {\n  margin-top: 50px; }\n.step {\n  height: 100%;\n  width: 100%; }\n.box-step {\n  cursor: pointer;\n  height: 40px;\n  width: 195px;\n  font-size: 12px;\n  border: 1px solid #CCCCCC;\n  color: #CCCCCC;\n  border-right: none;\n  text-transform: uppercase;\n  background-color: #FFFFFF; }\n.box-step:first-child {\n  border-bottom-left-radius: 12px;\n  border-top-left-radius: 12px; }\n.box-step:last-child {\n  border-right: 1px solid #bbb;\n  border-bottom-right-radius: 12px;\n  border-top-right-radius: 12px; }\n.box-step:hover {\n  background-color: #CCCCCC;\n  color: #FFFFFF; }\n.box-step.disabled {\n  color: #bbb;\n  background-color: #FFFFFF; }\n.box-step.activa {\n  color: #FFFFFF;\n  background-color: #3399CC;\n  border-left-color: #fff;\n  border-top-color: #3399CC;\n  border-bottom-color: #3399CC; }\n.box-step.activa:first-child {\n  color: #FFFFFF;\n  background-color: #3399CC;\n  border-color: #3399CC; }\n.box-step.activa:last-child {\n  border-right-color: #3399CC; }\n.box-step.completa {\n  color: #FFFFFF;\n  background-color: #26759c;\n  border-color: #26759c; }\n"

/***/ }),

/***/ "./src/app/modules/registro/components/stepper-parent/stepper-parent.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/registro/components/stepper-parent/stepper-parent.component.ts ***!
  \****************************************************************************************/
/*! exports provided: StepperParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperParentComponent", function() { return StepperParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StepperParentComponent = /** @class */ (function () {
    function StepperParentComponent() {
    }
    StepperParentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('data'),
        __metadata("design:type", Object)
    ], StepperParentComponent.prototype, "data", void 0);
    StepperParentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stepper-parent',
            template: __webpack_require__(/*! ./stepper-parent.component.html */ "./src/app/modules/registro/components/stepper-parent/stepper-parent.component.html"),
            styles: [__webpack_require__(/*! ./stepper-parent.component.scss */ "./src/app/modules/registro/components/stepper-parent/stepper-parent.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StepperParentComponent);
    return StepperParentComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/components/stepper/stepper.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/registro/components/stepper/stepper.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin-top-50\">\n  <div class=\"col-sm-12 _center-items\">\n    <div class=\"box-main-flow\" #panel>\n      <div class=\"box-flex\" *ngFor=\"let item of data; last as isLast; even as isEven\">\n    \n          <div class=\"box-flow\">\n    \n            <div class=\"box-data-flow\" >\n              <div *ngIf=\"item.path\" class=\"box-flow-image\"  [class.active]=\"item.estatus.esActiva\" [class.completa]=\"item.estatus.esCompleta\"\n                  [routerLink]=\"['/main-dashboard/registro-en-linea' + item.url, {params: item.params}, { outlets: { registroEnLinea: [item.path] } }]\">\n                  <img src=\"assets/images/icons/{{item.icono}}.svg\" alt=\"{{item.nombre}}\">\n              </div>\n              <div *ngIf=\"!item.path\" class=\"box-flow-image\"  [class.active]=\"item.estatus.esActiva\"  [class.completa]=\"item.estatus.esCompleta\"\n                  [routerLink]=\"['/main-dashboard/registro-en-linea' + item.url, {params: item.params}]\">\n                  <img src=\"assets/images/icons/{{item.icono}}.svg\" alt=\"{{item.nombre}}\">\n              </div>\n              <div class=\"box-flow-txt\">{{item.nombre}}</div>   \n            </div>\n    \n            <div class=\"box-flow-line\">\n              <div class=\"box-flow-line-30 icon-flow\">\n                <i *ngIf=\"item.estatus.esCompleta\" class=\"fa fa-check color-green font-15\"></i>\n                <!-- <i *ngIf=\"!item.estatus.esCompleta\" class=\"fa fa-times color-red font-15\"></i> -->\n              </div>\n              <div class=\" box-flow-line-30 center-item-line\">\n                <div class=\"flow-line\" *ngIf=\"!isLast\" [class.completa]=\"item.estatus.esCompleta\"></div>\n              </div>\n            </div>\n    \n          </div>\n    \n      </div>\n    </div>\n  </div>\n  \n  <div class=\"col-sm-12 _right-items\">\n    <div class=\"btn-group btn-group-sm\" [ngClass]=\"[mediaCss]\" role=\"group\" aria-label=\"group-btns-scroll\">\n      <button type=\"button\" class=\"btn btn-info waves-effect\" (click)=\"scrollleft()\">\n        <i class=\"fa fa-angle-double-left\"></i>\n      </button>\n      <button type=\"button\" class=\"btn btn-info waves-effect\" (click)=\"scrollRight()\">\n        <i class=\"fa fa-angle-double-right\"></i>\n      </button>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/modules/registro/components/stepper/stepper.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/registro/components/stepper/stepper.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-top-50 {\n  margin-top: 50px;\n  padding: 0 50px; }\n\n.box-main-flow {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.box-flex {\n  flex: 0 0 auto; }\n\n.box-flow {\n  height: 100px;\n  width: 100px;\n  display: flex;\n  align-items: flex-start;\n  margin: 0;\n  padding: 0; }\n\n.box-data-flow {\n  width: 60px;\n  height: 100%;\n  display: inline-block; }\n\n.box-flow-image {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 1px solid #ccc; }\n\n.box-flow-image.active, .box-flow-image.completa {\n  background-color: #2fb3e3;\n  border: 1px #2fb3e3 solid; }\n\n.box-flow-image img {\n  height: 40px;\n  width: 40px; }\n\n.box-flow-image.active img, .box-flow-image.completa img {\n  -webkit-filter: hue-rotate(60deg) brightness(500%);\n  -moz-filter: hue-rotate(60deg) brightness(500%);\n  -o-filter: hue-rotate(60deg) brightness(500%);\n  filter: hue-rotate(60deg) brightness(500%); }\n\n.box-flow-txt {\n  font-size: 9px;\n  line-height: 10px;\n  color: #7d7d7d;\n  text-transform: uppercase;\n  margin: 5px 0px;\n  padding: 0px;\n  text-align: center; }\n\n.center-item-line {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.box-flow-line {\n  width: 40px;\n  height: 60px; }\n\n.box-flow-line-30 {\n  height: 30%;\n  width: 100%; }\n\n.flow-line {\n  height: 2px;\n  width: 100%;\n  background-color: #ccc; }\n\n.active {\n  background-color: #2fb3e3; }\n\n.flow-line.active {\n  background-color: #2fb3e3; }\n\n.color-green {\n  color: #28a745; }\n\n.color-red {\n  color: #dc3545; }\n\n.hiden-md {\n  display: none; }\n\n.hiden-lg {\n  display: none; }\n\n@media screen and (max-width: 1480px) {\n  .hiden-lg {\n    display: block; } }\n\n@media screen and (max-width: 680px) {\n  .hiden-md {\n    display: block; } }\n"

/***/ }),

/***/ "./src/app/modules/registro/components/stepper/stepper.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/registro/components/stepper/stepper.component.ts ***!
  \**************************************************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_services_configurations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global/services/configurations */ "./src/app/modules/global/services/configurations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StepperComponent = /** @class */ (function () {
    function StepperComponent() {
        this.itemsFlujo = _global_services_configurations__WEBPACK_IMPORTED_MODULE_1__["FLUJO_REGISTRO_SINIESTRO"];
    }
    StepperComponent.prototype.ngOnInit = function () { };
    StepperComponent.prototype.scrollRight = function () {
        this.panel.nativeElement.scrollLeft += 100;
    };
    StepperComponent.prototype.scrollleft = function () {
        this.panel.nativeElement.scrollLeft -= 100;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StepperComponent.prototype, "panel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('data'),
        __metadata("design:type", Object)
    ], StepperComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mediaCss'),
        __metadata("design:type", String)
    ], StepperComponent.prototype, "mediaCss", void 0);
    StepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stepper',
            template: __webpack_require__(/*! ./stepper.component.html */ "./src/app/modules/registro/components/stepper/stepper.component.html"),
            styles: [__webpack_require__(/*! ./stepper.component.scss */ "./src/app/modules/registro/components/stepper/stepper.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StepperComponent);
    return StepperComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/interfaces/inputs.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/registro/interfaces/inputs.ts ***!
  \*******************************************************/
/*! exports provided: inicioRegistro, causaColision, causaNoColision, datosDeSiniestro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inicioRegistro", function() { return inicioRegistro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "causaColision", function() { return causaColision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "causaNoColision", function() { return causaNoColision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datosDeSiniestro", function() { return datosDeSiniestro; });
var inicioRegistro = {
    causa: 'input_causa',
    cobertura: 'input_cobertura',
};
var causaColision = {
    folio: 'input_folio',
    rol: 'input_rol',
    companiaPropio: 'input_companiaPropio',
    siniestroPropio: 'input_siniestroPropio',
    companiaContraparte: 'input_companiaContraparte',
    siniestroContraparte: 'input_siniestroContraparte'
};
var causaNoColision = {
    folio: 'input_folio',
    siniestro: 'input_siniestro'
};
var datosDeSiniestro = {
    cita_programada: 'input_cita_programada',
    fecha_ocurrido: 'input_fecha_ocurrido',
    fecha_atencion: 'input_fecha_atencion',
    hora_ocurrido: 'input_hora_ocurrido',
    hora_atencion: 'input_hora_atencion',
    lugar_siniestro: 'input_lugar_siniestro',
    tipo_vialidad: 'input_tipo_vialidad',
    nombre_calle: 'input_nombre_calle',
    num_exterior: 'input_num_exterior',
    num_interior: 'input_num_interior',
    cod_postal: 'input_cod_postal',
    colonia: 'input_colonia',
    municipio: 'input_municipio',
    estado: 'input_estado',
    calle1_tipo: 'input_calle1_tipo',
    calle1_nombre: 'input_calle1_nombr',
    calle2_tipo: 'input_calle2_tipo',
    calle2_nombre: 'input_calle2_nombre',
    tipo_carretera: 'input_tipo_carretera',
    nombre_carretera: 'input_nombre_carretera',
    num_kilometro: 'input_num_kilometro',
    observaciones: 'input_observaciones'
};


/***/ }),

/***/ "./src/app/modules/registro/interfaces/labels.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/registro/interfaces/labels.ts ***!
  \*******************************************************/
/*! exports provided: inicioRegistro, causaColision, causaNoColision, datosDeSiniestro, btn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inicioRegistro", function() { return inicioRegistro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "causaColision", function() { return causaColision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "causaNoColision", function() { return causaNoColision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datosDeSiniestro", function() { return datosDeSiniestro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btn", function() { return btn; });
var inicioRegistro = {
    header: 'Registro de Siniestro en línea',
    badge: 'Selecciona los siguientes campos para registrar nuevo siniestro.',
    causa: 'Causa',
    cobertura: 'Cobertura',
};
var causaColision = {
    header: {
        propio: 'Propio', contraparte: 'Contraparte'
    },
    badge: {
        propio: 'Ingresa los siguientes campos para registrar nuevo siniestro con tus datos. ',
        contraparte: 'Ingresa los siguientes campos para registrar nuevo siniestro con colisión de tu contraparte.'
    },
    folio: 'Número de Folio',
    rol: 'Rol',
    compania: 'Compañia',
    siniestro: 'Número de Siniestro'
};
var causaNoColision = {
    header: 'Propio',
    badge: 'Ingresa los siguientes campos para registrar nuevo siniestro sin colisión.',
    folio: 'Número de Folio',
    siniestro: 'Número de Siniestro'
};
var datosDeSiniestro = {
    header: {
        ciudad: 'Ciudad', carretera: 'Carretera', location: 'geolocalización'
    },
    badge: {
        ciudad: 'Ingresa la ubicación donde se registró el incidente en ciudad. ',
        carretera: 'Ingresa la ubicación donde se registró el incidente en carretera. '
    },
    tipo_cita: 'Tipo de cita',
    cita_sinprogramar: 'Cita sin programar',
    cita_programada: 'Cita programada',
    fecha_ocurrido: 'Fecha de ocurrido',
    fecha_atencion: 'Fecha de atención',
    hora_ocurrido: 'Hora de ocurrido',
    hora_atencion: 'Hora de atención',
    lugar_siniestro: 'Lugar donde ocurrió siniestro',
    tipo_vialidad: 'Tipo de vialidad',
    nombre_calle: 'Nombre de calle',
    num_exterior: 'Número exterior',
    num_interior: 'Número interior',
    cod_postal: 'Código postal',
    colonia: 'Colonia',
    municipio: 'Municipio',
    estado: 'Estado',
    calle1_tipo: 'Entre calle 1 (Tipo de vialidad)',
    calle1_nombre: 'Entre calle 1',
    calle2_tipo: 'Entre calle 2 (Tipo de vialidad)',
    calle2_nombre: 'Entre calle 2',
    tipo_carretera: 'Tipo de carretera',
    nombre_carretera: 'Nombre de la carretera',
    num_kilometro: 'Número de kilometroo',
    observaciones: 'Obeservaciones'
};
var btn = {
    save: 'Guardar',
    next: 'Siguiente',
    cancel: 'Cancelar'
};


/***/ }),

/***/ "./src/app/modules/registro/pages/busqueda-de-poliza/busqueda-de-poliza.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/busqueda-de-poliza/busqueda-de-poliza.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box\">\n    <!-- Form header -->\n    <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n              <h4 class=\"header-title m-t-0\">2. Búsqueda de Póliza</h4>\n        </div>\n        <div class=\"col-md-6 col-sm-12 text-right\">\n            <span class=\"text-muted span-order\"><i class=\"mdi mdi-city\"></i> Compañia Seguros S.A. de C.V.</span>\n            <span class=\"text-muted span-order\">Deudora</span>\n            <span>AB13A</span>\n        </div>\n    </div>\n    <hr class=\"mt-0\">\n    \n    <form [formGroup]=\"groupForm\" (ngSubmit)=\"onSubmit()\"> \n    <div class=\"form-row\">\n        <!-- Acuerdo -->\n        <div class=\"col-sm-12 col-md-12 form-group\" ngbRadioGroup formControlName=\"tipo_busqueda\" (change)=\"selectChange($event)\">\n            <label class=\"col-form-label\">Tipo de Búsqueda</label><br/>\n            <div class=\"radio radio-success form-check-inline c-pointer\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" id=\"inlineRadio1\" [value]=\"false\">\n                <label for=\"inlineRadio1\">Póliza</label>\n            </div>\n            <div class=\"radio radio-success form-check-inline c-pointer\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" id=\"inlineRadio2\" [value]=\"true\">\n                <label for=\"inlineRadio2\">VIN</label>\n            </div>\n        </div>\n\n        <!-- Número de poliza -->\n        <div class=\"col-md-12 col-sm-12 form-group\" *ngIf=\"!change\">\n            <label class=\"col-form-label\">Número de Póliza</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Ingresa número de poliza\">\n        </div>\n              \n        <!-- VIN -->\n        <div class=\"col-md-12 col-sm-12 form-group\" *ngIf=\"change\">\n            <label class=\"col-form-label\">VIN (de la emisión)</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"VIN (de la emisión)\">\n        </div>\n\n        <!-- Cobertura -->\n        <div class=\"col-md-12 col-sm-12 form-group\" *ngIf=\"change\">\n            <label class=\"col-form-label\">Cobertura de la Póliza</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona una cobertura</option>\n                <option value=\"1\">Básica</option>\n                <option value=\"2\">Básica limitada</option>\n                <option value=\"3\">Limitada</option>\n                <option value=\"4\">Amplia</option>\n            </select>\n        </div>\n              \n        <!-- Vigencia de -->\n        <div class=\"col-sm-12 col-md-6 form-group\" *ngIf=\"change\">\n            <label class=\"col-form-label\">Vigencia de</label>\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Selecciona vigencia de la póliza\">\n            </div>\n        </div>\n\n        <!-- Vigencia a -->\n        <div class=\"col-sm-12 col-md-6 form-group\" *ngIf=\"change\">\n            <label class=\"col-form-label\">Vigencia a</label>\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Selecciona vigencia de la póliza\">\n            </div>\n        </div>\n    </div>\n    \n    <hr>\n\n    <!-- Submit -->\n    <div class=\"form-row\">\n        <div class=\"col-md-6 mt-2\">\n            <button type=\"button\" class=\"btn btn-outline-danger\">Cancelar</button>\n        </div>\n        <div class=\"col-md-6 mt-2\">\n            <input type=\"submit\" class=\"btn btn-info pull-right\" value=\"Buscar\" [disabled]=\"!groupForm.valid\">\n            <button type=\"button\" class=\"btn btn-outline-primary pull-right mr-2\" (click)=\"openModal(addPoliza)\">Modal</button>\n        </div>\n    </div>\n    </form>\n</div>\n\n<!-- Modal texto -->\n<ng-template #addPoliza let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Pólizas obtenidas por VIN</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <p>\n            <label class=\"col-form-label\">Selecciona póliza</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"1\">1</option>\n                <option value=\"2\">2</option>\n                <option value=\"3\">3</option>\n                <option value=\"4\">4</option>\n            </select>\n        </p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"c('Close click')\">Seleccionar</button>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/registro/pages/busqueda-de-poliza/busqueda-de-poliza.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/busqueda-de-poliza/busqueda-de-poliza.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registro/pages/busqueda-de-poliza/busqueda-de-poliza.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/busqueda-de-poliza/busqueda-de-poliza.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BusquedaDePolizaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaDePolizaComponent", function() { return BusquedaDePolizaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
/* harmony import */ var _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/local/storage/storage.service */ "./src/app/modules/registro/services/local/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BusquedaDePolizaComponent = /** @class */ (function () {
    function BusquedaDePolizaComponent(formBuilder, router, modalService, formatterService, storageService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.modalService = modalService;
        this.formatterService = formatterService;
        this.storageService = storageService;
        this.change = false;
        console.log("EN SUB-FLUJO/BUSQUEDA DE POLIZA...");
    }
    BusquedaDePolizaComponent.prototype.ngOnInit = function () {
        this.formatterService.actualizarSubSeccionActiva('seccionPoliza');
        this.groupForm = this.formBuilder.group({
            tipo_busqueda: false,
        });
    };
    BusquedaDePolizaComponent.prototype.selectChange = function (event) {
        // si es acuerdo
        this.change = event.target.value;
    };
    BusquedaDePolizaComponent.prototype.openModal = function (content) {
        this.modalService.open(content, { centered: true });
    };
    BusquedaDePolizaComponent.prototype.onSubmit = function () {
        this.router.navigate([
            '/main-dashboard/registro-en-linea/flujo-registro',
            { outlets: { registroEnLinea: ['datos-poliza'] } }
        ]);
    };
    BusquedaDePolizaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-busqueda-de-poliza',
            template: __webpack_require__(/*! ./busqueda-de-poliza.component.html */ "./src/app/modules/registro/pages/busqueda-de-poliza/busqueda-de-poliza.component.html"),
            styles: [__webpack_require__(/*! ./busqueda-de-poliza.component.scss */ "./src/app/modules/registro/pages/busqueda-de-poliza/busqueda-de-poliza.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_4__["FormatterService"],
            _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
    ], BusquedaDePolizaComponent);
    return BusquedaDePolizaComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/circunstancia/circunstancia.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/registro/pages/circunstancia/circunstancia.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box mt-5\">\n    <!-- Form header -->\n    <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n            <h4 class=\"header-title m-t-0\">9. Circunstancias</h4>\n        </div>\n        <div class=\"col-md-6 col-sm-12 text-right\">\n            <span class=\"text-muted span-order\"><i class=\"mdi mdi-city\"></i> Compañia Seguros S.A. de C.V.</span>\n            <span class=\"text-muted span-order\">Deudora</span>\n            <span>AB13A</span>\n        </div>\n    </div>\n\n    <hr class=\"mt-0\">\n\n    <form [formGroup]=\"groupForm\" (ngSubmit)=\"onSubmit()\"> \n    <div class=\"row\">\n       <!-- Circunstancia -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Circunstancia</label>\n            <select class=\"form-control selectpicker mb-2\" formControlName=\"circunstancia\" (change)=\"selectChangeHandler($event)\">\n                <option value=\"\">Selecciona una circunstancia</option>\n                <option value=\"1\">Circulaba sobre la vía principal glorieta</option>\n                <option value=\"2\">Daba la vuelta a la izquierda</option>\n                <option value=\"3\">Daba la vuelta a la derecha</option>\n                <option value=\"4\">Se incorporaba</option>\n                <option value=\"5\">De reversa</option>\n                <option value=\"10\">Otro</option>\n            </select>\n        </div>\n\n        <!-- Indica otro -->\n        <div class=\"col-md-12 col-sm-12 form-group\" *ngIf=\"otro\">\n            <label class=\"col-form-label\">Indica otro</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Indica otro\">\n        </div>\n\n\n        <!-- Acuerdo -->\n        <div class=\"col-sm-12 col-md-12 form-group\" ngbRadioGroup formControlName=\"acuerdo\" (change)=\"selectChangeAc($event)\">\n            <label class=\"col-form-label\">Acuerdo</label><br/>\n            <div class=\"radio radio-success form-check-inline c-pointer\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" id=\"inlineRadio1\" [value]=\"true\">\n                <label for=\"inlineRadio1\">Si</label>\n            </div>\n            <div class=\"radio radio-success form-check-inline c-pointer\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" id=\"inlineRadio2\" [value]=\"false\">\n                <label for=\"inlineRadio2\">No</label>\n            </div>\n        </div>\n\n\n        <!-- Tipo acuerdo -->\n        <div class=\"col-md-12 col-sm-12 form-group\" *ngIf=\"tipo\">\n            <label class=\"col-form-label\">Indica Acuerdo</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona una opción</option>\n                <option value=\"1\">Libre</option>\n            </select>\n        </div>\n\n        <!-- Descripción -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Descripción</label>\n            <textarea class=\"form-control\" rows=\"3\" ></textarea>\n        </div>\n    </div>\n    \n    <hr>\n  \n    <!-- Submit -->\n    <div class=\"form-row\">\n        <div class=\"col-md-6 mt-2\">\n            <button type=\"button\" class=\"btn btn-outline-danger\">Cancelar</button>\n        </div>\n        <div class=\"col-md-6 mt-2\">\n            <input type=\"submit\" class=\"btn btn-info pull-right\" value=\"Buscar\" [disabled]=\"!groupForm.valid\">\n        </div>\n    </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/modules/registro/pages/circunstancia/circunstancia.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/registro/pages/circunstancia/circunstancia.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registro/pages/circunstancia/circunstancia.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/registro/pages/circunstancia/circunstancia.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CircunstanciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircunstanciaComponent", function() { return CircunstanciaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
/* harmony import */ var _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local/storage/storage.service */ "./src/app/modules/registro/services/local/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CircunstanciaComponent = /** @class */ (function () {
    function CircunstanciaComponent(formatterService, storageService, formBuilder) {
        this.formatterService = formatterService;
        this.storageService = storageService;
        this.formBuilder = formBuilder;
        this.otro = false;
        this.tipo = false;
    }
    CircunstanciaComponent.prototype.ngOnInit = function () {
        this.formatterService.actualizarSubSeccionActiva('seccionCircunstancias');
        this.groupForm = this.formBuilder.group({
            circunstancia: '',
            acuerdo: false,
        });
    };
    CircunstanciaComponent.prototype.selectChangeHandler = function (event) {
        // si es otro
        if (event.target.value == 10) {
            this.otro = true;
        }
        else {
            this.otro = false;
        }
    };
    CircunstanciaComponent.prototype.selectChangeAc = function (event) {
        // si es acuerdo
        this.tipo = event.target.value;
    };
    CircunstanciaComponent.prototype.onSubmit = function () {
        var element = document.getElementById('fotos');
        element.click();
    };
    CircunstanciaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-circunstancia',
            template: __webpack_require__(/*! ./circunstancia.component.html */ "./src/app/modules/registro/pages/circunstancia/circunstancia.component.html"),
            styles: [__webpack_require__(/*! ./circunstancia.component.scss */ "./src/app/modules/registro/pages/circunstancia/circunstancia.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__["FormatterService"],
            _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CircunstanciaComponent);
    return CircunstanciaComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/croquis-de-accidente/croquis-de-accidente.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/croquis-de-accidente/croquis-de-accidente.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box mt-5\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <!-- Form header -->\n      <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n          <h4 class=\"header-title m-t-0\">11. Croquis del accidente</h4>\n        </div>\n        <div class=\"col-md-6 col-sm-12 text-right\">\n          <span class=\"text-muted span-order\"><i class=\"mdi mdi-city\"></i> Compañia Seguros S.A. de C.V.</span>\n          <span class=\"text-muted span-order\">Deudora</span>\n          <span>AB13A</span>\n        </div>\n      </div>\n      <hr class=\"mt-0\">\n      \n      <form (ngSubmit)=\"onSubmit()\"> \n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6 offset-md-3 text-center\">\n            <ul class=\"social-links list-inline m-t-20\">\n              <li class=\"list-inline-item\">\n                <ng-template #tipMap>Herramienta Mapa</ng-template>\n                <a (click)=\"isActive = 0; toggleCanvas()\"\n                [ngClass]=\"{'active': 0 == isActive}\" \n                [ngbTooltip]=\"tipMap\">\n                <i class=\"mdi mdi-map-marker\"></i>\n                </a>\n              </li>\n              <!-- Add handraw -->\n              <li class=\"list-inline-item\">\n                <ng-template #tipDraw>Herramienta dibujo libre</ng-template>\n                <a (click)=\"isActive = 1; openCanvas()\" \n                  [ngClass]=\"{'active': 1 == isActive}\" \n                  [ngbTooltip]=\"tipDraw\">\n                  <img src=\"assets/images/icons/map_tool_freehand.svg\">\n                </a>\n              </li>\n              <!-- Add Text -->\n              <li class=\"list-inline-item\">\n                <ng-template #tipText>Herramienta texto</ng-template>\n                <a [ngClass]=\"{'active': 2 == isActive}\"\n                  (click)=\"isActive = 2; openModal(addText); openCanvas()\"\n                  [ngbTooltip]=\"tipText\">\n                  <img src=\"assets/images/icons/map_tool_text.svg\">\n                </a>\n              </li>\n              <!-- Add Cars -->\n              <li class=\"list-inline-item\">\n                <ng-template #tipCars>Herramienta autos</ng-template>\n                <a [ngClass]=\"{'active': 3 == isActive}\"\n                  (click)=\"isActive = 3; openModal(addCars); openCanvas()\"\n                  [ngbTooltip]=\"tipCars\">\n                  <img src=\"assets/images/icons/map_tool_vehicles.svg\">\n                </a>\n              </li>\n              <!-- Add items -->\n              <li class=\"list-inline-item\">\n                <ng-template #tipObjects>Herramienta objetos</ng-template>\n                <a [ngClass]=\"{'active': 4 == isActive}\"\n                  (click)=\"isActive = 4; openModal(addObjects); openCanvas()\"\n                  [ngbTooltip]=\"tipObjects\">\n                    <img src=\"assets/images/icons/map_tool_objects.svg\">\n                </a>\n              </li>\n              <!-- Add rows -->\n              <li class=\"list-inline-item\">\n                <ng-template #tipLines>Herramienta líneas de tamaño</ng-template>\n                <a (click)=\"isActive = 5; openCanvas()\" \n                [ngClass]=\"{'active': 5 == isActive}\"\n                [ngbTooltip]=\"tipLines\">\n                    <img src=\"assets/images/icons/map_tool_arrows.svg\">\n                </a>\n              </li>\n              <!-- Delete -->\n              <li class=\"list-inline-item\">\n                <ng-template #tipClear>Borrar todo el lienzo</ng-template>\n                <a (click)=\"isActive = 6; openCanvas()\"\n                  [ngClass]=\"{'active': 6 == isActive}\"\n                  [ngbTooltip]=\"tipClear\">\n                  <i class=\"mdi mdi-eraser\"></i>\n                </a>\n              </li>\n              <!-- Save -->\n              <li class=\"list-inline-item\">\n                <a (click)=\"saveCanvas()\">\n                  <i class=\"mdi mdi-content-save\"></i>\n                </a>\n              </li>\n            </ul>\n            <button *ngIf=\"isActive == 6\" type=\"button\" class=\"btn btn-danger btn-delete\" (click)=\"removeSelected()\"><i class=\"mdi mdi-content-cut\"></i></button>\n            \n            <!-- Lienzo -->\n            <canvas #canvas id=\"canvas\" width=\"400\" height=\"400\">Tú navegador no soporta Lienzos de CANVAS</canvas>\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15050.679039302579!2d-99.16516708362049!3d19.426669612830278!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1532716448064\" width=\"400\" height=\"400\" frameborder=\"0\" allowfullscreen></iframe>\n          </div>\n        </div>\n        <hr>\n\n        <!-- Submit -->\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-12 mt-2\">\n            <button class=\"btn btn-outline-primary waves-light mr-2\"\n              [routerLink]=\"['/main-dashboard/tablero-operaciones']\">Cancelar</button>\n              <input type=\"submit\" class=\"btn btn-info waves-light\" value=\"Siguiente\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- Modal texto -->\n<ng-template #addText let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Herramienta texto</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p><input type=\"text\" class=\"form-control\" [(ngModel)]=\"textString\"></p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"addString(); c('Close click')\">Añadir</button>\n  </div>\n</ng-template>\n        \n<!-- Modal autos -->\n<ng-template #addCars let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Herramienta Autos</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-md-2\">\n          <img src=\"assets/images/icons/map_vehic_01.svg\" class=\"images-item\" (click)=\"addImage($event)\">\n        </div>\n        <div class=\"col-md-2\">\n          <img src=\"assets/images/icons/map_vehic_02.svg\" class=\"images-item\" (click)=\"addImage($event)\">\n        </div>\n        <div class=\"col-md-2\">\n          <img src=\"assets/images/icons/map_vehic_03.svg\" class=\"images-item\" (click)=\"addImage($event)\">\n        </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"c('Close click')\">Listo</button>\n  </div>\n</ng-template>\n\n<!-- Modal objetos -->\n<ng-template #addObjects let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Herramienta objetos</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-md-2\">\n          <img src=\"assets/images/icons/map_obj_01.svg\" class=\"images-item\" (click)=\"addImage($event)\">\n        </div>\n        <div class=\"col-md-2\">\n          <img src=\"assets/images/icons/map_obj_02.svg\" class=\"images-item\" (click)=\"addImage($event)\">\n        </div>\n        <div class=\"col-md-2\">\n          <img src=\"assets/images/icons/map_obj_03.svg\" class=\"images-item\" (click)=\"addImage($event)\">\n        </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"c('Close click')\">Listo</button>\n  </div>\n</ng-template>\n  "

/***/ }),

/***/ "./src/app/modules/registro/pages/croquis-de-accidente/croquis-de-accidente.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/croquis-de-accidente/croquis-de-accidente.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#canvas {\n  width: 400px;\n  height: 400px;\n  background: rgba(167, 167, 167, 0.08); }\n\n.social-links li a {\n  height: 35px;\n  line-height: 31px;\n  border: 2px solid rgba(121, 121, 121, 0.18);\n  width: 35px;\n  font-size: 24px;\n  color: #3b9ccf;\n  cursor: pointer; }\n\n.social-links li a.active {\n  border-color: #3b9ccf; }\n\n.images-item {\n  height: 100px;\n  cursor: pointer;\n  transition: .5s ease;\n  padding: 18px; }\n\n.images-item:hover {\n  opacity: 0.8; }\n\n.images-item.active {\n  background: #c3c3c3; }\n\n::ng-deep .canvas-container {\n  display: none !important;\n  position: absolute !important; }\n\n::ng-deep .canvas-show {\n  display: inline-block !important; }\n\n.btn-delete {\n  position: absolute;\n  border-radius: 50%;\n  right: 47%;\n  width: 35px;\n  padding: 6px;\n  top: 70px;\n  z-index: 1; }\n"

/***/ }),

/***/ "./src/app/modules/registro/pages/croquis-de-accidente/croquis-de-accidente.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/croquis-de-accidente/croquis-de-accidente.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CroquisDeAccidenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CroquisDeAccidenteComponent", function() { return CroquisDeAccidenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
/* harmony import */ var _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local/storage/storage.service */ "./src/app/modules/registro/services/local/storage/storage.service.ts");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CroquisDeAccidenteComponent = /** @class */ (function () {
    function CroquisDeAccidenteComponent(formatterService, storageService, modalService) {
        this.formatterService = formatterService;
        this.storageService = storageService;
        this.modalService = modalService;
        this.properties = {
            canvasFill: null,
            canvasImage: null,
            id: null
        };
    }
    CroquisDeAccidenteComponent.prototype.openModal = function (content) {
        this.modalService.open(content, { centered: true });
    };
    CroquisDeAccidenteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formatterService.actualizarSubSeccionActiva('seccionCroquis');
        this.canvas = new fabric.Canvas('canvas', {
            hoverCursor: 'pointer',
            selection: false,
        });
        this.canvas.on('mouse:move', function (e) {
            if (_this.isActive == 1) {
                _this.canvas.isDrawingMode = 1;
                _this.canvas.freeDrawingBrush.color = '#000000';
                _this.canvas.freeDrawingBrush.width = 3;
                _this.canvas.renderAll();
            }
            else {
                _this.canvas.isDrawingMode = 0;
            }
        });
    };
    CroquisDeAccidenteComponent.prototype.randomObjectId = function () {
        return Math.floor(Math.random() * 999999) + 1;
    };
    CroquisDeAccidenteComponent.prototype.extend = function (object, id) {
        object.toObject = (function (toObject) {
            return function () {
                return fabric.util.object.extend(toObject.call(this), {
                    id: id
                });
            };
        })(object.toObject);
    };
    CroquisDeAccidenteComponent.prototype.addString = function () {
        if (!this.textString)
            return;
        var text = new fabric.IText(this.textString, {
            left: 30,
            top: 30,
            fontFamily: 'Arial',
            fill: '#000000',
            scaleX: 0.5,
            scaleY: 0.5,
            hasRotatingPoint: true,
        });
        this.setObject(text);
        this.textString = null;
    };
    CroquisDeAccidenteComponent.prototype.addImage = function (event) {
        var _this = this;
        var img = event.target;
        fabric.Image.fromURL(img.src, function (image) {
            image.set({
                left: 30,
                top: 30,
                padding: 5,
                scaleX: 0.3,
                scaleY: 0.3,
                hasRotatingPoint: true
            });
            _this.setObject(image);
        });
    };
    CroquisDeAccidenteComponent.prototype.setObject = function (object) {
        this.extend(object, this.randomObjectId());
        this.canvas.add(object);
        this.canvas.setActiveObject(object);
    };
    CroquisDeAccidenteComponent.prototype.removeSelected = function () {
        var active = this.canvas.getActiveObject();
        if (active) {
            this.canvas.remove(active);
        }
    };
    CroquisDeAccidenteComponent.prototype.openCanvas = function () {
        this.canvasElement.nativeElement.parentElement.classList.add('canvas-show');
    };
    CroquisDeAccidenteComponent.prototype.toggleCanvas = function () {
        this.canvasElement.nativeElement.parentElement.classList.toggle('canvas-show');
    };
    // Faltantes --->
    CroquisDeAccidenteComponent.prototype.onSubmit = function () {
        var element = document.getElementById('generacion-ordenes');
        element.click();
    };
    CroquisDeAccidenteComponent.prototype.saveCanvas = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CroquisDeAccidenteComponent.prototype, "canvasElement", void 0);
    CroquisDeAccidenteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-croquis-de-accidente',
            template: __webpack_require__(/*! ./croquis-de-accidente.component.html */ "./src/app/modules/registro/pages/croquis-de-accidente/croquis-de-accidente.component.html"),
            styles: [__webpack_require__(/*! ./croquis-de-accidente.component.scss */ "./src/app/modules/registro/pages/croquis-de-accidente/croquis-de-accidente.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__["FormatterService"],
            _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], CroquisDeAccidenteComponent);
    return CroquisDeAccidenteComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/datos-de-asegurado/datos-de-asegurado.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/datos-de-asegurado/datos-de-asegurado.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box\">\n    <!-- Form header -->\n    <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n            <h4 class=\"header-title m-t-0\">3. Datos del asegurado</h4>\n        </div>\n        <div class=\"col-md-6 col-sm-12 text-right\">\n            <span class=\"text-muted span-order\"><i class=\"mdi mdi-city\"></i> Compañia Seguros S.A. de C.V.</span>\n            <span class=\"text-muted span-order\">Deudora</span>\n            <span>AB13A</span>\n        </div>\n    </div>\n    <hr class=\"mt-0\">\n\n    <form [formGroup]=\"groupForm\" (ngSubmit)=\"onSubmit()\"> \n    <div class=\"row\">\n        \n        <!-- Tipo de persona -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Tipo de Persona</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona una opción</option>\n                <option value=\"1\">Persona física</option>\n                <option value=\"2\">Persona moral</option>\n            </select>\n        </div>\n\n        <!-- Nombre -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Nombre</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Nombre\">\n        </div>\n\n        <!-- Segundo Nombre -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Segundo Nombre</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Segundo Nombre\">\n        </div>\n        \n        <!-- Apellido paterno -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Apellido Paterno</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Apellido Paterno\">\n        </div>\n\n        <!-- Apellido materno -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Apellido Materno</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Apellido Materno\">\n        </div>\n\n        <!-- Tipo de telefono -->   \n        <div class=\"col-md-3 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Tipo de Teléfono</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona una cobertura</option>\n                <option value=\"1\">Celular</option>\n                <option value=\"2\">Casa</option>\n                <option value=\"3\">Oficina</option>\n                <option value=\"4\">Otro</option>\n            </select>\n        </div>\n\n        <!-- Lada -->\n        <div class=\"col-md-3 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Lada</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"Lada\">\n        </div>\n\n        <!-- Teléfono -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Teléfono</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"Teléfono\">\n        </div>\n    </div>\n    <hr>\n\n    <!-- Submit -->\n    <div class=\"form-row\">\n        <div class=\"col-md-6 mt-2\">\n            <button type=\"button\" class=\"btn btn-outline-danger\">Cancelar</button>\n        </div>\n        <div class=\"col-md-6 mt-2\">\n            <input type=\"submit\" class=\"btn btn-info pull-right\" value=\"Siguiente\" [disabled]=\"!groupForm.valid\">\n        </div>\n    </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/modules/registro/pages/datos-de-asegurado/datos-de-asegurado.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/datos-de-asegurado/datos-de-asegurado.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registro/pages/datos-de-asegurado/datos-de-asegurado.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/datos-de-asegurado/datos-de-asegurado.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DatosDeAseguradoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosDeAseguradoComponent", function() { return DatosDeAseguradoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
/* harmony import */ var _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local/storage/storage.service */ "./src/app/modules/registro/services/local/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatosDeAseguradoComponent = /** @class */ (function () {
    function DatosDeAseguradoComponent(formatterService, storageService, formBuilder) {
        this.formatterService = formatterService;
        this.storageService = storageService;
        this.formBuilder = formBuilder;
    }
    DatosDeAseguradoComponent.prototype.ngOnInit = function () {
        this.formatterService.actualizarSubSeccionActiva('seccionAsegurado');
        this.groupForm = this.formBuilder.group({});
    };
    DatosDeAseguradoComponent.prototype.onSubmit = function () {
        var element = document.getElementById('datos-conductor');
        element.click();
    };
    DatosDeAseguradoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datos-de-asegurado',
            template: __webpack_require__(/*! ./datos-de-asegurado.component.html */ "./src/app/modules/registro/pages/datos-de-asegurado/datos-de-asegurado.component.html"),
            styles: [__webpack_require__(/*! ./datos-de-asegurado.component.scss */ "./src/app/modules/registro/pages/datos-de-asegurado/datos-de-asegurado.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__["FormatterService"],
            _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DatosDeAseguradoComponent);
    return DatosDeAseguradoComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/datos-de-conductor/datos-de-conductor.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/datos-de-conductor/datos-de-conductor.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box\">\n    <!-- Form header -->\n    <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n            <h4 class=\"header-title m-t-0\">4. Datos del conductor</h4>\n        </div>\n        <div class=\"col-md-6 col-sm-12 text-right\">\n            <span class=\"text-muted span-order\"><i class=\"mdi mdi-city\"></i> Compañia Seguros S.A. de C.V.</span>\n            <span class=\"text-muted span-order\">Deudora</span>\n            <span>AB13A</span>\n        </div>\n    </div>\n    <hr class=\"mt-0\">\n\n    <form [formGroup]=\"groupForm\" (ngSubmit)=\"onSubmit()\"> \n    <div class=\"row\">\n        <!-- Conductor mismo que Asegurado -->\n        <div class=\"col-sm-12 col-md-12 form-group\" ngbRadioGroup formControlName=\"conductor_igual_asegurado\">\n            <label class=\"col-form-label\">Conductor mismo que Asegurado</label><br/>\n            <div class=\"radio radio-success form-check-inline c-pointer\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" id=\"inlineRadio1\" [value]=\"true\">\n                <label for=\"inlineRadio1\">Si</label>\n            </div>\n            <div class=\"radio radio-success form-check-inline c-pointer\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" id=\"inlineRadio2\" [value]=\"false\">\n                <label for=\"inlineRadio2\">No</label>\n            </div>\n        </div>\n\n        <!-- Nombre -->\n        <div class=\"col-md-6 col-sm-12 form-group\" *ngIf=\"!change\">\n            <label class=\"col-form-label\">Nombre</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Nombre\">\n        </div>\n\n        <!-- Segundo Nombre -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Segundo Nombre</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Segundo Nombre\">\n        </div>\n              \n        <!-- Apellido paterno -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Apellido Paterno</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Apellido Paterno\">\n        </div>\n\n        <!-- Apellido materno -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Apellido Materno</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Apellido Materno\">\n        </div>\n\n\n        <!-- Edad -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Edad</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"Edad\">\n        </div>\n\n        \n\n        <!-- Tipo de vialidad -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Tipo de vialidad</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona una opción</option>\n                <option value=\"1\">Calle</option>\n                <option value=\"2\">Avenida</option>\n                <option value=\"3\">Glorieta</option>\n            </select>\n        </div>\n\n        <!-- Calle -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Nombre de la calle</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Nombre de la calle\">\n        </div>\n\n        <!-- Número exterior -->\n        <div class=\"col-sm-12 col-md-3 form-group\">\n            <label class=\"col-form-label\">Número exterior</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"Número exterior \" min=\"0\" max=\"9999999\">\n        </div>\n        \n        <!-- Número interior -->\n        <div class=\"col-sm-12 col-md-3 form-group\">\n            <label class=\"col-form-label\">Número interior</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"Número interior\" min=\"0\" max=\"9999999\">\n        </div>\n\n        <!-- cod postal -->\n        <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">Código postal</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"Código postal\" min=\"0\" max=\"9999999\">\n        </div>\n        \n        <!-- Colonia -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Colonia</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Colonia\">\n        </div>\n        \n        <!-- Municipio/Delegación -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Municipio/Delegación</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Municipio/Delegación\">\n        </div>\n\n        <!-- Estado -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Estado</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Estado\">\n        </div>\n               \n        <!-- Tipo de telefono -->   \n        <div class=\"col-md-3 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Tipo de Teléfono</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona una cobertura</option>\n                <option value=\"1\">Celular</option>\n                <option value=\"2\">Casa</option>\n                <option value=\"3\">Oficina</option>\n                <option value=\"4\">Otro</option>\n            </select>\n        </div>\n\n        <!-- Lada -->\n        <div class=\"col-md-3 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Lada</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"Lada\">\n        </div>\n\n        <!-- Teléfono -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Teléfono</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"Teléfono\">\n        </div>\n\n        <!-- Correo Electrónico -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Correo Electrónico</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Correo Electrónico\">\n        </div>\n\n        \n\n\n        <!-- Estado licencia -->\n        <div class=\"col-md-4 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Estado Licencia</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona estado licencia</option>\n                <option value=\"1\">Vencida</option>\n                <option value=\"2\">Válida</option>\n            </select>\n        </div>\n\n        <!-- Tipo licencia -->\n        <div class=\"col-md-4 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Tipo Licencia</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona tipo licencia</option>\n                <option value=\"1\">A</option>\n                <option value=\"2\">B</option>\n                <option value=\"3\">C</option>\n            </select>\n        </div>\n\n        <!-- Fecha final vigencia -->\n        <div class=\"col-md-4 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Fecha final Vigencia</label>\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Selecciona Fecha final vigencia\">\n            </div>\n        </div>\n    </div>\n    \n    <hr>\n    <!-- Submit -->\n    <div class=\"form-row\">\n        <div class=\"col-md-6 mt-2\">\n            <button type=\"button\" class=\"btn btn-outline-danger\">Cancelar</button>\n        </div>\n        <div class=\"col-md-6 mt-2\">\n            <input type=\"submit\" class=\"btn btn-info pull-right\" value=\"Siguiente\" [disabled]=\"!groupForm.valid\">\n        </div>\n    </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/modules/registro/pages/datos-de-conductor/datos-de-conductor.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/datos-de-conductor/datos-de-conductor.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registro/pages/datos-de-conductor/datos-de-conductor.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/datos-de-conductor/datos-de-conductor.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DatosDeConductorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosDeConductorComponent", function() { return DatosDeConductorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
/* harmony import */ var _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local/storage/storage.service */ "./src/app/modules/registro/services/local/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatosDeConductorComponent = /** @class */ (function () {
    function DatosDeConductorComponent(formatterService, storageService, formBuilder) {
        this.formatterService = formatterService;
        this.storageService = storageService;
        this.formBuilder = formBuilder;
    }
    DatosDeConductorComponent.prototype.ngOnInit = function () {
        this.formatterService.actualizarSubSeccionActiva('seccionConductor');
        this.groupForm = this.formBuilder.group({
            conductor_igual_asegurado: true,
        });
    };
    DatosDeConductorComponent.prototype.onSubmit = function () {
    };
    DatosDeConductorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datos-de-conductor',
            template: __webpack_require__(/*! ./datos-de-conductor.component.html */ "./src/app/modules/registro/pages/datos-de-conductor/datos-de-conductor.component.html"),
            styles: [__webpack_require__(/*! ./datos-de-conductor.component.scss */ "./src/app/modules/registro/pages/datos-de-conductor/datos-de-conductor.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__["FormatterService"],
            _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DatosDeConductorComponent);
    return DatosDeConductorComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/datos-de-poliza/datos-de-poliza.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/datos-de-poliza/datos-de-poliza.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box\">\n    <!-- Form header -->\n    <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n            <h4 class=\"header-title m-t-0\">2. Datos de Póliza</h4>\n        </div>\n        <div class=\"col-md-6 col-sm-12 text-right\">\n            <span class=\"text-muted span-order\"><i class=\"mdi mdi-city\"></i> Compañia Seguros S.A. de C.V.</span>\n            <span class=\"text-muted span-order\">Deudora</span>\n            <span>AB13A</span>\n        </div>\n    </div>\n    <hr class=\"mt-0\">\n\n    <form [formGroup]=\"groupForm\" (ngSubmit)=\"onSubmit()\"> \n    <div class=\"row\">\n        <!-- Número de poliza -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Número de Póliza</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Número de Póliza\">\n        </div>\n\n        <!-- Tipo de poliza -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Tipo de Póliza</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona una opción</option>\n                <option value=\"1\">Póliza</option>\n                <option value=\"2\">Sin póliza</option>\n                <option value=\"3\">Carta cobertura</option>\n            </select>\n        </div>\n\n        <!-- Inciso -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Inciso</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Ingresa inciso\">\n        </div>\n\n\n        <!-- Número de siniestro -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Número de Siniestro</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Ingresa número de siniestro\">\n        </div>\n\n              \n        <!-- Número de reporte -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Número de Reporte</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Ingresa número de reporte\">\n        </div>\n        \n        <!-- Vigencia de -->\n        <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">Vigencia de</label>\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Selecciona vigencia de la póliza\">\n            </div>\n        </div>\n\n        <!-- Vigencia a -->\n        <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">Vigencia a</label>\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Selecciona vigencia de la póliza\">\n            </div>\n        </div>\n\n\n        <!-- Cobertura -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Cobertura de la Póliza</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona una cobertura</option>\n                <option value=\"1\">Básica</option>\n                <option value=\"2\">Básica limitada</option>\n                <option value=\"3\">Limitada</option>\n                <option value=\"4\">Amplia</option>\n            </select>\n        </div>\n\n        <!-- Cobranza -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Cobranza</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona una cobranza</option>\n                <option value=\"1\">Pagada</option>\n                <option value=\"2\">no pagada</option>\n                <option value=\"3\">Cancelada</option>\n                <option value=\"4\">Periodo de gracia</option>\n            </select>\n        </div>\n\n        <!-- Causa(s) -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Causa(s)</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona causa(s)</option>\n                <option value=\"1\">Básica</option>\n                <option value=\"2\">Básica limitada</option>\n                <option value=\"3\">Limitada</option>\n                <option value=\"4\">Amplia</option>\n            </select>\n        </div> \n\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">VIN (de la emisión)</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"VIN (de la emisión)\">\n        </div>\n    </div>\n    <hr>\n\n    <!-- Submit -->\n    <div class=\"form-row\">\n        <div class=\"col-md-6 mt-2\">\n            <button type=\"button\" class=\"btn btn-outline-danger\">Cancelar</button>\n        </div>\n        <div class=\"col-md-6 mt-2\">\n            <input type=\"submit\" class=\"btn btn-info pull-right\" value=\"Buscar\" [disabled]=\"!groupForm.valid\">\n        </div>\n    </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/modules/registro/pages/datos-de-poliza/datos-de-poliza.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/datos-de-poliza/datos-de-poliza.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registro/pages/datos-de-poliza/datos-de-poliza.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/datos-de-poliza/datos-de-poliza.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DatosDePolizaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosDePolizaComponent", function() { return DatosDePolizaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
/* harmony import */ var _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local/storage/storage.service */ "./src/app/modules/registro/services/local/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatosDePolizaComponent = /** @class */ (function () {
    function DatosDePolizaComponent(formatterService, storageService, formBuilder) {
        this.formatterService = formatterService;
        this.storageService = storageService;
        this.formBuilder = formBuilder;
    }
    DatosDePolizaComponent.prototype.ngOnInit = function () {
        this.formatterService.actualizarSubSeccionActiva('seccionPoliza');
        this.groupForm = this.formBuilder.group({});
    };
    DatosDePolizaComponent.prototype.onSubmit = function () {
        var element = document.getElementById('datos-asegurado');
        element.click();
    };
    DatosDePolizaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datos-de-poliza',
            template: __webpack_require__(/*! ./datos-de-poliza.component.html */ "./src/app/modules/registro/pages/datos-de-poliza/datos-de-poliza.component.html"),
            styles: [__webpack_require__(/*! ./datos-de-poliza.component.scss */ "./src/app/modules/registro/pages/datos-de-poliza/datos-de-poliza.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__["FormatterService"],
            _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DatosDePolizaComponent);
    return DatosDePolizaComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/datos-de-siniestro/datos-de-siniestro.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/datos-de-siniestro/datos-de-siniestro.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box\">\n    <app-header-flujo-registro></app-header-flujo-registro>\n    <form [formGroup]=\"groupForm\" (ngSubmit)=\"onSubmit()\"> \n    <div class=\"form-row\">\n        <div class=\"col-sm-12 col-md-12 form-group\" ngbRadioGroup formControlName=\"{{ inputs.cita_programada }}\">\n            <label class=\"col-form-label\">{{ labels.tipo_cita }}</label><br/>\n            <div class=\"radio radio-success form-check-inline c-pointer\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" id=\"inlineRadio1\" [value]=\"true\">\n                <label for=\"inlineRadio1\">{{ labels.cita_programada }}</label>\n            </div>\n            <div class=\"radio radio-success form-check-inline c-pointer\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" id=\"inlineRadio2\" [value]=\"false\">\n                <label for=\"inlineRadio2\">{{ labels.cita_sinprogramar }}</label>\n            </div>\n        </div>\n\n        <!-- Fecha ocurrido -->\n        <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">{{ labels.fecha_ocurrido }}</label>\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\"  placeholder=\"{{ labels.fecha_ocurrido }}\" \n                ngbDatepicker #d=\"ngbDatepicker\" formControlName=\"{{ inputs.fecha_ocurrido }}\" (focus)=\"d.toggle()\">\n            </div>\n        </div>\n\n        <!-- Hora ocurrido -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">{{ labels.hora_ocurrido }}</label>\n            <div class=\"input-group\">\n                <ngb-timepicker formControlName=\"{{ inputs.hora_ocurrido }}\"></ngb-timepicker>\n            </div>\n        </div>\n\n        <!-- Fecha de atencion -->\n        <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">{{ labels.fecha_atencion }}</label>\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"{{ labels.fecha_ocurrido }}\"\n                formControlName=\"{{ inputs.fecha_atencion }}\" ngbDatepicker #e=\"ngbDatepicker\"\n                (focus)=\"e.toggle()\">\n            </div>\n        </div>\n\n        <!-- Hora de atencion -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">{{ labels.hora_atencion }}</label>\n            <div class=\"input-group\">\n                <ngb-timepicker formControlName=\"{{ inputs.hora_atencion }}\"></ngb-timepicker>\n            </div>\n        </div>\n\n        <!-- Lugar de siniestro -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">{{ labels.lugar_siniestro }}</label>             \n            <select class=\"form-control selectpicker mb-2\"\n            (change)=\"selectChangeHandler($event)\"\n                formControlName=\"{{ inputs.lugar_siniestro }}\">\n                <option value=\"\">Selecciona una opción</option>\n                <option value=\"1\">Ciudad</option>\n                <option value=\"2\">Carretera</option>\n            </select>         \n        </div>\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Añadir geolocalización</label><br/>\n            <button class=\"btn btn-info\" (click)=\"openModal(addLocation)\"><i class=\"mdi mdi-map-marker\"></i></button>\n        </div>\n    </div>\n    \n    <hr/>\n   \n    <!-- Solo si se elige carretera en el lugar de siniestro -->\n    <div class=\"form-row\" *ngIf=\"showHighway\">\n        <div class=\"col-md-12 col-sm-12\">\n            <h4 class=\"header-title mt-10 mb-20\">{{ header.carretera }}</h4>\n            <p class=\"text-muted m-b-30\">{{ badge.carretera }}</p>\n        </div>\n\n        <!-- Tipo de carretera -->\n        <div class=\"col-md-5 col-sm-12 form-group\">\n            <label class=\"col-form-label\">{{ labels.tipo_carretera }}</label>\n            <select class=\"form-control selectpicker mb-2\" formControlName=\"{{ inputs.tipo_carretera }}\">\n                <option value=\"\">Selecciona una opción</option>\n                <option value=\"1\">Libre</option>\n                <option value=\"2\">Cuota</option>\n            </select>\n        </div>\n        \n        <!-- Carretera -->\n        <div class=\"col-sm-12 col-md-5 form-group\">\n            <label class=\"col-form-label\">{{ labels.nombre_carretera }}</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{ labels.nombre_carretera }}\" formControlName=\"{{ inputs.nombre_carretera }}\">\n        </div>\n        \n        \n\n        <!-- Numero de kilometro -->\n        <div class=\"col-sm-12 col-md-2 form-group\">\n            <label class=\"col-form-label\">{{ labels.num_kilometro }}</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"{{ labels.num_kilometro }}\" min=\"0\" max=\"9999999\" formControlName=\"{{ inputs.num_kilometro }}\">\n        </div>\n\n\n        <!-- Obervaciones -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">{{ labels.observaciones }}</label>\n            <textarea class=\"form-control\" rows=\"3\" formControlName=\"{{ inputs.observaciones }}\"></textarea>\n        </div>\n    </div><!-- End solo carretera -->\n\n    <!-- Solo si se elige Ciudad en el lugar de siniestro -->\n     <div class=\"form-row\" *ngIf=\"showCity\">\n         <div class=\"col-md-12 col-sm-12\">\n            <h4 class=\"header-title mt-10 mb-20\">{{ header.ciudad }}</h4>\n            <p class=\"text-muted m-b-30\">{{ badge.ciudad }}</p>\n        </div>\n\n        <!-- Tipo de vialidad -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">{{ labels.tipo_vialidad }}</label>\n            <select class=\"form-control selectpicker mb-2\" formControlName=\"{{ inputs.tipo_vialidad }}\">\n                <option value=\"\">Selecciona una opción</option>\n                <option value=\"1\">Calle</option>\n                <option value=\"2\">Avenida</option>\n                <option value=\"3\">Glorieta</option>\n            </select>\n        </div>\n\n        <!-- Calle -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">{{ labels.nombre_calle }}</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{ labels.nombre_calle }}\" formControlName=\"{{ inputs.nombre_calle }}\">\n        </div>\n\n        <!-- Número exterior -->\n        <div class=\"col-sm-12 col-md-3 form-group\">\n            <label class=\"col-form-label\">{{ labels.num_exterior }}</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"{{ labels.num_exterior }}\" min=\"0\" max=\"9999999\" formControlName=\"{{ inputs.num_exterior }}\">\n        </div>\n        \n        <!-- Número interior -->\n        <div class=\"col-sm-12 col-md-3 form-group\">\n            <label class=\"col-form-label\">{{ labels.num_interior }}</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"{{ labels.num_interior }}\" min=\"0\" max=\"9999999\" formControlName=\"{{ inputs.num_interior }}\">\n        </div>\n\n        <!-- cod postal -->\n        <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">{{ labels.cod_postal }}</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"{{ labels.cod_postal }}\" min=\"0\" max=\"9999999\" formControlName=\"{{ inputs.cod_postal }}\">\n        </div>\n        \n        <!-- Colonia -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">{{ labels.colonia }}</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{ labels.colonia }}\" formControlName=\"{{ inputs.colonia }}\">\n        </div>\n        \n        <!-- Municipio/Delegación -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">{{ labels.municipio }}</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{ labels.municipio }}\" formControlName=\"{{ inputs.municipio }}\">\n        </div>\n\n        <!-- Estado -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">{{ labels.estado }}</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{ labels.estado }}\" formControlName=\"{{ inputs.estado }}\">\n        </div>\n\n\n        <!-- Entre calle 1 (Tipo de vialidad) -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">{{ labels.calle1_tipo }}</label>\n            <select class=\"form-control selectpicker mb-2\" formControlName=\"{{ inputs.calle1_tipo }}\">\n                <option value=\"\">Selecciona una opción</option>\n                <option value=\"1\">Calle</option>\n                <option value=\"2\">Avenida</option>\n                <option value=\"3\">Glorieta</option>\n            </select>\n        </div>\n\n        <!-- Entre calle 1 -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">{{ labels.calle1_nombre }}</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{ labels.calle1_nombre }}\" formControlName=\"{{ inputs.calle1_nombre }}\">\n        </div>\n\n\n        <!-- Entre calle 2 (Tipo de vialidad) -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">{{ labels.calle2_tipo }}</label>\n            <select class=\"form-control selectpicker mb-2\" formControlName=\"{{ inputs.calle2_tipo }}\">\n                <option value=\"\">Selecciona una opción</option>\n                <option value=\"1\">Calle</option>\n                <option value=\"2\">Avenida</option>\n                <option value=\"3\">Glorieta</option>\n            </select>\n        </div>\n\n        <!-- Entre calle 2 -->\n        <div class=\"col-md-6 col-sm-12 form-group\">\n            <label class=\"col-form-label\">{{ labels.calle2_nombre }}</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{ labels.calle2_nombre }}\" formControlName=\"{{ inputs.calle2_nombre }}\">\n        </div>\n    </div><!-- End solo ciudad -->\n    \n    <!-- Submit -->\n    <div class=\"form-row\">\n        <div class=\"col-md-6 mt-2\">\n            <button type=\"button\" class=\"btn btn-outline-danger\">\n                {{ labels.btnCancel }}\n            </button>\n        </div>\n        <div class=\"col-md-6 mt-2\">\n            <input type=\"submit\" class=\"btn btn-info pull-right\" value=\"{{ labels.btnNext }}\" [disabled]=\"!groupForm.valid\">\n        </div>\n    </div>\n    </form>\n</div>\n\n<!-- Modal texto -->\n<ng-template #addLocation let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{ header.location }}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15050.679039302579!2d-99.16516708362049!3d19.426669612830278!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1532716448064\" width=\"100%\" height=\"400\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-danger pull-left\" (click)=\"c('Close click')\">{{ labels.btnCancel }}</button>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/registro/pages/datos-de-siniestro/datos-de-siniestro.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/datos-de-siniestro/datos-de-siniestro.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .btn-link {\n  color: #3399CC; }\n"

/***/ }),

/***/ "./src/app/modules/registro/pages/datos-de-siniestro/datos-de-siniestro.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/datos-de-siniestro/datos-de-siniestro.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DatosDeSiniestroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosDeSiniestroComponent", function() { return DatosDeSiniestroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
/* harmony import */ var _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/local/storage/storage.service */ "./src/app/modules/registro/services/local/storage/storage.service.ts");
/* harmony import */ var _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../interfaces/labels */ "./src/app/modules/registro/interfaces/labels.ts");
/* harmony import */ var _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../interfaces/inputs */ "./src/app/modules/registro/interfaces/inputs.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DatosDeSiniestroComponent = /** @class */ (function () {
    function DatosDeSiniestroComponent(route, formBuilder, formatterService, storageService, config, modalService) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.formatterService = formatterService;
        this.storageService = storageService;
        this.modalService = modalService;
        // hidden
        this.showCity = false;
        this.showHighway = false;
        config.spinners = false;
        config.seconds = true;
        // inputs
        this.inputs = {
            cita_programada: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].cita_programada,
            fecha_ocurrido: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].fecha_ocurrido,
            fecha_atencion: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].fecha_atencion,
            hora_ocurrido: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].hora_ocurrido,
            hora_atencion: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].hora_atencion,
            lugar_siniestro: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].lugar_siniestro,
            tipo_vialidad: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].tipo_vialidad,
            nombre_calle: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].nombre_calle,
            num_exterior: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].num_exterior,
            num_interior: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].num_interior,
            cod_postal: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].cod_postal,
            colonia: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].colonia,
            municipio: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].municipio,
            estado: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].estado,
            calle1_tipo: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].calle1_tipo,
            calle1_nombre: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].calle1_nombre,
            calle2_tipo: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].calle2_tipo,
            calle2_nombre: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].calle2_nombre,
            tipo_carretera: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].tipo_carretera,
            nombre_carretera: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].nombre_carretera,
            num_kilometro: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].num_kilometro,
            observaciones: _interfaces_inputs__WEBPACK_IMPORTED_MODULE_7__["datosDeSiniestro"].observaciones
        };
        this.groupForm = this.formBuilder.group((_a = {},
            _a[this.inputs.cita_programada] = [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _a[this.inputs.fecha_ocurrido] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _a[this.inputs.fecha_atencion] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _a[this.inputs.hora_ocurrido] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _a[this.inputs.hora_atencion] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _a[this.inputs.lugar_siniestro] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _a[this.inputs.tipo_vialidad] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _a[this.inputs.nombre_calle] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _a[this.inputs.num_exterior] = '',
            _a[this.inputs.num_interior] = '',
            _a[this.inputs.cod_postal] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _a[this.inputs.colonia] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _a[this.inputs.municipio] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _a[this.inputs.estado] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _a[this.inputs.calle1_tipo] = '',
            _a[this.inputs.calle1_nombre] = '',
            _a[this.inputs.calle2_tipo] = '',
            _a[this.inputs.calle2_nombre] = '',
            _a[this.inputs.tipo_carretera] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _a[this.inputs.nombre_carretera] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _a[this.inputs.num_kilometro] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _a[this.inputs.observaciones] = '',
            _a));
        var _a;
    }
    DatosDeSiniestroComponent.prototype.selectChangeHandler = function (event) {
        this.showCity = false;
        this.showHighway = false;
        if (event.target.value == 1) {
            this.showCity = true;
        }
        else if (event.target.value == 2) {
            this.showHighway = true;
        }
    };
    DatosDeSiniestroComponent.prototype.ngOnInit = function () {
        this.formatterService.actualizarSubSeccionActiva('seccionSiniestro');
        this.header = _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].header;
        this.badge = _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].badge;
        this.labels = {
            tipo_cita: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].tipo_cita,
            cita_sinprogramar: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].cita_sinprogramar,
            cita_programada: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].cita_programada,
            fecha_ocurrido: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].fecha_ocurrido,
            fecha_atencion: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].fecha_atencion,
            hora_ocurrido: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].hora_ocurrido,
            hora_atencion: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].hora_atencion,
            lugar_siniestro: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].lugar_siniestro,
            tipo_vialidad: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].tipo_vialidad,
            nombre_calle: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].nombre_calle,
            num_exterior: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].num_exterior,
            num_interior: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].num_interior,
            cod_postal: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].cod_postal,
            colonia: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].colonia,
            municipio: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].municipio,
            estado: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].estado,
            calle1_tipo: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].calle1_tipo,
            calle1_nombre: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].calle1_nombre,
            calle2_tipo: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].calle2_tipo,
            calle2_nombre: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].calle2_nombre,
            tipo_carretera: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].tipo_carretera,
            nombre_carretera: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].nombre_carretera,
            num_kilometro: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].num_kilometro,
            observaciones: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["datosDeSiniestro"].observaciones,
            btnNext: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["btn"].next,
            btnCancel: _interfaces_labels__WEBPACK_IMPORTED_MODULE_6__["btn"].cancel
        };
    };
    DatosDeSiniestroComponent.prototype.openModal = function (content) {
        this.modalService.open(content, { centered: true });
    };
    DatosDeSiniestroComponent.prototype.onSubmit = function () {
    };
    DatosDeSiniestroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datos-de-siniestro',
            template: __webpack_require__(/*! ./datos-de-siniestro.component.html */ "./src/app/modules/registro/pages/datos-de-siniestro/datos-de-siniestro.component.html"),
            styles: [__webpack_require__(/*! ./datos-de-siniestro.component.scss */ "./src/app/modules/registro/pages/datos-de-siniestro/datos-de-siniestro.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_4__["FormatterService"],
            _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTimepickerConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], DatosDeSiniestroComponent);
    return DatosDeSiniestroComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/datos-de-vehiculo/datos-de-vehiculo.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/datos-de-vehiculo/datos-de-vehiculo.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box\">\n    <!-- Form header -->\n    <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n            <h4 class=\"header-title m-t-0\">5. Datos del vehículo</h4>\n        </div>\n            <div class=\"col-md-6 col-sm-12 text-right\">\n            <span class=\"text-muted span-order\"><i class=\"mdi mdi-city\"></i> Compañia Seguros S.A. de C.V.</span>\n            <span class=\"text-muted span-order\">Deudora</span>\n            <span>AB13A</span>\n        </div>\n    </div>\n    <hr class=\"mt-0\">\n\n    <form [formGroup]=\"groupForm\" (ngSubmit)=\"onSubmit()\"> \n    <div class=\"row\">\n        <!-- VIN (Siniestro) -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">VIN (Siniestro)</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"VIN (Siniestro)\">\n        </div>\n  \n        <!-- Marca -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Marca</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona una marca</option>\n                <option value=\"1\">Audi</option>\n                <option value=\"2\">BMW</option>\n                <option value=\"3\">Chevrolet</option>\n                <option value=\"4\">Otro</option>\n            </select>\n        </div>\n\n        <!-- Modelo -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Modelo</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona un modelo</option>\n                <option value=\"1\">2018</option>\n                <option value=\"1\">2017</option>\n                <option value=\"1\">2016</option>\n                <option value=\"1\">2015</option>\n                <option value=\"1\">2014</option>\n                <option value=\"2\">2013</option>\n                <option value=\"1\">etc.</option>\n            </select>\n        </div>\n\n        <!-- Tipo (Submarca) -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Tipo (Submarca)</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona un tipo</option>\n                <option value=\"1\">Sedan</option>\n                <option value=\"2\">Vagoneta</option>\n            </select>\n        </div>\n\n        <!-- Uso -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Uso</label>\n            <select class=\"form-control selectpicker mb-2\">\n                    <option value=\"\">Selecciona un uso</option>\n                    <option value=\"1\">Privado</option>\n                    <option value=\"2\">Transporte</option>\n                    <option value=\"3\">Carga</option>\n            </select>\n        </div>\n\n        <!-- Clase -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Clase</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona un clase</option>\n                <option value=\"1\">Dos ruedas</option>\n                <option value=\"2\">Cuatro ruedas</option>\n                <option value=\"3\">Remolque</option>\n             </select>\n        </div>\n\n        <!-- Color -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Color</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona un color</option>\n                <option value=\"1\">Rojo</option>\n                <option value=\"2\">Amarillo</option>\n                <option value=\"3\">Azul</option>\n            </select>\n        </div>\n  \n        <!-- Número de placas o permiso -->\n        <div class=\"col-md-12 col-sm-12 form-group\">\n            <label class=\"col-form-label\">Número de Placa/Permiso</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Número de Placa/Permiso\">\n        </div>\n    </div>\n    <hr>\n  \n    <!-- Submit -->\n    <div class=\"form-row\">\n        <div class=\"col-md-6 mt-2\">\n            <button type=\"button\" class=\"btn btn-outline-danger\">Cancelar</button>\n        </div>\n        <div class=\"col-md-6 mt-2\">\n            <input type=\"submit\" class=\"btn btn-info pull-right\" value=\"Siguiente\" [disabled]=\"!groupForm.valid\">\n        </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/modules/registro/pages/datos-de-vehiculo/datos-de-vehiculo.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/datos-de-vehiculo/datos-de-vehiculo.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registro/pages/datos-de-vehiculo/datos-de-vehiculo.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/datos-de-vehiculo/datos-de-vehiculo.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DatosDeVehiculoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosDeVehiculoComponent", function() { return DatosDeVehiculoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
/* harmony import */ var _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local/storage/storage.service */ "./src/app/modules/registro/services/local/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatosDeVehiculoComponent = /** @class */ (function () {
    function DatosDeVehiculoComponent(formatterService, storageService, formBuilder) {
        this.formatterService = formatterService;
        this.storageService = storageService;
        this.formBuilder = formBuilder;
    }
    DatosDeVehiculoComponent.prototype.ngOnInit = function () {
        this.formatterService.actualizarSubSeccionActiva('seccionVehiculo');
        this.groupForm = this.formBuilder.group({});
    };
    DatosDeVehiculoComponent.prototype.onSubmit = function () {
        var element = document.getElementById('involucrados-lesionados');
        element.click();
    };
    DatosDeVehiculoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datos-de-vehiculo',
            template: __webpack_require__(/*! ./datos-de-vehiculo.component.html */ "./src/app/modules/registro/pages/datos-de-vehiculo/datos-de-vehiculo.component.html"),
            styles: [__webpack_require__(/*! ./datos-de-vehiculo.component.scss */ "./src/app/modules/registro/pages/datos-de-vehiculo/datos-de-vehiculo.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__["FormatterService"],
            _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DatosDeVehiculoComponent);
    return DatosDeVehiculoComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/flujo-registro/flujo-registro.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/flujo-registro/flujo-registro.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-stepper [data]=\"itemsFlujo\" [mediaCss]=\"mediaCss\"></app-stepper>\n\n<!-- <div class=\"row card-box mt-5 edua-card\"> -->\n  <!-- <div class=\"col-sm-12\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-6\">\n        <h4 class=\"header-title m-t-0\">(No sección) (nombre sección)</h4>\n      </div>\n      <div class=\"col-sm-12 col-md-6 text-right\">\n        <span class=\"text-muted span-order\">\n          <i class=\"mdi mdi-city\"></i>\n          (Nombre compañia)\n        </span>\n        <span class=\"text-muted span-order\">(Responsable o Afectado)</span>\n        <span>(Folio)</span>\n      </div>\n    </div>\n    <hr class=\"mt-0\"><br>\n  </div> -->\n    \n  <div class=\"col-sm-12\">\n    <router-outlet name=\"registroEnLinea\"></router-outlet>\n  </div>\n<!-- </div> -->\n\n\n\n\n"

/***/ }),

/***/ "./src/app/modules/registro/pages/flujo-registro/flujo-registro.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/flujo-registro/flujo-registro.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngb-tabset /deep/ .nav-pills > li > a {\n  background: #f4f6f8;\n  color: #7d7d7d;\n  border-radius: 50%;\n  margin: 5px 10px;\n  width: 45px;\n  height: 45px;\n  padding: 6px;\n  font-size: 22px;\n  text-align: center;\n  border: 2px solid #e4e3e3; }\n\nngb-tabset /deep/ .nav-pills {\n  margin-top: 30px; }\n\nngb-tabset /deep/ .nav-pills > li > a > span {\n  font-size: 8px;\n  line-height: 10px;\n  display: block;\n  width: 60px;\n  color: #7d7d7d;\n  text-transform: uppercase;\n  margin: 12px -16px;\n  text-align: center; }\n\nngb-tabset /deep/ .nav-pills > li > a::before {\n  content: '';\n  background: #e4e3e3;\n  width: 45px;\n  height: 2px;\n  position: absolute;\n  display: inline-block;\n  margin: 13px;\n  z-index: -1; }\n\nngb-tabset /deep/ .nav-pills > li:last-child > a::before {\n  background: transparent; }\n\nngb-tabset /deep/ .nav-pills .nav-link img {\n  display: block; }\n\nngb-tabset /deep/ .nav-pills .nav-link.active {\n  background: #2fb3e3;\n  border: 2px solid #2fb3e3; }\n\nngb-tabset /deep/ .nav-pills .nav-link.active img {\n  color: #fff;\n  -webkit-filter: hue-rotate(60deg) brightness(500%);\n  -moz-filter: hue-rotate(60deg) brightness(500%);\n  -o-filter: hue-rotate(60deg) brightness(500%);\n  filter: hue-rotate(60deg) brightness(500%); }\n\nngb-tabset /deep/ .tab-content {\n  padding: 0; }\n\n@media screen and (max-width: 640px) {\n  ngb-tabset /deep/ .nav.nav-pills.justify-content-center {\n    position: fixed;\n    right: 5px;\n    top: 26px;\n    z-index: 999;\n    height: 610px;\n    width: 50px;\n    overflow: auto; }\n  ngb-tabset /deep/ .nav-pills > li > a {\n    margin: 3px; }\n  ngb-tabset /deep/ .nav-pills > li > a::before {\n    content: '';\n    width: 0;\n    height: 0;\n    margin: 0;\n    z-index: -1; } }\n\n@media screen and (max-width: 1290px) {\n  ngb-tabset /deep/ .nav-pills > li > a > span {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/modules/registro/pages/flujo-registro/flujo-registro.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/registro/pages/flujo-registro/flujo-registro.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FlujoRegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlujoRegistroComponent", function() { return FlujoRegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_remote_registro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/remote/registro.service */ "./src/app/modules/registro/services/remote/registro.service.ts");
/* harmony import */ var _services_local_factory_factory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local/factory/factory.service */ "./src/app/modules/registro/services/local/factory/factory.service.ts");
/* harmony import */ var _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/local/storage/storage.service */ "./src/app/modules/registro/services/local/storage/storage.service.ts");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FlujoRegistroComponent = /** @class */ (function () {
    function FlujoRegistroComponent(router, route, RegistroService, factoryService, storageService, formatterService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.RegistroService = RegistroService;
        this.factoryService = factoryService;
        this.storageService = storageService;
        this.formatterService = formatterService;
        this.mediaCss = "hiden-lg";
        this.storageService.updateRegistro().subscribe(function (data) {
            _this.asignarDatosAFlujo(data);
        });
    }
    FlujoRegistroComponent.prototype.ngOnInit = function () {
        this.params = this.route.snapshot.paramMap.get('params');
        this.formatterService.actualizarSeccionActiva(this.params);
        this.storageService.setFlagSubFlujo(this.params);
    };
    FlujoRegistroComponent.prototype.ngOnDestroy = function () { };
    FlujoRegistroComponent.prototype.asignarDatosAFlujo = function (data) {
        var _this = this;
        this.formatterService.eliminarDataSeccion(data[this.params].data).then(function (data) {
            _this.itemsFlujo = data;
        });
    };
    FlujoRegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flujo-registro',
            template: __webpack_require__(/*! ./flujo-registro.component.html */ "./src/app/modules/registro/pages/flujo-registro/flujo-registro.component.html"),
            styles: [__webpack_require__(/*! ./flujo-registro.component.scss */ "./src/app/modules/registro/pages/flujo-registro/flujo-registro.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_remote_registro_service__WEBPACK_IMPORTED_MODULE_2__["RegistroService"],
            _services_local_factory_factory_service__WEBPACK_IMPORTED_MODULE_3__["FactoryService"],
            _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_5__["FormatterService"]])
    ], FlujoRegistroComponent);
    return FlujoRegistroComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/fotos/fotos.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/registro/pages/fotos/fotos.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box mt-5 edua-card\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-6\">\n        <h4 class=\"header-title m-t-0\">10. Fotos</h4>\n      </div>\n      <div class=\"col-sm-12 col-md-6 text-right\">\n        <span class=\"text-muted span-order\">\n          <i class=\"mdi mdi-city\"></i>\n          Compañia Seguros S.A. de C.V.\n        </span>\n        <span class=\"text-muted span-order\">Deudora</span>\n        <span>AB13A</span>\n      </div>\n    </div>\n  \n    <hr class=\"mt-0\"><br>\n\n    \n\n  \n    <!-- TABLA -->\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <table class=\"table edua-table\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th *ngFor=\"let cabecera of cabeceras\">{{cabecera.nombre}}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let catacteristica of caracteristicas\">\n              <td class=\"text-muted m-b-25 font-14 xx\">{{catacteristica.nombre}}</td>\n              <td class=\"text-muted m-b-25 font-14 xxx\">{{catacteristica.imagenes.length}}</td>\n              <td class=\"button-list x\">\n                <input \n                  style=\"display: none\" \n                  type=\"file\" (change)=\"onFileChanged($event, catacteristica.id)\"\n                  accept=\".jpg, .jpeg, .png\" \n                  multiple\n                  #fileInput>\n                <button class=\"btn btn-icon waves-effect waves-light btn-info btn-sm\" \n                  (click)=\"fileInput.click()\">\n                  <i class=\"fa fa-upload\"></i>\n                </button>\n                <button class=\"btn btn-icon waves-effect waves-light btn-danger btn-sm\" \n                  (click)=\"eliminarImagenesTodas(catacteristica.id)\" \n                  *ngIf=\"catacteristica.imagenes.length\"\n                  placement=\"right\" ngbTooltip=\"Eliminar todas las imagenes\">\n                  <i class=\"fa fa-trash-o\"></i>\n                </button>\n                <button class=\"btn btn-icon waves-effect waves-light btn-warning btn-sm\" \n                  (click)=\"verOpcionesImagenes(modalOpciones, catacteristica)\" \n                  *ngIf=\"catacteristica.imagenes.length\"\n                  placement=\"right\" ngbTooltip=\"Ver las imagenes\">\n                  <i class=\"fa fa-ellipsis-h\"></i>\n                </button>\n\n              \n              </td>\n              <td>\n                <ngb-alert class=\"edua-alert\" *ngIf=\"catacteristica.alert.view\" [type]=\"catacteristica.alert?.type\" [dismissible]=\"true\" (close)=\"cerrarAlertaMensaje(catacteristica.id)\">\n                  <span *ngFor=\"let text of catacteristica.alert?.text\" [innerHTML]=\"text\"></span>\n                </ngb-alert>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <h5>Imagenes Totales: {{calcularTotalImagenes()}}</h5>\n      </div>\n    </div>\n  \n    <ng-template #modalOpciones let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{verOpcionesCaracteristica?.nombre}}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"cerrarModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      \n      <div class=\"modal-body edua-modal-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <table class=\"table edua-table\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th>Nombre imagen</th>\n                  <th>Tipo</th>\n                  <th>Tamaño</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let imagen of verOpcionesCaracteristica.imagenes\">\n                  <td class=\"text-muted m-b-25 font-14\">{{imagen.nombre}}</td>\n                  <td class=\"text-muted m-b-25 font-14\">{{imagen.tipo}}</td>\n                  <td class=\"text-muted m-b-25 font-14\">{{imagen.size}}</td>\n                  <td class=\"button-list\">\n                    <button class=\"btn btn-icon waves-effect waves-light btn-danger btn-sm\" (click)=\"eliminarImagen(imagen.id)\">\n                      <i class=\"fa fa-trash-o\"></i>\n                    </button>\n                    <button class=\"btn btn-icon waves-effect waves-light btn-info btn-sm\" (click)=\"verImagenCat(imagen)\">\n                      <i class=\"fa fa-eye\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12 _center-items\" *ngIf=\"verImagen\">\n            <img class=\"edua-img-modal-01\" [src]=\"verImagen?.url\" >\n          </div>\n        </div>\n      </div>\n  \n      <div class=\"modal-footer\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <button class=\"btn btn-info waves-effect waves-light\" (click)=\"aceptarModal()\">\n              <span>Aceptar</span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  \n    <br><hr class=\"mt-0\"><br>\n  \n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-6\">\n        <button class=\"btn btn-danger waves-effect waves-light\">\n          <span>Cancelar</span>\n        </button>\n      </div>\n      <div class=\"col-sm-12 col-md-6 _right-items\">\n        <button class=\"btn btn-info waves-effect waves-light edua-btn\">\n          <span>Anterior</span>\n        </button>\n        <button class=\"btn btn-info waves-effect waves-light\">\n          <span>Siguiente</span>\n        </button>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/modules/registro/pages/fotos/fotos.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/registro/pages/fotos/fotos.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edua-card {\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2); }\n\n.edua-table {\n  border: 1px solid #ccc; }\n\n.icon-no-pase {\n  color: #dc3545;\n  font-size: 20px; }\n\n.icon-pase {\n  color: #28a745;\n  font-size: 20px; }\n\n.edua-form {\n  padding: 0 30px; }\n\n.font-size-12 {\n  font-size: 14px; }\n\n.edua-radio-btn {\n  margin: 0 10px; }\n\n.edua-modal-body {\n  max-height: 75vh;\n  overflow-y: scroll; }\n\n.edua-btn {\n  margin: 0 30px; }\n\nimg.edua-img-modal-01 {\n  height: 30vh;\n  width: auto; }\n\n.x {\n  width: 15vmax; }\n\n.xxx {\n  width: 10vmax; }\n\n.xx {\n  width: 25vmax; }\n\nngb-alert.edua-alert /deep/ div.alert {\n  margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/modules/registro/pages/fotos/fotos.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/registro/pages/fotos/fotos.component.ts ***!
  \*****************************************************************/
/*! exports provided: FotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotosComponent", function() { return FotosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
/* harmony import */ var _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local/storage/storage.service */ "./src/app/modules/registro/services/local/storage/storage.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FotosComponent = /** @class */ (function () {
    function FotosComponent(formatterService, storageService, formBuilder, modalService) {
        this.formatterService = formatterService;
        this.storageService = storageService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.alerta = { view: false, id: null };
        this.cabeceras = [
            {
                nombre: 'Característica',
            },
            {
                nombre: 'Número de fotos',
            },
            {
                nombre: '',
            },
            {
                nombre: '',
            }
        ];
        this.caracteristicas = [
            {
                id: 1,
                nombre: 'Automóvil/Siniestro',
                imagenes: []
            },
            {
                id: 2,
                nombre: 'Daños',
                imagenes: []
            },
            {
                id: 3,
                nombre: 'Documentos',
                imagenes: []
            },
            {
                id: 4,
                nombre: 'VIN',
                imagenes: []
            },
            {
                id: 5,
                nombre: 'Crucero',
                imagenes: []
            },
            {
                id: 6,
                nombre: 'Lesiones',
                imagenes: []
            },
            {
                id: 7,
                nombre: 'Otros',
                imagenes: []
            }
        ];
    }
    FotosComponent.prototype.ngOnInit = function () {
        this.formatterService.actualizarSubSeccionActiva('seccionFotos');
        this.groupForm = this.formBuilder.group({
            conductor_igual_asegurado: true,
        });
        this.caracteristicas.map(function (item, index) {
            item.alert = { view: false, type: null, text: [] };
        });
    };
    FotosComponent.prototype.onSubmit = function () {
        var element = document.getElementById('croquis');
        element.click();
    };
    FotosComponent.prototype.cerrarAlertaMensaje = function (id) {
        this.caracteristicas.forEach(function (item) {
            if (item.id == id) {
                item.alert.view = false;
            }
        });
    };
    FotosComponent.prototype.onFileChanged = function (event, id) {
        var _this = this;
        this.buildImages(event.target.files).then(function (data) {
            _this.caracteristicas.forEach(function (item) {
                if (item.id == id) {
                    item.imagenes = data.concat(item.imagenes);
                    item.alert = _this.buildAlert(data);
                    lodash__WEBPACK_IMPORTED_MODULE_5__["remove"](item.imagenes, function (img) {
                        return !img.isValid;
                    });
                }
            });
        }, function (err) { });
    };
    FotosComponent.prototype.buildAlert = function (items) {
        var alert = { view: true, type: null, text: [] };
        var itemsInvalid = [];
        var noItemsValid = 0;
        var text = [];
        items.forEach(function (item) {
            if (!item.isValid) {
                itemsInvalid.push("<i>- \"Archivo " + item.nombre + "\"</i><b> no valido.</b><br>");
            }
            else {
                noItemsValid++;
            }
            ;
        });
        if (noItemsValid)
            text.push("Se cargaron exitosamente " + noItemsValid + " archivo(s).<br>");
        if (itemsInvalid.length != 0)
            text.push("<b>Error:</b><br>");
        alert.type = (itemsInvalid.length != 0) ? 'danger' : 'success';
        alert.text = text.concat(itemsInvalid);
        return alert;
    };
    FotosComponent.prototype.isValidFile = function (typeParam) {
        var fomatosPermitidos = ['image/jpg', 'image/jpge', 'image/png'];
        var isValid = false;
        fomatosPermitidos.forEach(function (type) { if (type == typeParam)
            isValid = true; });
        return isValid;
    };
    FotosComponent.prototype.buildImages = function (files) {
        var _this = this;
        var arrayPromises = [];
        var _loop_1 = function (i) {
            var promise = new Promise(function (resolve, reject) {
                var objImage = { isValid: null, data: null, id: null, nombre: null, tipo: null, size: null, url: null };
                var reader = new FileReader();
                if (_this.isValidFile(files[i].type)) {
                    reader.readAsDataURL(files[i]);
                    reader.onload = function (event) {
                        objImage.isValid = true;
                        objImage.url = event.target.result;
                        objImage.nombre = files[i].name;
                        objImage.size = files[i].size;
                        objImage.tipo = files[i].type;
                        objImage.data = files[i];
                        objImage.id = i;
                        resolve(objImage);
                    };
                }
                else {
                    objImage.isValid = false;
                    objImage.nombre = files[i].name;
                    resolve(objImage);
                }
            });
            arrayPromises.push(promise);
        };
        for (var i = 0; i < files.length; i++) {
            _loop_1(i);
        }
        return Promise.all(arrayPromises);
    };
    FotosComponent.prototype.verOpcionesImagenes = function (modal, item) {
        this.cerrarAlertaMensaje(item.id);
        this.verOpcionesCaracteristica = item;
        this.modal = this.modalService.open(modal, { backdrop: 'static', size: 'lg' });
    };
    FotosComponent.prototype.eliminarImagenesTodas = function (id) {
        this.cerrarAlertaMensaje(id);
        this.caracteristicas.forEach(function (item) {
            lodash__WEBPACK_IMPORTED_MODULE_5__["remove"](item.imagenes, function () {
                return item.id == id;
            });
        });
    };
    FotosComponent.prototype.calcularTotalImagenes = function () {
        var total = 0;
        this.caracteristicas.forEach(function (item) {
            total += item.imagenes.length;
        });
        return total;
    };
    FotosComponent.prototype.eliminarImagen = function (id) {
        lodash__WEBPACK_IMPORTED_MODULE_5__["remove"](this.verOpcionesCaracteristica.imagenes, function (img) {
            return img.id == id;
        });
        if (this.verImagen && id == this.verImagen.id)
            this.verImagen = null;
    };
    FotosComponent.prototype.verImagenCat = function (img) {
        this.verImagen = img;
    };
    FotosComponent.prototype.closeAlert = function () { };
    ;
    FotosComponent.prototype.cerrarModal = function () {
        console.log("==>> CERRANDO MODAL....");
        this.verImagen = null;
        this.verOpcionesCaracteristica = null;
        this.modal.close();
    };
    FotosComponent.prototype.aceptarModal = function () {
        console.log("==>> OK MODAL DISMISS ....");
        this.verImagen = null;
        this.verOpcionesCaracteristica = null;
        this.modal.dismiss();
    };
    FotosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fotos',
            template: __webpack_require__(/*! ./fotos.component.html */ "./src/app/modules/registro/pages/fotos/fotos.component.html"),
            styles: [__webpack_require__(/*! ./fotos.component.scss */ "./src/app/modules/registro/pages/fotos/fotos.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__["FormatterService"],
            _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], FotosComponent);
    return FotosComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/generacion-de-ordenes/generacion-de-ordenes.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/generacion-de-ordenes/generacion-de-ordenes.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box mt-5\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <!-- Form header -->\n      <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n          <h4 class=\"header-title m-t-0\">12. Generación de ordenes</h4>\n        </div>\n        <div class=\"col-md-6 col-sm-12 text-right\">\n          <span class=\"text-muted span-order\"><i class=\"mdi mdi-city\"></i> Compañia Seguros S.A. de C.V.</span>\n          <span class=\"text-muted span-order\">Deudora</span>\n          <span>AB13A</span>\n        </div>\n      </div>\n      <hr class=\"mt-0\">\n\n      <form [formGroup]=\"groupForm\" (ngSubmit)=\"onSubmit()\"> \n        <div class=\"row\">\n          <!-- Compañia deudora -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Compañia Deudora</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Compañia deudora\" disabled>\n            </div>\n          </div>\n          <!-- Compañia acreedora -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Compañia Acreedora</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Compañia acreedora\" disabled>\n            </div>\n          </div>\n\n          <!-- Circunstancia (Responsable) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Circunstancia (Responsable)</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Circunstancia afectado\" disabled>\n            </div>\n          </div>\n\n          <!-- Circunstancia (Afectado) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Circunstancia (Afectado)</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Circunstancia afectado\" disabled>\n            </div>\n          </div>\n\n          <!-- Tipo de orden -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Tipo de Orden</p>\n              <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona una opción</option>\n                <option value=\"1\">Otro</option>\n              </select>\n            </div>\n          </div>\n\n          <!-- Concluido -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup formControlName=\"concluido\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Concluido</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\" (change)=\"selectChangeHandler($event)\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si </span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\" (change)=\"selectChangeHandler($event)\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No </span>\n            </div>\n          </div>\n\n          <!-- Motivo -->\n          <div class=\"col-md-6 col-sm-12\" *ngIf=\"!showMotiv\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Motivo</p>\n              <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona una opción</option>\n                <option value=\"1\">Otro</option>\n              </select>\n            </div>\n          </div>\n          <!-- Agregar Nueva Orden  -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\" *ngIf=\"!showMotiv\"> &nbsp; </p>\n              <button class=\"btn btn-info waves-light \"><i class=\"mdi mdi-plus\"></i> Nuevo</button>\n            </div>\n          </div>\n          \n        </div>\n        <hr>\n\n        <!-- Submit -->\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-12 mt-2\">\n            <button class=\"btn btn-outline-primary waves-light mr-2\"\n              [routerLink]=\"['/main-dashboard/tablero-operaciones']\">Cancelar</button>\n              <input type=\"submit\" class=\"btn btn-info waves-light\" value=\"Siguiente\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/registro/pages/generacion-de-ordenes/generacion-de-ordenes.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/generacion-de-ordenes/generacion-de-ordenes.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registro/pages/generacion-de-ordenes/generacion-de-ordenes.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/generacion-de-ordenes/generacion-de-ordenes.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: GeneracionDeOrdenesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneracionDeOrdenesComponent", function() { return GeneracionDeOrdenesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneracionDeOrdenesComponent = /** @class */ (function () {
    function GeneracionDeOrdenesComponent(formBuilder, formatterService) {
        this.formBuilder = formBuilder;
        this.formatterService = formatterService;
        this.showMotiv = true;
        this.formatterService.actualizarSeccionActiva('seccionGeneracionOrdenes');
    }
    GeneracionDeOrdenesComponent.prototype.ngOnInit = function () {
        this.groupForm = this.formBuilder.group({
            concluido: true,
        });
    };
    GeneracionDeOrdenesComponent.prototype.selectChangeHandler = function (event) {
        // si es tiene pase médico
        this.showMotiv = event.target.value;
    };
    GeneracionDeOrdenesComponent.prototype.onSubmit = function () {
        var element = document.getElementById('termino-atencion');
        element.click();
    };
    GeneracionDeOrdenesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generacion-de-ordenes',
            template: __webpack_require__(/*! ./generacion-de-ordenes.component.html */ "./src/app/modules/registro/pages/generacion-de-ordenes/generacion-de-ordenes.component.html"),
            styles: [__webpack_require__(/*! ./generacion-de-ordenes.component.scss */ "./src/app/modules/registro/pages/generacion-de-ordenes/generacion-de-ordenes.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__["FormatterService"]])
    ], GeneracionDeOrdenesComponent);
    return GeneracionDeOrdenesComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/informe-de-ajustador/informe-de-ajustador.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/informe-de-ajustador/informe-de-ajustador.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box mt-5\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <!-- Form header -->\n      <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n          <h4 class=\"header-title m-t-0\">Informe Ajustador</h4>\n        </div>\n        <div class=\"col-md-6 col-sm-12 text-right\">\n          <span class=\"text-muted span-order\"><i class=\"mdi mdi-city\"></i> Compañia Seguros S.A. de C.V.</span>\n          <span class=\"text-muted span-order\">Deudora</span>\n          <span>AB13A</span>\n        </div>\n      </div>\n      <hr class=\"mt-0\">\n\n      <form [formGroup]=\"groupForm\" (ngSubmit)=\"onSubmit()\"> \n        <div class=\"row\">\n\n          <!-- Informe Técnico -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Informe Técnico</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Informe Técnico\" disabled>\n            </div>\n          </div>\n          \n          <!-- Nombre del usuario (informe de ajustador) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Nombre del usuario (informe de ajustador)</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Nombre del usuario (informe de ajustador)\" disabled>\n            </div>\n          </div>\n\n          <!-- Fecha registro (informe de ajustador) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Fecha registro (informe de ajustador)</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Fecha registro (informe de ajustador)\" disabled>\n            </div>\n          </div>\n\n          <!-- Descripción del complemento -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Descripción del complemento</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Descripción del complemento\" disabled>\n            </div>\n          </div>\n\n          <!-- Complemento del informe técnico -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Complemento del informe técnico</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n\n          <!-- Volante de Admisión -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Volante de Admisión</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n\n          <!-- Daños Materiales -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Daños Materiales</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n\n          <!-- Responsabilidad Civil -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Responsabilidad Civil</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n\n          <!-- Solicitó Grua -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Solicitó Grua</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n\n          <!-- Grua Consesionada -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Grua Consesionada</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n\n          <!-- Hora de arribo -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Hora de Arribo</p>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"mdi mdi-timer\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Hora de arribo\">\n              </div>\n            </div>\n          </div>\n\n          <!-- Vehículo en Corralón -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Vehículo en Corralón</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n\n          <!-- Solicitó Ambulancia -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Solicitó Ambulancia</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n\n          <!-- Hora de arribo -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Hora de Arribo</p>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"mdi mdi-timer\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Hora de arribo\">\n              </div>\n            </div>\n          </div>\n\n          <!-- Solicitó Abogado -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Solicitó Abogado</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n\n          <!-- Hora de arribo -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Hora de Arribo</p>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"mdi mdi-timer\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Hora de arribo\">\n              </div>\n            </div>\n          </div>\n\n          <!-- Autoridad que tomo el conocimiento -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Autoridad que tomo el conocimiento</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Autoridad que tomo el conocimiento\">\n            </div>\n          </div>\n\n          <!-- Abogado Asignado -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Abogado Asignado</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Abogado Asignado\">\n            </div>\n          </div>\n\n          <!-- Número de Acta -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Número de Acta</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Número de Acta\" >\n            </div>\n          </div>\n\n          <!-- Número de Reporte -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Número de Reporte</p>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Número de Reporte\">\n            </div>\n          </div>\n\n          <!-- Daños Materiales (estimado) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Daños Materiales (estimado)</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n\n          <!-- Importe estimado (daños materiales) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Importe estimado (daños materiales)</p>\n              <input type=\"number\" class=\"form-control\" min=\"0\" >\n            </div>\n          </div>\n\n          <!-- Equipo especial y/o adaptaciones -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Equipo especial y/o adaptaciones</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n\n          <!-- Importe estimado (equipo especial y/o adaptaciones) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Importe estimado (equipo especial y/o adaptaciones)</p>\n              <input type=\"number\" class=\"form-control\" min=\"0\" >\n            </div>\n          </div>\n\n          <!-- Robo Total -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Robo Total</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n          \n          <!-- Importe estimado (Robo Total) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Importe estimado (Robo Total)</p>\n              <input type=\"number\" class=\"form-control\" min=\"0\">\n            </div>\n          </div>\n    \n          <!-- Responsabilidad civil personas -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Responsabilidad civil personas</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n          \n          <!-- Numero de lesionados  (responsabilidad civil personas) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Numero de lesionados  (responsabilidad civil personas)</p>\n              <input type=\"number\" class=\"form-control\" min=\"0\">\n            </div>\n          </div> \n          \n          <!-- Importe estimado (responsabilidad civil personas) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Importe estimado (responsabilidad civil personas)</p>\n              <input type=\"number\" class=\"form-control\" min=\"0\">\n            </div>\n          </div>       \n\n          <!-- Gastos médicos Ocupantes -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Gastos médicos Ocupantes</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n\n          <!-- Numero de lesionados (gastos médicos a ocupantes) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Numero de lesionados (gastos médicos a ocupantes)</p>\n              <input type=\"number\" class=\"form-control\" min=\"0\" disabled>\n            </div>\n          </div> \n          \n          <!-- Importe estimado (gastos médicos a ocupantes) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Importe estimado (gastos médicos a ocupantes)</p>\n              <input type=\"number\" class=\"form-control\" min=\"0\" >\n            </div>\n          </div>\n\n          <!-- Gastos legales -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Gastos legales</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n\n          <!-- Importe estimado (gastos legales) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Importe estimado (gastos legales)</p>\n              <input type=\"number\" class=\"form-control\" min=\"0\" >\n            </div>\n          </div>\n\n          <!-- Accidentes Personales de Conductor y Ocupante  -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Accidentes Personales de Conductor y Ocupante </p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n\n          <!-- Numero de lesionados (accidentes personales de conductor y ocupante) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Numero de lesionados (accidentes personales de conductor y ocupante)</p>\n              <input type=\"number\" class=\"form-control\" min=\"0\" >\n            </div>\n          </div>\n\n          <!-- Importe estimado (accidentes personales de conductor y ocupante) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Importe estimado (accidentes personales de conductor y ocupante)</p>\n              <input type=\"number\" class=\"form-control\" min=\"0\" >\n            </div>\n          </div>\n\n          <!-- R.C. Viajero  -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">R.C. Viajero </p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n\n          <!-- Numero de lesionados (R.C. viajero) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Numero de lesionados (R.C. viajero)</p>\n              <input type=\"number\" class=\"form-control\" min=\"0\" >\n            </div>\n          </div>\n\n          <!-- Importe estimado (R.C. viajero) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Importe estimado (R.C. viajero)</p>\n              <input type=\"number\" class=\"form-control\" min=\"0\" >\n            </div>\n          </div>\n\n          <!-- Cristales  -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Cristales</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n\n          <!-- Importe estimado (cristales) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Importe estimado (cristales)</p>\n              <input type=\"number\" class=\"form-control\" min=\"0\" >\n            </div>\n          </div>\n\n          <!-- Otro (Especificar) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Otro (Especificar)</p>\n              <input type=\"text\" class=\"form-control\" >\n            </div>\n          </div>\n\n          <!-- Importe estimado (otro) -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Importe estimado (otro)</p>\n              <input type=\"number\" class=\"form-control\" min=\"0\" >\n            </div>\n          </div>\n\n          <!-- Requirió supervisión de campo -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\" ngbRadioGroup>\n              <p class=\"mb-2 font-weight-bold text-muted\">Requirió supervisión de campo</p>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"true\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span class=\"pr-4\">Si</span>\n              <label class=\"btn rd-btn\" ngbButtonLabel>\n                <input ngbButton type=\"radio\" class=\"d-none\" [value]=\"false\"> \n                <i class=\"mdi mdi-checkbox-blank-circle\"></i>\n              </label>\n              <span>No</span>\n            </div>\n          </div>\n\n          <!-- Causa -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Causa</p>\n              <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona causa</option>\n                <option value=\"1\">Básica</option>\n                <option value=\"2\">Básica limitada</option>\n                <option value=\"3\">Limitada</option>\n                <option value=\"4\">Amplia</option>\n              </select>\n            </div>\n          </div>\n\n          <!-- Supervisor asignado -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Supervisor asignado</p>\n              <input type=\"text\" class=\"form-control\" >\n            </div>\n          </div>\n        </div>\n        <hr>\n\n        <div class=\"row\">\n          <!-- Conclusión -->\n          <div class=\"col-md-12 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Conclusión</p>\n              <textarea class=\"form-control\" rows=\"3\"></textarea>\n            </div>\n          </div>\n\n          <!-- Guardar -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <button class=\"btn btn-info waves-light mr-2\">Guardar</button>\n            </div>\n          </div>\n        </div>\n        <hr>\n\n        <div class=\"row\">\n\n          <div class=\"col-md-12 col-sm-12\">\n            <h4 class=\"header-title\">Listado de Conclusiones</h4>\n          </div>\n          <div class=\"col-md-12 col-sm-12\">\n            <table class=\"table table-striped mt-2\">\n              <thead>\n                <tr>\n                  <th>Conclusión</th>\n                  <th>Acciones</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Conclusión</td>\n                  <td>\n                    <button class=\"btn btn-icon waves-effect btn-danger\"><i class=\"mdi mdi-delete\"></i></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n        <!-- Submit -->\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-12 mt-2\">\n            <button class=\"btn btn-outline-primary waves-light mr-2\"\n              [routerLink]=\"['/main-dashboard/tablero-operaciones']\">Cancelar</button>\n              <input type=\"submit\" class=\"btn btn-info waves-light\" value=\"Guardar\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/registro/pages/informe-de-ajustador/informe-de-ajustador.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/informe-de-ajustador/informe-de-ajustador.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registro/pages/informe-de-ajustador/informe-de-ajustador.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/informe-de-ajustador/informe-de-ajustador.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: InformeDeAjustadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformeDeAjustadorComponent", function() { return InformeDeAjustadorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InformeDeAjustadorComponent = /** @class */ (function () {
    function InformeDeAjustadorComponent(formBuilder, formatterService) {
        this.formBuilder = formBuilder;
        this.formatterService = formatterService;
        this.formatterService.actualizarSeccionActiva('seccionInformeAjustador');
    }
    InformeDeAjustadorComponent.prototype.ngOnInit = function () {
        this.groupForm = this.formBuilder.group({});
    };
    InformeDeAjustadorComponent.prototype.onSubmit = function () {
    };
    InformeDeAjustadorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-informe-de-ajustador',
            template: __webpack_require__(/*! ./informe-de-ajustador.component.html */ "./src/app/modules/registro/pages/informe-de-ajustador/informe-de-ajustador.component.html"),
            styles: [__webpack_require__(/*! ./informe-de-ajustador.component.scss */ "./src/app/modules/registro/pages/informe-de-ajustador/informe-de-ajustador.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__["FormatterService"]])
    ], InformeDeAjustadorComponent);
    return InformeDeAjustadorComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/involucrados-y-lesionados/involucrados-y-lesionados.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/involucrados-y-lesionados/involucrados-y-lesionados.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box mt-5 edua-card\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-6\">\n      <h4 class=\"header-title m-t-0\">6. Involucrados y lesionados</h4>\n    </div>\n    <div class=\"col-sm-12 col-md-6 text-right\">\n      <span class=\"text-muted span-order\">\n        <i class=\"mdi mdi-city\"></i>\n        Compañia Seguros S.A. de C.V.\n      </span>\n      <span class=\"text-muted span-order\">Deudora</span>\n      <span>AB13A</span>\n    </div>\n  </div>\n\n  <hr class=\"mt-0\"><br>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <button class=\"btn btn-info waves-effect waves-light\" (click)=\"agregarInvolucrado(formAgregarInvolucrado)\">\n        <i class=\"fa fa-plus\"></i>&nbsp;&nbsp;\n        <span>Agregar Involucrado</span>\n      </button>\n    </div>\n  </div>\n\n  <hr class=\"mt-5 mb-5\">\n\n  <!-- TABLA -->\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <table class=\"table edua-table\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th *ngFor=\"let cabecera of cabeceras\">{{cabecera.nombre}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let persona of lesionadoMock\">\n            <td class=\"text-muted m-b-25 font-14\">{{persona.nombre}}</td>\n            <td class=\"text-muted m-b-25 font-14\">{{persona.tipoInvolucrado.nombre}}</td>\n            <td>\n              <i *ngIf=\"persona.paseMedico\" class=\"fa fa-check icon-pase\"></i>\n              <i *ngIf=\"!persona.paseMedico\" class=\"fa fa-times icon-no-pase\"></i>\n            </td>\n            <td class=\"button-list\">\n              <button class=\"btn btn-icon waves-effect waves-light btn-warning\" (click)=\"editarPersona(persona)\">\n                <i class=\"fa fa-edit\"></i>\n              </button>\n              <button class=\"btn btn-icon waves-effect waves-light btn-danger\" (click)=\"eliminarPersona(persona.id)\">\n                <i class=\"fa fa-trash-o\"></i>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <ng-template #formAgregarInvolucrado let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Agregar Involucrado</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    \n    <form [formGroup]=\"groupForm\" (ngSubmit)=\"onSubmit()\" class=\"edua-form\">\n      <div class=\"modal-body edua-modal-body\">\n        <div class=\"form-row\">\n          <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">Tipo de Involucrado</label>\n            <select class=\"form-control selectpicker mb-2\">\n              <option value=\"\">Selecciona una opción</option>\n              <option value=\"1\">Conductor</option>\n              <option value=\"2\">Pasajero</option>\n              <option value=\"3\">Peatón</option>\n              <option value=\"4\">Ciclista</option>\n              <option value=\"5\">Otro</option>\n            </select>\n          </div>\n        </div>\n    \n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <h4 class=\"header-title m-t-0 m-b-20\">Datos del involucrado</h4>\n          </div>\n        </div>\n    \n        <hr class=\"mt-0\">\n    \n        <div class=\"form-row\">\n          <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">Primer Nombre</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n          <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">Segundo Nombre</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">Apellido Paterno</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n          <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">Apellido Materno</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"col-sm-12 col-md-6 col-lg-3 form-group\">\n            <label class=\"col-form-label\">Edad</label>\n            <div class=\"input-group\">\n              <input type=\"number\" class=\"form-control\" min=\"0\">\n              <div class=\"input-group-append\">\n                <div class=\"input-group-text\"><span class=\"font-size-12\">años</span></div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"col-sm-12 col-md-5 form-group\">\n            <label class=\"col-form-label\">Tipo de teléfono</label>\n            <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona una cobertura</option>\n                <option value=\"1\">Celular</option>\n                <option value=\"2\">Casa</option>\n                <option value=\"3\">Oficina</option>\n                <option value=\"4\">Otro</option>\n              </select>\n          </div>\n          <div class=\"col-sm-12 col-md-2 form-group\">\n            <label class=\"col-form-label\">Lada</label>\n            <input type=\"text\" class=\"form-control\">\n          </div>\n          <div class=\"col-sm-12 col-md-5 form-group\">\n            <label class=\"col-form-label\">Teléfono</label>\n            <input type=\"text\" class=\"form-control\">\n          </div>\n        </div>\n    \n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <h4 class=\"header-title m-t-0 m-b-20\">Datos de dirección</h4>\n          </div>\n        </div>\n    \n        <hr class=\"mt-0\">\n    \n        <div class=\"form-row\">\n          <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">Tipo de vialidad</label>\n            <select class=\"form-control selectpicker mb-2\">\n              <option value=\"\">Selecciona una opción</option>\n              <option value=\"1\">Calle</option>\n              <option value=\"2\">Avenida</option>\n              <option value=\"3\">Glorieta</option>\n            </select>\n          </div>\n        </div>\n    \n        <div class=\"form-row\">\n          <div class=\"col-sm-12 col-md-8 form-group\">\n            <label class=\"col-form-label\">Calle</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n          <div class=\"col-sm-12 col-md-2 form-group\">\n            <label class=\"col-form-label\">No. interior</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n          <div class=\"col-sm-12 col-md-2 form-group\">\n            <label class=\"col-form-label\">No. exterior</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n        </div>\n    \n        <div class=\"form-row\">\n          <div class=\"col-sm-12 col-md-10 form-group\">\n            <label class=\"col-form-label\">Colonia</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n          <div class=\"col-sm-12 col-md-2 form-group\">\n            <label class=\"col-form-label\">C.P.</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n        </div>\n    \n        <div class=\"form-row\">\n          <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">Estado</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n          <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">Municipio/Delegación</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n        </div>\n    \n        <br><hr class=\"mt-0\"><br>\n    \n        <div class=\"form-row\">\n          <div class=\"col-sm-12 col-md-3\">\n            <label class=\"col-form-label\">¿Requiere pase médico?</label> <br>\n            <div class=\"radio radio-success form-check-inline edua-radio-btn\">\n                <input type=\"radio\" id=\"inlineRadio1\" value=\"option1\" name=\"radioInline\" checked>\n                <label for=\"inlineRadio1\"> Sí </label>\n            </div>\n            <div class=\"radio radio-success form-check-inline edua-radio-btn\">\n                <input type=\"radio\" id=\"inlineRadio2\" value=\"option2\" name=\"radioInline\">\n                <label for=\"inlineRadio2\"> No </label>\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-3\">\n              <label class=\"col-form-label\">Folio pase médico</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n        </div>\n    \n        <div class=\"form-row\">\n          <div class=\"col-sm-12 col-md-6\">\n            <label class=\"col-form-label\">Lesiones</label>\n            <select class=\"form-control selectpicker mb-2\">\n              <option value=\"\">Selecciona lesiones</option>\n              <option value=\"1\">Otro</option>\n            </select>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <button class=\"btn btn-info waves-effect waves-light\" (click)=\"d('Cross click')\">\n                <i class=\"fa fa-plus\"></i>&nbsp;\n              <span>Agregar Involucrado</span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n\n  <br><hr class=\"mt-0\"><br>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-6\">\n      <button class=\"btn btn-danger waves-effect waves-light\">\n        <span>Cancelar</span>\n      </button>\n    </div>\n    <div class=\"col-sm-12 col-md-6 _right-items\">\n      <button class=\"btn btn-info waves-effect waves-light edua-btn\">\n        <span>Anterior</span>\n      </button>\n      <button class=\"btn btn-info waves-effect waves-light\">\n        <span>Siguiente</span>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/registro/pages/involucrados-y-lesionados/involucrados-y-lesionados.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/involucrados-y-lesionados/involucrados-y-lesionados.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edua-card {\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2); }\n\n.edua-table {\n  border: 1px solid #ccc; }\n\n.icon-no-pase {\n  color: #dc3545;\n  font-size: 20px; }\n\n.icon-pase {\n  color: #28a745;\n  font-size: 20px; }\n\n.edua-form {\n  padding: 0 30px; }\n\n.font-size-12 {\n  font-size: 14px; }\n\n.edua-radio-btn {\n  margin: 0 10px; }\n\n.edua-modal-body {\n  max-height: 75vh;\n  overflow-y: scroll; }\n\n.edua-btn {\n  margin: 0 30px; }\n"

/***/ }),

/***/ "./src/app/modules/registro/pages/involucrados-y-lesionados/involucrados-y-lesionados.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/involucrados-y-lesionados/involucrados-y-lesionados.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: InvolucradosYLesionadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvolucradosYLesionadosComponent", function() { return InvolucradosYLesionadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
/* harmony import */ var _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/local/storage/storage.service */ "./src/app/modules/registro/services/local/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InvolucradosYLesionadosComponent = /** @class */ (function () {
    function InvolucradosYLesionadosComponent(formatterService, storageService, formBuilder, modalService) {
        this.formatterService = formatterService;
        this.storageService = storageService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.showMedicForm = false;
        this.cabeceras = [
            {
                nombre: 'Nombre involucrado',
            },
            {
                nombre: 'Tipo involucrado',
            },
            {
                nombre: 'Pase medico',
            },
            {
                nombre: '',
            }
        ];
        this.lesionadoMock = [
            {
                //...
                id: 1,
                nombre: 'Juan Perez',
                tipoInvolucrado: {
                    nombre: 'Conductor'
                    //...
                },
                paseMedico: false
            },
            {
                //...
                id: 2,
                nombre: 'Juan Perez Junior',
                tipoInvolucrado: {
                    nombre: 'Pasajero'
                    //...
                },
                paseMedico: true
            }
        ];
        console.log("EN SUB-FLUJO/INVOLUCRADOS Y LESIONADOS...");
    }
    InvolucradosYLesionadosComponent.prototype.selectChangeHandler = function (event) {
        // si es tiene pase médico
        this.showMedicForm = event.target.value;
    };
    InvolucradosYLesionadosComponent.prototype.ngOnInit = function () {
        this.formatterService.actualizarSubSeccionActiva('seccionInvolucrados');
        this.groupForm = this.formBuilder.group({
            pase_medico: false,
        });
    };
    InvolucradosYLesionadosComponent.prototype.onSubmit = function () {
        var element = document.getElementById('narracion-accidente');
        element.click();
    };
    InvolucradosYLesionadosComponent.prototype.agregarInvolucrado = function (form) {
        this.modalService.open(form, { backdrop: 'static', size: 'lg' });
    };
    InvolucradosYLesionadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-involucrados-y-lesionados',
            template: __webpack_require__(/*! ./involucrados-y-lesionados.component.html */ "./src/app/modules/registro/pages/involucrados-y-lesionados/involucrados-y-lesionados.component.html"),
            styles: [__webpack_require__(/*! ./involucrados-y-lesionados.component.scss */ "./src/app/modules/registro/pages/involucrados-y-lesionados/involucrados-y-lesionados.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_3__["FormatterService"],
            _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], InvolucradosYLesionadosComponent);
    return InvolucradosYLesionadosComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/narracion-de-accidente/narracion-de-accidente.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/narracion-de-accidente/narracion-de-accidente.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box mt-5 edua-card\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-6\">\n      <h4 class=\"header-title m-t-0\">7. Narración del accidente</h4>\n    </div>\n    <div class=\"col-sm-12 col-md-6 text-right\">\n      <span class=\"text-muted span-order\">\n        <i class=\"mdi mdi-city\"></i>\n        Compañia Seguros S.A. de C.V.\n      </span>\n      <span class=\"text-muted span-order\">Deudora</span>\n      <span>AB13A</span>\n    </div>\n  </div>\n\n  <hr class=\"mt-0\"><br>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <button class=\"btn btn-info waves-effect waves-light\" (click)=\"agregarNarrativa(formAgregarNarrativa)\">\n        <i class=\"fa fa-plus\"></i>&nbsp;\n        <span>Agregar Narración</span>\n      </button>\n    </div>\n  </div>\n\n  <hr class=\"mt-5 mb-5\">\n\n  <!-- TABLA -->\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <table class=\"table edua-table\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th *ngFor=\"let cabecera of cabeceras\">{{cabecera.nombre}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let persona of declarantesMock\">\n            <td class=\"text-muted m-b-25 font-14\">{{persona.nombre}}</td>\n            <td class=\"text-muted m-b-25 font-14\">{{persona.tipoDeclarante.nombre}}</td>\n            <td class=\"button-list\">\n              <button class=\"btn btn-icon waves-effect waves-light btn-warning\" (click)=\"editarPersona(persona)\">\n                <i class=\"fa fa-edit\"></i>\n              </button>\n              <button class=\"btn btn-icon waves-effect waves-light btn-danger\" (click)=\"eliminarPersona(persona.id)\">\n                <i class=\"fa fa-trash-o\"></i>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <ng-template #formAgregarNarrativa let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Agregar Narración</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    \n    <form [formGroup]=\"groupForm\" (ngSubmit)=\"onSubmit()\" class=\"edua-form\">\n      <div class=\"modal-body edua-modal-body\">\n        <div class=\"form-row\">\n          <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">Tipo de Declarante</label>\n            <select class=\"form-control selectpicker mb-2\">\n              <option value=\"\">Selecciona una opción</option>\n              <option value=\"1\">Conductor</option>\n              <option value=\"2\">Pasajero</option>\n              <option value=\"3\">Peatón</option>\n              <option value=\"5\">Otro</option>\n            </select>\n          </div>\n        </div>\n    \n        <div class=\"row\">\n\n          <div class=\"col-sm-12\">\n            <h4 class=\"header-title m-t-0 m-b-20\">Datos del declarante</h4>\n          </div>\n        </div>\n    \n        <hr class=\"mt-0\">\n    \n        <div class=\"form-row\">\n          <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">Primer Nombre</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n          <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">Segundo Nombre</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">Apellido Paterno</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n          <div class=\"col-sm-12 col-md-6 form-group\">\n            <label class=\"col-form-label\">Apellido Materno</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n        </div>\n    \n        <br><hr class=\"mt-0\">\n    \n        <div class=\"form-row\">\n          <div class=\"col-sm-12 col-md-12\">\n            <label class=\"col-form-label\">Narración</label>\n            <textarea class=\"form-control\" rows=\"5\" maxlength=\"500\"></textarea>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <button class=\"btn btn-info waves-effect waves-light\" (click)=\"d('Cross click')\">\n              <i class=\"fa fa-plus\"></i>&nbsp;\n              <span>Agregar Narración</span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n\n  <br><hr class=\"mt-0\"><br>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-6\">\n      <button class=\"btn btn-danger waves-effect waves-light\">\n        <span>Cancelar</span>\n      </button>\n    </div>\n    <div class=\"col-sm-12 col-md-6 _right-items\">\n      <button class=\"btn btn-info waves-effect waves-light edua-btn\">\n        <span>Anterior</span>\n      </button>\n      <button class=\"btn btn-info waves-effect waves-light\">\n        <span>Siguiente</span>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/registro/pages/narracion-de-accidente/narracion-de-accidente.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/narracion-de-accidente/narracion-de-accidente.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edua-card {\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2); }\n\n.edua-table {\n  border: 1px solid #ccc; }\n\n.icon-no-pase {\n  color: #dc3545;\n  font-size: 20px; }\n\n.icon-pase {\n  color: #28a745;\n  font-size: 20px; }\n\n.edua-form {\n  padding: 0 30px; }\n\n.font-size-12 {\n  font-size: 14px; }\n\n.edua-radio-btn {\n  margin: 0 10px; }\n\n.edua-modal-body {\n  max-height: 75vh;\n  overflow-y: scroll; }\n\n.edua-btn {\n  margin: 0 30px; }\n"

/***/ }),

/***/ "./src/app/modules/registro/pages/narracion-de-accidente/narracion-de-accidente.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/narracion-de-accidente/narracion-de-accidente.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NarracionDeAccidenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NarracionDeAccidenteComponent", function() { return NarracionDeAccidenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
/* harmony import */ var _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/local/storage/storage.service */ "./src/app/modules/registro/services/local/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NarracionDeAccidenteComponent = /** @class */ (function () {
    function NarracionDeAccidenteComponent(formatterService, storageService, formBuilder, modalService) {
        this.formatterService = formatterService;
        this.storageService = storageService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.cabeceras = [
            {
                nombre: 'Nombre declarante',
            },
            {
                nombre: 'Tipo declarante',
            },
            {
                nombre: '',
            }
        ];
        this.declarantesMock = [
            {
                //...
                id: 1,
                nombre: 'Juan Perez',
                tipoDeclarante: {
                    nombre: 'Conductor'
                    //...
                }
            },
            {
                //...
                id: 2,
                nombre: 'Juan Perez Junior',
                tipoDeclarante: {
                    nombre: 'Pasajero'
                    //...
                }
            }
        ];
    }
    NarracionDeAccidenteComponent.prototype.ngOnInit = function () {
        this.formatterService.actualizarSubSeccionActiva('seccionNarracion');
        this.groupForm = this.formBuilder.group({});
    };
    NarracionDeAccidenteComponent.prototype.onSubmit = function () {
        var element = document.getElementById('punto-choque-danos');
        element.click();
    };
    NarracionDeAccidenteComponent.prototype.agregarNarrativa = function (form) {
        this.modalService.open(form, { backdrop: 'static', size: 'lg' });
    };
    NarracionDeAccidenteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-narracion-de-accidente',
            template: __webpack_require__(/*! ./narracion-de-accidente.component.html */ "./src/app/modules/registro/pages/narracion-de-accidente/narracion-de-accidente.component.html"),
            styles: [__webpack_require__(/*! ./narracion-de-accidente.component.scss */ "./src/app/modules/registro/pages/narracion-de-accidente/narracion-de-accidente.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_3__["FormatterService"],
            _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], NarracionDeAccidenteComponent);
    return NarracionDeAccidenteComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/principal-flujo-registro/principal-flujo-registro.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/principal-flujo-registro/principal-flujo-registro.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row card-box\">\n  <div class=\"col-sm-12\">\n    <app-stepper-parent [data]=\"dataStepper\"></app-stepper-parent>\n  </div>\n\n  <div class=\"col-sm-12\">\n    <router-outlet></router-outlet>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/modules/registro/pages/principal-flujo-registro/principal-flujo-registro.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/principal-flujo-registro/principal-flujo-registro.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registro/pages/principal-flujo-registro/principal-flujo-registro.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/principal-flujo-registro/principal-flujo-registro.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PrincipalFlujoRegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalFlujoRegistroComponent", function() { return PrincipalFlujoRegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_local_factory_factory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local/factory/factory.service */ "./src/app/modules/registro/services/local/factory/factory.service.ts");
/* harmony import */ var _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local/storage/storage.service */ "./src/app/modules/registro/services/local/storage/storage.service.ts");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrincipalFlujoRegistroComponent = /** @class */ (function () {
    function PrincipalFlujoRegistroComponent(factoryService, storageService, formatterService, route) {
        var _this = this;
        this.factoryService = factoryService;
        this.storageService = storageService;
        this.formatterService = formatterService;
        this.route = route;
        this.mediaCss = "hiden-md";
        // SUBSCRIBE
        this.storageService.updateRegistro().subscribe(function (data) {
            _this.asignarDatosAFlujo(data);
        });
    }
    PrincipalFlujoRegistroComponent.prototype.ngOnInit = function () { };
    PrincipalFlujoRegistroComponent.prototype.asignarDatosAFlujo = function (data) {
        var _this = this;
        this.formatterService.eliminarDataSeccion(data).then(function (data) {
            _this.dataStepper = data;
        });
    };
    PrincipalFlujoRegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-principal-flujo-registro',
            template: __webpack_require__(/*! ./principal-flujo-registro.component.html */ "./src/app/modules/registro/pages/principal-flujo-registro/principal-flujo-registro.component.html"),
            styles: [__webpack_require__(/*! ./principal-flujo-registro.component.scss */ "./src/app/modules/registro/pages/principal-flujo-registro/principal-flujo-registro.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_local_factory_factory_service__WEBPACK_IMPORTED_MODULE_2__["FactoryService"],
            _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_4__["FormatterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PrincipalFlujoRegistroComponent);
    return PrincipalFlujoRegistroComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/punto-de-choque-y-danos/punto-de-choque-y-danos.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/punto-de-choque-y-danos/punto-de-choque-y-danos.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box mt-5\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n          <!-- Form header -->\n          <div class=\"row\">\n            <div class=\"col-md-6 col-sm-12\">\n              <h4 class=\"header-title m-t-0\">8. Puntos de choque y daños</h4>\n            </div>\n            <div class=\"col-md-6 col-sm-12 text-right\">\n              <span class=\"text-muted span-order\"><i class=\"mdi mdi-city\"></i> Compañia Seguros S.A. de C.V.</span>\n              <span class=\"text-muted span-order\">Deudora</span>\n              <span>AB13A</span>\n            </div>\n          </div>\n          <hr class=\"mt-0\">\n          <form [formGroup]=\"groupForm\" (ngSubmit)=\"onSubmit()\"> \n            <div class=\"row\">\n\n              <!-- Tipo -->\n              <div class=\"col-md-6 col-sm-12\">\n                <div class=\"form-group\">\n                  <p class=\"mb-2 font-weight-bold text-muted\">Tipo</p>\n                  <select class=\"form-control selectpicker mb-2\" formControlName=\"tipo_auto\" (change)=\"selectChangeHandler($event)\">\n                    <option value=\"\">Selecciona opción</option>\n                    <option value=\"1\">Automóvil</option>\n                    <option value=\"2\">Vagoneta</option>\n                    <option value=\"3\">Motocicleta</option>\n                  </select>\n                </div>\n              </div>\n\n              <!-- Tipo de daño -->\n              <div class=\"col-md-6 col-sm-12\">\n                <div class=\"form-group\">\n                  <p class=\"mb-2 font-weight-bold text-muted\">Tipo de Daño</p>\n                  <select class=\"form-control selectpicker mb-2\">\n                    <option value=\"\">Selecciona una opción</option>\n                    <option value=\"1\">Daños apreciables</option>\n                    <option value=\"2\">Daños preexistentes</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <hr>\n\n            <!-- Lista de daños -->\n            <div class=\"row\"> <!---->\n              <!-- vehículo -->\n              <div class=\"col-md-6 offset-md-3 text-center\" >\n                  <div class=\"card-box card-box-mutted ribbon-box\">\n                    <div class=\"ribbon ribbon-info\">{{ showName }}</div>\n                    <p class=\"text-muted m-b-10\">Ajusta los puntos de daños del vehículo.</p>\n                    <div *ngIf=\"showAuto\"><img src=\"assets/images/vehiculos/auto.svg\" width=\"100\"></div>\n                    <div *ngIf=\"showVan\"><img src=\"assets/images/vehiculos/van.svg\" width=\"100\"></div>\n                    <div *ngIf=\"showMoto\"><img src=\"assets/images/vehiculos/moto.svg\" width=\"100\"></div>\n                  </div>\n              </div>\n              <div class=\"col-md-12 col-sm-12\">\n                <h5 class=\"header-title mt-2\">Listado de Daños</h5>\n              </div>\n              <div class=\"col-md-12 col-sm-12\">\n                <table class=\"table table-striped mt-2\">\n                  <thead>\n                    <tr>\n                      <th>Tipo de daño</th>\n                      <th>Ubicación</th>\n                      <th>Daño</th>\n                      <th>Baja</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td>Daño apreciable</td>\n                      <td>Frontal</td>\n                      <td>Portaplacas</td>\n                      <td><button class=\"btn btn-icon waves-effect btn-danger\"><i class=\"mdi mdi-delete\"></i></button>\n                      </td>\n                    </tr>\n                </table>\n              </div>\n\n              <!-- Otro -->\n              <div class=\"col-md-6 col-sm-12\">\n                <div class=\"form-group\">\n                  <p class=\"mb-2 font-weight-bold text-muted\">Otro</p>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Indica si otro daño que se encuentre en el listado\">\n                </div>\n              </div>\n\n              <!-- Guardar otro -->\n              <div class=\"col-md-6 col-sm-12\">\n                <div class=\"form-group\">\n                  <p class=\"mb-2 font-weight-bold text-muted\" *ngIf=\"!showMedicForm\"> &nbsp; </p>\n                  <button class=\"btn btn-info waves-light mr-2\">Guardar</button>\n                </div>\n              </div>\n  \n            </div>\n            \n            <hr>\n            <!-- Submit -->\n            <div class=\"row\">\n                <div class=\"col-md-6 col-sm-12 mt-2\">\n                  <button class=\"btn btn-outline-primary waves-light mr-2\"\n                  [routerLink]=\"['/main-dashboard/tablero-operaciones']\">Cancelar</button>\n                  <input type=\"submit\" class=\"btn btn-info waves-light\" value=\"Siguiente\">\n                </div>\n            </div>\n          </form>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/modules/registro/pages/punto-de-choque-y-danos/punto-de-choque-y-danos.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/punto-de-choque-y-danos/punto-de-choque-y-danos.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-box-mutted {\n  background: #f4f6f8; }\n"

/***/ }),

/***/ "./src/app/modules/registro/pages/punto-de-choque-y-danos/punto-de-choque-y-danos.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/punto-de-choque-y-danos/punto-de-choque-y-danos.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PuntoDeChoqueYDanosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntoDeChoqueYDanosComponent", function() { return PuntoDeChoqueYDanosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
/* harmony import */ var _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local/storage/storage.service */ "./src/app/modules/registro/services/local/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PuntoDeChoqueYDanosComponent = /** @class */ (function () {
    function PuntoDeChoqueYDanosComponent(formatterService, storageService, formBuilder) {
        this.formatterService = formatterService;
        this.storageService = storageService;
        this.formBuilder = formBuilder;
        this.showAuto = false;
        this.showMoto = false;
        this.showVan = false;
        this.showName = 'Tipo';
        this.showMedicForm = false;
    }
    PuntoDeChoqueYDanosComponent.prototype.ngOnInit = function () {
        this.formatterService.actualizarSubSeccionActiva('seccionPuntosDeChoque');
        this.groupForm = this.formBuilder.group({
            tipo_auto: '',
        });
    };
    PuntoDeChoqueYDanosComponent.prototype.selectChangeHandler = function (event) {
        // si es 
        if (event.target.value == 1) {
            this.showAuto = true;
            this.showMoto = false;
            this.showVan = false;
            this.showName = 'Automóvil';
        }
        else if (event.target.value == 2) {
            this.showAuto = false;
            this.showMoto = false;
            this.showVan = true;
            this.showName = 'Vagoneta';
        }
        else if (event.target.value == 3) {
            this.showAuto = false;
            this.showMoto = true;
            this.showVan = false;
            this.showName = 'Motocicleta';
        }
        else {
            this.showAuto = false;
            this.showMoto = false;
            this.showVan = false;
            this.showName = 'Elige una opción';
        }
    };
    PuntoDeChoqueYDanosComponent.prototype.onSubmit = function () {
        var element = document.getElementById('circunstancia');
        element.click();
    };
    PuntoDeChoqueYDanosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-punto-de-choque-y-danos',
            template: __webpack_require__(/*! ./punto-de-choque-y-danos.component.html */ "./src/app/modules/registro/pages/punto-de-choque-y-danos/punto-de-choque-y-danos.component.html"),
            styles: [__webpack_require__(/*! ./punto-de-choque-y-danos.component.scss */ "./src/app/modules/registro/pages/punto-de-choque-y-danos/punto-de-choque-y-danos.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__["FormatterService"],
            _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], PuntoDeChoqueYDanosComponent);
    return PuntoDeChoqueYDanosComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/registro-en-linea/registro-en-linea.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/registro-en-linea/registro-en-linea.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <app-inicio \n                [catCausas]=\"dataCausas\" \n                [catCoberturas]=\"dataCoberturas\"\n                [reset]=\"reset\"\n                (dataForm)=\"validationInicio($event)\"></app-inicio>\n\n            <div *ngIf=\"colision\">\n                <app-causa-colision (reset)=\"clear($event)\"></app-causa-colision>\n            </div>\n\n            <div *ngIf=\"nocolision\">\n                <app-causa-no-colision (reset)=\"clear($event)\"></app-causa-no-colision>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/registro/pages/registro-en-linea/registro-en-linea.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/registro-en-linea/registro-en-linea.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registro/pages/registro-en-linea/registro-en-linea.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/registro-en-linea/registro-en-linea.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RegistroEnLineaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroEnLineaComponent", function() { return RegistroEnLineaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_remote_registro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/remote/registro.service */ "./src/app/modules/registro/services/remote/registro.service.ts");
/* harmony import */ var _services_local_factory_factory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local/factory/factory.service */ "./src/app/modules/registro/services/local/factory/factory.service.ts");
/* harmony import */ var _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local/storage/storage.service */ "./src/app/modules/registro/services/local/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author    christian.vargas
 * @version 	0.0.2
 */




var RegistroEnLineaComponent = /** @class */ (function () {
    function RegistroEnLineaComponent(factoryService, storageService, registroService) {
        this.factoryService = factoryService;
        this.storageService = storageService;
        this.registroService = registroService;
        this.reset = false;
        this.colision = false;
        this.nocolision = false;
        // CONSTRUIR OBJETO REGISTRO
        var registro = this.factoryService.construirRegistroColision();
        // ALMACENAR OBJETO REGISTRO
        this.storageService.setRegistro(registro);
    }
    RegistroEnLineaComponent.prototype.ngOnInit = function () {
        this.requestCatCoberturas();
        this.requestCatCausas();
    };
    RegistroEnLineaComponent.prototype.requestCatCausas = function () {
        var _this = this;
        this.registroService.serviceGet('request_cat_causas').subscribe(function (success) {
            _this.dataCausas = success;
        }, function (err) { });
        return this.dataCausas;
    };
    RegistroEnLineaComponent.prototype.requestCatCoberturas = function () {
        var _this = this;
        this.registroService.serviceGet('request_cat_coberturas').subscribe(function (success) {
            _this.dataCoberturas = success;
        }, function (err) { });
        return this.dataCoberturas;
    };
    RegistroEnLineaComponent.prototype.validationInicio = function (data) {
        var request = data.value.input_causa;
        if (request == 1 || request == 3 || request == 5) {
            this.colision = true;
            // no colisión
        }
        else
            this.nocolision = true;
    };
    RegistroEnLineaComponent.prototype.clear = function (data) {
        this.reset = Math.random();
        this.colision = false;
        this.nocolision = false;
    };
    RegistroEnLineaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro-en-linea',
            template: __webpack_require__(/*! ./registro-en-linea.component.html */ "./src/app/modules/registro/pages/registro-en-linea/registro-en-linea.component.html"),
            styles: [__webpack_require__(/*! ./registro-en-linea.component.scss */ "./src/app/modules/registro/pages/registro-en-linea/registro-en-linea.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_local_factory_factory_service__WEBPACK_IMPORTED_MODULE_2__["FactoryService"],
            _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _services_remote_registro_service__WEBPACK_IMPORTED_MODULE_1__["RegistroService"]])
    ], RegistroEnLineaComponent);
    return RegistroEnLineaComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/registro-inicio/registro-inicio.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/registro-inicio/registro-inicio.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box mt-5 edua-card\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h4 class=\"page-title m-t-0\">Registro de siniestros en linea</h4>\n    </div>\n  </div>\n\n  <hr class=\"mt-0\"><br>\n\n  <div class=\"row margin-0-50\">\n    <div class=\"col-sm-3\">\n      <h4 class=\"header-title\">COBERTURA</h4>\n      <p>Terceros</p>\n    </div>\n    <div class=\"col-sm-3\">\n      <h4 class=\"header-title\">CAUSA</h4>\n      <p>Choque en la parte trasera de otro vehículo (COLISION)</p>\n    </div>\n  </div>\n\n  <hr class=\"mt-0\">\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h4 class=\"header-title margin-30-0\">Propio</h4>\n    </div>\n  </div>\n  <div class=\"row margin-0-50\">\n    <div class=\"col-sm-3\">\n      <h4 class=\"header-title\">NÚMERO DE FOLIO</h4>\n      <p>XXXX-XXXX-XXXX-XXXX</p>\n    </div>\n    <div class=\"col-sm-3\">\n      <h4 class=\"header-title\">ROL</h4>\n      <p>Afectado</p>\n    </div>\n    <div class=\"col-sm-3\">\n      <h4 class=\"header-title\">COMPAÑIA</h4>\n      <p>Compañia Seguros S.A. de C.V. </p>\n    </div>\n    <div class=\"col-sm-3\">\n      <h4 class=\"header-title\">NÚMERO DE SINIESTRO</h4>\n      <p>123456789</p>\n    </div>\n  </div>\n\n  <hr class=\"mt-0\">\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h4 class=\"header-title margin-30-0\">Contraparte</h4>\n    </div>\n  </div>\n  <div class=\"row margin-0-50\">\n    <div class=\"col-sm-3\">\n      <h4 class=\"header-title\">COMPAÑIA</h4>\n      <p>Compañia Seguros S.A. de C.V. </p>\n    </div>\n    <div class=\"col-sm-3\">\n      <h4 class=\"header-title\">NÚMERO DE SINIESTRO</h4>\n      <p>123456789</p>\n    </div>\n  </div>\n\n  <br><hr class=\"mt-0\"><br>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-6\">\n      <button class=\"btn btn-outline-danger waves-effect waves-light\"\n      [routerLink]=\"['/main-dashboard/registro-en-linea/inicio']\">\n        <span>Cancelar</span>\n      </button>\n    </div>\n    <div class=\"col-sm-12 col-md-6 _right-items\">\n      <button class=\"btn btn-info waves-effect waves-light\"\n      [routerLink]=\"['/main-dashboard/registro-en-linea/principal-registro/responsable', {params: 'seccionResponsable'}, { outlets: { registroEnLinea: ['datos-siniestro'] } }]\">\n        <span>Siguiente</span>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/registro/pages/registro-inicio/registro-inicio.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/registro-inicio/registro-inicio.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-0-50 {\n  margin: auto 30px; }\n\n.margin-30-0 {\n  margin: 30px auto; }\n"

/***/ }),

/***/ "./src/app/modules/registro/pages/registro-inicio/registro-inicio.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/registro-inicio/registro-inicio.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RegistroInicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroInicioComponent", function() { return RegistroInicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
/* harmony import */ var _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local/storage/storage.service */ "./src/app/modules/registro/services/local/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistroInicioComponent = /** @class */ (function () {
    function RegistroInicioComponent(formatterService, storageService) {
        this.formatterService = formatterService;
        this.storageService = storageService;
        this.formatterService.actualizarSeccionCompleta('seccionInicio', {});
    }
    RegistroInicioComponent.prototype.ngOnInit = function () {
    };
    RegistroInicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro-inicio',
            template: __webpack_require__(/*! ./registro-inicio.component.html */ "./src/app/modules/registro/pages/registro-inicio/registro-inicio.component.html"),
            styles: [__webpack_require__(/*! ./registro-inicio.component.scss */ "./src/app/modules/registro/pages/registro-inicio/registro-inicio.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_1__["FormatterService"],
            _services_local_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], RegistroInicioComponent);
    return RegistroInicioComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/registro-por-lotes/registro-por-lotes.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/registro-por-lotes/registro-por-lotes.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  registro-por-lotes works!\n</p>\n<!-- <button [routerLink]=\"['/main-dashboard/flujo-registro', { outlets: { registroEnLinea: ['principal'] } }]\">\n  SUBNAVEGACION FLUJO REGISTRO EN LINEA\n</button> -->"

/***/ }),

/***/ "./src/app/modules/registro/pages/registro-por-lotes/registro-por-lotes.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/registro-por-lotes/registro-por-lotes.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registro/pages/registro-por-lotes/registro-por-lotes.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/registro-por-lotes/registro-por-lotes.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RegistroPorLotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPorLotesComponent", function() { return RegistroPorLotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_remote_registro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/remote/registro.service */ "./src/app/modules/registro/services/remote/registro.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//SERVICES

var RegistroPorLotesComponent = /** @class */ (function () {
    function RegistroPorLotesComponent(registroService) {
        this.registroService = registroService;
        // this.consumirServicio();
    }
    RegistroPorLotesComponent.prototype.ngOnInit = function () {
    };
    RegistroPorLotesComponent.prototype.consumirServicio = function () {
        var _this = this;
        this.registroService.getDataPost().subscribe(function (success) {
            _this.data = success;
        }, function (err) { });
    };
    RegistroPorLotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro-por-lotes',
            template: __webpack_require__(/*! ./registro-por-lotes.component.html */ "./src/app/modules/registro/pages/registro-por-lotes/registro-por-lotes.component.html"),
            styles: [__webpack_require__(/*! ./registro-por-lotes.component.scss */ "./src/app/modules/registro/pages/registro-por-lotes/registro-por-lotes.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_remote_registro_service__WEBPACK_IMPORTED_MODULE_1__["RegistroService"]])
    ], RegistroPorLotesComponent);
    return RegistroPorLotesComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/pages/termino-de-atencion/termino-de-atencion.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/termino-de-atencion/termino-de-atencion.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box mt-5\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <!-- Form header -->\n      <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n          <h4 class=\"header-title m-t-0\">13. Término de atención</h4>\n        </div>\n        <div class=\"col-md-6 col-sm-12 text-right\">\n          <span class=\"text-muted span-order\"><i class=\"mdi mdi-city\"></i> Compañia Seguros S.A. de C.V.</span>\n          <span class=\"text-muted span-order\">Deudora</span>\n          <span>AB13A</span>\n        </div>\n      </div>\n      <hr class=\"mt-0\">\n\n      <form [formGroup]=\"groupForm\" (ngSubmit)=\"onSubmit()\"> \n        <div class=\"row\">\n\n          <!-- Tipo de orden -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Tipo de Orden</p>\n              <select class=\"form-control selectpicker mb-2\">\n                <option value=\"\">Selecciona una opción</option>\n                <option value=\"1\">Otro</option>\n              </select>\n            </div>\n          </div>\n          <!-- Agregar DUA  -->\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <p class=\"mb-2 font-weight-bold text-muted\">Agregar imagen DUA</p>\n              <button class=\"btn btn-info waves-light \"><i class=\"mdi mdi-plus\"></i> DUA</button>\n            </div>\n          </div>\n        </div>\n        <hr>\n\n        <!-- Submit -->\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-12 mt-2\">\n            <button class=\"btn btn-outline-primary waves-light mr-2\"\n              [routerLink]=\"['/main-dashboard/tablero-operaciones']\">Cancelar</button>\n              <input type=\"submit\" class=\"btn btn-info waves-light\" value=\"Terminar\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/registro/pages/termino-de-atencion/termino-de-atencion.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/termino-de-atencion/termino-de-atencion.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registro/pages/termino-de-atencion/termino-de-atencion.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/registro/pages/termino-de-atencion/termino-de-atencion.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: TerminoDeAtencionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminoDeAtencionComponent", function() { return TerminoDeAtencionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local/formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TerminoDeAtencionComponent = /** @class */ (function () {
    function TerminoDeAtencionComponent(formBuilder, formatterService) {
        this.formBuilder = formBuilder;
        this.formatterService = formatterService;
        this.formatterService.actualizarSeccionActiva('seccionTerminoAtencion');
    }
    TerminoDeAtencionComponent.prototype.ngOnInit = function () {
        this.groupForm = this.formBuilder.group({});
    };
    TerminoDeAtencionComponent.prototype.onSubmit = function () {
        var element = document.getElementById('informe-ajustador');
        element.click();
    };
    TerminoDeAtencionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-termino-de-atencion',
            template: __webpack_require__(/*! ./termino-de-atencion.component.html */ "./src/app/modules/registro/pages/termino-de-atencion/termino-de-atencion.component.html"),
            styles: [__webpack_require__(/*! ./termino-de-atencion.component.scss */ "./src/app/modules/registro/pages/termino-de-atencion/termino-de-atencion.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_local_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__["FormatterService"]])
    ], TerminoDeAtencionComponent);
    return TerminoDeAtencionComponent;
}());



/***/ }),

/***/ "./src/app/modules/registro/registro-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/registro/registro-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RegistroRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroRoutingModule", function() { return RegistroRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_pages_skeleton_dashboard_skeleton_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/pages/skeleton-dashboard/skeleton-dashboard.component */ "./src/app/modules/global/pages/skeleton-dashboard/skeleton-dashboard.component.ts");
/* harmony import */ var _pages_registro_en_linea_registro_en_linea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/registro-en-linea/registro-en-linea.component */ "./src/app/modules/registro/pages/registro-en-linea/registro-en-linea.component.ts");
/* harmony import */ var _pages_registro_por_lotes_registro_por_lotes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/registro-por-lotes/registro-por-lotes.component */ "./src/app/modules/registro/pages/registro-por-lotes/registro-por-lotes.component.ts");
/* harmony import */ var _pages_flujo_registro_flujo_registro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/flujo-registro/flujo-registro.component */ "./src/app/modules/registro/pages/flujo-registro/flujo-registro.component.ts");
/* harmony import */ var _pages_principal_flujo_registro_principal_flujo_registro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/principal-flujo-registro/principal-flujo-registro.component */ "./src/app/modules/registro/pages/principal-flujo-registro/principal-flujo-registro.component.ts");
/* harmony import */ var _pages_registro_inicio_registro_inicio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/registro-inicio/registro-inicio.component */ "./src/app/modules/registro/pages/registro-inicio/registro-inicio.component.ts");
/* harmony import */ var _pages_datos_de_siniestro_datos_de_siniestro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/datos-de-siniestro/datos-de-siniestro.component */ "./src/app/modules/registro/pages/datos-de-siniestro/datos-de-siniestro.component.ts");
/* harmony import */ var _pages_busqueda_de_poliza_busqueda_de_poliza_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/busqueda-de-poliza/busqueda-de-poliza.component */ "./src/app/modules/registro/pages/busqueda-de-poliza/busqueda-de-poliza.component.ts");
/* harmony import */ var _pages_datos_de_poliza_datos_de_poliza_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/datos-de-poliza/datos-de-poliza.component */ "./src/app/modules/registro/pages/datos-de-poliza/datos-de-poliza.component.ts");
/* harmony import */ var _pages_datos_de_asegurado_datos_de_asegurado_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/datos-de-asegurado/datos-de-asegurado.component */ "./src/app/modules/registro/pages/datos-de-asegurado/datos-de-asegurado.component.ts");
/* harmony import */ var _pages_datos_de_conductor_datos_de_conductor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/datos-de-conductor/datos-de-conductor.component */ "./src/app/modules/registro/pages/datos-de-conductor/datos-de-conductor.component.ts");
/* harmony import */ var _pages_datos_de_vehiculo_datos_de_vehiculo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/datos-de-vehiculo/datos-de-vehiculo.component */ "./src/app/modules/registro/pages/datos-de-vehiculo/datos-de-vehiculo.component.ts");
/* harmony import */ var _pages_involucrados_y_lesionados_involucrados_y_lesionados_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/involucrados-y-lesionados/involucrados-y-lesionados.component */ "./src/app/modules/registro/pages/involucrados-y-lesionados/involucrados-y-lesionados.component.ts");
/* harmony import */ var _pages_narracion_de_accidente_narracion_de_accidente_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/narracion-de-accidente/narracion-de-accidente.component */ "./src/app/modules/registro/pages/narracion-de-accidente/narracion-de-accidente.component.ts");
/* harmony import */ var _pages_punto_de_choque_y_danos_punto_de_choque_y_danos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/punto-de-choque-y-danos/punto-de-choque-y-danos.component */ "./src/app/modules/registro/pages/punto-de-choque-y-danos/punto-de-choque-y-danos.component.ts");
/* harmony import */ var _pages_circunstancia_circunstancia_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/circunstancia/circunstancia.component */ "./src/app/modules/registro/pages/circunstancia/circunstancia.component.ts");
/* harmony import */ var _pages_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/fotos/fotos.component */ "./src/app/modules/registro/pages/fotos/fotos.component.ts");
/* harmony import */ var _pages_croquis_de_accidente_croquis_de_accidente_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/croquis-de-accidente/croquis-de-accidente.component */ "./src/app/modules/registro/pages/croquis-de-accidente/croquis-de-accidente.component.ts");
/* harmony import */ var _pages_generacion_de_ordenes_generacion_de_ordenes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/generacion-de-ordenes/generacion-de-ordenes.component */ "./src/app/modules/registro/pages/generacion-de-ordenes/generacion-de-ordenes.component.ts");
/* harmony import */ var _pages_termino_de_atencion_termino_de_atencion_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/termino-de-atencion/termino-de-atencion.component */ "./src/app/modules/registro/pages/termino-de-atencion/termino-de-atencion.component.ts");
/* harmony import */ var _pages_informe_de_ajustador_informe_de_ajustador_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/informe-de-ajustador/informe-de-ajustador.component */ "./src/app/modules/registro/pages/informe-de-ajustador/informe-de-ajustador.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// PAGES



// FLUJO-REGISTRO


// INICIO: 1-11













//FIN: 1-11



// FIN FLUJO-REGISTRO
var routes = [
    {
        path: 'main-dashboard',
        component: _global_pages_skeleton_dashboard_skeleton_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["SkeletonDashboardComponent"],
        children: [
            {
                path: 'registro-por-lotes',
                component: _pages_registro_por_lotes_registro_por_lotes_component__WEBPACK_IMPORTED_MODULE_4__["RegistroPorLotesComponent"],
                data: { breadcrumb: 'Registro por lotes' }
            },
            {
                path: 'registro-en-linea',
                data: { breadcrumb: 'Registro en linea' },
                children: [
                    {
                        path: 'inicio',
                        component: _pages_registro_en_linea_registro_en_linea_component__WEBPACK_IMPORTED_MODULE_3__["RegistroEnLineaComponent"],
                        data: { breadcrumb: 'Inicio' }
                    },
                    // FLUJO PRINCIPAL
                    {
                        path: 'principal-registro',
                        component: _pages_principal_flujo_registro_principal_flujo_registro_component__WEBPACK_IMPORTED_MODULE_6__["PrincipalFlujoRegistroComponent"],
                        data: { breadcrumb: 'Registro' },
                        children: [
                            {
                                path: 'registro-inicio',
                                component: _pages_registro_inicio_registro_inicio_component__WEBPACK_IMPORTED_MODULE_7__["RegistroInicioComponent"],
                                data: { breadcrumb: 'Inicio' }
                            },
                            {
                                path: 'generacion-ordenes',
                                component: _pages_generacion_de_ordenes_generacion_de_ordenes_component__WEBPACK_IMPORTED_MODULE_20__["GeneracionDeOrdenesComponent"],
                                data: { breadcrumb: 'Generación de ordenes' }
                            },
                            {
                                path: 'termino-atencion',
                                component: _pages_termino_de_atencion_termino_de_atencion_component__WEBPACK_IMPORTED_MODULE_21__["TerminoDeAtencionComponent"],
                                data: { breadcrumb: 'Tiempo de atención' }
                            },
                            {
                                path: 'informe-ajustador',
                                component: _pages_informe_de_ajustador_informe_de_ajustador_component__WEBPACK_IMPORTED_MODULE_22__["InformeDeAjustadorComponent"],
                                data: { breadcrumb: 'Informe del ajustador' }
                            },
                            {
                                path: 'responsable',
                                component: _pages_flujo_registro_flujo_registro_component__WEBPACK_IMPORTED_MODULE_5__["FlujoRegistroComponent"],
                                data: { breadcrumb: 'Responsable' },
                                children: [
                                    {
                                        path: 'datos-siniestro',
                                        component: _pages_datos_de_siniestro_datos_de_siniestro_component__WEBPACK_IMPORTED_MODULE_8__["DatosDeSiniestroComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Datos del siniestro' }
                                    },
                                    {
                                        path: 'busqueda-poliza',
                                        component: _pages_busqueda_de_poliza_busqueda_de_poliza_component__WEBPACK_IMPORTED_MODULE_9__["BusquedaDePolizaComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Búsqueda de póliza' }
                                    },
                                    {
                                        path: 'datos-poliza',
                                        component: _pages_datos_de_poliza_datos_de_poliza_component__WEBPACK_IMPORTED_MODULE_10__["DatosDePolizaComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Datos de la póliza' }
                                    },
                                    {
                                        path: 'datos-asegurado',
                                        component: _pages_datos_de_asegurado_datos_de_asegurado_component__WEBPACK_IMPORTED_MODULE_11__["DatosDeAseguradoComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Datos del asegurado' }
                                    },
                                    {
                                        path: 'datos-conductor',
                                        component: _pages_datos_de_conductor_datos_de_conductor_component__WEBPACK_IMPORTED_MODULE_12__["DatosDeConductorComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Datos del conductor' }
                                    },
                                    {
                                        path: 'datos-vehiculo',
                                        component: _pages_datos_de_vehiculo_datos_de_vehiculo_component__WEBPACK_IMPORTED_MODULE_13__["DatosDeVehiculoComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Datos del vehículo' }
                                    },
                                    {
                                        path: 'involucrados-lesionados',
                                        component: _pages_involucrados_y_lesionados_involucrados_y_lesionados_component__WEBPACK_IMPORTED_MODULE_14__["InvolucradosYLesionadosComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Involucrados y lesionados' }
                                    },
                                    {
                                        path: 'narracion-accidente',
                                        component: _pages_narracion_de_accidente_narracion_de_accidente_component__WEBPACK_IMPORTED_MODULE_15__["NarracionDeAccidenteComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Narración del accidente' }
                                    },
                                    {
                                        path: 'punto-choque-danos',
                                        component: _pages_punto_de_choque_y_danos_punto_de_choque_y_danos_component__WEBPACK_IMPORTED_MODULE_16__["PuntoDeChoqueYDanosComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Punto de choque y daños' }
                                    },
                                    {
                                        path: 'circunstancia',
                                        component: _pages_circunstancia_circunstancia_component__WEBPACK_IMPORTED_MODULE_17__["CircunstanciaComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Circunstancia' }
                                    },
                                    {
                                        path: 'fotos',
                                        component: _pages_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_18__["FotosComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Fotos' }
                                    },
                                    {
                                        path: 'croquis',
                                        component: _pages_croquis_de_accidente_croquis_de_accidente_component__WEBPACK_IMPORTED_MODULE_19__["CroquisDeAccidenteComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Croquis de accidente' }
                                    }
                                ]
                            },
                            {
                                path: 'afectado',
                                component: _pages_flujo_registro_flujo_registro_component__WEBPACK_IMPORTED_MODULE_5__["FlujoRegistroComponent"],
                                data: { breadcrumb: 'Afectado' },
                                children: [
                                    {
                                        path: 'datos-siniestro',
                                        component: _pages_datos_de_siniestro_datos_de_siniestro_component__WEBPACK_IMPORTED_MODULE_8__["DatosDeSiniestroComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Datos del siniestro' }
                                    },
                                    {
                                        path: 'busqueda-poliza',
                                        component: _pages_busqueda_de_poliza_busqueda_de_poliza_component__WEBPACK_IMPORTED_MODULE_9__["BusquedaDePolizaComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Búsqueda de póliza' }
                                    },
                                    {
                                        path: 'datos-poliza',
                                        component: _pages_datos_de_poliza_datos_de_poliza_component__WEBPACK_IMPORTED_MODULE_10__["DatosDePolizaComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Datos de la póliza' }
                                    },
                                    {
                                        path: 'datos-asegurado',
                                        component: _pages_datos_de_asegurado_datos_de_asegurado_component__WEBPACK_IMPORTED_MODULE_11__["DatosDeAseguradoComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Datos del asegurado' }
                                    },
                                    {
                                        path: 'datos-conductor',
                                        component: _pages_datos_de_conductor_datos_de_conductor_component__WEBPACK_IMPORTED_MODULE_12__["DatosDeConductorComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Datos del conductor' }
                                    },
                                    {
                                        path: 'datos-vehiculo',
                                        component: _pages_datos_de_vehiculo_datos_de_vehiculo_component__WEBPACK_IMPORTED_MODULE_13__["DatosDeVehiculoComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Datos del vehículo' }
                                    },
                                    {
                                        path: 'involucrados-lesionados',
                                        component: _pages_involucrados_y_lesionados_involucrados_y_lesionados_component__WEBPACK_IMPORTED_MODULE_14__["InvolucradosYLesionadosComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Involucrados y lesionados' }
                                    },
                                    {
                                        path: 'narracion-accidente',
                                        component: _pages_narracion_de_accidente_narracion_de_accidente_component__WEBPACK_IMPORTED_MODULE_15__["NarracionDeAccidenteComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Narración del accidente' }
                                    },
                                    {
                                        path: 'punto-choque-danos',
                                        component: _pages_punto_de_choque_y_danos_punto_de_choque_y_danos_component__WEBPACK_IMPORTED_MODULE_16__["PuntoDeChoqueYDanosComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Punto de choque y daños' }
                                    },
                                    {
                                        path: 'circunstancia',
                                        component: _pages_circunstancia_circunstancia_component__WEBPACK_IMPORTED_MODULE_17__["CircunstanciaComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Circunstancia' }
                                    },
                                    {
                                        path: 'fotos',
                                        component: _pages_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_18__["FotosComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Fotos' }
                                    },
                                    {
                                        path: 'croquis',
                                        component: _pages_croquis_de_accidente_croquis_de_accidente_component__WEBPACK_IMPORTED_MODULE_19__["CroquisDeAccidenteComponent"],
                                        outlet: 'registroEnLinea',
                                        data: { breadcrumb: 'Croquis de accidente' }
                                    }
                                ]
                            }
                        ]
                    },
                ]
            }
        ]
    }
];
var RegistroRoutingModule = /** @class */ (function () {
    function RegistroRoutingModule() {
    }
    RegistroRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RegistroRoutingModule);
    return RegistroRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/registro/registro.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/registro/registro.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroModule", function() { return RegistroModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro-routing.module */ "./src/app/modules/registro/registro-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _pages_registro_en_linea_registro_en_linea_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/registro-en-linea/registro-en-linea.component */ "./src/app/modules/registro/pages/registro-en-linea/registro-en-linea.component.ts");
/* harmony import */ var _pages_registro_por_lotes_registro_por_lotes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/registro-por-lotes/registro-por-lotes.component */ "./src/app/modules/registro/pages/registro-por-lotes/registro-por-lotes.component.ts");
/* harmony import */ var _pages_principal_flujo_registro_principal_flujo_registro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/principal-flujo-registro/principal-flujo-registro.component */ "./src/app/modules/registro/pages/principal-flujo-registro/principal-flujo-registro.component.ts");
/* harmony import */ var _pages_flujo_registro_flujo_registro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/flujo-registro/flujo-registro.component */ "./src/app/modules/registro/pages/flujo-registro/flujo-registro.component.ts");
/* harmony import */ var _pages_registro_inicio_registro_inicio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/registro-inicio/registro-inicio.component */ "./src/app/modules/registro/pages/registro-inicio/registro-inicio.component.ts");
/* harmony import */ var _pages_datos_de_siniestro_datos_de_siniestro_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/datos-de-siniestro/datos-de-siniestro.component */ "./src/app/modules/registro/pages/datos-de-siniestro/datos-de-siniestro.component.ts");
/* harmony import */ var _pages_busqueda_de_poliza_busqueda_de_poliza_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/busqueda-de-poliza/busqueda-de-poliza.component */ "./src/app/modules/registro/pages/busqueda-de-poliza/busqueda-de-poliza.component.ts");
/* harmony import */ var _pages_datos_de_poliza_datos_de_poliza_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/datos-de-poliza/datos-de-poliza.component */ "./src/app/modules/registro/pages/datos-de-poliza/datos-de-poliza.component.ts");
/* harmony import */ var _pages_datos_de_asegurado_datos_de_asegurado_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/datos-de-asegurado/datos-de-asegurado.component */ "./src/app/modules/registro/pages/datos-de-asegurado/datos-de-asegurado.component.ts");
/* harmony import */ var _pages_datos_de_conductor_datos_de_conductor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/datos-de-conductor/datos-de-conductor.component */ "./src/app/modules/registro/pages/datos-de-conductor/datos-de-conductor.component.ts");
/* harmony import */ var _pages_datos_de_vehiculo_datos_de_vehiculo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/datos-de-vehiculo/datos-de-vehiculo.component */ "./src/app/modules/registro/pages/datos-de-vehiculo/datos-de-vehiculo.component.ts");
/* harmony import */ var _pages_involucrados_y_lesionados_involucrados_y_lesionados_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/involucrados-y-lesionados/involucrados-y-lesionados.component */ "./src/app/modules/registro/pages/involucrados-y-lesionados/involucrados-y-lesionados.component.ts");
/* harmony import */ var _pages_narracion_de_accidente_narracion_de_accidente_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/narracion-de-accidente/narracion-de-accidente.component */ "./src/app/modules/registro/pages/narracion-de-accidente/narracion-de-accidente.component.ts");
/* harmony import */ var _pages_punto_de_choque_y_danos_punto_de_choque_y_danos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/punto-de-choque-y-danos/punto-de-choque-y-danos.component */ "./src/app/modules/registro/pages/punto-de-choque-y-danos/punto-de-choque-y-danos.component.ts");
/* harmony import */ var _pages_circunstancia_circunstancia_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/circunstancia/circunstancia.component */ "./src/app/modules/registro/pages/circunstancia/circunstancia.component.ts");
/* harmony import */ var _pages_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/fotos/fotos.component */ "./src/app/modules/registro/pages/fotos/fotos.component.ts");
/* harmony import */ var _pages_croquis_de_accidente_croquis_de_accidente_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/croquis-de-accidente/croquis-de-accidente.component */ "./src/app/modules/registro/pages/croquis-de-accidente/croquis-de-accidente.component.ts");
/* harmony import */ var _pages_generacion_de_ordenes_generacion_de_ordenes_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/generacion-de-ordenes/generacion-de-ordenes.component */ "./src/app/modules/registro/pages/generacion-de-ordenes/generacion-de-ordenes.component.ts");
/* harmony import */ var _pages_termino_de_atencion_termino_de_atencion_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/termino-de-atencion/termino-de-atencion.component */ "./src/app/modules/registro/pages/termino-de-atencion/termino-de-atencion.component.ts");
/* harmony import */ var _pages_informe_de_ajustador_informe_de_ajustador_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/informe-de-ajustador/informe-de-ajustador.component */ "./src/app/modules/registro/pages/informe-de-ajustador/informe-de-ajustador.component.ts");
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/inicio/inicio.component */ "./src/app/modules/registro/components/inicio/inicio.component.ts");
/* harmony import */ var _components_causa_no_colision_causa_no_colision_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/causa-no-colision/causa-no-colision.component */ "./src/app/modules/registro/components/causa-no-colision/causa-no-colision.component.ts");
/* harmony import */ var _components_causa_colision_causa_colision_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/causa-colision/causa-colision.component */ "./src/app/modules/registro/components/causa-colision/causa-colision.component.ts");
/* harmony import */ var _components_stepper_parent_stepper_parent_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/stepper-parent/stepper-parent.component */ "./src/app/modules/registro/components/stepper-parent/stepper-parent.component.ts");
/* harmony import */ var _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/stepper/stepper.component */ "./src/app/modules/registro/components/stepper/stepper.component.ts");
/* harmony import */ var _components_header_flujo_registro_header_flujo_registro_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/header-flujo-registro/header-flujo-registro.component */ "./src/app/modules/registro/components/header-flujo-registro/header-flujo-registro.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// PAGES


// FLUJO-REGISTRO


















// FIN FLUJO-REGISTRO
// COMPONENTS






//SERVICES
// import { RegistroService } from './services/remote/registro.service';
var RegistroModule = /** @class */ (function () {
    function RegistroModule() {
    }
    RegistroModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _registro_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegistroRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot()
            ],
            declarations: [
                _pages_registro_en_linea_registro_en_linea_component__WEBPACK_IMPORTED_MODULE_5__["RegistroEnLineaComponent"],
                _pages_registro_por_lotes_registro_por_lotes_component__WEBPACK_IMPORTED_MODULE_6__["RegistroPorLotesComponent"],
                _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_25__["InicioComponent"],
                _components_causa_no_colision_causa_no_colision_component__WEBPACK_IMPORTED_MODULE_26__["CausaNoColisionComponent"],
                _components_causa_colision_causa_colision_component__WEBPACK_IMPORTED_MODULE_27__["CausaColisionComponent"],
                _pages_flujo_registro_flujo_registro_component__WEBPACK_IMPORTED_MODULE_8__["FlujoRegistroComponent"],
                _pages_datos_de_siniestro_datos_de_siniestro_component__WEBPACK_IMPORTED_MODULE_10__["DatosDeSiniestroComponent"],
                _pages_datos_de_poliza_datos_de_poliza_component__WEBPACK_IMPORTED_MODULE_12__["DatosDePolizaComponent"],
                _pages_datos_de_asegurado_datos_de_asegurado_component__WEBPACK_IMPORTED_MODULE_13__["DatosDeAseguradoComponent"],
                _pages_datos_de_conductor_datos_de_conductor_component__WEBPACK_IMPORTED_MODULE_14__["DatosDeConductorComponent"],
                _pages_datos_de_vehiculo_datos_de_vehiculo_component__WEBPACK_IMPORTED_MODULE_15__["DatosDeVehiculoComponent"],
                _pages_involucrados_y_lesionados_involucrados_y_lesionados_component__WEBPACK_IMPORTED_MODULE_16__["InvolucradosYLesionadosComponent"],
                _pages_narracion_de_accidente_narracion_de_accidente_component__WEBPACK_IMPORTED_MODULE_17__["NarracionDeAccidenteComponent"],
                _pages_punto_de_choque_y_danos_punto_de_choque_y_danos_component__WEBPACK_IMPORTED_MODULE_18__["PuntoDeChoqueYDanosComponent"],
                _pages_circunstancia_circunstancia_component__WEBPACK_IMPORTED_MODULE_19__["CircunstanciaComponent"],
                _pages_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_20__["FotosComponent"],
                _pages_croquis_de_accidente_croquis_de_accidente_component__WEBPACK_IMPORTED_MODULE_21__["CroquisDeAccidenteComponent"],
                _pages_generacion_de_ordenes_generacion_de_ordenes_component__WEBPACK_IMPORTED_MODULE_22__["GeneracionDeOrdenesComponent"],
                _pages_termino_de_atencion_termino_de_atencion_component__WEBPACK_IMPORTED_MODULE_23__["TerminoDeAtencionComponent"],
                _pages_informe_de_ajustador_informe_de_ajustador_component__WEBPACK_IMPORTED_MODULE_24__["InformeDeAjustadorComponent"],
                _components_header_flujo_registro_header_flujo_registro_component__WEBPACK_IMPORTED_MODULE_30__["HeaderFlujoRegistroComponent"],
                _pages_busqueda_de_poliza_busqueda_de_poliza_component__WEBPACK_IMPORTED_MODULE_11__["BusquedaDePolizaComponent"],
                _pages_principal_flujo_registro_principal_flujo_registro_component__WEBPACK_IMPORTED_MODULE_7__["PrincipalFlujoRegistroComponent"],
                _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_29__["StepperComponent"],
                _components_stepper_parent_stepper_parent_component__WEBPACK_IMPORTED_MODULE_28__["StepperParentComponent"],
                _pages_registro_inicio_registro_inicio_component__WEBPACK_IMPORTED_MODULE_9__["RegistroInicioComponent"]
            ],
        })
    ], RegistroModule);
    return RegistroModule;
}());



/***/ }),

/***/ "./src/app/modules/registro/services/local/factory/factory.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/registro/services/local/factory/factory.service.ts ***!
  \****************************************************************************/
/*! exports provided: FactoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactoryService", function() { return FactoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_registro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../classes/registro */ "./src/app/modules/registro/classes/registro.ts");
/* harmony import */ var _formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formatter/formatter.service */ "./src/app/modules/registro/services/local/formatter/formatter.service.ts");
/* harmony import */ var _global_services_configurations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/services/configurations */ "./src/app/modules/global/services/configurations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FactoryService = /** @class */ (function () {
    function FactoryService(formatterService) {
        this.formatterService = formatterService;
    }
    FactoryService.prototype.construirRegistroColision = function () {
        var catalogoSecciones = _global_services_configurations__WEBPACK_IMPORTED_MODULE_3__["SECCIONES"];
        var seccionInicio = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SeccionInicio"](catalogoSecciones.inicio, {});
        var seccionSiniestro = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SeccionSiniestro"](catalogoSecciones.siniestro, {});
        var seccionPoliza = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SeccionPoliza"](catalogoSecciones.poliza, {});
        var seccionAsegurado = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SeccionAsegurado"](catalogoSecciones.asegurado, {});
        var seccionConductor = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SeccionConductor"](catalogoSecciones.conductor, {});
        var seccionVehiculo = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SeccionVehiculo"](catalogoSecciones.vehiculo, {});
        var seccionInvolucrados = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SeccionInvolucrado"](catalogoSecciones.involucrados, {});
        var seccionNarracion = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SeccionNarracion"](catalogoSecciones.narracion, {});
        var seccionPuntosDeChoque = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SeccionPuntosChoque"](catalogoSecciones.puntosChoque, {});
        var seccionCircunstancias = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SeccionCircunstancias"](catalogoSecciones.circunstancias, {});
        var seccionFotos = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SeccionFotos"](catalogoSecciones.fotos, {});
        var seccionCroquis = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SeccionCroquis"](catalogoSecciones.croquis, {});
        var seccionGeneracionOrdenes = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SeccionGeneracionOrdenes"](catalogoSecciones.generacionOrdenes, {});
        var seccionTerminoAtencion = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SeccionTerminoAtencion"](catalogoSecciones.terminoAtencion, {});
        var seccionInformeAjustador = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SeccionInformeAjustador"](catalogoSecciones.informeAjustador, {});
        var subSecciones = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SubSeccionesClass"](seccionSiniestro, seccionPoliza, seccionAsegurado, seccionConductor, seccionVehiculo, seccionInvolucrados, seccionNarracion, seccionPuntosDeChoque, seccionCircunstancias, seccionFotos, seccionCroquis);
        var subSeccionesAfectado = this.formatterService.asignarRutaUrl(subSecciones, 'afectado', 'seccionAfectado');
        var subSeccionesResponsable = this.formatterService.asignarRutaUrl(subSecciones, 'responsable', 'seccionResponsable');
        var seccionResponsable = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SeccionInvolucrado"](catalogoSecciones.responsable, subSeccionesResponsable);
        var seccionAfectado = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["SeccionInvolucrado"](catalogoSecciones.afectado, subSeccionesAfectado);
        var registroColision = new _classes_registro__WEBPACK_IMPORTED_MODULE_1__["RegistroColision"](seccionInicio, seccionResponsable, seccionAfectado, seccionGeneracionOrdenes, seccionTerminoAtencion, seccionInformeAjustador);
        return registroColision;
    };
    FactoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_formatter_formatter_service__WEBPACK_IMPORTED_MODULE_2__["FormatterService"]])
    ], FactoryService);
    return FactoryService;
}());



/***/ }),

/***/ "./src/app/modules/registro/services/local/formatter/formatter.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/registro/services/local/formatter/formatter.service.ts ***!
  \********************************************************************************/
/*! exports provided: FormatterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatterService", function() { return FormatterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/modules/registro/services/local/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormatterService = /** @class */ (function () {
    function FormatterService(storageService) {
        this.storageService = storageService;
    }
    FormatterService.prototype.eliminarDataSeccion = function (data) {
        var arraySecciones = [];
        if (data) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](data, function (obj) {
                var promise = new Promise(function (resolve, reject) {
                    resolve(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](obj, ['data']));
                });
                arraySecciones.push(promise);
            });
        }
        return Promise.all(arraySecciones);
    };
    FormatterService.prototype.actualizarSeccionActiva = function (sec) {
        var data = this.storageService.getRegistro();
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](data, function (value, key, obj) {
            data[key].estatus['esActiva'] = false;
        });
        data[sec].estatus['esActiva'] = true;
        data[sec].estatus['esHabilitada'] = true;
        this.storageService.setRegistro(data);
    };
    FormatterService.prototype.actualizarSubSeccionActiva = function (sec) {
        var secParent = this.storageService.updateFlagSubFlujo();
        var data = this.storageService.getRegistro();
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](data[secParent].data, function (value, key, obj) {
            data[secParent].data[key].estatus['esActiva'] = false;
        });
        data[secParent].data[sec].estatus['esActiva'] = true;
        data[secParent].data[sec].estatus['esHabilitada'] = true;
        this.storageService.setRegistro(data);
    };
    FormatterService.prototype.actualizarSeccionCompleta = function (sec, dataSec) {
        var data = this.storageService.getRegistro();
        data[sec].data = dataSec;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](data, function (value, key, obj) {
            data[key].estatus['esActiva'] = false;
        });
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](data[sec].estatus, function (value, key, obj) {
            data[sec].estatus[key] = true;
        });
        this.storageService.setRegistro(data);
    };
    FormatterService.prototype.actualizarSubSeccionCompleta = function (sec, dataSec) {
        var secParent = this.storageService.updateFlagSubFlujo();
        var data = this.storageService.getRegistro();
        data[secParent].data[sec].data = dataSec;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](data[secParent].data[sec].estatus, function (value, key, obj) {
            data[secParent].data[sec].estatus[key] = true;
        });
    };
    FormatterService.prototype.recuperarSeccion = function (propertyData) {
    };
    FormatterService.prototype.recuperarSubSeccion = function (propertyParent, propertyData) {
    };
    FormatterService.prototype.asignarRutaUrl = function (data, value, params) {
        var cloneObj = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](data);
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](cloneObj, function (obj) {
            obj.url += '/' + value;
            obj.params = params;
        });
        return cloneObj;
    };
    FormatterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], FormatterService);
    return FormatterService;
}());



/***/ }),

/***/ "./src/app/modules/registro/services/local/storage/storage.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/registro/services/local/storage/storage.service.ts ***!
  \****************************************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var StorageService = /** @class */ (function () {
    function StorageService() {
        this.SubRegistro = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    StorageService.prototype.setLSRegistro = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    StorageService.prototype.getLSRegistro = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    StorageService.prototype.setRegistro = function (data) {
        this.registro = data;
        this.SubRegistro.next(data);
    };
    StorageService.prototype.getRegistro = function () {
        return lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.registro);
    };
    StorageService.prototype.updateRegistro = function () {
        return this.SubRegistro.asObservable();
    };
    StorageService.prototype.setFlagSubFlujo = function (id) {
        this.subFlujoActivo = id;
    };
    StorageService.prototype.updateFlagSubFlujo = function () {
        return this.subFlujoActivo;
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/modules/registro/services/remote/registro.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/registro/services/remote/registro.service.ts ***!
  \**********************************************************************/
/*! exports provided: RegistroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroService", function() { return RegistroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _global_services_configurations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/services/configurations */ "./src/app/modules/global/services/configurations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// MODULES
// import { RegistroModule } from '../../registro.module';
// SERVICES

var RegistroService = /** @class */ (function () {
    function RegistroService(http) {
        this.http = http;
        this.config = _global_services_configurations__WEBPACK_IMPORTED_MODULE_3__["ENVIROMENT"];
    }
    RegistroService.prototype.getDataPost = function (data) {
        return this.http.post(this.config.url + '/test', { data: data ? data : {} });
    };
    RegistroService.prototype.getDataGet = function (data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_global_services_configurations__WEBPACK_IMPORTED_MODULE_3__["ULTIMA_VERSION_APP"]);
        // return this.http.get<any>(
        //     this.config.url + '/test001'
        // );
    };
    /**
       * serviceGet
     * ----------------------------------------------------------------------
     * Utilizada para llamar al servicio mediante GET
     * @param   data      string
       * @since 	0.0.1
       * @return 	response
       */
    RegistroService.prototype.serviceGet = function (data) {
        if (data == 'request_cat_causas') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_global_services_configurations__WEBPACK_IMPORTED_MODULE_3__["REGISTRO_CATEGORIAS_CAUSA"]);
        }
        else if (data == 'request_cat_coberturas') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_global_services_configurations__WEBPACK_IMPORTED_MODULE_3__["REGISTRO_CATEGORIAS_COBERTURA"]);
        }
        // return this.http.get<any>(
        //   this.config.url + '/' + data
        // );
    };
    RegistroService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegistroService);
    return RegistroService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /Users/devmac02/Desktop/eDUA-Web-Bitbucket/edua-web/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!***********************!*\
  !*** jsdom (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************************************!*\
  !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** jsdom/lib/jsdom/utils (ignored) ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** xmldom (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map