import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { IProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API = `https://apiserverassangular.vercel.app/api/products`
  constructor(private httpClient: HttpClient) { }
  getProduct():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${this.API}`)
  }
  removeproduct(id:any):Observable<IProduct>{
    return this.httpClient.delete<IProduct>(`${this.API}/${id}`)
  }
  addProduct(product:any):Observable<IProduct>{
    return this.httpClient.post<IProduct>(`${this.API}`,product)
  }
  editProduct(product:any):Observable<IProduct>{
    return this.httpClient.put<IProduct>(`${this.API}/${product.id}`,product)
  }
  detailProduct(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${this.API}/${id}`);
  }
  sendImage(file:any):Observable<any[]>{
    const CLOUDINARY_NAME = "trangltph14650";
    const CLOUDINARY_API = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`;
    const CLOUDINARY_PRESET = "mavqbcfn";
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", CLOUDINARY_PRESET)
    return this.httpClient.post<any[]>(CLOUDINARY_API,formData)
  }
}

