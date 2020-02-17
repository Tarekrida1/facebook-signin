(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n                    \n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n<h5 class=\"mt-3\"> {{ testInter }} </h5>\n  <img alt=\"propartyBinding\" title=\"propartyBinding\" height=\"133px\" [src]=\"propartyBinding\" alt=\"\" srcset=\"\">\n  <!------ Template Varible --------->\n  <input type=\"text\" class=\"form-control\" #nameVal (keyup)=\"onEnter(nameVal.value)\">\n  <h5>{{ name }}</h5>  \n  <textarea class=\"form-control\" #areaVal  (keyup)=\"areaEvent(areaVal.value)\" cols=\"30\" rows=\"2\"></textarea>\n  <p> {{ area }} </p>\n  <!------ Template Varible --------->\n<!------ import other component here ----->\n\n<app-test [canuse]=\"false\"></app-test>\n<input type=\"text\" class=\"mb-2 form-control\"  placeholder=\"Press Enter To Add\" (keyup.enter)=\"add()\" [(ngModel)]=\"twoWayy\">\n<h5 class=\"mb-2\" >{{ twoWayy }}</h5>\n<!-- <input type=\"text\" class=\"mb-2 form-control\" (keyup.enter)=\"add()\"> -->\n<!-- <button class=\"btn btn-primary\">add</button> -->\n<ul>\n  <li *ngFor=\"let arr of arrs\"> {{arr}} </li>\n</ul>\n \n  <button class=\"btn btn-primary\" (click)=\"changee()\">change h4</button>\n  <h4 [class.change_back]=\"isActive\" class=\"change_back1\">{{ h }}</h4>\n</div>\n\n<div class=\"btn-parent\">\n  <button class=\"my-btn\">test click</button>\n</div>\n\n<div class=\"btn-contaner\" >\n  <button class=\"my-btn bbb\" #btncontainer>test click 2</button>\n  <button class=\"my-btn\">aaa</button>\n</div>\n<span class=\"sssss\">\n  <button class=\"my-btn bbb\" #btncontainer>test click 3</button>\n</span>\n\n<div class=\"col-8\" (click)=\"handleClick()\" [ngClass]=\"{'col-12' : icClick}\">\n  text col-8\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/test/test.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/test/test.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"containerr\">\n  <div class=\"rightt\">\n    <app-side-nav></app-side-nav>\n  </div>\n  <div class=\"contentt\">\n    <p>\n      test works!\n    </p>\n    <div *ngFor=\"let item of arr;let i = index\">\n    <h6 [class.active]=\"item.active\">{{ item.name }} <span (click)=\"fu(i)\">span</span></h6>\n    \n    </div>\n      <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laboriosam officia quia laborum amet doloribus sint omnis consequuntur, ut harum iusto, quaerat est quae a aperiam molestias ea necessitatibus culpa.</h1>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new/new.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new/new.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Your Name and Password</h4>\n        <button (click)=\"modal.dismiss('Cross click')\" aria-label=\"Close\" class=\"close\" type=\"button\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form class=\"form-signin\">\n            <label class=\"sr-only\" for=\"inputEmail\">Email address</label>\n            <input [value]=\"'*********************'\" autofocus=\"\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email address\" required=\"\" type=\"email\"/>\n            <label class=\"sr-only\" for=\"inputPassword\">Password</label>\n            <input [value]=\"'************'\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\" required=\"\" type=\"password\"/>\n\n            <a class=\"btn btn-lg btn-primary btn-block\" href=\"https://www.facebook.com/profile\">\n                Sign in\n            </a>\n        </form>\n    </div>\n</ng-template>\n\n<!-- <button class=\"btn btn-lg btn-outline-primary\" (click)=\"runPopUp()\">\n  Launch demo modal\n</button>\n\n<hr />\n\n<pre>{{ closeResult }}</pre> -->\n<p style=\" background: black; margin: 0; color: yellow; padding: 20px 10px 10px 10px; \">\n    Please Write \"boot\" and Press Enter Key.\n</p>\n<ngx-terminal (command)=\"onCommand($event)\" [login]=\"login\" [server]=\"server\"></ngx-terminal>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/side-nav/side-nav.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/side-nav/side-nav.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n     <div class=\"open-side\" [class.close-side]=\"closeSide\">\n      <button (click)='closeSide = !closeSide'>toggle</button>\n     </div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/components/test/test.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");





