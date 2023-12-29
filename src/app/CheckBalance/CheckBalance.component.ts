import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Account1Service } from './account1.service';

@Component({
  selector: 'app-CheckBalance',
  templateUrl: './CheckBalance.component.html',
  styleUrls: ['./CheckBalance.component.css']
})
export class CheckBalanceComponent implements OnInit {
  accountNumber!: string;
  password!: string;
  balance!: string;
 // errorMessage!: string;
  constructor(private account:Account1Service,private router: Router) {}
  onSubmit(){
    this.account.getBalance(this.accountNumber,this.password).subscribe(accountinformation =>{
      if(accountinformation){
        this.balance=accountinformation.balance;
        sessionStorage.setItem("balance",this.balance);
        this.router.navigate(['checkedbalance']);
      }
      else{
        alert('Account not found');
      }
    });
  }
  


  ngOnInit() {
    
    
  }
  
  
     
    }



