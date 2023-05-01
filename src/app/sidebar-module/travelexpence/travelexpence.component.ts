import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'empmng-travelexpence',
  templateUrl: './travelexpence.component.html',
  styleUrls: ['./travelexpence.component.css']
})
export class TravelexpenceComponent  implements OnInit{

  constructor(private router: Router){ }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onAddRecordClick(){
    this.router.navigate(['sidebar/addtravelexpence'])
  }

}
