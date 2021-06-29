import { __decorate } from "tslib";
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
import { ReactiveFormsModule } from '@angular/forms';
import { RecuperarClaveComponent } from './components/recuperar-clave/recuperar-clave.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HeaderComponent,
            FooterComponent,
            HomeComponent,
            CarritoComponent,
            ProductoComponent,
            IncioSesionComponent,
            RecuperarClaveComponent,
            AdminComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            ReactiveFormsModule,
            HttpClientModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map