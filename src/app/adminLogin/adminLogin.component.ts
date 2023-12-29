import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environment';

@Component({
  selector: 'app-adminLogin',
  templateUrl: './adminLogin.component.html',
  styleUrls: ['./adminLogin.component.css']
})
export class AdminLoginComponent implements OnInit {

  login:FormGroup|any;

  constructor(private formBuilder : FormBuilder,private http: HttpClient,private router: Router ) { }

  ngOnInit(): void {
    this.login=new FormGroup({
      'uname': new FormControl(),
      'password': new FormControl()
    })
  }
  logindata(login:FormGroup){
    //console.log(this.login.value);
    this.http.get<any>(environment.apiUrls.admin)
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.uname == this.login.value.uname && a.password === this.login.value.password
      });
      if(user){
        alert('You are successfully logged in');
        this.login.reset();
        this.router.navigate(['adminmenu']);
      }
    }, err=>{
      alert('Something went wrong');
    })
     
    }
}
