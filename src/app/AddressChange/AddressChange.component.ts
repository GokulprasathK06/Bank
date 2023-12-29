import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AddressChange',
  templateUrl: './AddressChange.component.html',
  styleUrls: ['./AddressChange.component.css']
})
export class AddressChangeComponent implements OnInit {
  address:FormGroup|any;

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.address=new FormGroup({
      'uname': new FormControl(),
      'email': new FormControl(),
      'accnumber': new FormControl(),
      'area': new FormControl(),
      'city': new FormControl(),
      'state': new FormControl(),
      'country': new FormControl(),
      'post': new FormControl()

    })
  }
  addressdata(address:FormGroup){
    this.http.post<any>("http://localhost:3000/address", this.address.value)
    .subscribe(res=>{
      alert('Address updated successfully');
      this.address.reset();
      this.router.navigate(['booked']);

    }, err=>{
      alert('Something went wrong');
    })
  }
  sbtn(){
    this.router.navigate(['booked']);
  }

}
