import { Component} from '@angular/core';
@Component({
 selector: 'pm-root',
 template:
  // `
  // <div><h1>{{ pageTitle}}</h1>
  //   <pm-Products></pm-Products>
  // </div>`,
  `
    <div>
        <nav class='navbar navbar-default'>
            <div class='constainer-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                  <li><a [routerLink]="['/products']">Product List</a></li>
                  <li><a [routerLink]="['/welcome']">Home</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `
})
export class AppComponent{
  pageTitle : string = 'Acme Product Management'; 
}