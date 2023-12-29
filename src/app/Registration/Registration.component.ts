import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environment';
@Component({
  selector: 'app-Registration',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css']
})
export class RegistrationComponent implements OnInit {
  register:FormGroup|any;



  constructor(private http: HttpClient, private router: Router) { }
 

  ngOnInit(): void {
    this.register=new FormGroup({
      'fname': new FormControl(),
      'uname': new FormControl(),
      'phone': new FormControl(),
      'email': new FormControl(),
      'accnumber': new FormControl(),
      'password': new FormControl()

      
    })
  }
  registerdata(register:FormGroup){
    //console.log(this.register.value);
    this.http.post<any>(environment.apiUrls.Register, this.register.value)
    .subscribe(res=>{
      alert('data added successfully');
      this.register.reset();
      this.router.navigate(['login']);
    }, err=>{
      alert('Something went wrong');
    })
  }
  sbtn(){
    this.router.navigate(['login']);
  }
 

}
