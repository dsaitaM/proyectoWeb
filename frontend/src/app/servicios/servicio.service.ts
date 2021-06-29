import { Injectable } from '@angular/core';
import {Usuario,carroProducto, reporteVentas, respuestaSV, sendStock, respuestaSVUsuario, Calificacion, passwordToken, pedidos, respuestaSVPedido, sendPw} from '../interfaces/usuarios';
import {Productos,Comentario,ListaProductos} from '../interfaces/productos';
import { Observable, Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  //l istaP:Array<Productos>=ListaProductos
  // listaPRespaldo:Array<Productos>=ListaProductos

  ropa:boolean=true
  tecnologia:boolean=true
  deportes:boolean=true
  autos:boolean=true
  hogar:boolean=true

  nombre:string=""
  descripcion:string=""
  categorias:string=""
  precio:string=""
  stock:number=0
  // comentarios:Array<Comentario>=[]
  // calificacion:Array<number>=[]
  id:number=0

  iListaP:number=0

  auxRuta:string=""

  mailClave:string=""

//pasar a usuarios

  listaUsuarios:Array<Usuario>

  conectado:boolean=false;
  userC:Usuario={nombres:"",
  apellidos:"",
  direccion:"",
  rut:"",
  region:"",
  comuna:"",
  email:"",
  password:"",
  id:0,
  admin:false}

//carrito
  carrito:Array<carroProducto>=[]
  totalCarrito:number=0

  reporteVentas:Array<reporteVentas>=[]


 //backend
  servidor:string='http://localhost:3000/api/'

  getProductos(): Observable<respuestaSV>{
    return this.http.get<respuestaSV>(this.servidor + 'products');
  }

  getUnProducto(id:number): Observable<Productos>{
    return this.http.get<Productos>(this.servidor + 'products/' + id);
  }

  getCalificaciones(id:number): Observable<Calificacion[]>{
    return this.http.get<Calificacion[]>(this.servidor + 'calificacion/' + id);
  }

  getComentarios(id:number): Observable<Comentario[]>{
    return this.http.get<Comentario[]>(this.servidor + 'comentarios/' + id);
  }

  postCalificacion(nuevaCalif:Calificacion){
    this.http.post<Calificacion>(this.servidor + 'calificacion/addC',nuevaCalif).subscribe(
      (resp) => console.log(resp),
      (err) => console.log(err)
    );
  }

  postComentario(nuevoComentario:Comentario){
    this.http.post<Comentario>(this.servidor + 'comentarios/addC',nuevoComentario).subscribe(
      (resp) => console.log(resp),
      (err) => console.log(err)
    );
  }

  editarStock(id:number,stock:sendStock){
    this.http.put<sendStock>(this.servidor + 'products/carrito/' + id,stock).subscribe(
      (resp) => console.log(resp),
      (err) => console.log(err)
    );
  }

  editarPassword(id:number,nuevaPassword:sendPw){
    this.http.put<sendPw>(this.servidor + 'users/password/' + id + '/' + nuevaPassword.pw,nuevaPassword).subscribe(
      (resp) => console.log(resp),
      (err) => console.log(err)
    );
  }

  getUsuarios(): Observable<respuestaSVUsuario>{
    return this.http.get<respuestaSVUsuario>(this.servidor + 'users');
  }

  getUnUsuario(id:number): Observable<Usuario>{
    return this.http.get<Usuario>(this.servidor + 'users/' + id);
  }

  getPassword(password:string,hash:string): Observable<boolean>{
    return this.http.get<boolean>(this.servidor + 'users/token/' + password + '/' + hash);
  }

  postUsuario(nuevoUsuario:Usuario){
    this.http.post<Usuario>(this.servidor + 'users',nuevoUsuario).subscribe(
      (resp) => console.log(resp),
      (err) => console.log(err)
    );
  }

  getPedidos(): Observable<respuestaSVPedido>{
    return this.http.get<respuestaSVPedido>(this.servidor + 'ordenes');
  }

  postPedido(nuevoPedido:pedidos){
    this.http.post<pedidos>(this.servidor + 'ordenes',nuevoPedido).subscribe(
      (resp) => console.log(resp),
      (err) => console.log(err)
    );
  }

  constructor(private http: HttpClient) { }
}
