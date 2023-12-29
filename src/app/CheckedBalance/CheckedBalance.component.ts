import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BalanceService } from './balance.service';
import { ActivatedRoute, Route } from '@angular/router';
//import { BalanceService, User } from 'path/to/balance.service';


@Component({
  selector: 'app-CheckedBalance',
  templateUrl: './CheckedBalance.component.html',
  styleUrls: ['./CheckedBalance.component.css']
})
export class CheckedBalanceComponent implements OnInit {
  balance:any='';

  constructor(private http:HttpClient, private router:ActivatedRoute){}

ngOnInit() {
  this.balance=sessionStorage.getItem('balance');
  }
}


