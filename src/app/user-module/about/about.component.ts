import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'empmng-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  Designation = [
    'FrontEnd Developer',
    '.Net Developer',
    'SQL Developer',
    'UI/UX Designer',
    'Marketing Manager',
  ];
  Department = [
    'Design',
    'Development',
    'Marketing',
    'Sales',
    'Quality Assurance',
  ];

    constructor(private router:Router){}

    ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  Iform = new FormGroup({
    Firstname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    Lastname: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    birthday: new FormControl('', [Validators.required]),
    PersonalEmail: new FormControl('',[Validators.required,Validators.email]),
    PhoneNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
    EmergencyConatactNo: new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
    OfficialEmail: new FormControl('',[Validators.required,Validators.email]),
    ReportingManager: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    DateOfJoining: new FormControl('',[Validators.required]),
    WorkLocation: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    State: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    Country: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    gender: new FormControl('m',[Validators.required]),
    designation: new FormControl('default',[Validators.required]),
    department: new FormControl('default',[Validators.required])
  })

  get Firstname()
  {
    return this.Iform.get('Firstname')
  }
  get Lastname()
  {
    return this.Iform.get('Lastname')
  }
  get birthday()
  {
    return this.Iform.get('birthday')
  }
  get PersonalEmail()
  {
    return this.Iform.get('PersonalEmail')
  }
  get PhoneNumber()
  {
    return this.Iform.get('PhoneNumber')
  }
  get EmergencyConatactNo()
  {
    return this.Iform.get('EmergencyConatactNo')
  }
  get OfficialEmail()
  {
    return this.Iform.get('OfficialEmail')
  }
  get ReportingManager()
  {
    return this.Iform.get('ReportingManager')
  }
  get DateOfJoining()
  {
    return this.Iform.get('DateOfJoining')
  }
  get WorkLocation()
  {
    return this.Iform.get('WorkLocation')
  }
  get State()
  {
    return this.Iform.get('State')
  }
  get Country()
  {
    return this.Iform.get('Country')
  }

  // submitForm(formData:any){

  //   console.log(formData);
  //   this.router.navigate(['secondpage'])
  // }
  
  submitForm() {
    // Mark all form controls as dirty and trigger validation
    Object.values(this.Iform.controls).forEach(control => {
      control.markAsDirty();
      control.updateValueAndValidity();

    });
    
    // console.log(this.Iform.value); 

    // Check if form is valid
    
    if (this.Iform.valid) {
      // data submits after all valid
    console.log(this.Iform.value);
      // Submit form
      // ...
      this.router.navigate(['user/secondpage']);
    }
  }
  
}
