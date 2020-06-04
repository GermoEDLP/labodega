import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styles: [
  ]
})
export class ServiciosComponent implements OnInit {

  @Input() altura = 1050;
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
