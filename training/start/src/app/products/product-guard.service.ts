import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate{

  constructor(private _router:Router, private _routeActivate: ActivatedRoute) { }

  canActivate(route: ActivatedRouteSnapshot, ):boolean {
    //let id = +this._routeActivate.snapshot.paramMap.get('id');
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Invalid product Id');
      console.log('Invalid product Id', + id);
      this._router.navigate(['/products']);
      return false;
    };
    return true;
  }
}
