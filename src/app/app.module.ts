import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';

import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AddComponent } from './components/users/add/add.component';
import {TokenInterceptor} from './Model/intercepters';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    InicioComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
