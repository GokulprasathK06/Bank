import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environment';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  loan:FormGroup|any;
  constructor(private formBuilder : FormBuilder,private http: HttpClient,private router: Router) { }

  ngOnInit():void {
    this.loan=new FormGroup({
      'uname': new FormControl(),
      'email': new FormControl(),
      'accnumber': new FormControl(),
      'pannumber': new FormControl(),
      'saving': new FormControl(),
      'current': new FormControl(),
      'purpose': new FormControl(),
      'loan': new FormControl(),
      'income': new FormControl(),
      'phone': new FormControl()
    })
  }
  loandata(register:FormGroup){
    //console.log(this.register.value);
    this.http.post<any>(environment.apiUrls.loan, this.loan.value)
    .subscribe(res=>{
      alert('data added successfully');
      this.loan.reset();
      this.router.navigate(['applyed']);
    }, err=>{
      alert('Something went wrong');
    })
  }
  sbtn(){
    this.router.navigate(['applyed']);
  }
 
}
