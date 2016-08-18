import {Component} from 'angular2/core';
import {RouteConfig,Router, ROUTER_DIRECTIVES} from 'angular2/router';
import { MainPageComponent } from './mainpage/mainpage.component';
import { ONamaComponent } from './onama/onama.component';
import {RegisterComponent} from './registrovanje/register.component';
import {LoginComponent} from './logovanje/log.component';
import {TestComponent} from './test/test.component';
import {ForumComponent} from './forum/forum.component';
import {FormComponent4} from './dodajproizvod/dodajproizvod.component';
import {ProizvodiComponent} from './proizvodi/proizvodi.component';
import {Pipe} from 'angular2/core';
import {NarucvivanjeComponent} from './narucivanje/narucivanje.component';
import {NarudzbineComponent} from './narudzbine/narudzbine.component';

@Component({
 selector: 'moja-aplikacija',
templateUrl: 'app/router.html',
directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
 {path:'/', name: 'MainPage', component: MainPageComponent, useAsDefault: true},
 {path:'/onama', name:'ONama', component: ONamaComponent},
 {path:'/registrovanje', name:'RegisterPage', component: RegisterComponent},
 {path:'/logovanje', name:'LoginPage', component: LoginComponent},
 {path:'/test', name:'TestPage', component: TestComponent},
 {path:'/forum', name:'ForumPage', component: ForumComponent},

 {path:'/dodajproizvod', name:'FormPage4', component: FormComponent4},
 {path:'/proizvodi', name:'ProizvodiPage', component: ProizvodiComponent},
{path:'/narucivanje/:proizvodi_ID', name: 'NarucivanjePage', component: NarucvivanjeComponent},
{path:'/narudzbine', name: 'NarudzbinePage', component: NarudzbineComponent},
])


export class AppComponent {

  router: Router;
  isAuth: String;
  isAuth2: String;

  constructor(router: Router) {
  this.router = router;
   router.subscribe((val) => {

   if(localStorage.getItem('token2') !== null){
    this.isAuth2 = "yes";
     }
      if(localStorage.getItem('token2') == null){
     this.isAuth2 = "no";
      }
      if(localStorage.getItem('token') !== null){
       this.isAuth = "yes";
        }
         if(localStorage.getItem('token') == null){
        this.isAuth = "no";
         }
   });
  }
  onLogout(): void {

  localStorage.removeItem("token2");
  localStorage.removeItem("token");
  this.router.navigate(['./MainPage']);

  if(localStorage.getItem('token') !== null){
  		this.isAuth = "yes";
  	}
    if(localStorage.getItem('token') == null){
    		this.isAuth = "no";
    	}
   if(localStorage.getItem('token2') !== null){
     this.isAuth2 = "yes";
  	}
    if(localStorage.getItem('token2') == null){
     this.isAuth2 = "no";
  }
}
}
