# IT255-Projektni-zadatak
## Naručivanje auto delova

## Tehnologije
- Frontend - Angularjs 2 framework 
- Backend - PHP

## Nesto o aplikaciji
Ova aplikacija koristi korisnicima koji žele na lak ii brz način da naruče deo za svoj automobil. Pored samo korisnika postoji i sam admin, koji može da doda proizvod, obriše, dobija uvid u naručene delove itd.

## Potrebno je imati
### Node.js


### Baza
Potrebno je importovati vebprojekat.sql fajl u bazu.


### Pokretanje projekta

```
- Otvorite Command Prompt
- Udjete u direktorijum gde se nalazi projekat, zbog php-a bi trebalo da se stavi u folder phpProjekat da bi sve funkcionisalo kako treba
- Pokrenete npm install
- npm run tsc:w
- Pokrenete npm start
- Default browser ce se otvoriti i pokrenuti automatski aplikaciju

```


## Kratak prolazak kroz aplikaciju

### register.component.ts
Typescript koji je vezan za registraciju novog korisnika.
```
export class RegisterComponent {


  registerForm: ControlGroup;
   http: Http;
   router: Router;
   postResponse: String;

   constructor(builder: FormBuilder, http: Http, router: Router) {
  this.http = http;
  this.router = router;
   this.registerForm = builder.group({
   username: ["", Validators.none],
   password: ["", Validators.none],
   firstName: ["", Validators.none],
   lastName: ["", Validators.none],
   adresa: ["", Validators.none],
   ulica: ["", Validators.none],
   telefon: ["", Validators.none],
   });

   if(localStorage.getItem('token') != null){
  this.router.parent.navigate(['MainPage']);
   }

   }
   onRegister(): void {
  var data =
  "username="+this.registerForm.value.username+"&password="+this.registerForm.value.password
  +"&firstName="+this.registerForm.value.firstName+"&lastName="+this.registerForm.value.lastName
  +"&adresa="+this.registerForm.value.adresa+"&ulica="+this.registerForm.value.ulica
  +"&telefon="+this.registerForm.value.telefon;
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  this.http.post('http://localhost/phpProjekat/registerservice.php',data, {headers:headers})
  .map(res => res)
  .subscribe( data => this.postResponse = data,
  );
  }

```
### narudzbine.component.ts
Typescript koji daje adminu pregled u naručene delove.
```
export class NarudzbineComponent {


  http: Http;
  router: Router;
  postResponse: String;

   	korpa: Object[];

	constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
	var headers = new Headers();

	http.get('http://localhost/phpprojekat/spisakNarudzbina.php',{headers:headers})
		.map(res => res.json())
		.subscribe(korpa => {
			this.korpa = korpa.korpa;
			setInterval(function(){
				$('table').DataTable();
			},200);
		},
		err => {
			 this.router.parent.navigate(['./MainPage']);
		}
	);
  }

  public remove(item: Number) {
      console.log("Remove: ", item);
	  var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

	  this.http.get('http://localhost/phpprojekat/obrisiNarudzbinu.php?id='+ item,{headers:headers})  .subscribe( data => this.postResponse = data);
	 location.reload();
   }

```
### Forme za logovanje/registrovanje
Forma za registrovanje.
```

				<div class="panel-heading">
	               <div class="panel-title text-center">
	               		<h1 class="title">Registracija</h1>
	               		<hr />
	               	</div>
                  <div class="alert alert-danger" style="display: none;">

                  </div>
	            </div>
				<div class="main-login main-center">
					<form role="form" [ngFormModel]="registerForm" class="form-horizontal" method="post" >

						<div class="form-group">
							<label for="firstName" class="cols-sm-2 control-label">Ime</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="glyphicon glyphicon-user" aria-hidden="true"></i></span>
									<input type="text" class="form-control" ngControl='firstName'  placeholder="Unesi svoje ime"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="lastName" class="cols-sm-2 control-label">Prezime</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="glyphicon glyphicon-user" aria-hidden="true"></i></span>
									<input type="text" class="form-control" ngControl='lastName'  placeholder="Unesi svoje prezime"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="username" class="cols-sm-2 control-label">Username</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="glyphicon glyphicon-th" aria-hidden="true"></i></span>
									<input type="text" class="form-control" ngControl='username'  placeholder="Unesi username"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="password" class="cols-sm-2 control-label">Password</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="glyphicon glyphicon-lock" aria-hidden="true"></i></span>
									<input type="password" class="form-control" ngControl='password'  placeholder="Unesi password"/>
								</div>
							</div>
						</div>

            <div class="form-group">
              <label for="adresa" class="cols-sm-2 control-label">Adresa</label>
              <div class="cols-sm-10">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-home" aria-hidden="true"></i></span>
                  <input type="text" class="form-control" ngControl='adresa'  placeholder="Unesi svoju adresu"/>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="ulica" class="cols-sm-2 control-label">Ulica</label>
              <div class="cols-sm-10">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-road" aria-hidden="true"></i></span>
                  <input type="text" class="form-control" ngControl='ulica'  placeholder="Unesi ulicu i broj"/>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="telefon" class="cols-sm-2 control-label">Telefon</label>
              <div class="cols-sm-10">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-earphone" aria-hidden="true"></i></span>
                  <input type="text" class="form-control" ngControl='telefon'  placeholder="Unesi svoj broj telefona"/>
                </div>
              </div>
            </div>

							<button (click)="onRegister()" class="btn btn-primary">Registruj se</button>


					</form>
				</div>
   

```

