import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styles: [
  ]
})
export class ServiciosComponent implements OnInit {
  pos= false;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    if (window.scrollY > 1200){
      this.pos= true;
    }
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
