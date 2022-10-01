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

  constructor(private urlroute:ActivatedRoute) { 
   
  }

  ngOnInit(): void {
      // this.urlroute.url.subscribe((data)=>{
      //   if(data.length!=0){
      //     if(data[0].path=='brandname') this.checkurl=false
      //     if(data[0].path=='detail') this.checkUrlDetail=false
      //   }
      // })
  }
}
