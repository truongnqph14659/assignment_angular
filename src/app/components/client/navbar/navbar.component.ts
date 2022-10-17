import { categoryModel } from './../model/category';
import { HttpserviceService } from './../services/httpservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private urlroute:ActivatedRoute,private servies:HttpserviceService) { 
  }
  PHONE:categoryModel[]=[]
  LAPTOP:categoryModel[]=[]
  TABLET:categoryModel[]=[]
  GAMING:categoryModel[]=[]
  SMARTTV:categoryModel[]=[]
  PHU_KIEN:categoryModel[]=[]
  SPEAKER:categoryModel[]=[]

  ngOnInit(): void {
   this.servies.getCategory('phone').subscribe(data=>{
      this.PHONE = data
    })
    this.servies.getCategory('speaker').subscribe(data=>{
      this.SPEAKER = data
    })
    this.servies.getCategory('laptop').subscribe(data=>{
      this.LAPTOP = data
    })
    this.servies.getCategory('tablet').subscribe(data=>{
      this.TABLET = data
    })
    this.servies.getCategory('accessory').subscribe(data=>{
      this.PHU_KIEN = data
    })
    this.servies.getCategory('smarttv').subscribe(data=>{
      this.SMARTTV = data
    })
    this.servies.getCategory('gaming').subscribe(data=>{
      this.GAMING = data
    })
  }
}
