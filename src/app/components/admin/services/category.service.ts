import { IBrand } from './../model/brand';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API=`https://apiserverassangular.vercel.app/api/productCates`
  constructor(private httpClient: HttpClient) { }
  getBrand():Observable<IBrand[]>{
    return this.httpClient.get<IBrand[]>(`https://apiserverassangular.vercel.app/api/brandCate`)
  }
  getCat(): Observable<ICategory[]>{
    return this.httpClient.get<ICategory[]>(`${this.API}`)
  }
  removeCat(id:number): Observable<ICategory>{
    return this.httpClient.delete<ICategory>(`${this.API}/${id}`)
  }
  addCat(category:any): Observable<ICategory>{
    return this.httpClient.post<ICategory>(`${this.API}`,category)
  }
}
//hibhsjjs