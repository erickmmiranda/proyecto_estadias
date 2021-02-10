import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { APP_ROUTING } from './app-routing.module';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';

import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AddComponent } from './components/users/add/add.component';
import { EditComponent } from './components/users/edit/edit.component';
import { ViewComponent } from './components/users/view/view.component';
import {TokenInterceptor} from './Model/intercepters';
import { HomeComponent } from './components/home/home.component';
import { MenuUsuariosComponent } from './components/menu-usuarios/menu-usuarios.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    AddComponent,
    EditComponent,
    ViewComponent,
    HomeComponent,
    MenuUsuariosComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
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
