import { ICategory } from './../model/category';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
categories:ICategory[]=[]
  ngOnInit(): void {
    this.categoryService.getCat().subscribe(data=>{
      this.categories=  data
    })
  }
  RemoveCategory(id:number){
    this.categoryService.removeCat(id).subscribe(()=>{
      this.categories =  this.categories.filter(item=> item.id !== id)
    })
  }
}
