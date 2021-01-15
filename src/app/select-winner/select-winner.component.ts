import { Component, OnInit } from '@angular/core';
import {  OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-select-winner',
  templateUrl: './select-winner.component.html',
  styleUrls: ['./select-winner.component.scss']
})
export class SelectWinnerComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    items:1,
    navText:['Prev','Next'],
    nav:true
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
