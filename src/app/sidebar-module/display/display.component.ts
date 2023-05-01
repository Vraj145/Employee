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
      name: 'Leave',
      icon: 'fa-sharp fa-solid fa-right-from-bracket'
    },
    {
      number: '5',
      name: 'Reimbursement',
      icon: 'fa-solid fa-money-bill',
      dropdownItems: [
        {
          name: 'Travell Request',
          routerLink: 'sidebar/travelexpence'
        },
        {
          name: 'Expense',
          routerLink: 'sidebar/reimbursement'
        }
       
      ]

      
    },
    {
      number: '6',
      name: 'Setting',
      icon: 'fa-solid fa-gear'
    }
    
  ];
travelexpence: any;

  constructor(private router: Router){ }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  
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
  else if (item.name === 'Leave')
  {
    this.router.navigate(['sidebar/leave'])
  }
 }
 navigateToAboutDropdownItem(item: { name: string; routerLink: string; }): void {
  this.router.navigate([item.routerLink]);
}


}



