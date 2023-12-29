import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  bsaeurl="http://localhost:3000/users";

constructor(private http: HttpClient) { 
}
}