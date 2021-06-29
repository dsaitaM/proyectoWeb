import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let RecuperarClaveComponent = class RecuperarClaveComponent {
    constructor(fb, router, serv) {
        this.fb = fb;
        this.router = router;
        this.serv = serv;
        this.recuperar = this.fb.group({
            email: ['', [Validators.required]],
        });
    }
    ngOnInit() {
    }
    recuperarClave() {
        if (this.recuperar.controls["email"].value == "") {
            (alert("Ingrese un correo electrónico."));
            return;
        }
        for (let i = 0; i < this.listaUser.length; i++) {
            if (this.recuperar.controls["email"].value == this.listaUser[i].email) {
                (alert("Se le ha enviado un correo electrónico con instrucciones para recuperar su contraseña."));
                this.router.navigate(['inicio-sesion']);
                return;
            }
        }
        alert("No se ha encontrado una cuenta asociada a este correo electrónico.");
    }
    volver() {
        this.router.navigate(['inicio-sesion']);
    }
};
RecuperarClaveComponent = __decorate([
    Component({
        selector: 'app-recuperar-clave',
        templateUrl: './recuperar-clave.component.html',
        styleUrls: ['./recuperar-clave.component.scss']
    })
], RecuperarClaveComponent);
export { RecuperarClaveComponent };
//# sourceMappingURL=recuperar-clave.component.js.map