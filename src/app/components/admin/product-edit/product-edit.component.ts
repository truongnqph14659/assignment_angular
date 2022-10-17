import { ICategory } from './../model/category';
import { CategoryService } from './../services/category.service';
import { IProduct } from './../model/product';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product!: IProduct;
  categories: ICategory[]=[]
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private categoryService:CategoryService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (params) {
        this.productService.detailProduct(id).subscribe(item => {
          console.log(this.product);
          this.product = item
          
        })
      }
    });
      this.categoryService.getCat().subscribe(data=>{
        this.categories=  data
      })
    }
  formAdd() {
    this.productService.editProduct(this.product).subscribe(item => {
      console.log('thanh cong', item)
      this.router.navigateByUrl(`admin/home/product`);
    })
  }



}
