import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import {Productos} from '../../interfaces/productos';
import {ListaProductos} from '../../interfaces/productos';
import {Calificacion, carroProducto, respuestaSV, sendStock} from '../../interfaces/usuarios';
import {ServicioService} from '../../servicios/servicio.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productos: Productos[]=[]
  productosRopa: Productos[]=[]
  productosTecnologia: Productos[]=[]
  productosDeportes: Productos[]=[]
  productosAutos: Productos[]=[]
  productosHogar: Productos[]=[]

  constructor(private router: Router,public serv:ServicioService, private route:ActivatedRoute) { }

  //con number[]
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
          if(p.categorias=='ropa'){
            this.productosRopa.push(p)
          }
          if(p.categorias=='tecnologia'){
            this.productosTecnologia.push(p)
          }
          if(p.categorias=='deportes'){
            this.productosDeportes.push(p)
          }
          if(p.categorias=='autos'){
            this.productosAutos.push(p)
          }
          if(p.categorias=='hogar'){
            this.productosHogar.push(p)
          }
          //console.log(p)
      }
      
       
    });

  }


  clickProducto(nombre:any,descripcion:any,categorias:any,precio:any,stock:any,id:any){
    this.serv.nombre=nombre;
    this.serv.descripcion=descripcion;
    this.serv.categorias=categorias;
    this.serv.precio=precio;
    this.serv.stock=stock;
    this.serv.id=id;


    for (let i = 0; i < this.productos.length; i++) {
      if (id==this.productos[i].id){
        this.serv.iListaP=i;
        break;
      }
    }

    this.router.navigate(['producto/',id]);
  }


  anadirCarrito(id:any){
    let existe:boolean=false
    for (let i = 0; i < this.productos.length; i++) {
      if (id==this.productos[i].id){
        for (let j = 0; j < this.serv.carrito.length; j++) {
          if (id==this.serv.carrito[j].producto.id){
            this.serv.carrito[j].cantidad=this.serv.carrito[j].cantidad +1
            existe=true
            break;
          }
        }
        if (!existe){
          let carroProducto:carroProducto={producto:this.productos[i],cantidad:1}
          this.serv.carrito.push(carroProducto)
        }
        this.serv.totalCarrito=this.serv.totalCarrito +1
        

          this.serv.getUnProducto(id).subscribe(prod => {
            console.log("prod stock")
            console.log(prod)
            this.productos[i].stock=prod.stock-1
            let s:sendStock={nuevoStock:this.productos[i].stock}
            this.serv.editarStock(id,s)
            // alert("Ha agregado el producto a su carrito")
          });

        
        break;
      }
    }
    
  }
}
