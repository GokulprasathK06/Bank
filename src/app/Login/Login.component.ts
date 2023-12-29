import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { environment } from 'src/environment';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup|any;

  constructor(private formBuilder : FormBuilder,private http: HttpClient,private router: Router ) { }

  ngOnInit(): void {
    this.login=new FormGroup({
      'accnumber': new FormControl(),
      'password': new FormControl()
    })
  }
  logindata(login:FormGroup){
    //console.log(this.login.value);
    this.http.get<any>(environment.apiUrls.Register)
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        
        return a.accnumber == this.login.value.accnumber && a.password === this.login.value.password

      });
      if(user){
        sessionStorage.setItem("accounNumber",this.login.value.accnumber);
        sessionStorage.setItem("password",this.login.value.password);
        
        alert('You are successfully logged in');
        this.login.reset();
        this.router.navigate(['menu']);
      }
    }, err=>{
      alert('Something went wrong');
    })
     
    }

  }

