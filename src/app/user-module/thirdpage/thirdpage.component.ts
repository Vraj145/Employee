import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControlStatusGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'empmng-thirdpage',
  templateUrl: './thirdpage.component.html',
  styleUrls: ['./thirdpage.component.css']
})
export class ThirdpageComponent implements OnInit{
  // route: any;

  minendDate: string='';
  isstartDateDisabled: boolean = false;
  isendDateDisabled: boolean = false;

  minEndDate: string='';
  isStartDateDisabled: boolean = false;
  isEndDateDisabled: boolean = false;

  constructor(private router:Router){ 
    this.minendDate='';
    this.minEndDate='';
  }
 
  ngOnInit(): void {
    this.minendDate = new Date().toISOString().split('T')[0]; // initialize to current date
    this.minEndDate = new Date().toISOString().split('T')[0]; 
  }

  onstartDateChange(event: Event) {
    const selectedDate = (<HTMLInputElement>event.target).value;
    const endDateControl = this.Iform.get('enddate');

    if (endDateControl?.value && new Date(endDateControl.value) < new Date(selectedDate)) {
      endDateControl.setValue(selectedDate);
      this.isendDateDisabled = false;
    }

    this.minendDate = new Date(selectedDate).toISOString().split('T')[0];
  }

  onendDateChange(event: Event) {
    const selectedDate = (<HTMLInputElement>event.target).value;
    const startDateControl = this.Iform.get('startdate');

    if (startDateControl?.value && new Date(startDateControl.value) > new Date(selectedDate)) {
      startDateControl.setValue(selectedDate);
      this.isstartDateDisabled = false;
    }

    this.minendDate = new Date(selectedDate).toISOString().split('T')[0];
  }

  /*  Start and End  */
  
  onStartDateChange(event: Event) {
    const selectedDate = (<HTMLInputElement>event.target).value;
    const EndDateControl = this.Iform.get('Enddate');

    if (EndDateControl?.value && new Date(EndDateControl.value) < new Date(selectedDate)) {
      EndDateControl.setValue(selectedDate);
      this.isendDateDisabled = false;
    }

    this.minEndDate = new Date(selectedDate).toISOString().split('T')[0];
  }

  onEndDateChange(event: Event) {
    const selectedDate = (<HTMLInputElement>event.target).value;
    const StartDateControl = this.Iform.get('Startdate');

    if (StartDateControl?.value && new Date(StartDateControl.value) > new Date(selectedDate)) {
      StartDateControl.setValue(selectedDate);
      this.isStartDateDisabled = false;
    }

    this.minEndDate = new Date(selectedDate).toISOString().split('T')[0];
  }


  Iform = new FormGroup ({
    
    Stateboard : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    Institute : new FormControl ('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]), 
    Degree : new FormControl ('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    degree : new FormControl ('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    startdate: new FormControl ('',[Validators.required]),
    enddate : new FormControl('',[Validators.required]),
    Percentage : new FormControl('',[Validators.required, Validators.pattern('')]),
    // 
    organization: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    jobtitle: new FormControl ('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    Startdate : new FormControl('', [Validators.required]),
    Enddate : new FormControl('',[Validators.required])
  })

  get Stateboard(){
    return this.Iform.get('Stateboard')
  }
  get Institute(){
    return this.Iform.get('Institute')
  }
  get Degree(){
    return this.Iform.get('Degree')
  }
  get degree(){
    return this.Iform.get('degree')
  }
  get startdate(){
    return this.Iform.get('Startdate')
  }
  get enddate(){
    return this.Iform.get('enddate')
  }
  get Percentage(){
    return this.Iform.get('Percentage')
  }
  // 
  get organization(){
    return this.Iform.get('organization')
  }

  get jobtitle(){
    return this.Iform.get('jobtitle')
  }
  
  get Startdate(){
    return this.Iform.get('Startdate')
  }

  get Enddate(){
    return this.Iform.get('Enddate')
  }

  submitForm(){
    Object.values(this.Iform.controls).forEach(control=> {
      control.markAsDirty();
      control.updateValueAndValidity();
    });

    this.Iform.get('Percentage')?.markAsTouched();
    this.Iform.get('startdate')?.markAsTouched();
    this.Iform.get('enddate')?.markAsTouched();
    this.Iform.get('Startdate')?.markAsTouched();
    this.Iform.get('Enddate')?.markAsTouched();

    if(this.Iform.valid ){
      console.log(this.Iform.value);

      this.router.navigate(['sidebar/about']);
    }
}
}
