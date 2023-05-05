import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'empmng-sidebarheader',
  templateUrl: './sidebarheader.component.html',
  styleUrls: ['./sidebarheader.component.css']
})
export class SidebarheaderComponent implements OnInit{

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  constructor(private router:Router){ }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  goToProfile(){
    this.router.navigate(['sidebar/userprofile']);
  }

  goToLogin(){
    this.router.navigate(['/']); // Login is empty path by dafault
  }
  

  SideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus)
  }

}
