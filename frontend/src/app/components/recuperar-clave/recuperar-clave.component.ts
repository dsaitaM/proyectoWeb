import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, AbstractControl,Validators} from '@angular/forms';
import {respuestaSVUsuario, Usuario} from '../../interfaces/usuarios';
import {Router} from '@angular/router';
import {ServicioService} from '../../servicios/servicio.service';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.scss']
})
export class RecuperarClaveComponent implements OnInit {
  recuperar:FormGroup;
  listaUser:Array<Usuario>;
  constructor(public fb:FormBuilder,private router: Router,private serv:ServicioService) { 
    this.recuperar=this.fb.group({
      email:['',[Validators.required]],
    });
  }

  ngOnInit(): void {
    this.serv.getUsuarios().subscribe((users: respuestaSVUsuario) => {
      this.listaUser=users.usuarios
    });
  }
  
  recuperarClave(){
    if (this.recuperar.controls["email"].value==""){
      (alert("Ingrese un correo electrónico."));
      return;
    }
    for (let i=0;i<this.listaUser.length;i++){
      if (this.recuperar.controls["email"].value==this.listaUser[i].email){
        (alert("Puede ingresar una nueva contraseña."));
        this.serv.mailClave=this.recuperar.controls["email"].value;
        this.router.navigate(['nueva-clave']);
        return;
      }
    }
    alert("No se ha encontrado una cuenta asociada a este correo electrónico.");
  }

  volver(){
    this.router.navigate(['inicio-sesion']);
  }
}
