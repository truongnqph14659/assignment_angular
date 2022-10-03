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
    window.addEventListener('popstate', function (e) {
      var state = e.state;
      console.log(state);
      if (state !== null) {
          window.location.reload()
      }
  });
  }
 

}
