import { CategoryService } from '../services/category.service'
import { ICategory } from './../model/category';
import { ProductService } from '../services/product.service';
import { IProduct } from '../model/product';
import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import upLoadFile from '../upLoadFile';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
   @Output() onNewEvent = new EventEmitter();
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    ) { }
    formProduct!:FormGroup
  product: IProduct={
    id:0,
    name: "",
    img: "",
    price:"",
    productCateId:"",
    hot: ""
  }

  formAdd(){
    const input_file:any =  document.querySelector("#input-file")
    console.log(input_file.files[0]);
    this.productService.sendImage(input_file.files[0]).subscribe((data:any)=>{
      this.product.img =  data.url
      this.productService.addProduct(this.product).subscribe(item=>{
        console.log(item);
        this.router.navigateByUrl(`admin/home/product`);
      })
      console.log(this.product);
      
    })
    
  }
  categories:ICategory[]=[]
  ngOnInit(): void {
    this.categoryService.getCat().subscribe((data:any)=>{
      this.categories=  data
    })
    this.formProduct =  new FormGroup({
      name: new FormControl("",[Validators.required]),
      price: new FormControl("",[Validators.required]),
      productCateId: new FormControl("",[Validators.required])
    })

  
    
  }
}
