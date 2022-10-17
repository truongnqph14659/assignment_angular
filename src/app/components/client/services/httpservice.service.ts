import { productModel } from './../model/product';
import { categoryModel } from './../model/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  API='https://apiserverassangular.vercel.app/api'
  constructor(private httpRequest:HttpClient) { }
  getCategory(typeCate:string):Observable<categoryModel[]>{
    return this.httpRequest.get<categoryModel[]>(`${this.API}/productCates?cateType=${typeCate}`)
  }
  getCateProdduct(id:any):Observable<categoryModel[]>{
    return this.httpRequest.get<categoryModel[]>(`${this.API}/productCates/${id}?_embed=products`)
  }
  getProdducts():Observable<productModel[]>{
    return this.httpRequest.get<productModel[]>(`${this.API}/products`)
  }
  getProdductId(id:any):Observable<productModel>{
    return this.httpRequest.get<productModel>(`${this.API}/products/${id}`)
  }
  signup(data:any):Observable<any[]>{
    return this.httpRequest.post<any[]>(`${this.API}/signup`,data)
  }
  signin(data:any):Observable<any[]>{
    return this.httpRequest.post<any[]>(`${this.API}/signin`,data)
  }
}
