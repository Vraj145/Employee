import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'empmng-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  minToDate: string='';
  isFromDateDisabled: boolean = false;
  isToDateDisabled: boolean = false;

  ngOnInit(): void {
    this.minToDate = new Date().toISOString().split('T')[0]; // initialize to current date
  }
  
  constructor(private router: Router) {
    this.minToDate='';
  }


  onFromDateChange(event: Event) {
    const selectedDate = (<HTMLInputElement>event.target).value;
    const toDateControl = this.leaveform.get('ToDate');

    if (toDateControl?.value && new Date(toDateControl.value) < new Date(selectedDate)) {
      toDateControl.setValue(selectedDate);
      this.isToDateDisabled = false;
    }

    this.minToDate = new Date(selectedDate).toISOString().split('T')[0];
  }

  onToDateChange(event: Event) {
    const selectedDate = (<HTMLInputElement>event.target).value;
    const fromDateControl = this.leaveform.get('FromDate');

    if (fromDateControl?.value && new Date(fromDateControl.value) > new Date(selectedDate)) {
      fromDateControl.setValue(selectedDate);
      this.isFromDateDisabled = false;
    }

    this.minToDate = new Date(selectedDate).toISOString().split('T')[0];
  }

  // get isFullDayEnabled(): boolean {
  //   const FromDate = this.leaveform.get('FromDate')?.value;
  //   const ToDate = this.leaveform.get('ToDate')?.value;
  //   return !FromDate || !ToDate || FromDate === ToDate;
  // }

  datesBetween(startDate: string, endDate: string): { date: Date, dayPeriod: string }[] {
  const dates = [];
  let currentDate = new Date(startDate);
  const end = new Date(endDate);
  while (currentDate <= end) {
    dates.push({ date: new Date(currentDate), dayPeriod: 'fullDay' }); // default value is full day
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}

  
  leave = [
    'Casual leave',
    'compensatory off',
    'Optional Holiday'
  ];

  // Day = [
  //   'Full Day',
  //   'First Half',
  //   'Second Half'
  // ];


  leaveform = new FormGroup({
    EmployeeID: new FormControl('', [Validators.required]),
    leave: new FormControl('Casual leave', [Validators.required]),
    FromDate: new FormControl('', [Validators.required]),
    ToDate: new FormControl('', [Validators.required]),
    // Day: new FormControl('Full Day', [Validators.required]),
    OfficialEmail: new FormControl('', [Validators.required,Validators.email]),
    Reason: new FormControl('', [Validators.required]),
    dayPeriods: new FormArray([])
  });

  get EmployeeID() {
    return this.leaveform.get('EmployeeID');
  }
  get FromDate() {
    return this.leaveform.get('FromDate');
  }
  get ToDate() {
    return this.leaveform.get('ToDate');
  }
  get OfficialEmail() {
    return this.leaveform.get('OfficialEmail');
  }
  get Reason() {
    return this.leaveform.get('Reason');
  }
  

  submitForm() {
    // Mark all form controls as dirty and trigger validation
    Object.values(this.leaveform.controls).forEach((control) => {
      control.markAsDirty();
      control.updateValueAndValidity();
    });
  
    // Mark form as touched to trigger validation messages
    this.leaveform.markAllAsTouched();
  
    if (this.leaveform.valid) {
      // data submits after all valid
      console.log(this.leaveform.value);
      // Submit form
      // ...
      this.router.navigate(['sidebar/dashboard']);
    }
  }
  
}
