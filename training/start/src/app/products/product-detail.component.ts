import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct;
  pageTitle: string = 'Product Detail';

  //constructor(private _route: ActivatedRoute, private _router: Router, private _routeActive:ActivatedRouteSnapshot){}
  constructor(private _route: ActivatedRoute, private _router: Router){}

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    //let id = +this._routeActive.url[1].path;
    this.pageTitle += `: ${id}`;
    this.product =     {
        "productId": id,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  }

  onBack():void{
    this._router.navigate(['/products']);
  }
}
