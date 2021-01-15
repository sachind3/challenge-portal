import { Component, OnInit } from '@angular/core';
import {  OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.scss']
})
export class ChallengeDetailComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    items:1,
    navText:['Prev','Next'],
    nav:true
    
  }

  constructor() { 
  }
  

  ngOnInit(): void {
  }

}
