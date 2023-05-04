import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import expencesData from 'src/app/students.json'
import {UsersDataService} from 'src/app/services/users-data.service'

interface expence {
  SrNo: Number;
  Category: string;
  Date: any;
  Amount: Number;
  Reason:string;
}

@Component({
  selector: 'empmng-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.css']
})
export class ReimbursementComponent implements OnInit{

 expences: expence[] = expencesData;

 users:any;
  constructor (private router:Router, private userData: UsersDataService)
  {
      this.userData.users().subscribe((data)=>{
        // console.log("data",data);
        this.users=data;
      })
   }

 
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
  

  onAddRecordClick(){
    this.router.navigate(['sidebar/addexpence'])
  }
}
