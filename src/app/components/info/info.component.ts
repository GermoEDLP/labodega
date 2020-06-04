import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: [
  ]
})
export class InfoComponent implements OnInit {

  pos= true;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    if (window.scrollY > 10){
      this.pos= true;
    }
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
