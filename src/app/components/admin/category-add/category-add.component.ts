import { ReactiveFormsModule } from '@angular/forms';
import { IBrand } from './../model/brand';
import { ICategory } from './../model/category';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
  ) { }
  formGroups!:FormGroup
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
    this.formGroups = new FormGroup({
      cateName : new FormControl("",[Validators.required, Validators.minLength(5)]),
      cateType :  new FormControl("",[Validators.required]),
    })
  }
  formAdd(){
    this.categoryService.addCat(this.category).subscribe((data:any)=>{
      this.category = data
    })
    // console.log(this.formGroups);
    
  }

}
//ahh
