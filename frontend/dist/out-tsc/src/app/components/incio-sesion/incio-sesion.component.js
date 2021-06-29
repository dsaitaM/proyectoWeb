import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { listaRegiones } from '../../interfaces/regiones';
let IncioSesionComponent = class IncioSesionComponent {
    constructor(fb, router, serv) {
        this.fb = fb;
        this.router = router;
        this.serv = serv;
        this.listaUser = [];
        this.listaRegiones = listaRegiones;
        this.ingreso = this.fb.group({
            rut: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
        this.registro = this.fb.group({
            nombres: ['', [Validators.required]],
            apellidos: ['', [Validators.required]],
            direccion: ['', [Validators.required]],
            rut: ['', [Validators.required]],
            region: ['', [Validators.required]],
            comuna: ['', [Validators.required]],
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
            passwordConfirm: ['', [Validators.required]],
        });
    }
    ngOnInit() {
        console.log(this.comunasRegion);
        this.serv.getUsuarios().subscribe((users) => {
            this.listaUser = users.usuarios;
        });
    }
    changeRegion(region) {
        this.comunasRegion = region.listaComunas;
    }
    ingresar() {
        if (this.ingreso.controls["rut"].value == "") {
            alert("Rellene el nombre de usuario");
            return;
        }
        if (this.ingreso.controls["password"].value == "") {
            alert("Rellene la contraseña");
            return;
        }
        let user = { rut: this.ingreso.controls["rut"].value,
            password: this.ingreso.controls["password"].value,
            nombres: "",
            apellidos: "",
            direccion: "",
            region: "",
            comuna: "",
            email: "",
            id: 0,
            admin: false };
        for (let i = 0; i < this.listaUser.length; i++) {
            if (user.rut == this.listaUser[i].rut) {
                if (user.password == this.listaUser[i].password) {
                    //test
                    this.serv.conectado = true;
                    this.serv.userC = this.listaUser[i];
                    //
                    this.router.navigate(['']);
                    return;
                }
                else {
                    alert("Contraseña incorrecta");
                    return;
                }
            }
        }
        alert("Usuario no encontrado");
        return;
    }
    registrar() {
        if (this.registro.controls["nombres"].value == "") {
            alert("Rellene el nombre");
            return;
        }
        if (this.registro.controls["apellidos"].value == "") {
            alert("Rellene los apellidos");
            return;
        }
        if (this.registro.controls["direccion"].value == "") {
            alert("Rellene la dirección");
            return;
        }
        if (this.registro.controls["rut"].value == "") {
            alert("Rellene el rut");
            return;
        }
        // for (let i=0;i<this.listaUser.length;i++){
        //   if (this.registro.controls["rut"].value==this.listaUser[i].rut){
        //     (alert("Este rut ya se encuentra registrado"));
        //     return;
        //   }
        // }
        if (this.registro.controls["region"].value == "") {
            alert("Seleccione la región");
            return;
        }
        if (this.registro.controls["comuna"].value == "") {
            alert("Seleccione la comuna");
            return;
        }
        if (this.registro.controls["email"].value == "") {
            alert("Rellene el correo electrónico");
            return;
        }
        if (this.registro.controls["password"].value == "") {
            alert("Rellene la contraseña");
            return;
        }
        if (this.registro.controls["passwordConfirm"].value == "") {
            alert("Vuelva a rellenar la contraseña");
            return;
        }
        if (this.registro.controls["password"].value != this.registro.controls["passwordConfirm"].value) {
            alert("Las constraseñas no coinciden");
            return;
        }
        let user = { nombres: this.registro.controls["nombres"].value,
            apellidos: this.registro.controls["apellidos"].value,
            direccion: this.registro.controls["direccion"].value,
            rut: this.registro.controls["rut"].value,
            region: this.registro.controls["region"].value,
            comuna: this.registro.controls["comuna"].value,
            email: this.registro.controls["email"].value,
            password: this.registro.controls["password"].value,
            id: 0,
            admin: false };
        console.log(user.password);
        this.serv.postUsuario(user);
        alert("Se ha registrado correctamente!");
        this.serv.conectado = true;
        this.serv.userC = user;
        this.router.navigate(['']);
    }
    recuperarClave() {
        this.router.navigate(['recuperar-clave']);
    }
    volver() {
        this.router.navigate(['']);
    }
};
IncioSesionComponent = __decorate([
    Component({
        selector: 'app-incio-sesion',
        templateUrl: './incio-sesion.component.html',
        styleUrls: ['./incio-sesion.component.scss']
    })
], IncioSesionComponent);
export { IncioSesionComponent };
//# sourceMappingURL=incio-sesion.component.js.map