import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'empmng-sidebarheader',
  templateUrl: './sidebarheader.component.html',
  styleUrls: ['./sidebarheader.component.css']
})
export class SidebarheaderComponent implements OnInit{

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  constructor(){ }
  ngOnInit(): void {  }

  SideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus)
  }

}
