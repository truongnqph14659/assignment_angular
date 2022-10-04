import { CategoryService } from '../services/category.service'
import { ICategory } from './../model/category';
import { ProductService } from '../services/product.service';
import { IProduct } from '../model/product';
import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
   @Output() onNewEvent = new EventEmitter();
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
    ) { }
  product: IProduct={
    id:0,
    name: "",
    img: "",
    price:"",
    productCateId:"",
    hot: ""
  }

  formAdd(){
    this.productService.addProduct(this.product).subscribe(item=>{
      console.log(1);
      
    })
  }
  categories:ICategory[]=[]
  ngOnInit(): void {
    this.categoryService.getCat().subscribe((data:any)=>{
      this.categories=  data
    })
  }
}
