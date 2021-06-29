import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(router, serv, route) {
        this.router = router;
        this.serv = serv;
        this.route = route;
        this.productos = [];
    }
    //con number[]
    ngOnInit() {
        this.serv.getProductos().subscribe((prods) => {
            for (let i = 0; i < prods.products.length; i++) {
                let c = [];
                this.serv.getCalificaciones(prods.products[i].id).subscribe((calif) => {
                    for (let j = 0; j < calif.length; j++) {
                        c.push(calif[j]);
                    }
                });
                let p = { nombre: prods.products[i].nombre,
                    descripcion: prods.products[i].descripcion,
                    categorias: prods.products[i].categorias,
                    precio: prods.products[i].precio,
                    stock: prods.products[i].stock,
                    comentarios: [],
                    id: prods.products[i].id,
                    calificacion: c,
                    imagen: prods.products[i].imagen };
                this.productos.push(p);
                //console.log(p)
            }
        });
    }
    //sin calif
    // ngOnInit(): void {
    //   this.serv.getProductos().subscribe((prods: respuestaSV) => {
    //     this.productos=prods.products;
    //   });
    // }
    clickProducto(nombre, descripcion, categorias, precio, stock, id) {
        this.serv.nombre = nombre;
        this.serv.descripcion = descripcion;
        this.serv.categorias = categorias;
        this.serv.precio = precio;
        this.serv.stock = stock;
        // this.serv.comentarios=comentarios;
        // this.serv.calificacion=calificacion;
        this.serv.id = id;
        for (let i = 0; i < this.serv.listaP.length; i++) {
            if (id == this.serv.listaP[i].id) {
                this.serv.iListaP = i;
                break;
            }
        }
        this.router.navigate(['producto/', id]);
    }
    // sin backend
    // anadirCarrito(id:any){
    //   let existe:boolean=false
    //   for (let i = 0; i < this.serv.listaP.length; i++) {
    //     if (id==this.serv.listaP[i].id){
    //       for (let j = 0; j < this.serv.carrito.length; j++) {
    //         if (id==this.serv.carrito[j].producto.id){
    //           this.serv.carrito[j].cantidad=this.serv.carrito[j].cantidad +1
    //           existe=true
    //           break;
    //         }
    //       }
    //       if (!existe){
    //         let carroProducto:carroProducto={producto:this.serv.listaP[i],cantidad:1}
    //         this.serv.carrito.push(carroProducto)
    //       }
    //       this.serv.totalCarrito=this.serv.totalCarrito +1
    //       this.serv.listaP[i].stock=this.serv.listaP[i].stock -1
    //       break;
    //       // if(this.serv.listaP[i].stock==0){
    //       //   //en caso de que no actualize
    //       // }
    //       // this.serv.carrito.push(this.serv.listaP[i])
    //       // this.serv.listaP[i].stock=this.serv.listaP[i].stock-1
    //       // //window.location.reload();
    //     }
    //   }
    // }
    anadirCarrito(id) {
        let existe = false;
        for (let i = 0; i < this.productos.length; i++) {
            if (id == this.productos[i].id) {
                for (let j = 0; j < this.serv.carrito.length; j++) {
                    if (id == this.serv.carrito[j].producto.id) {
                        this.serv.carrito[j].cantidad = this.serv.carrito[j].cantidad + 1;
                        existe = true;
                        break;
                    }
                }
                if (!existe) {
                    let carroProducto = { producto: this.productos[i], cantidad: 1 };
                    this.serv.carrito.push(carroProducto);
                }
                this.serv.totalCarrito = this.serv.totalCarrito + 1;
                let s = { nuevoStock: this.productos[i].stock };
                this.route.paramMap.subscribe(prodId => {
                    //id = prodId;
                    console.log("id");
                    console.log(prodId);
                    this.serv.getUnProducto(id).subscribe(prod => {
                        console.log("prod stock");
                        console.log(prod);
                        this.productos[i].stock = prod.stock - 1;
                    });
                });
                this.serv.editarStock(id, s);
                //this.productos[i].stock=this.productos[i].stock -1
                break;
            }
        }
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map