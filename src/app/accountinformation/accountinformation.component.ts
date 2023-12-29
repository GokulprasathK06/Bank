import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {AccountService} from './account.service';


@Component({
  selector: 'app-accountinformation',
  templateUrl: './accountinformation.component.html',
  styleUrls: ['./accountinformation.component.css']
})
export class AccountinformationComponent implements OnInit {
  accounts: any[] | undefined;

  constructor(private accountService:AccountService) { }

  ngOnInit(): void{
    this.accountService.getAccounts().subscribe((response:any[])=>{
      this.accounts=response;
    },
    (error)=>{
      console.log('Error fetching users:',error);
    }
    );
  }

  


 
}
