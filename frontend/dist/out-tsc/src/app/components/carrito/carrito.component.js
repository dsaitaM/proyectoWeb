import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CarritoComponent = class CarritoComponent {
    constructor(fb, router, serv) {
        this.fb = fb;
        this.router = router;
        this.serv = serv;
    }
    ngOnInit() {
    }
    eliminarP(carroProducto) {
        for (let i = 0; i < this.serv.carrito.length; i++) {
            if (carroProducto.producto.id == this.serv.carrito[i].producto.id) {
                this.serv.carrito[i].cantidad = this.serv.carrito[i].cantidad - 1;
                if (this.serv.carrito[i].cantidad == 0) {
                    this.serv.carrito.forEach((value, index) => {
                        if (value.producto.id == carroProducto.producto.id) {
                            this.serv.carrito.splice(index, 1);
                        }
                    });
                }
                for (let j = 0; j < this.serv.listaP.length; j++) {
                    if (carroProducto.producto.id == this.serv.listaP[j].id) {
                        this.serv.listaP[j].stock = this.serv.listaP[j].stock + 1;
                        break;
                    }
                }
                this.serv.totalCarrito = this.serv.totalCarrito - 1;
            }
        }
    }
    comprar() {
        if (confirm('¿Está seguro de realizar la compra?')) {
            alert("Su compra se ha realizado con éxito!");
            // for (let i = 0; i < this.serv.carrito.length; i++) {
            //   this.serv.reporteVentas[i].compras.push(this.serv.carrito[i])
            //   this.serv.reporteVentas[i].usuario=this.serv.userC
            // }
            let reporte = { compras: this.serv.carrito, usuario: this.serv.userC };
            this.serv.reporteVentas.push(reporte);
            this.serv.carrito = [];
            this.serv.totalCarrito = 0;
        }
    }
    vaciar() {
        for (let i = 0; i < this.serv.carrito.length; i++) {
            for (let j = 0; j < this.serv.listaP.length; j++) {
                if (this.serv.carrito[i].producto.id == this.serv.listaP[j].id) {
                    this.serv.listaP[j].stock = this.serv.listaP[j].stock + this.serv.carrito[i].cantidad;
                    break;
                }
            }
        }
        this.serv.carrito = [];
        this.serv.totalCarrito = 0;
    }
    volver() {
        this.router.navigate(['']);
    }
};
CarritoComponent = __decorate([
    Component({
        selector: 'app-carrito',
        templateUrl: './carrito.component.html',
        styleUrls: ['./carrito.component.scss']
    })
], CarritoComponent);
export { CarritoComponent };
//# sourceMappingURL=carrito.component.js.map