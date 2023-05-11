import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import aboutsdata from 'db.json';

interface About{
  Firstname: string;
  Lastname: string;
  birthday: string;
  gender: string;
  PersonalEmail : string;
  PhoneNumber : number;
  EmergencyConatactNo : number;
  OfficialEmail : string;
  designation : string;
  department : string;
  ReportingManager : string;
  DateOfJoining : string;
  WorkLocation : string;
  State : string;
  Country : string
}

@Component({
  selector: 'empmng-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit{

  abouts: About[] = aboutsdata;



  constructor(private router: Router){ }

  ngOnInit(): void {
      // 
  }
  
  

}