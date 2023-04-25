import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'empmng-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.css']
})
export class ReimbursementComponent {


  constructor (private router:Router){ }


  onAddRecordClick(){
    this.router.navigate(['sidebar/addexpence'])
  }
}
