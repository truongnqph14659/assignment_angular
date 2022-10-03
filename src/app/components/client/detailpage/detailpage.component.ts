import { productModel } from './../model/product';
import { HttpserviceService } from './../services/httpservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {
  dataProduct:productModel={
    id:0,
    name:'',
    img: '',
    price:'',
    productCateId:'',
    hot: ''
  }
  constructor(private route:ActivatedRoute,private httpRequest:HttpserviceService) { }

  ngOnInit(): void {
    this.route.url.subscribe(data=>{
    this.httpRequest.getProdductId(data[1].path).subscribe(data=>{
      this.dataProduct=data
    })
    })
  }
}
