import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    if (window.scrollY > 100){
      
    }
  } 

  constructor() { }

 
}
