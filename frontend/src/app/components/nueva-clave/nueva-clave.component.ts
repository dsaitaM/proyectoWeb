import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, AbstractControl,Validators} from '@angular/forms';
import {Usuario,respuestaSVUsuario, sendPw} from '../../interfaces/usuarios';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import {ServicioService} from '../../servicios/servicio.service';

@Component({
  selector: 'app-nueva-clave',
  templateUrl: './nueva-clave.component.html',
  styleUrls: ['./nueva-clave.component.scss']
})
export class NuevaClaveComponent implements OnInit {
  cambiar:FormGroup;
  listaUser:Array<Usuario>=[];
  constructor(public fb:FormBuilder,private router: Router,private serv:ServicioService,private route:ActivatedRoute) { 
    this.cambiar=this.fb.group({
      clave:['',[Validators.required]],
      clave2:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    this.serv.getUsuarios().subscribe((users: respuestaSVUsuario) => {
      this.listaUser=users.usuarios
    });
  }
  
  cambiarClave(){
    if (this.cambiar.controls["clave"].value==""){
      (alert("Ingrese una contraseña."));
      return;
    }
    let pw:sendPw={pw:this.cambiar.controls["clave"].value}
    for (let i = 0; i < this.listaUser.length; i++) {
      if(this.serv.mailClave==this.listaUser[i].email){
        console.log(pw)
        this.serv.editarPassword(this.listaUser[i].id,pw)
      }
    }
    alert("Ha cambiado su contraseña");
    this.serv.mailClave="";
    this.router.navigate(['inicio-sesion']);
  }
  
  
  volver(){
    this.serv.mailClave="";
    this.router.navigate(['inicio-sesion']);
  }
}
