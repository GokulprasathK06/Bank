import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environment';

@Component({
  selector: 'app-Accountopen',
  templateUrl: './Accountopen.component.html',
  styleUrls: ['./Accountopen.component.css']
})
export class AccountopenComponent implements OnInit {
  apply:FormGroup|any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.apply=new FormGroup({
      'uname': new FormControl(),
      'fname': new FormControl(),
      'lname': new FormControl(),
      'phone': new FormControl(),
      'email': new FormControl(),
      'aadharnumber': new FormControl(),
      'pannumber': new FormControl(),
      'dob':new FormControl(),

      
    })
  }
  applydata(apply:FormGroup){
    //console.log(this.register.value);
    this.http.post<any>(environment.apiUrls.accountApplication, this.apply.value)
    .subscribe(res=>{
      alert('Account apply successfully');
      this.apply.reset();
      this.router.navigate(['applyed']);
    }, err=>{
      alert('Something went wrong');
    })
  }
  sbtn(){
    this.router.navigate(['applyed']);
  }
 

}
