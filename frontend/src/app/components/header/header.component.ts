import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServicioService} from '../../servicios/servicio.service';
import {Usuario,carroProducto, respuestaSV, Calificacion, sendStock} from '../../interfaces/usuarios'
import { FormBuilder,FormGroup, AbstractControl,Validators} from '@angular/forms';
import { Productos } from 'src/app/interfaces/productos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  productos:Array<Productos>=[]

  seleccionarCategorias:FormGroup;
  constructor(private router: Router,public serv:ServicioService,public fb:FormBuilder) {
    this.seleccionarCategorias=this.fb.group({
      ropa:[true,[Validators.required]],
      tecnologia:[true,[Validators.required]],
      deportes:[true,[Validators.required]],
      autos:[true,[Validators.required]],
      hogar:[true,[Validators.required]],
      });
  }

  ngOnInit(): void {
    this.serv.getProductos().subscribe((prods: respuestaSV) => {
      for (let i = 0; i < prods.products.length; i++) {
        let c:Array<Calificacion>=[]
        this.serv.getCalificaciones(prods.products[i].id).subscribe((calif:Calificacion[]) =>{
          for (let j = 0; j < calif.length; j++) {
            c.push(calif[j]);
          }
        
        });
        let p:Productos={nombre:prods.products[i].nombre,
          descripcion:prods.products[i].descripcion,
          categorias:prods.products[i].categorias,
          precio:prods.products[i].precio,
          stock:prods.products[i].stock,
          comentarios:[],
          id:prods.products[i].id,
          calificacion:c,
          imagen:prods.products[i].imagen}

          this.productos.push(p);
        }
      
       
    });
  }


  categorias(){
    this.serv.ropa=this.seleccionarCategorias.controls['ropa'].value
    this.serv.tecnologia=this.seleccionarCategorias.controls['tecnologia'].value
    this.serv.deportes=this.seleccionarCategorias.controls['deportes'].value
    this.serv.autos=this.seleccionarCategorias.controls['autos'].value
    this.serv.hogar=this.seleccionarCategorias.controls['hogar'].value
  }

  inicioSesion(){
    this.router.navigate(['inicio-sesion']);
  }

  clickCarrito(){
    this.router.navigate(['carrito']);
  }

  cerrarSesion(){
    if(confirm('¿Desea cerrar sesión?')){
      this.serv.userC={nombres:"",
      apellidos:"",
      direccion:"",
      rut:"",
      region:"",
      comuna:"",
      email:"",
      password:"",
      id:0,
      admin:false};
      this.serv.conectado=false;

      let carritoAux:Array<carroProducto>=this.serv.carrito
      for (let i = 0; i < carritoAux.length; i++) {
      for (let j = 0; j < this.productos.length; j++) {
        if(carritoAux[i].producto.id==this.productos[j].id){
          this.serv.getUnProducto(carritoAux[i].producto.id).subscribe(prod => {
            console.log("this.serv.carrito[i].producto.id")
            console.log(carritoAux[i].producto.id)
            console.log("this.productos[j].id")
            console.log(this.productos[j].id)
            this.productos[j].stock=prod.stock+carritoAux[i].cantidad
            let s:sendStock={nuevoStock:this.productos[j].stock}
            this.serv.editarStock(this.productos[j].id,s)
            this.serv.carrito=[];
            this.serv.totalCarrito=0;
          });
          break;
        }
      }
    }
    }
    this.serv.auxRuta='';
    this.router.navigate(['r']);
  }

  bAdmin(){
    this.router.navigate(['admin']);
  }

  volver(){
    this.router.navigate(['']);
  }
}
