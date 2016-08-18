System.register(['angular2/core', 'angular2/router', './mainpage/mainpage.component', './onama/onama.component', './registrovanje/register.component', './logovanje/log.component', './test/test.component', './forum/forum.component', './dodajproizvod/dodajproizvod.component', './proizvodi/proizvodi.component', './narucivanje/narucivanje.component', './narudzbine/narudzbine.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, mainpage_component_1, onama_component_1, register_component_1, log_component_1, test_component_1, forum_component_1, dodajproizvod_component_1, proizvodi_component_1, narucivanje_component_1, narudzbine_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (mainpage_component_1_1) {
                mainpage_component_1 = mainpage_component_1_1;
            },
            function (onama_component_1_1) {
                onama_component_1 = onama_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (log_component_1_1) {
                log_component_1 = log_component_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            },
            function (forum_component_1_1) {
                forum_component_1 = forum_component_1_1;
            },
            function (dodajproizvod_component_1_1) {
                dodajproizvod_component_1 = dodajproizvod_component_1_1;
            },
            function (proizvodi_component_1_1) {
                proizvodi_component_1 = proizvodi_component_1_1;
            },
            function (narucivanje_component_1_1) {
                narucivanje_component_1 = narucivanje_component_1_1;
            },
            function (narudzbine_component_1_1) {
                narudzbine_component_1 = narudzbine_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    var _this = this;
                    this.router = router;
                    router.subscribe(function (val) {
                        if (localStorage.getItem('token2') !== null) {
                            _this.isAuth2 = "yes";
                        }
                        if (localStorage.getItem('token2') == null) {
                            _this.isAuth2 = "no";
                        }
                        if (localStorage.getItem('token') !== null) {
                            _this.isAuth = "yes";
                        }
                        if (localStorage.getItem('token') == null) {
                            _this.isAuth = "no";
                        }
                    });
                }
                AppComponent.prototype.onLogout = function () {
                    localStorage.removeItem("token2");
                    localStorage.removeItem("token");
                    this.router.navigate(['./MainPage']);
                    if (localStorage.getItem('token') !== null) {
                        this.isAuth = "yes";
                    }
                    if (localStorage.getItem('token') == null) {
                        this.isAuth = "no";
                    }
                    if (localStorage.getItem('token2') !== null) {
                        this.isAuth2 = "yes";
                    }
                    if (localStorage.getItem('token2') == null) {
                        this.isAuth2 = "no";
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'moja-aplikacija',
                        templateUrl: 'app/router.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'MainPage', component: mainpage_component_1.MainPageComponent, useAsDefault: true },
                        { path: '/onama', name: 'ONama', component: onama_component_1.ONamaComponent },
                        { path: '/registrovanje', name: 'RegisterPage', component: register_component_1.RegisterComponent },
                        { path: '/logovanje', name: 'LoginPage', component: log_component_1.LoginComponent },
                        { path: '/test', name: 'TestPage', component: test_component_1.TestComponent },
                        { path: '/forum', name: 'ForumPage', component: forum_component_1.ForumComponent },
                        { path: '/dodajproizvod', name: 'FormPage4', component: dodajproizvod_component_1.FormComponent4 },
                        { path: '/proizvodi', name: 'ProizvodiPage', component: proizvodi_component_1.ProizvodiComponent },
                        { path: '/narucivanje/:proizvodi_ID', name: 'NarucivanjePage', component: narucivanje_component_1.NarucvivanjeComponent },
                        { path: '/narudzbine', name: 'NarudzbinePage', component: narudzbine_component_1.NarudzbineComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map