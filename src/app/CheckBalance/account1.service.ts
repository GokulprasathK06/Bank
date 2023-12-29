import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class Account1Service {

  private baseUrl = environment.apiUrls.accounts;
    
  constructor(private http: HttpClient) { }

 getBalance(accountNumber:string, password:string): Observable<any>{
  return this.http.get<any[]>(`${this.baseUrl}/accountinformation?accountNumber=${accountNumber}&password=${password}`)
  .pipe(
    map(accountinformation=>accountinformation[0])
  );
 }
    

}
