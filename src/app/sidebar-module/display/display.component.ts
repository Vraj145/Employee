import { Component, Input, OnInit } from '@angular/core';

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
      name: 'Home',
      icon: 'fa-solid fa-house'
    },
    {
      number: '2',
      name: 'Employee',
      icon: 'fa-solid fa-users'
    },
    {
      number: '3',
      name: 'Dashboard',
      icon: 'fa-solid fa-gauge'
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

  constructor(){ }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


}
