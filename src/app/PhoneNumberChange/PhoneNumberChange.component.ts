import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PhoneService } from './phone.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-PhoneNumberChange',
  templateUrl: './PhoneNumberChange.component.html',
  styleUrls: ['./PhoneNumberChange.component.css']
})
export class PhoneNumberChangeComponent implements OnInit {
  accountNumber!: string;
  password!: string;
  newPhoneNumber!: string;
  message!: string;
  user:any;

  private apiUrl='http://localhost:3000/accountinformation';

  constructor(private http: HttpClient, private router: Router, private phone:PhoneService) { }
  /*updatePhoneNumber(){
    this.phone.login(this.accountNumber,this.password).subscribe((account)=>{
      if(account){
        account.phone=this.newPhoneNumber;
        this.phone.updateNumber(account).subscribe(
          (updatednumber)=>{
            console.log('Phone Number Changed Successfully', updatednumber);
          },
          (error)=>{
            console.error('Error',error);
          }
        );
      }
      else{
        console.error('Invalid');
      }
    },
    (error)=>{
      console.error('Invalid1',error);
    }
    );    
  }*/

  loginAndupdatePhoneNumber(){
    this.phone.login(this.accountNumber,this.password).subscribe((users:any[])=>{
      const user=users[0];
      if(user && user.password === this.password){
        this.phone.updateNumber(user.id,this.newPhoneNumber).subscribe(()=>{
          alert('Phone Number Changed Successfully');
          console.log('success');
        },
        error =>{
          alert('Error in Updating')
          console.log('Failed')
        }
        );
      }
      else{
        alert('Invaild Credential');
      }
     });
      
    }
    updatePhoneNumber(){
      this.phone.updateNumber(this.user.id,this.newPhoneNumber).subscribe(()=>{
        alert('Phone number updated successfully');
      },(error) =>{
        alert('Faild to update phone number');
      }
      );
    }
  


  ngOnInit() {
    
  }
  


}
