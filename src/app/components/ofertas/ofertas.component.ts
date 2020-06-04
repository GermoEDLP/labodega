import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styles: [
  ]
})
export class OfertasComponent implements OnInit {

  
  pos= false;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    if (window.scrollY > 1600){
      this.pos= true;
    }
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
