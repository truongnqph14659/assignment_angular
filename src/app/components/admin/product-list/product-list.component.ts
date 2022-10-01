import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products:IProduct[]=[]
  ngOnInit(): void {
    this.productService.getProduct().subscribe(data => {
      this.products =  data
    })
  }
  RemoveProduct(id:any){
    this.productService.removeproduct(id).subscribe(()=>{
      this.products =  this.products.filter(item=> item.id !==id)
      console.log(this.products);
      
    })
  }

}
