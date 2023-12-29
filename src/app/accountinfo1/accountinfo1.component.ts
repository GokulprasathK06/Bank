import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environment';

@Component({
  selector: 'app-accountinfo1',
  templateUrl: './accountinfo1.component.html',
  styleUrls: ['./accountinfo1.component.css']
})
export class Accountinfo1Component implements OnInit {
  check:FormGroup|any;

  constructor(private formBuilder : FormBuilder,private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.check=new FormGroup({
      'accnumber': new FormControl(),
      'password': new FormControl()
    })
  }
  checkdata(check:FormGroup){
    //console.log(this.login.value);
    this.http.get<any>(environment.apiUrls.Register)
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.accnumber == this.check.value.accnumber && a.password === this.check.value.password
      });
      if(user){
        alert('you are successfully entered');
        this.check.reset();
        this.router.navigate(['account']);
      }
    }, err=>{
      alert('Something went wrong');
    })
     
    }

}
