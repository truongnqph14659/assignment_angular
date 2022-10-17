import { HttpserviceService } from './../services/httpservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private HttpClient:HttpserviceService) { }
  data:any={
    name:'',
    email:'',
    password:''
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.HttpClient.signup(this.data).subscribe((data:any)=>{
      alert('đăng ký thành công')
    })
  }

}
