import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'empmng-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent implements OnInit {
  // router: any;
  constructor(private router:Router){}
  

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  Iform = new FormGroup ({

    Address1: new FormControl('',[Validators.required]),
    Address2: new FormControl('',[Validators.required]),
    postalcode: new FormControl('',[Validators.required,Validators.pattern('[0-9]{6}')]),
    City: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    State: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    Country: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    // address: new FormControl('C',[Validators.required]),
    // 
    PAddress1: new FormControl('',[Validators.required]),
    PAddress2: new FormControl('',[Validators.required]),
    Ppostalcode: new FormControl('',[Validators.required,Validators.pattern('[0-9]{6}')]),
    PCity: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    PState: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    PCountry: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')])

  })

 get Address1(){
  return this.Iform.get('Address1')
 }

 get Address2(){
  return this.Iform.get('Address2')
 }
  
  get postalcode(){
    return this.Iform.get('postalcode')
  }

  get City(){
    return this.Iform.get('City')
  }

  get State()
  {
    return this.Iform.get('State')
  }
  get Country()
  {
    return this.Iform.get('Country')
  }
  // 
  get PAddress1(){
    return this.Iform.get('PAddress1')
  }

  get PAddress2(){
    return this.Iform.get('PAddress2')
  }

  get Ppostalcode(){
    return this.Iform.get('Ppostalcode')
  }

  get PCity(){
    return this.Iform.get('PCity')
  }

  get PState(){
    return this.Iform.get('PState')
  }

  get PCountry(){
    return this.Iform.get('PCountry')
  }

submitForm() {
  // Mark all form controls as dirty and trigger validation
  Object.values(this.Iform.controls).forEach(control => {
    control.markAsDirty();
    control.updateValueAndValidity();
  });

  // Check if form is valid
  if (this.Iform.valid) {
    // Submit form
    console.log(this.Iform.value);
    this.router.navigate(['sidebar/thirdpage']);
  }
}

skip() {
  this.router.navigate(['sidebar/thirdpage']);
}

}


