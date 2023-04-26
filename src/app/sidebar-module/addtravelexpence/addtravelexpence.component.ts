import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'empmng-addtravelexpence',
  templateUrl: './addtravelexpence.component.html',
  styleUrls: ['./addtravelexpence.component.css']
})
export class AddtravelexpenceComponent implements OnInit{


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
    const toDateControl = this.Travelexpenceform.get('ToDate');

    if (toDateControl?.value && new Date(toDateControl.value) < new Date(selectedDate)) {
      toDateControl.setValue(selectedDate);
      this.isToDateDisabled = false;
    }

    this.minToDate = new Date(selectedDate).toISOString().split('T')[0];
  }

  onToDateChange(event: Event) {
    const selectedDate = (<HTMLInputElement>event.target).value;
    const fromDateControl = this.Travelexpenceform.get('FromDate');

    if (fromDateControl?.value && new Date(fromDateControl.value) > new Date(selectedDate)) {
      fromDateControl.setValue(selectedDate);
      this.isFromDateDisabled = false;
    }

    this.minToDate = new Date(selectedDate).toISOString().split('T')[0];
  }

  get isFullDayEnabled(): boolean {
    const FromDate = this.Travelexpenceform.get('FromDate')?.value;
    const ToDate = this.Travelexpenceform.get('ToDate')?.value;
    return !FromDate || !ToDate || FromDate === ToDate;
  }


  Travelexpenceform = new FormGroup({
    FromDate: new FormControl('', [Validators.required]),
    ToDate: new FormControl('', [Validators.required]),
    Place: new FormControl('',[Validators.required])
  });


  get FromDate() {
    return this.Travelexpenceform.get('FromDate');
  }
  get ToDate() {
    return this.Travelexpenceform.get('ToDate');
  }
  get Place() {
    return this.Travelexpenceform.get('Place');
}


  submitform() {
    // Mark all form controls as dirty and trigger validation
    Object.values(this.Travelexpenceform.controls).forEach((control) => {
      control.markAsDirty();
      control.updateValueAndValidity();
    });
  
    // Mark form as touched to trigger validation messages
    this.Travelexpenceform.markAllAsTouched();
  
    if (this.Travelexpenceform.valid) {
      // data submits after all valid
      console.log(this.Travelexpenceform.value);
      // Submit form
      // ...
      this.router.navigate(['sidebar/travelexpence']);
    }
  }


}
