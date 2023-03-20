import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControlStatusGroup, Validators } from '@angular/forms';

@Component({
  selector: 'empmng-thirdpage',
  templateUrl: './thirdpage.component.html',
  styleUrls: ['./thirdpage.component.css']
})
export class ThirdpageComponent implements OnInit{

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
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

    if(this.Iform.valid){
      console.log(this.Iform.value)
    }
}
}

