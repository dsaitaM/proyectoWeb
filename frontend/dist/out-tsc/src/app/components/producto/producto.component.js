import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { map } from "rxjs/operators";
let ProductoComponent = class ProductoComponent {
    constructor(fb, router, serv, route) {
        this.fb = fb;
        this.router = router;
        this.serv = serv;
        this.route = route;
        this.product = { nombre: '',
            descripcion: '',
            categorias: '',
            precio: '',
            stock: 0,
            comentarios: [],
            id: 0,
            calificacion: [],
            imagen: '' };
        this.comentarios = [];
        //totalCalificaciones:Array<any>=[];
        // lista:Array<Productos>=ListaProductos;
        // listaRespaldo:Array<Productos>=ListaProductos;
        this.nombre = this.serv.nombre;
        this.descripcion = this.serv.descripcion;
        this.precio = this.serv.precio;
        this.categorias = this.serv.categorias;
        this.stock = this.serv.stock;
        // 
        // calificacion:Array<number>=this.serv.calificacion;
        this.id = this.serv.id;
        this.iListaP = this.serv.iListaP;
        this.calificaciones = this.fb.group({
            puntaje: ['', [Validators.required]],
        });
        this.seccionComentarios = this.fb.group({
            comentario: ['', [Validators.required]],
        });
    }
    ngOnInit() {
        this.route.paramMap.pipe(map((param) => {
            // @ts-ignore
            return param.params.id;
        })).subscribe(prodId => {
            this.id = prodId;
            this.serv.getUnProducto(this.id).subscribe(prod => {
                let c = [];
                this.serv.getCalificaciones(prod.id).subscribe((calif) => {
                    for (let j = 0; j < calif.length; j++) {
                        c.push(calif[j]);
                        //this.totalCalificaciones.push(calif[j])
                    }
                    //sacar calificaciones del producto
                    this.promCalificacion = 0;
                    for (let i = 0; i < this.product.calificacion.length; i++) {
                        this.promCalificacion = this.promCalificacion + this.product.calificacion[i]['calificacion'];
                    }
                    if (this.product.calificacion.length == 0) {
                        this.promCalificacion = 0;
                        this.promCalifString = this.promCalificacion.toFixed(0);
                    }
                    else {
                        this.promCalificacion = this.promCalificacion / this.product.calificacion.length;
                        this.promCalifString = this.promCalificacion.toFixed(1);
                    }
                });
                let p = { nombre: prod.nombre,
                    descripcion: prod.descripcion,
                    categorias: prod.categorias,
                    precio: prod.precio,
                    stock: prod.stock,
                    comentarios: [],
                    id: prod.id,
                    calificacion: c,
                    imagen: prod.imagen };
                this.product = p;
                this.serv.getComentarios(prod.id).subscribe((comen) => {
                    let c1 = [];
                    for (let j = 0; j < comen.length; j++) {
                        //console.log(comen[j])
                        this.comentarios.push(comen[j]);
                        //this.totalCalificaciones.push(calif[j])
                    }
                    console.log(this.comentarios);
                    //this.comentarios=c1;
                });
            });
        });
        // console.log(this.promCalifString)
    }
    // verCalif(){
    //   //sacar calificaciones del producto
    //   this.promCalificacion=0;
    //   console.log("calificaciones")
    //   console.log(this.product.calificacion)
    //   for (let i = 0; i < this.product.calificacion.length; i++) {
    //     this.promCalificacion=this.promCalificacion + this.product.calificacion[i]['calificacion'];
    //   }
    //   if(this.product.calificacion.length==0){
    //     this.promCalificacion=0;
    //     this.promCalifString=this.promCalificacion.toFixed(0)
    //   }else{
    //     this.promCalificacion=this.promCalificacion/this.product.calificacion.length;
    //     this.promCalifString=this.promCalificacion.toFixed(1)
    //   }
    // }
    // ngOnInit(): void {
    //   console.log("primera");
    //   //console.log(this.calificacion);
    //   this.promCalificacion=0;
    //   console.log(this.calificacion['Object'])
    //   for (let i = 0; i < this.calificacion.length; i++) {
    //     // console.log("suma");
    //     // //this.promCalificacion=this.promCalificacion + this.calificacion[i];
    //     // console.log(this.promCalificacion)
    //     // console.log(this.calificacion[0].calificaciones[i])
    //   }
    //   this.promCalificacion=this.promCalificacion/this.calificacion.length;
    //   this.promCalifString=this.promCalificacion.toFixed(1)
    // }
    calificar() {
        if (this.calificaciones.controls["puntaje"].value == "") {
            alert("Seleccione alguna puntuación");
            return;
        }
        //console.log(this.calificaciones.controls["puntaje"].value);
        let c = { idProd: this.product.id, calification: +this.calificaciones.controls["puntaje"].value };
        this.serv.postCalificacion(c);
        console.log(c);
    }
    comentar() {
        if (this.seccionComentarios.controls["comentario"].value == "") {
            alert("Escriba algo antes de comentar.");
            return;
        }
        let comment = { comentario: this.seccionComentarios.controls["comentario"].value,
            nombre: this.serv.userC.nombres.concat(" ", this.serv.userC.apellidos),
            id: this.product.id };
        this.serv.postComentario(comment);
    }
    anadirCarrito(id) {
        let existe = false;
        for (let i = 0; i < this.serv.listaP.length; i++) {
            if (id == this.serv.listaP[i].id) {
                for (let j = 0; j < this.serv.carrito.length; j++) {
                    if (id == this.serv.carrito[j].producto.id) {
                        this.serv.carrito[j].cantidad = this.serv.carrito[j].cantidad + 1;
                        existe = true;
                        break;
                    }
                }
                if (!existe) {
                    let carroProducto = { producto: this.serv.listaP[i], cantidad: 1 };
                    this.serv.carrito.push(carroProducto);
                }
                this.serv.totalCarrito = this.serv.totalCarrito + 1;
                this.serv.listaP[i].stock = this.serv.listaP[i].stock - 1;
                break;
                // if(this.serv.listaP[i].stock==0){
                //   //en caso de que no actualize
                // }
                // this.serv.carrito.push(this.serv.listaP[i])
                // this.serv.listaP[i].stock=this.serv.listaP[i].stock-1
                // //window.location.reload();
            }
        }
    }
    volver() {
        this.router.navigate(['']);
    }
};
ProductoComponent = __decorate([
    Component({
        selector: 'app-producto',
        templateUrl: './producto.component.html',
        styleUrls: ['./producto.component.scss']
    })
], ProductoComponent);
export { ProductoComponent };
//# sourceMappingURL=producto.component.js.map