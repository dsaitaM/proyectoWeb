import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductoComponent } from './components/producto/producto.component';
import { IncioSesionComponent } from './components/incio-sesion/incio-sesion.component';
import { RecuperarClaveComponent } from './components/recuperar-clave/recuperar-clave.component';
import { AdminComponent } from './components/admin/admin.component';
const routes = [
    { path: '', component: HomeComponent },
    { path: 'carrito', component: CarritoComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'inicio-sesion', component: IncioSesionComponent },
    { path: 'recuperar-clave', component: RecuperarClaveComponent },
    { path: 'admin', component: AdminComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map