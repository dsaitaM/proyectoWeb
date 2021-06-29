import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CarritoComponent} from './components/carrito/carrito.component';
import {ProductoComponent} from './components/producto/producto.component';
import {IncioSesionComponent} from './components/incio-sesion/incio-sesion.component';
import {RecuperarClaveComponent} from './components/recuperar-clave/recuperar-clave.component';
import {AdminComponent} from './components/admin/admin.component';
import {ResetComponent} from './components/reset/reset.component';
import {CaptchaComponent} from './components/captcha/captcha.component';
import {NuevaClaveComponent} from './components/nueva-clave/nueva-clave.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'carrito',component: CarritoComponent},
  {path:'producto/:id',component: ProductoComponent},
  {path:'inicio-sesion',component: IncioSesionComponent},
  {path:'recuperar-clave',component: RecuperarClaveComponent},
  {path:'admin',component:AdminComponent},
  {path:'r',component:ResetComponent},
  {path:'captcha',component:CaptchaComponent},
  {path:'nueva-clave',component:NuevaClaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
