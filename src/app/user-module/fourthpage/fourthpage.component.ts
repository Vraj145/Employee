import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControlStatusGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'empmng-fourthpage',
  templateUrl: './fourthpage.component.html',
  styleUrls: ['./fourthpage.component.css']
})
export class FourthpageComponent implements OnInit{

    //
    experienceDetails: any[] = [];
    //

    minEndDate: string='';
    isStartDateDisabled: boolean = false;
    isEndDateDisabled: boolean = false;
  
    constructor(private router:Router){ 

      this.minEndDate='';
    }
   
    ngOnInit(): void {
      this.minEndDate = new Date().toISOString().split('T')[0]; // initialize to current date
    }
  
  
  
    /*  Start and End  */
    
    onStartDateChange(event: Event) {
      const selectedDate = (<HTMLInputElement>event.target).value;
      const EndDateControl = this.Iform.get('Enddate');
  
      if (EndDateControl?.value && new Date(EndDateControl.value) < new Date(selectedDate)) {
        EndDateControl.setValue(selectedDate);
        this.isEndDateDisabled = false;
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
      
      organization: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      jobtitle: new FormControl ('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      Startdate : new FormControl('', [Validators.required]),
      Enddate : new FormControl('',[Validators.required])
    })
  
  
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
  
      this.Iform.get('Startdate')?.markAsTouched();
      this.Iform.get('Enddate')?.markAsTouched();
  
      if(this.Iform.valid ){

        const experienceDetails = this.Iform.value;
        this.experienceDetails.push(experienceDetails);

        console.log(this.Iform.value);

        this.Iform.reset();
        // this.router.navigate(['sidebar/about']);
      }
  }
  gotoNext(){
    this.router.navigate(['sidebar/dashboard']);
  }
 }
  
