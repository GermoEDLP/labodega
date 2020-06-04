import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-breve-desc',
  templateUrl: './breve-desc.component.html',
  styles: [
  ]
})
export class BreveDescComponent implements OnInit {

  pos= false;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    if (window.scrollY > 500){
      this.pos= true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
