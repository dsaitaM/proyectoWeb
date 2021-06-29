import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ListaProductos } from '../interfaces/productos';
let ServicioService = class ServicioService {
    constructor(http) {
        this.http = http;
        this.listaP = ListaProductos;
        this.listaPRespaldo = ListaProductos;
        this.ropa = true;
        this.tecnologia = true;
        this.deportes = true;
        this.autos = true;
        this.hogar = true;
        this.nombre = "";
        this.descripcion = "";
        this.categorias = "";
        this.precio = "";
        this.stock = 0;
        // comentarios:Array<Comentario>=[]
        // calificacion:Array<number>=[]
        this.id = 0;
        this.iListaP = 0;
        this.conectado = false;
        this.userC = { nombres: "",
            apellidos: "",
            direccion: "",
            rut: "",
            region: "",
            comuna: "",
            email: "",
            password: "",
            id: 0,
            admin: false };
        //carrito
        this.carrito = [];
        this.totalCarrito = 0;
        this.reporteVentas = [];
        //backend
        this.servidor = 'http://localhost:3000/api/';
    }
    getProductos() {
        return this.http.get(this.servidor + 'products');
    }
    getUnProducto(id) {
        return this.http.get(this.servidor + 'products/' + id);
    }
    getCalificaciones(id) {
        return this.http.get(this.servidor + 'calificacion/' + id);
    }
    getComentarios(id) {
        return this.http.get(this.servidor + 'comentarios/' + id);
    }
    postCalificacion(nuevaCalif) {
        this.http.post(this.servidor + 'calificacion/addC', nuevaCalif).subscribe((resp) => console.log(resp), (err) => console.log(err));
    }
    postComentario(nuevoComentario) {
        this.http.post(this.servidor + 'comentarios/addC', nuevoComentario).subscribe((resp) => console.log(resp), (err) => console.log(err));
    }
    editarStock(id, stock) {
        console.log("editar stock");
        console.log(stock);
        this.http.post(this.servidor + 'products/carrito/' + id, stock).subscribe((resp) => console.log(resp), (err) => console.log(err));
    }
    getUsuarios() {
        return this.http.get(this.servidor + 'users');
    }
    getUnUsuario(id) {
        return this.http.get(this.servidor + 'users/' + id);
    }
    postUsuario(nuevoUsuario) {
        this.http.post(this.servidor + 'users', nuevoUsuario).subscribe((resp) => console.log(resp), (err) => console.log(err));
    }
};
ServicioService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ServicioService);
export { ServicioService };
//# sourceMappingURL=servicio.service.js.map