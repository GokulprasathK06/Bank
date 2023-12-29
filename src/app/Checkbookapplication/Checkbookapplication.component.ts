import { Component, OnInit } from '@angular/core';
import { CheckbookapplicationService } from './checkbookapplication.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-Checkbookapplication',
  templateUrl: './Checkbookapplication.component.html',
  styleUrls: ['./Checkbookapplication.component.css']
})
export class CheckbookapplicationComponent implements OnInit {
  checkbook:any[] | undefined;
  data!: any[];
  isTableVisible=environment.isTableVisible;
  constructor(private check:CheckbookapplicationService) { }

  ngOnInit(): void {
    this.check.getApplication().subscribe((response:any[])=>{
      this.checkbook=response;
    },
    (error)=>{
      console.log('Error fetching users:',error);
    }
    );
  }
  onApprove(item:any){
    this.check.updateItemStatus(item.id,'approved').subscribe(()=>{
      item.status='approved';
      alert('Cheque Book Approved');
    });
    
  }
  onReject(item:any){
    this.check.deleteItem(item.id).subscribe(()=>{
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
