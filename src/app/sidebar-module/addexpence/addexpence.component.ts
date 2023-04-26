import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'empmng-addexpence',
  templateUrl: './addexpence.component.html',
  styleUrls: ['./addexpence.component.css']
})
export class AddexpenceComponent implements OnInit{


  showTravelIdDropdown = false;
  constructor(private router: Router){}

  ngOnInit(): void {
    this.expenceform.get('Category')?.valueChanges.subscribe(value => {
        this.showTravelIdDropdown = (value === 'Travel');
    });
}


  Category = [
    'Travel',
    'Internet',
    'Meals'
  ]

  Travelid = [
    '1',
    '2'
  ]

  expenceform = new FormGroup({
    
    Category : new FormControl('', [Validators.required]),
    Travelid : new FormControl('', [Validators.required]),
    Amount : new FormControl('',[Validators.required]),
    Date : new FormControl('',[Validators.required]),
    Reason: new FormControl('',[Validators.required]),
       
  })

  get Amount() {
    return this.expenceform.get('Amount');
  }
  
  get Date() {
    return this.expenceform.get('Date');
  }

  get Reason() {
    return this.expenceform.get('Reason')
  }

  

  submitform() {
    // Mark all form controls as dirty and trigger validation
    Object.values(this.expenceform.controls).forEach((control) => {
      control.markAsDirty();
      control.updateValueAndValidity();
    });
  
    // Mark form as touched to trigger validation messages
    this.expenceform.markAllAsTouched();
  
    if (this.expenceform.valid) {
      // data submits after all valid
      console.log(this.expenceform.value);
      // Submit form
      // ...
      this.router.navigate(['sidebar/reimbursement']);
    }
  }
}
