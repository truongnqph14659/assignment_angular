import { IBrand } from './../model/brand';
import { ICategory } from './../model/category';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  constructor(
    private categoryService: CategoryService
  ) { }
  category: ICategory={
    id:0,
    cateName:"",
    cateType:""
  }
  brand:IBrand[]=[]
  ngOnInit(): void {
    this.categoryService.getBrand().subscribe(data=>{
      this.brand=data
    })
  }
  formAdd(){
    this.categoryService.addCat(this.category).subscribe((data:any)=>{
      this.category = data
    })
  }

}
