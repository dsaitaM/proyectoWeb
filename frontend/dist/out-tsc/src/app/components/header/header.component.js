import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let HeaderComponent = class HeaderComponent {
    constructor(router, serv, fb) {
        this.router = router;
        this.serv = serv;
        this.fb = fb;
        this.seleccionarCategorias = this.fb.group({
            ropa: [true, [Validators.required]],
            tecnologia: [true, [Validators.required]],
            deportes: [true, [Validators.required]],
            autos: [true, [Validators.required]],
            hogar: [true, [Validators.required]],
        });
    }
    ngOnInit() {
    }
    categorias() {
        this.serv.ropa = this.seleccionarCategorias.controls['ropa'].value;
        this.serv.tecnologia = this.seleccionarCategorias.controls['tecnologia'].value;
        this.serv.deportes = this.seleccionarCategorias.controls['deportes'].value;
        this.serv.autos = this.seleccionarCategorias.controls['autos'].value;
        this.serv.hogar = this.seleccionarCategorias.controls['hogar'].value;
    }
    inicioSesion() {
        this.router.navigate(['inicio-sesion']);
    }
    clickCarrito() {
        this.router.navigate(['carrito']);
    }
    cerrarSesion() {
        if (confirm('¿Desea cerrar sesión?')) {
            this.serv.userC = { nombres: "",
                apellidos: "",
                direccion: "",
                rut: "",
                region: "",
                comuna: "",
                email: "",
                password: "",
                id: 0,
                admin: false };
            this.serv.conectado = false;
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
            //this.serv.listaP=this.serv.listaPRespaldo;
            this.router.navigate(['']);
        }
    }
    bAdmin() {
        this.router.navigate(['admin']);
    }
    volver() {
        this.router.navigate(['']);
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map