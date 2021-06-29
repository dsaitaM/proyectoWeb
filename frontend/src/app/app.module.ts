import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductoComponent } from './components/producto/producto.component';
import { IncioSesionComponent } from './components/incio-sesion/incio-sesion.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RecuperarClaveComponent } from './components/recuperar-clave/recuperar-clave.component';
import { AdminComponent } from './components/admin/admin.component';
import {HttpClientModule} from '@angular/common/http';
import { ResetComponent } from './components/reset/reset.component';
import { CaptchaComponent } from './components/captcha/captcha.component';
import { NuevaClaveComponent } from './components/nueva-clave/nueva-clave.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarritoComponent,
    ProductoComponent,
    IncioSesionComponent,
    RecuperarClaveComponent,
    AdminComponent,
    ResetComponent,
    CaptchaComponent,
    NuevaClaveComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCaptchaModule,
    NgbModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
