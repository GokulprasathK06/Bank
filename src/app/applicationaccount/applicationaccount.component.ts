import { Component, OnInit } from '@angular/core';
import { Account,AccapplyService } from './accapply.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

export interface TableRow{
  Name:String;
  Phone:String;
  Email:string;
  AadharNumaber:string;
  pannumber:string;
  DOB:String;
  status:string;
}

@Component({
  selector: 'app-applicationaccount',
  templateUrl: './applicationaccount.component.html',
  styleUrls: ['./applicationaccount.component.css']
})
export class ApplicationaccountComponent implements OnInit {
  application:any[] | undefined;
  data!: any[];
  isTableVisible=environment.isTableVisible;

  constructor(private account:AccapplyService) { }

  ngOnInit():void {
    this.account.getApplication().subscribe((response:any[])=>{
      this.application=response;
    },
    (error)=>{
      console.log('Error fetching users:',error);
    }
    );
  }
  onApprove(item:any){
    this.account.updateItemStatus(item.id,'approved').subscribe(()=>{
      item.status='approved';
    })
    
  }
  onReject(item:any){
    this.account.deleteItem(item.id).subscribe(()=>{
      const index = this.data.indexOf(item);
      if(index !== -1){
        this.data.splice(index,1);
        alert('Application Rejected');
      }   
      this.isTableVisible=false;
      
      //sessionStorage.setItem("reject",item.status='rejected');
  });
}
  

}
