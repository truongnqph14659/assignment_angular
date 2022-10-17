import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private routeUrl:ActivatedRoute) { }

  ngOnInit(): void {
    // this.routeUrl.paramMap.subscribe(data=>{
    //   console.log(data);
    // })
  }

}
