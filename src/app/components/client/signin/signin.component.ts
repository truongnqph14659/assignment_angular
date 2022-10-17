import { NgxSpinnerService } from "ngx-spinner";
import { HttpserviceService } from './../services/httpservice.service';
import {NgToastService} from 'ng-angular-popup'
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private http:HttpserviceService, private spiner:NgxSpinnerService,private router:Router, private toastr:NgToastService) { }
  data:any={
    email:'',
    password:''
  }
  reactiveForm!:FormGroup
  ngOnInit(): void {
      this.reactiveForm = new FormGroup({
        password: new FormControl(null,Validators.required),
        email: new FormControl(null,[Validators.required,Validators.email]),
    })
  }
  onSubmit(){
    if(!this.reactiveForm.valid){
      this.toastr.error({detail:"Notice",summary:'Check!, Your Information is missing.',duration:5000,})
    }else{
      this.spiner.show(undefined,{
        type:'ball-scale-multiple',
      })
      this.http.signin(this.data).subscribe((data:any)=>{
        setTimeout(()=>{
          this.spiner.hide()
          localStorage.setItem('user', JSON.stringify(data))
          this.router.navigate(['/admin'])
        },1000)
      },
      error=>{
        setTimeout(()=>{
          this.spiner.hide()
          this.toastr.error({detail:"Notice",summary:error.error,duration:6000,})
        },2000) 
      }
      )
    }
  }
}
