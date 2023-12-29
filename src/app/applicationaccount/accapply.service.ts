import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environment';
export interface Account{
  Name:string;
  phone:string;
  status:string;
}

@Injectable({
  providedIn: 'root'
})
export class AccapplyService {
    private apiUrl =environment.apiUrls.accountApplication; // Replace with your JSON server URL
    

   

  constructor(private http: HttpClient) { }

  getApplication(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateItemStatus(id:number,status:String){
    return this.http.patch<any>(`${this.apiUrl}/${id}`, {status});
  }

  deleteItem(id:number){
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
  }
}