Forma za logovanje:
```

				<div class="panel-heading">
	               <div class="panel-title text-center">
	               		<h1 class="title">Logovanje</h1>
	               		<hr />
	               	</div>
                  <div class="alert alert-danger" style="display: none;">

                  </div>
	            </div>
				<div class="main-login main-center">
					<form role="form" [ngFormModel]="loginForm" class="form-horizontal" method="post" >


						<div class="form-group">
							<label for="username" class="cols-sm-2 control-label">Username</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="glyphicon glyphicon-th" aria-hidden="true"></i></span>
									<input type="text" class="form-control" ngControl='username' [(ngModel)]='name' placeholder="Unesi username"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="password" class="cols-sm-2 control-label">Password</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="glyphicon glyphicon-lock" aria-hidden="true"></i></span>
									<input type="password" class="form-control" ngControl='password'  placeholder="Unesi password"/>
								</div>
							</div>
						</div>

            <div class="form-group">
           <div class="col-sm-10">
        <div class="checkbox">
          <label><input type="checkbox" ngControl='checkbox'>Administrator?</label>
        </div>
      </div>
    </div>

							<button (click)="onLogin()" class="btn btn-primary">Loguj se</button>


					</form>
				</div>
   

```

Forma za dodavanje proizvoda:
```



<form role="form" [ngFormModel]="addForm">

   <div class="form-group">
    <label for="deo">Deo:</label>
	<select #selectOption (change)='select=selectOption.value' class="form-control" ng-selected="Yes" >
		 <option *ngFor="#deo of delovi" [value]="deo.ID">{{deo.NAZIV}} </option>
	</select>
  </div>
  <div class="form-group">
    <label for="model">Model automobila:</label>
	<input type="text" class="form-control" ngControl='model'>
  </div>

   <div class="form-group">
    <label for="opis">Opis dela:</label>
    <input type="text" class="form-control" ngControl='opis'>
  </div>


   <div class="form-group">
    <label for="cena">Cena(din.):</label>
    <input type="text" class="form-control" ngControl='cena'>
  </div>





  <button (click)="onAdd()" class="btn btn-primary" >Dodaj auto deo </button>
</form>

```
### Registracija/Logovanje preko php-a
Registracija korisnika
```
  onRegister(): void {
  var data =
  "username="+this.registerForm.value.username+"&password="+this.registerForm.value.password
  +"&firstName="+this.registerForm.value.firstName+"&lastName="+this.registerForm.value.lastName
  +"&adresa="+this.registerForm.value.adresa+"&ulica="+this.registerForm.value.ulica
  +"&telefon="+this.registerForm.value.telefon;
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  this.http.post('http://localhost/phpProjekat/registerservice.php',data, {headers:headers})
  .map(res => res)
  .subscribe( data => this.postResponse = data,
  err => {
  var obj = JSON.parse(err._body);
  document.getElementsByClassName("alert")[0].style.display = "block";
  document.getElementsByClassName("alert")[0].innerHTML =
  obj.error.split("\\r\\n").join("<br/>").split("\"").join("");

  },
  () => {
  var obj = JSON.parse(this.postResponse._body);
  localStorage.setItem('token', obj.token);
  this.router.parent.navigate(['./MainPage']);
  }
  );
  }

```

