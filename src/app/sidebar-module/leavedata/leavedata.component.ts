import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'empmng-leavedata',
  templateUrl: './leavedata.component.html',
  styleUrls: ['./leavedata.component.css']
})
export class LeavedataComponent implements OnInit{

  constructor(private router:Router){ }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  leaveapply(){
    this.router.navigate(['sidebar/leave']);
  }
  

}
