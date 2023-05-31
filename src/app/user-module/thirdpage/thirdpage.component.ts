import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'empmng-thirdpage',
  templateUrl: './thirdpage.component.html',
  styleUrls: ['./thirdpage.component.css']
})
export class ThirdpageComponent implements OnInit{

  //
  educationDetails: any[] = [];
  //

  minendDate: string='';
  isstartDateDisabled: boolean = false;
  isendDateDisabled: boolean = false;

  constructor(private router:Router){ 
    this.minendDate='';

  }
 
  ngOnInit(): void {
    this.minendDate = new Date().toISOString().split('T')[0]; // initialize to current date
   
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



  Iform = new FormGroup ({
    
    Stateboard : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    Institute : new FormControl ('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]), 
    Degree : new FormControl ('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    degreetype : new FormControl ('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    startdate: new FormControl ('',[Validators.required]),
    enddate : new FormControl('',[Validators.required]),
    Percentage : new FormControl('',[Validators.required, Validators.pattern('')]),
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
  get degreetype(){
    return this.Iform.get('degreetype')
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


  submitForm(){
    Object.values(this.Iform.controls).forEach(control=> {
      control.markAsDirty();
      control.updateValueAndValidity();
    });

    this.Iform.get('Percentage')?.markAsTouched();
    this.Iform.get('startdate')?.markAsTouched();
    this.Iform.get('enddate')?.markAsTouched();

    if(this.Iform.valid ){

      const educationDetails = this.Iform.value;
      this.educationDetails.push(educationDetails);
      console.log(this.Iform.value);
      // console.log(educationDetails);
      this.Iform.reset();
      // this.router.navigate(['sidebar/fourthpage']);
    }
}
  goToNextPage(){
    this.router.navigate(['sidebar/fourthpage']);
  }
}
