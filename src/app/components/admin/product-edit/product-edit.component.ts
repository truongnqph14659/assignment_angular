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
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
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
  }
  formAdd() {
    this.productService.editProduct(this.product).subscribe(item => {
      console.log('thanh cong', item)
      this.router.navigateByUrl(`admin/home/product`);
    })
  }


}
