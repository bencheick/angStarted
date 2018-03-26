import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


import { IProduct } from './products'

@Injectable()
export class ProductService{

    private _productUrl = './api/products/products.json';
    constructor(private _httpClient: HttpClient){
    }

    getProducts(): Observable<IProduct[]>{
        return this._httpClient.get<IProduct[]>(this._productUrl)
        .do(data => console.log('ALL '+ JSON.stringify(data)));
    }

    handleErro(httpError: HttpErrorResponse){
        console.log(httpError.message);
        return Observable.throw(httpError.message)
    }
}