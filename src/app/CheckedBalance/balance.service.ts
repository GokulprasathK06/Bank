import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppModule } from '../app.module';

interface User {
  id: number;
  name: string;
  accountNumber: string;
  balance: number;
}

@Injectable()
export class BalanceService {
 
}
