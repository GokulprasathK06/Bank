import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { UserModel } from '../user-model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ChangePassword',
  templateUrl: './ChangePassword.component.html',
  styleUrls: ['./ChangePassword.component.css']
})

export class ChangePasswordComponent implements OnInit {

  accountNumber: string='';
  password: string='';
  newPassword: string='';
  confirmPassword: string='';

  constructor(private http:HttpClient,private userService:UserService) { }


  ngOnInit():void {
  }
  changePassword(){
   if(this.newPassword !==this.confirmPassword){
    alert('Passwords do not match.');
    return;
   }
   this.userService.login(this.accountNumber).subscribe((users:any[])=>{
    const user=users[0];
    if(user && user.password === this.password){
      this.userService.updatePassword(user.id,this.newPassword).subscribe(()=>{
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
}
