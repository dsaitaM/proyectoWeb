import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Productos,Comentario} from '../../interfaces/productos';
import {ListaProductos} from '../../interfaces/productos';
import {Calificacion, carroProducto,pedidos,reporteVentas, respuestaSV, sendStock} from '../../interfaces/usuarios';
import {ServicioService} from '../../servicios/servicio.service';
import { FormBuilder,FormGroup, AbstractControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  productos: Productos[]=[]
  constructor(public fb:FormBuilder,private router: Router,public serv:ServicioService) { }

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
          //console.log(p)
      }
      
       
    });
  }

  eliminarP(carroProducto:carroProducto){
    for (let i = 0; i < this.serv.carrito.length; i++) {
      if(carroProducto.producto.id==this.serv.carrito[i].producto.id){
        this.serv.carrito[i].cantidad=this.serv.carrito[i].cantidad -1;
        if (this.serv.carrito[i].cantidad==0){
          this.serv.carrito.forEach((value,index)=>{
            if(value.producto.id==carroProducto.producto.id){
              this.serv.carrito.splice(index,1);
              console.log("eliminado")
              //console.log(this.serv.carrito.splice(index,1));
            }
          });
        }
        for (let j = 0; j < this.productos.length; j++) {
          if (carroProducto.producto.id==this.productos[j].id){
            this.serv.getUnProducto(this.productos[j].id).subscribe(prod => {
              console.log("prod stock")
              console.log(prod)
              this.productos[i].stock=prod.stock+1
              let s:sendStock={nuevoStock:this.productos[i].stock}
              this.serv.editarStock(this.productos[j].id,s)
            });
            break;
          }
        }
        this.serv.totalCarrito=this.serv.totalCarrito -1;
      }
    }

  }

  comprar(){
    if(confirm('¿Está seguro de realizar la compra?')){
      alert("Su compra se ha realizado con éxito!");
      let p:string=""
      let t:number=0;
      for (let i = 0; i < this.serv.carrito.length; i++) {
        p=p.concat(`${this.serv.carrito[i].producto.nombre}(${this.serv.carrito[i].producto.precio}) X ${this.serv.carrito[i].cantidad} = $${this.serv.carrito[i].cantidad * +(this.serv.carrito[i].producto.precio.replace('$',''))} ; `)
        t=t + (this.serv.carrito[i].cantidad * +(this.serv.carrito[i].producto.precio.replace('$','')))  
      }
      p=p.concat(` Total: $${t}`);
      let nombreUsuario=`${this.serv.userC.nombres} ${this.serv.userC.apellidos}`
      let pedido:pedidos={pedido:p,nombreUsuario:nombreUsuario}
      this.serv.postPedido(pedido);
      this.serv.carrito=[];
      this.serv.totalCarrito=0;

    }
    
  }

  vaciar(){
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

  volver(){
    this.router.navigate(['']);
  }
}
