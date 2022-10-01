import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { IProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API = `http://localhost:3000/products`
  constructor(private httpClient: HttpClient) { }
  getProduct():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${this.API}`)
  }
  removeproduct(id:any):Observable<IProduct[]>{
    return this.httpClient.delete<IProduct[]>(`${this.API}/${id}`)
  }
  addProduct(product:any):Observable<IProduct[]>{
    return this.httpClient.post<IProduct[]>(`${this.API}`,product)
  }
}

