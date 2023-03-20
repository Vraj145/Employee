import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'empmng-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit{

  ngOnInit(): void {
      
  }
  Documents = [
    '10th',
    '12th',
    'Any Other Documents'
  ];

  

  
  
}
