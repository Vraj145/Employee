import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'empmng-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  constructor (private router:Router){

  }

  Loginform = new FormGroup({

    OfficialEmail : new FormControl('',[Validators.required,Validators.email]),
    Password : new FormControl ('',[Validators.required])
  })

  get OfficialEmail(){
    return this.Loginform.get('OfficialEmail')
  }

  get Password(){
    return this.Loginform.get('Password')
  }

  submitForm(){
    Object.values(this.Loginform.controls).forEach(control=> {
      control.markAsDirty();
      control.updateValueAndValidity();
    });

    if(this.Loginform.valid){
      console.log(this.Loginform.value)

      this.router.navigate(['user/about']);
    }
}
}
