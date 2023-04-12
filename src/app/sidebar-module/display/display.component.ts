import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'empmng-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'Dashboard',
      icon: 'fa-solid fa-gauge'
    },
    {
      number: '2',
      name: 'Employee',
      icon: 'fa-solid fa-users'
      
    },
    {
      number: '3',
      name: 'Self-service',
      icon: 'fa-regular fa-user'
    },
    {
      number: '4',
      name: 'Setting',
      icon: 'fa-solid fa-gear'
    },
    {
      number: '5',
      name: 'About',
      icon: 'fa-solid fa-circle-info'
    }
  
  ];
  
 navigateTo(item: { name: string; }): void {
  if(item.name === 'Employee')
  {
    this.router.navigate(['sidebar/about']);
  }
  else if (item.name === 'Dashboard')
  {
    this.router.navigate(['sidebar/dashboard']);
  }
  else if (item.name === 'Self-service')
  {
    this.router.navigate(['sidebar/userprofile'])
  }
 }

  // navigateToEmployee(){
  //   this.router.navigate(['sidebar/about']);
  // }

  constructor(private router: Router){ }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


}