Logovanje korisnika (admina)
```
  onLogin(): void {
 var data =
 "username="+this.loginForm.value.username+"&password="+this.loginForm.value.password;
 var headers = new Headers();
 headers.append('Content-Type', 'application/x-www-form-urlencoded');

 if (this.loginForm.value.checkbox !== true ) {
 this.http.post('http://localhost/phpProjekat/loginservice.php',data, {headers:headers})
  .map(res => res)
  .subscribe( data => this.postResponse = data,
 err => alert(JSON.stringify(err)),
 () => {
 if(this.postResponse._body.indexOf("error") === -1){
 var obj = JSON.parse(this.postResponse._body);
 localStorage.setItem('token', obj.token);
  this.router.parent.navigate(['./MainPage']);
 }else{
 var obj = JSON.parse(this.postResponse._body);
 document.getElementsByClassName("alert")[0].style.display = "block";
 document.getElementsByClassName("alert")[0].innerHTML =
 obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
 }
 }
 );
  }
else {

  this.http.post('http://localhost/phpProjekat/loginserviceadmin.php',data, {headers:headers})
   .map(res => res)
   .subscribe( data => this.postResponse = data,
  err => alert(JSON.stringify(err)),
  () => {
  if(this.postResponse._body.indexOf("error") === -1){
  var obj = JSON.parse(this.postResponse._body);
  localStorage.setItem('token2', obj.token2);
   this.router.parent.navigate(['./MainPage']);
  }else{
  var obj = JSON.parse(this.postResponse._body);
  document.getElementsByClassName("alert")[0].style.display = "block";
  document.getElementsByClassName("alert")[0].innerHTML =
  obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
  }
  }
  );
   }

}

```

Dodavanje proizvoda:
```
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
```

Narucivanje:
```
  
send(): void {

  var data = "username="+this.narucivanjeForm.value.username
  +"&NAZIV="+this.narucivanjeForm.value.NAZIV + "&model=" + this.narucivanjeForm.value.model
  +"&opis="+this.narucivanjeForm.value.opis +"&cena="+this.narucivanjeForm.value.cena;
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  this.http.post('http://localhost/phpprojekat/narudzbina.php',data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
  err => {
    var obj = JSON.parse(err._body);
    document.getElementsByClassName("alert")[0].style.display = "block";
    document.getElementsByClassName("alert")[0].innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
  },
  () => {
      this.router.parent.navigate(['./ProizvodiPage']);
      alert ("Čestitamo na kupovini");
   }
  );
  }
```

Brisanje korisničkog profila:
```
 
  public remove(item: Number) {
      console.log("Remove: ", item);
	  var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

	  this.http.get('http://localhost/phpprojekat/obrisiProfil.php?korisnici_ID='+ item,{headers:headers})  .subscribe( data => this.postResponse = data);
	 location.reload();
   }
```
Dodavanje servisa::
```
   
  onAddServis(): void {
    var data = "serviserId=" + this.myServisForm.value.serviserId + "&voziloId=" + this.myServisForm.value.voziloId + "&datum=" + this.myServisForm.value.datum + "&brojKilometara=" + this.myServisForm.value.brojKilometara + "&opis=" + this.myServisForm.value.opis + "&cena=" + this.myServisForm.value.cena;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost/it255-projekat/php/addservis.php', data, { headers: headers })
      .map(res => res)
      .subscribe(data => this.postResponse = data,
      err => console.error(err),
      () => {
        if (this.postResponse._body.indexOf("error") === -1) {
          alert("Uspesno dodavanje servisa");
          location.reload();
        } else {
          alert("Neuspesno dodavanje servisa");
        }
      }
      );
  }
  ```
Dodavanje vozila: 

```
 onAddVozilo(): void {
    var data = "proizvodjacId=" + this.myVoziloForm.value.proizvodjacId + "&modelId=" + this.myVoziloForm.value.modelId +"&brojSasije=" + this.myVoziloForm.value.brojSasije + "&registracija=" + this.myVoziloForm.value.registracija + "&kubikaza=" + this.myVoziloForm.value.kubikaza + "&kilometraza=" + this.myVoziloForm.value.kilometraza + "&kategorija=" + this.myVoziloForm.value.kategorija + "&cena=" + this.myVoziloForm.value.cena;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost/it255-projekat/php/addvozilo.php', data, { headers: headers })
      .map(res => res)
      .subscribe(data => this.postResponse = data,
      err => console.error(err),
      () => {
        if (this.postResponse._body.indexOf("error") === -1) {
          alert("Uspesno dodavanje vozila. Da bi se vozilo prikazalo na glavnoj stranici potrebno je i staviti putanju do slike u sledecem tabu.");
          location.reload();
        } else {
          alert("Neuspesno dodavanje vozila");
        }
      }
      );
  }
```
  
## Kontakt
luka.kotur.2399@metropolitan.ac.rs
dejan.zivlak.2526@metropolitan.ac.rs


[node-download]: https://nodejs.org/en/download/
[Angular2]: https://angular.io/
