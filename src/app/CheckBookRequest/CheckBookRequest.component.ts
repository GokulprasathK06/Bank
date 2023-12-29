import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environment';

@Component({
  selector: 'app-CheckBookRequest',
  templateUrl: './CheckBookRequest.component.html',
  styleUrls: ['./CheckBookRequest.component.css']
})
export class CheckBookRequestComponent implements OnInit {
  book:FormGroup|any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.book=new FormGroup({
      'uname': new FormControl(),
      'fname': new FormControl(),
      'lname': new FormControl(),
      'phone': new FormControl(),
      'email': new FormControl(),
      'accnumber': new FormControl(),
      'aadharnumber': new FormControl(),
      'pannumber': new FormControl()

      
    })
  }
  bookdata(book:FormGroup){
    //console.log(this.register.value);
    this.http.post<any>(environment.apiUrls.checkbook, this.book.value)
    .subscribe(res=>{
      alert('Your Request Registered successfully');
      this.book.reset();
      this.router.navigate(['booked']);
    }, err=>{
      alert('Something went wrong');
    })
  }
  sbtn(){
    this.router.navigate(['booked']);
  }

}
