import { categoryModel } from './../model/category';
import { HttpserviceService } from './../services/httpservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  constructor(private urlroute:ActivatedRoute,private httpRequest:HttpserviceService) { }
  serchFor:string=''
  dataSerch:any[]=[]
  ngOnInit(): void {
    this.urlroute.url.subscribe((data)=>{
      this.httpRequest.getCateProdduct(data[1].path).subscribe((data:any)=>{
        this.dataSerch = data.products
      })
      this.serchFor=data[0].path
    })
  }
}
