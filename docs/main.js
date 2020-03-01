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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/registro/registro.component */ "./src/app/pages/registro/registro.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");







var routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'registro', component: _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_4__["RegistroComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: '**', redirectTo: 'registro' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'loginApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/registro/registro.component */ "./src/app/pages/registro/registro.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");



// Se importa FormsModule

// Importación de ClientModule






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_7__["RegistroComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    // Inyectamos el servicio
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    // canActivate(
    //   next: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return true;
    // }
    AuthGuard.prototype.canActivate = function () {
        // console.log('Guard');
        // return this.auth.estaAutotenticado();
        if (this.auth.estaAutotenticado()) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/usuario.models.ts":
/*!******************************************!*\
  !*** ./src/app/models/usuario.models.ts ***!
  \******************************************/
/*! exports provided: UsuarioModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioModel", function() { return UsuarioModel; });
// Utilizaremos un archivo de typescript para controlar las propiedades y posibles metodos que puede tener este usuario
// La idea principal es para que ayude a escribir sin cometer errores
// Y que ayude en toda parte donde necesite un usuario
var UsuarioModel = /** @class */ (function () {
    function UsuarioModel() {
    }
    return UsuarioModel;
}());

// si necesitara mas campos en mi formulario deberian agregarse en este modelo


/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-5\">\n  <h1> Mi Aplicación secreta</h1>\n  <button \n        class=\"btn btn-outline-danger\"\n        (click)=\"salir()\"\n        >\n  Salir\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.salir = function () {
        this.auth.logout();
        this.router.navigateByUrl('/login');
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter animated fadeInLeft\">\n    <div class=\"container-login100\">\n        <div class=\"wrap-login100 p-t-50 p-b-90\">\n            <form (ngSubmit)=\"login(l)\"\n            #l=\"ngForm\"\n            class=\"login100-form validate-form flex-sb flex-w\">\n\n                <span class=\"login100-form-title p-b-51\">\n                    Login\n                </span>\n\n                <span *ngIf=\"l.submitted && l.controls['email'].errors\"\n                class=\"text-danger\">El correo es obligatorio</span> \n                <div class=\"wrap-input100 m-b-16\">\n                    <input class=\"input100\" \n                           type=\"email\"              \n                           name=\"email\" \n                           [(ngModel)]=\"usuario.email\"\n                           required\n                           email\n                           placeholder=\"Email\">\n\n                    <span class=\"focus-input100\"></span>\n                </div>\n                \n                <span *ngIf=\"l.submitted && l.controls['password'].errors\"\n                class=\"text-danger\">La contraseña debe de ser más de 6 letras</span> \n                <div class=\"wrap-input100 m-b-16\">\n                    <input class=\"input100\"\n                           type=\"password\" \n                           name=\"password\"\n                           [(ngModel)]=\"usuario.password\"\n                           required\n                           minlength=\"6\"\n                           placeholder=\"Password\">\n                    <span class=\"focus-input100\"></span>\n                </div>\n                \n                <div class=\"flex-sb-m w-full p-t-3 p-b-24\">\n                    <div class=\"contact100-form-checkbox\">\n                        <input [(ngModel)]=\"recordarme\"\n                            class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n                        <label class=\"label-checkbox100\" for=\"ckb1\">\n                            Recordar mi usuario\n                        </label>\n                    </div>\n\n                    <div>\n                        <a routerLink=\"/registro\" class=\"txt1\">\n                            ¿No tienes cuenta?\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"container-login100-form-btn m-t-17\">\n                    <button class=\"login100-form-btn\" type=\"submit\">\n                        Ingresar\n                    </button>\n                </div>\n\n            </form>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_usuario_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/usuario.models */ "./src/app/models/usuario.models.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




// ES6 Modules or TypeScript


var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        // Creamos una instancia del usuarioModel
        this.usuario = new _models_usuario_models__WEBPACK_IMPORTED_MODULE_2__["UsuarioModel"]();
        this.recordarme = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('email')) {
            this.usuario.email = localStorage.getItem('email');
            this.recordarme = true;
        }
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            // prevenir que la persona pueda cerrar el sweet alter afuera
            allowOutsideClick: false,
            type: 'info',
            text: 'Espere por favor'
        });
        // Boton que simula un loading
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.showLoading();
        this.auth.login(this.usuario)
            .subscribe(function (resp) {
            console.log(resp);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.close();
            // si tenemos un usuario valido
            if (_this.recordarme) {
                localStorage.setItem('email', _this.usuario.email);
            }
            // navegaremos al home
            _this.router.navigateByUrl('/home');
        }, function (err) {
            console.log(err.error.error.message);
            // si tenemos un error
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                // prevenir que la persona pueda cerrar el sweet alter afuera
                allowOutsideClick: false,
                type: 'error',
                text: err.error.error.message
            });
        });
        // console.log('Imprimir si el formulario es valido');
        // validar
        // console.log(form);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/registro/registro.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/registro/registro.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/registro/registro.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/registro/registro.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter animated fadeInRight\">\n        <div class=\"container-login100\">\n            <div class=\"wrap-login100 p-t-50 p-b-90\">\n                <form (ngSubmit)=\"onSubmit(f)\"\n                    #f=\"ngForm\"\n                    class=\"login100-form validate-form flex-sb flex-w\">\n    \n                    <span class=\"login100-form-title p-b-51\">\n                        Crear nueva cuenta\n                    </span>\n    \n                    <span *ngIf=\"f.submitted && f.controls['email'].errors\"\n                    class=\"text-danger animated fadeIn\">El correo es obligatorio</span> \n                    <div class=\"wrap-input100 m-b-16\">\n                        <input class=\"input100\" \n                               type=\"email\" \n                               name=\"email\" \n                               [(ngModel)]=\"usuario.email\" \n                               required\n                               email\n                               placeholder=\"Email\">\n    \n                        <span class=\"focus-input100\"></span>\n                    </div>\n                    <!-- se añade dos condiciones si el formulario se ha postiado o hay errores en el campo nombre -->\n                    <span *ngIf=\"f.submitted && f.controls['nombre'].errors\"\n                     class=\"text-danger animated fadeIn\">El nombre es obligatorio</span>\n                    <div class=\"wrap-input100 m-b-16\">\n                        <input class=\"input100\" \n                               type=\"text\" \n                               name=\"nombre\" \n                               [(ngModel)]=\"usuario.nombre\"\n                               minlength=\"2\"\n                               required \n                               placeholder=\"Nombre y apellidos\">\n    \n                        <span class=\"focus-input100\"></span>\n                    </div>\n                    \n                    <span *ngIf=\"f.submitted && f.controls['password'].errors\"\n                           class=\"text-danger animated fadeIn\">La contraseña debe de ser más de 6 letras</span>\n                    <div class=\"wrap-input100 m-b-16\">\n                        <input class=\"input100\"\n                               type=\"password\" \n                               name=\"password\" \n                               [(ngModel)]=\"usuario.password\" \n                               minlength=\"6\"\n                               required\n                               placeholder=\"Password\">\n                        <span class=\"focus-input100\"></span>\n                    </div>\n                    \n                    <div  class=\"flex-sb-m w-full p-t-3 p-b-24\">\n                        <div class=\"contact100-form-checkbox\">\n                            <input [(ngModel)]=\"recordarme\"\n                            class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n                            <label class=\"label-checkbox100\" for=\"ckb1\">\n                                Recordar mi usuario\n                            </label>\n                        </div>\n    \n                        <div>\n                            <a routerLink=\"/login\" class=\"txt1\">\n                                ¿Ya tienes cuenta? / Ingresar\n                            </a>\n                        </div>\n                    </div>\n    \n                    <div class=\"container-login100-form-btn m-t-17\">\n                        <button class=\"login100-form-btn\" type=\"submit\">\n                            Crear cuenta\n                        </button>\n                    </div>\n    \n                </form>\n            </div>\n        </div>\n    </div>\n    \n    "

