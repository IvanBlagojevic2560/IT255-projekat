import { Component, Directive } from 'angular2/core';
import {Component, FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'

@Component({
  selector: 'FormComponent4',
  templateUrl: 'app/dodajproizvod/dodajproizvod.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]
})

export class FormComponent4 {

  addForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
   select: Int = 1;

  constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
    this.addForm = builder.group({
     deo_id: [this.select, Validators.none],
     model: ["", Validators.none],
	 opis: ["", Validators.none],
	 cena: ["", Validators.none],

   });
   var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');

   	http.get('http://localhost/phpProjekat/getdelovi.php',{headers:headers})
		.map(res => res.json()).share()
		.subscribe(delovi => {
			this.delovi = delovi.delovi;
		},
		err => {
			 this.router.parent.navigate(['./MainPage']);
		}
	);
  }

  onAdd(): void {
	var data = "model="+this.addForm.value.model+"&opis="+this.addForm.value.opis + "&deo_id=" + this.select+"&cena="+this.addForm.value.cena;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');

	this.http.post('http://localhost/phpProjekat/addservisservice.php',data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
	err => {
		var obj = JSON.parse(err._body);
		document.getElementsByClassName("alert")[0].style.display = "block";
		document.getElementsByClassName("alert")[0].innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
	},
	() => {
	    this.router.parent.navigate(['./MainPage']);
	 }
	);
  }
}
