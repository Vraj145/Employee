import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'empmng-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.css']
})
export class ReimbursementComponent implements OnInit{


  constructor (private router:Router){ }
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


  onAddRecordClick(){
    this.router.navigate(['sidebar/addexpence'])
  }
}
