import { Component, OnInit } from '@angular/core';
import { LoanapplyService } from './loanapply.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-loanapplication',
  templateUrl: './loanapplication.component.html',
  styleUrls: ['./loanapplication.component.css']
})
export class LoanapplicationComponent implements OnInit {
  loanapply:any[] | undefined;
  data!: any[];
  isTableVisible=environment.isTableVisible;
  constructor(private loan:LoanapplyService) { }

  ngOnInit():void {
    this.loan.getApplication().subscribe((response:any[])=>{
      this.loanapply=response;
    },
    (error)=>{
      console.log('Error fetching users:',error);
    }
    );
  }
  onApprove(item:any){
    this.loan.updateItemStatus(item.id,'approved').subscribe(()=>{
      item.status='approved';
      alert('loan Application Approved');
    });
    
  }
  onReject(item:any){
    this.loan.deleteItem(item.id).subscribe(()=>{
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
