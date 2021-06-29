import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import {Productos,Comentario} from '../../interfaces/productos';
import {ListaProductos} from '../../interfaces/productos';
import {Calificacion, carroProducto, sendStock} from '../../interfaces/usuarios'
import {ServicioService} from '../../servicios/servicio.service';
import { FormBuilder,FormGroup, AbstractControl,Validators} from '@angular/forms';

import {map} from "rxjs/operators";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  calificaciones:FormGroup;
  seccionComentarios:FormGroup;

  product:Productos={nombre:'',
    descripcion:'',
    categorias:'',
    precio:'',
    stock:0,
    comentarios:[],
    id:0,
    calificacion:[],
    imagen:''};

  
  comentarios:Array<Comentario>=[];

  yaCalificado:boolean=false;
  
  nombre:string=this.serv.nombre;
  descripcion:string=this.serv.descripcion;
  precio:string=this.serv.precio;
  categorias:string=this.serv.categorias;
  stock:number=this.serv.stock;
  
  id:number=this.serv.id;

  iListaP:number=this.serv.iListaP;

  
  promCalificacion:number;
  promCalifString:string;
  
  
  constructor(public fb:FormBuilder,private router: Router,public serv:ServicioService,private route:ActivatedRoute) { 
    this.calificaciones=this.fb.group({
      puntaje:['',[Validators.required]],
      });
    this.seccionComentarios=this.fb.group({
      comentario:['',[Validators.required]],
      });
  }

  ngOnInit(): void {

    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(prodId => {
      this.id = prodId;
      this.serv.getUnProducto(this.id).subscribe(prod => {
        let c:Array<Calificacion>=[]
        this.serv.getCalificaciones(prod.id).subscribe((calif:Calificacion[]) =>{
          for (let j = 0; j < calif.length; j++) {
            c.push(calif[j]);
            if (calif[j].idUser==this.serv.userC.id){
              this.yaCalificado=true;
            }
          }
      this.promCalificacion=0;
      for (let i = 0; i < this.product.calificacion.length; i++) {
        this.promCalificacion=this.promCalificacion + this.product.calificacion[i]['calificacion'];
      }
      if(this.product.calificacion.length==0){
        this.promCalificacion=0;
        this.promCalifString=this.promCalificacion.toFixed(0)
      }else{
        this.promCalificacion=this.promCalificacion/this.product.calificacion.length;
        this.promCalifString=this.promCalificacion.toFixed(1)
      }

        });
        let p:Productos={nombre:prod.nombre,
          descripcion:prod.descripcion,
          categorias:prod.categorias,
          precio:prod.precio,
          stock:prod.stock,
          comentarios:[],
          id:prod.id,
          calificacion:c,
          imagen:prod.imagen}
        this.product=p;
      
          this.serv.getComentarios(prod.id).subscribe((comen:Comentario[]) =>{
            let c1:Array<Comentario>=[]
            for (let j = 0; j < comen.length; j++) {
              this.comentarios.push(comen[j]);
            }
            console.log(this.comentarios)
          });


      });
      
    });

    
  }


  calificar(){
    if (this.calificaciones.controls["puntaje"].value== ""){
      alert("Seleccione alguna puntuación");
      return;
    }
    //console.log(this.calificaciones.controls["puntaje"].value);
    let c:Calificacion={idProd:this.product.id,idUser:this.serv.userC.id,calification:+this.calificaciones.controls["puntaje"].value}
    this.serv.postCalificacion(c)
    alert("Ha calificado el producto con éxito!")
    this.serv.auxRuta="producto/" + String(this.product.id);
    this.router.navigate(['r']);
    console.log(c)
  }

  comentar(){
    if (this.seccionComentarios.controls["comentario"].value== ""){
      alert("Escriba algo antes de comentar.");
      return;
    }
    let comment:Comentario={comentario:this.seccionComentarios.controls["comentario"].value,
    nombre:this.serv.userC.nombres.concat(" ",this.serv.userC.apellidos),
  id:this.product.id};
    this.serv.postComentario(comment);
    alert("Ha comentado con éxito!")
    this.serv.auxRuta="producto/" + String(this.product.id);
    this.router.navigate(['r']);
  }

  anadirCarrito(){
    let existe:boolean=false
    for (let j = 0; j < this.serv.carrito.length; j++) {
      if (this.product.id==this.serv.carrito[j].producto.id){
        this.serv.carrito[j].cantidad=this.serv.carrito[j].cantidad +1
        existe=true
        break;
      }
    }
    if (!existe){
      let carroProducto:carroProducto={producto:this.product,cantidad:1}
      this.serv.carrito.push(carroProducto)
    }
    this.serv.totalCarrito=this.serv.totalCarrito +1
    this.product.stock=this.product.stock-1
    let s:sendStock={nuevoStock:this.product.stock}
    this.serv.editarStock(this.product.id,s)
  }


  volver(){
    this.router.navigate(['']);
  }
}
