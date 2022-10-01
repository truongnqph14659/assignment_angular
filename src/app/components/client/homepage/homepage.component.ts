import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private routes:ActivatedRoute) { }

  ngOnInit(): void {
    // this.routes.paramMap.subscribe((params)=>{
    //   console.log(params);
    //  })
  }

}
