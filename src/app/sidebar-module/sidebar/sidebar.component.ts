import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'empmng-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

 
  constructor (private router: Router){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  title = 'HeaderSideNav';
  sideNavStatus: boolean = false;


  
}