/***/ }),

/***/ "./src/app/pages/registro/registro.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/registro/registro.component.ts ***!
  \******************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_usuario_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/usuario.models */ "./src/app/models/usuario.models.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




// ES6 Modules or TypeScript


var RegistroComponent = /** @class */ (function () {
    // iyectamos el servicio
    function RegistroComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.recordarme = false;
    }
    RegistroComponent.prototype.ngOnInit = function () {
        // Incializamos el usuario
        this.usuario = new _models_usuario_models__WEBPACK_IMPORTED_MODULE_2__["UsuarioModel"]();
        // this.usuario.email = 'piteraraya@gmail.com';
    };
    RegistroComponent.prototype.onSubmit = function (form) {
        var _this = this;
        // si el formulario noi es valido lo unico que quiero hacer es un return y salirme
        if (form.invalid) {
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            // prevenir que la persona pueda cerrar el sweet alter afuera
            allowOutsideClick: false,
            type: 'info',
            text: 'Espere por favor'
        });
        // Boton que simula un loading
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.showLoading();
        // console.log('Formulario enviado');
        // console.log(this.usuario);
        // console.log(form);
        this.auth.nuevoUsuario(this.usuario)
            .subscribe(function (respuesta) {
            console.log(respuesta);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.close();
            // si tenemos un usuario valido
            if (_this.recordarme) {
                localStorage.setItem('email', _this.usuario.email);
            }
            // navegaremos al home
            _this.router.navigateByUrl('/home');
        }, function (err) {
            console.log(err.error.error.message);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                // prevenir que la persona pueda cerrar el sweet alter afuera
                allowOutsideClick: false,
                type: 'error',
                title: 'Error al autenticar',
                text: err.error.error.message
            });
        });
    };
    RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/pages/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/pages/registro/registro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    // Sign up with email/password | crear nuevos usuarios
    // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
    // Sign with email/password | Login
    // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
    //Iyecatamos nuestro servicio
    function AuthService(http) {
        this.http = http;
        // Ocuparemos dos servicios
        this.url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
        this.apikey = 'AIzaSyCvlPoOF9w5mu-fy847W9jyi0dZHSNnmgM'; // copiamos api key del setting de firebase del proyecto
        // Colocamos el leer el token al inicio para saber justo cuando ingresa verifica si tenemos un token o no
        this.leerToken();
    }
    // Cerrar sessión
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.login = function (usuario) {
        var _this = this;
        // Objeto usuario
        var authData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, usuario, { returnSecureToken: true });
        return this.http.post(this.url + "signInWithPassword?key=" + this.apikey, authData).pipe(
        // la ventaja del map que si se aparece un error el map nunca se dispara
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            // console.log('entro en el mapa del RXJS');
            // se ejecuta solo si la función tiene exito , si el return trae un error el map nunca se va ejecutar
            _this.guardarToken(resp['idToken']);
            return resp;
        }));
    };
    AuthService.prototype.nuevoUsuario = function (usuario) {
        // añadir returnSecureToken
        // Una forma
        // const authData = {
        //   email: usuario.email,
        //   password: usuario.password,
        //   returnSecureToken: true
        // }
        var _this = this;
        //Otra forma
        var authData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, usuario, { returnSecureToken: true });
        // Llamar nuestro servicio enciando una petición post
        return this.http.post(this.url + "signUp?key=" + this.apikey, authData).pipe(
        // la ventaja del map que si se aparece un error el map nunca se dispara
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            // console.log('entro en el mapa del RXJS');
            // se ejecuta solo si la función tiene exito , si el return trae un error el map nunca se va ejecutar
            _this.guardarToken(resp['idToken']);
            return resp;
        }));
    };
    AuthService.prototype.guardarToken = function (idToken) {
        this.userToken = idToken;
        // grabamos el token
        localStorage.setItem('token', idToken);
        //Validar fecha
        var hoy = new Date();
        hoy.setSeconds(3600);
        localStorage.setItem('expira', hoy.getTime().toString());
    };
    AuthService.prototype.leerToken = function () {
        // Verificamos si tenemos información
        if (localStorage.getItem('token')) {
            // si existe lo leemos del localstorage
            this.userToken = localStorage.getItem('token');
        }
        else {
            // si no existe el token
            this.userToken = '';
        }
        return this.userToken;
    };
    //Metodo para saber si el usuario que está autenticado
    AuthService.prototype.estaAutotenticado = function () {
        // return this.userToken.length>2; validación correcta pero incompleta
        //Validar fecha
        if (this.userToken.length < 2) {
            return false; // token no existe
        }
        var expira = Number(localStorage.getItem('expira'));
        // transforma expira en fecha
        var expiraDate = new Date();
        expiraDate.setTime(expira);
        // Está fecha es mayor en momento actual?
        if (expiraDate > new Date()) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PeterZipek\Documents\MEGA\00-Cursos\Angular8\07-bonus-loginApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map