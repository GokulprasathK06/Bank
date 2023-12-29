import { Injectable } from '@angular/core';
import { UserModel } from '../user-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl=environment.apiUrls.accounts;

constructor(private http: HttpClient) { }

login(accountNumber:string):Observable<any>{
  return this.http.get(`${this.apiUrl}/accountinformation?accountNumber=${accountNumber}`);
}

updatePassword(id:number,newPassword:String): Observable<any>{
  return this.http.patch(`${this.apiUrl}/accountinformation/${id}`,{password:newPassword});
}

}
