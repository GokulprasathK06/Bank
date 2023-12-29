import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = environment.apiUrls.accountInformation; // Replace with your JSON server URL

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
