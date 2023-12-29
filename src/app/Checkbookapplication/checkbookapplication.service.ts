import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';


@Injectable({
  providedIn: 'root'
})
export class CheckbookapplicationService {
    private apiUrl = environment.apiUrls.checkbook;

    constructor(private http:HttpClient) { }
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
