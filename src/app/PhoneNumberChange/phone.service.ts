import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environment';
export interface Account{
  id:number;
  accountNumber:string;
  password:string;
  phone:string;
}
@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private apiUrl=environment.apiUrls.accountInformation;

constructor(private http:HttpClient) { }
login(accountNumber:string,password:string):Observable<any>{
  return this.http.get(`${this.apiUrl}?accountNumber=${accountNumber}&password=${password}`)
  
}
updateNumber(id:number,newPhoneNumber:string){
  //const user={accountNumber,password,phoneNumber};
  return this.http.patch(`${this.apiUrl}/${id}`,{phone:newPhoneNumber});
}
}
