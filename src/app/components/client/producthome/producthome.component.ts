import { productModel } from './../model/product';
import { HttpserviceService } from './../services/httpservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producthome',
  templateUrl: './producthome.component.html',
  styleUrls: ['./producthome.component.css']
})
export class ProducthomeComponent implements OnInit {
  dataPruducts:productModel[]=[]
  constructor(private httpRequest:HttpserviceService) { }

  ngOnInit(): void {
    this.httpRequest.getProdducts().subscribe(data=>{
      this.dataPruducts = data
    })

  }

}
