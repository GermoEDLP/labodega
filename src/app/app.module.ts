import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './components/info/info.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BreveDescComponent } from './components/breve-desc/breve-desc.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { ServicesComponent } from './pages/services/services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Material


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AboutComponent,
    CartComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    InfoComponent,
    CarouselComponent,
    BreveDescComponent,
    ServiciosComponent,
    OfertasComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
