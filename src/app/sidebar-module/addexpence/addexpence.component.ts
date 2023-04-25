import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'empmng-addexpence',
  templateUrl: './addexpence.component.html',
  styleUrls: ['./addexpence.component.css']
})
export class AddexpenceComponent implements OnInit{



  constructor(private router: Router){}
  ngOnInit(): void {
      
  }

  Category = [
    'Travel',
    'Internet',
    'Meals'
  ]

  expenceform = new FormGroup({
    
    Category : new FormControl('', [Validators.required]),

    
    
  })

}
