import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';

@Component({
  selector: 'empmng-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit{


  // constructor(private router:Router){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  Salaryform = new FormGroup({
    BasicSalary: new FormControl('',[Validators.required,Validators.pattern(/^\d{1,10}(\.\d{1,2})?$/)]),
    HouseRentAllowance: new FormControl('',[Validators.pattern(/^\d{1,10}(\.\d{1,2})?$/)]),
    DearnessAllowance: new FormControl('',[Validators.pattern(/^\d{1,10}(\.\d{1,2})?$/)]),
    TravellingAllowance: new FormControl('',[Validators.pattern(/^\d{1,10}(\.\d{1,2})?$/)]),
    OtherAllowance: new FormControl('',[Validators.pattern(/^\d{1,10}(\.\d{1,2})?$/)]),
    Deduction:  new FormControl('',[Validators.pattern(/^\d{1,10}(\.\d{1,2})?$/)]),
    NetSalary: new FormControl('',[Validators.required,Validators.pattern(/^\d{1,10}(\.\d{1,2})?$/)]),
  })

  get BasicSalary()
  {
    return this.Salaryform.get('BasicSalary')
  }
  get HouseRentAllowance()
  {
    return this.Salaryform.get('HouseRentAllowance')
  }
  get DearnessAllowance()
  {
    return this.Salaryform.get('DearnessAllowance')
  }
  get TravellingAllowance()
  {
    return this.Salaryform.get('TravellingAllowance')
  }
  get OtherAllowance()
  {
    return this.Salaryform.get('OtherAllowance')
  }
  get Deduction()
  {
    return this.Salaryform.get('Deduction')
  }
  get NetSalary()
  {
    return this.Salaryform.get('NetSalary')
  }
}