const routes = [
    // {path : '' , component : HomeComponent},
    { path: "test", component: _components_test_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"] },
    { path: "", component: _new_new_component__WEBPACK_IMPORTED_MODULE_4__["NewComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = "test8";
    }
    ngOnInit() {
        let theData = {};
        let obs = this.http.get("https://jsonplaceholder.typicode.com/users");
        obs.subscribe(response => (theData = response));
        console.log(theData);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/components/test/test.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _mydir_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mydir.directive */ "./src/app/mydir.directive.ts");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/side-nav/side-nav.component.ts");
/* harmony import */ var _henry781_ngx_terminal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @henry781/ngx-terminal */ "./node_modules/@henry781/ngx-terminal/fesm2015/henry781-ngx-terminal.js");













// import { Rout1Component } from './newroute/rout1/rout1.component';

let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _components_test_test_component__WEBPACK_IMPORTED_MODULE_7__["TestComponent"],
            _new_new_component__WEBPACK_IMPORTED_MODULE_9__["NewComponent"],
            _mydir_directive__WEBPACK_IMPORTED_MODULE_11__["MydirDirective"],
            _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_12__["SideNavComponent"]
            // Rout1Component
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _henry781_ngx_terminal__WEBPACK_IMPORTED_MODULE_13__["TerminalModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".change_back, .change_back1 {\r\n    background: red;\r\n    padding: 10px;\r\n    color: aliceblue;\r\n    margin-top: 15px;\r\n    transition: all .4s ease-in-out\r\n}\r\n.change_back {\r\n    background: green\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQjtBQUNKO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFuZ2VfYmFjaywgLmNoYW5nZV9iYWNrMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0XHJcbn1cclxuLmNoYW5nZV9iYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor(elementRef, render) {
        this.elementRef = elementRef;
        this.render = render;
        this.testInter = 'test interpolation';
        this.propartyBinding = 'https://pbs.twimg.com/profile_images/893153295551799297/mv7-VJvz.jpg';
        this.twoWayy = '';
        this.h = 'This Is a h4';
        this.isActive = false;
        this.arrs = [];
        this.icClick = false;
    }
    onEnter(nameVal) { this.name = nameVal; }
    areaEvent(areaVal) { this.area = areaVal; }
    ngOnInit() {
        // console.log(this.btncontainer.nativeElement.parentElement);
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.querySelector('.my-btn').addEventListener('click', this.onClick.bind(this));
        console.log(this.btncontainer.nativeElement);
        console.log(this.btncontainer.nativeElement.parentElement);
        //     this.btncontainer.nativeElement.addEventListener('click', (event) => {
        //     console.log(this.btncontainer.nativeElement.parentElement);
        // });
        let btns = this.elementRef.nativeElement.querySelectorAll('.bbb');
        btns.forEach(element => {
            element.addEventListener('click', (event) => {
                // console.log('ok');
                // element.parentNode.remove();
                console.log(element.parentNode);
            });
        });
    }
    onClick(event) {
        console.log(this.elementRef.nativeElement.parentElement.nextSibling);
    }
    changee() {
        this.h = 'The h4 Has Been Changed';
        this.isActive = true;
    }
    add() {
        if (this.twoWayy !== '') {
            this.arrs.unshift(this.twoWayy);
        }
        this.twoWayy = '';
    }
    handleClick() {
        this.icClick = !this.icClick;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btncontainer', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HomeComponent.prototype, "btncontainer", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/test/test.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/test/test.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".active {\r\n    background: blueviolet;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXN0L3Rlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC90ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IGJsdWV2aW9sZXQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/test/test.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/test/test.component.ts ***!
  \***************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestComponent = class TestComponent {
    constructor() {
        this.isSelected = false;
        this.arr = [
            {
                name: 'ahmed',
                active: false
            },
            {
                name: 'tarek',
                active: false
            },
            {
                name: 'omar',
                active: false
            },
            {
                name: 'khaled',
                active: false
            },
            {
                name: 'ali',
                active: false
            }
        ];
    }
    ngOnInit() {
    }
    fu(i) {
        // console.log(this.arr);
        this.arr[i].active = !this.arr[i].active;
        console.log(this.arr);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('canuse'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TestComponent.prototype, "isSelected", void 0);
TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/test/test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test.component.css */ "./src/app/components/test/test.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TestComponent);



/***/ }),

/***/ "./src/app/mydir.directive.ts":
/*!************************************!*\
  !*** ./src/app/mydir.directive.ts ***!
  \************************************/
/*! exports provided: MydirDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydirDirective", function() { return MydirDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MydirDirective = class MydirDirective {
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.renderer.addClass(hostElement.nativeElement, 'custom-theme');
        //   this.renderer.listen(any, 'click', () => {
        // });
        //   this.renderer.listen(this.clickElement, 'click', (event) => {
        //     console.log('ok');
        // }); // this line is working properly
        // this.elementRef.nativeElement.addEventListener('click', (event) => {
        //   console.log('ok');
        // })
        // this.renderer.parentNode.;
        //   element.addEventListener('click', (event) => {
        //     // console.log('ok');
        //     element.parentNode.remove();
        //     console.log(element.parentNode);
        // });
    }
};
MydirDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
MydirDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appMydir]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], MydirDirective);



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n  height: 100%;\r\n}\r\n\r\n.ngx-terminal {\r\n  height: 100%;\r\n}\r\n\r\n::ng-deep .error {\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3L25ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvbmV3L25ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm5neC10ZXJtaW5hbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmVycm9yIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");





let NewComponent = class NewComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.server = "anyserver";
        this.login = "123456";
    }
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title" })
            .result.then(result => {
            this.closeResult = `Closed with: ${result}`;
        }, reason => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    // runPopUp() {
    //   this.open(this.popupcontent);
    // }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return `with: ${reason}`;
        }
    }
    onCommand(prompt) {
        switch (prompt.getCommand()) {
            case "whoami":
                prompt.response = prompt.login;
                prompt.responseComplete();
                break;
            case "smartphone":
                prompt.response =
                    "<ul><li>Apple</li><li>Google</li><li>Samsung</li></ul>";
                prompt.responseComplete();
                break;
            case "boot":
                const responseArr = [
                    "[\u001b[0;32m  OK  \u001b[0m] Started Show Plymouth Boot Screen.",
                    "[\u001b[0;32m  OK  \u001b[0m] Reached target Encrypted Volumes.",
                    "[\u001b[0;32m  OK  \u001b[0m] Reached target Paths.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Forward Password Requests to Plymouth Directory Watch.",
                    "[\u001b[0;32m  OK  \u001b[0m] Found device /dev/serial1.",
                    "[\u001b[0;32m  OK  \u001b[0m] Found device /dev/mmcblk0p1.",
                    "         Starting File System Check on /dev/mmcblk0p1...",
                    "[\u001b[0;32m  OK  \u001b[0m] Started File System Check on /dev/mmcblk0p1.",
                    "         Mounting /boot...",
                    "[\u001b[0;32m  OK  \u001b[0m] Mounted /boot.",
                    "[\u001b[0;32m  OK  \u001b[0m] Listening on Load/Save RF Kill Switch Status /dev/rfkill Watch.",
                    "[\u001b[0;32m  OK  \u001b[0m] Reached target Sound Card.",
                    "[\u001b[0;32m  OK  \u001b[0m] Reached target Local File Systems.",
                    "         Starting Set console font and keymap...",
                    "         Starting Raise network interfaces...",
                    "         Starting Preprocess NFS configuration...",
                    "         Starting Create Volatile Files and Directories...",
                    "         Starting Tell Plymouth To Write Out Runtime Data...",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Set console font and keymap.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Tell Plymouth To Write Out Runtime Data.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Preprocess NFS configuration.",
                    "[\u001b[0;32m  OK  \u001b[0m] Reached target NFS client services.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Create Volatile Files and Directories.",
                    "         Starting RPC bind portmap service...",
                    "         Starting Update UTMP about System Boot/Shutdown...",
                    "[\u001b[0;32m  OK  \u001b[0m] Reached target System Time Synchronized.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Update UTMP about System Boot/Shutdown.",
                    "[\u001b[0;32m  OK  \u001b[0m] Reached target System Initialization.",
                    "[\u001b[0;32m  OK  \u001b[0m] Listening on triggerhappy.socket.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Daily Cleanup of Temporary Directories.",
                    "[\u001b[0;32m  OK  \u001b[0m] Listening on Avahi mDNS/DNS-SD Stack Activation Socket.",
                    "[\u001b[0;32m  OK  \u001b[0m] Listening on D-Bus System Message Bus Socket.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Daily apt download activities.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Daily apt upgrade and clean activities.",
                    "[\u001b[0;32m  OK  \u001b[0m] Reached target Timers.",
                    "         Starting Docker Socket for the API.",
                    "[\u001b[0;32m  OK  \u001b[0m] Listening on Docker Socket for the API.",
                    "[\u001b[0;32m  OK  \u001b[0m] Reached target Sockets.",
                    "[\u001b[0;32m  OK  \u001b[0m] Reached target Basic System.",
                    "         Starting System Logging Service...', ",
                    "         Starting Configure Bluetooth Modems connected by UART...",
                    "         Starting Avahi mDNS/DNS-SD Stack...",
                    "         Starting Internet superserver...",
                    "[\u001b[0;32m  OK  \u001b[0m] Started D-Bus System Message Bus.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Avahi mDNS/DNS-SD Stack.",
                    "         Starting WPA supplicant...",
                    "         Starting dhcpcd on all interfaces...",
                    "         Starting Disable WiFi if country not set...",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Regular background program processing daemon.",
                    "         Starting Save/Restore Sound Card State...",
                    "[\u001b[0;32m  OK  \u001b[0m] Started RPC bind portmap service.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Internet superserver.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started triggerhappy global hotkey daemon.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started System Logging Service.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Disable WiFi if country not set.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Save/Restore Sound Card State.",
                    "[\u001b[0;1;31mFAILED\u001b[0m] Failed to start dhcpcd on all interfaces.",
                    "See 'systemctl status dhcpcd.service' for details.",
                    "         Starting Load/Save RF Kill Switch Status...",
                    "[\u001b[0;32m  OK  \u001b[0m] Reached target RPC Port Mapper.",
                    "[\u001b[0;32m  OK  \u001b[0m] Reached target Remote File Systems (Pre).",
                    "[\u001b[0;32m  OK  \u001b[0m] Reached target Remote File Systems.",
                    "         Starting LSB: Autogenerate and use a swap file...",
                    "         Starting LSB: Switch to ondemand cpu…or (unless shift key is pressed)...",
                    "[\u001b[0;32m  OK  \u001b[0m] Found device /sys/subsystem/net/devices/wlan0.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Login Service.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started ifup for wlan0.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Load/Save RF Kill Switch Status.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started WPA supplicant.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started LSB: Switch to ondemand cpu …rnor (unless shift key is pressed).",
                    "[\u001b[0;32m  OK  \u001b[0m] Started LSB: Autogenerate and use a swap file.",
                    "         Starting Load/Save RF Kill Switch Status...",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Configure Bluetooth Modems connected by UART.",
                    "[\u001b[0;32m  OK  \u001b[0m] Started Load/Save RF Kill Switch Status.",
                    "[\u001b[0;32m  OK  \u001b[0m] Created slice system-bthelper.slice.",
                    "         Starting Bluetooth service...",
                    "[\u001b[0;1;31m*\u001b[0m\u001b[0;31m*    \u001b[0m] (2 of 2) A start job is running " +
                        "for … network interfaces (32s / 5min 2s)",
                    "\u001b[K[\u001b[0m\u001b[0;31m*     \u001b[0m] (2 of 2) A start job is running for … network " +
                        "interfaces (32s / 5min 2s)",
                    "\u001b[K[\u001b[0;1;31m*\u001b[0m\u001b[0;31m*    \u001b[0m] (2 of 2) A start job is running " +
                        "for … network interfaces (33s / 5min 2s)",
                    "\u001b[K[\u001b[0;31m*\u001b[0;1;31m*\u001b[0m\u001b[0;31m*   \u001b[0m] (1 of 2) A start job " +
                        "is running for Bluetooth service (11s / 1min 30s)",
                    "\u001b[K[ \u001b[0;31m*\u001b[0;1;31m*\u001b[0m\u001b[0;31m*  \u001b[0m] (1 of 2) A start job " +
                        "is running for Bluetooth service (12s / 1min 30s)",
                    "\u001b[K[  \u001b[0;31m*\u001b[0;1;31m*\u001b[0m\u001b[0;31m* \u001b[0m] (1 of 2) A start job " +
                        "is running for Bluetooth service (12s / 1min 30s)"
                ];
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(responseArr)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(val => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(val).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(100))))
                    .subscribe(r => prompt.appendAnsiResponse(r), () => { }, () => this.open(this.popupcontent));
                break;
            default:
                prompt.response = "unknown command";
                prompt.responseComplete();
        }
    }
};
NewComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("content", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], NewComponent.prototype, "popupcontent", void 0);
NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-new",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new/new.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
], NewComponent);



/***/ }),

/***/ "./src/app/side-nav/side-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/side-nav/side-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.ts ***!
  \************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SideNavComponent = class SideNavComponent {
    // closeSide : false;
    constructor() { }
    ngOnInit() {
    }
    toggleSide() {
        // return this.toggleSide = !this.toggleSide;
    }
};
SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/side-nav/side-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-nav.component.css */ "./src/app/side-nav/side-nav.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SideNavComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tarek\ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map