import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-breve-desc',
  templateUrl: './breve-desc.component.html',
  styles: [
  ]
})
export class BreveDescComponent implements OnInit {

  @Input() altura = 400;

  pos= false;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    if (window.scrollY > this.altura){
      this.pos= true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
