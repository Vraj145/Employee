import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'empmng-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {
      
  }
  Documents = [
    '10th',
    '12th',
    'Any Other Documents'
  ];

  documentform = new FormGroup({
    
    document: new FormControl('',[Validators.required])

  })

  submitForm(){

      console.log(this.documentform.value);
      // Submit form
      // ...
      this.router.navigate(['sidebar/document']);
  }
  
}
