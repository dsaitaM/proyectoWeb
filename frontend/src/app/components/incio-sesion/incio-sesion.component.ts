import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, AbstractControl,Validators} from '@angular/forms';
import {Usuario,respuestaSVUsuario} from '../../interfaces/usuarios';
import {listaRegiones,Regiones,Comunas} from '../../interfaces/regiones';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import {ServicioService} from '../../servicios/servicio.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-incio-sesion',
  templateUrl: './incio-sesion.component.html',
  styleUrls: ['./incio-sesion.component.scss']
})
export class IncioSesionComponent implements OnInit {
  ingreso:FormGroup;
  registro:FormGroup;

  listaUser:Array<Usuario>=[];

  siteKey:string

  comunasRegion:Array<Comunas>;
  listaRegiones:Array<Regiones>=listaRegiones;
  constructor(public fb:FormBuilder,private router: Router,private serv:ServicioService,private route:ActivatedRoute) { 
    this.ingreso=this.fb.group({
    rut:['',[Validators.required]],
    password:['',[Validators.required]],
    recaptcha:['',[Validators.required]]
    });
    this.registro=this.fb.group({
      nombres:['',[Validators.required]],
      apellidos:['',[Validators.required]],
      direccion:['',[Validators.required]],
      rut:['',[Validators.required]],
      region:['',[Validators.required]],
      comuna:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      passwordConfirm:['',[Validators.required]],
    });


    this.siteKey="6Lf41F8bAAAAAJcKn2Jx5F3NkMSwv7lYpmhpD20L"
  }

  ngOnInit(): void {
    this.serv.getUsuarios().subscribe((users: respuestaSVUsuario) => {
      this.listaUser=users.usuarios
      
       
    });
  }


  changeRegion(region:any){
    this.comunasRegion=region.listaComunas;
  }

  ingresar(){
    console.log(this.ingreso.controls["recaptcha"].value.length)
    if (this.ingreso.controls["rut"].value== ""){
      alert("Rellene el nombre de usuario");
      return;
    }
  
     if (this.ingreso.controls["password"].value== ""){
      alert("Rellene la contraseña");
       return;
      }
    
    if(this.ingreso.controls["recaptcha"].value.length==0){
      alert("Complete el captcha");
      return
    }


    let usuarioEncontrado:boolean=false;
    for (let i=0;i<this.listaUser.length;i++){
      if (this.ingreso.controls["rut"].value==this.listaUser[i].rut){
        usuarioEncontrado=true
        let pwCoincide:boolean
        this.serv.getPassword(this.ingreso.controls["password"].value,this.listaUser[i].password).subscribe(token =>{
          pwCoincide=token;
          console.log("pwTk")
          console.log(token)
            if (pwCoincide){
  
            this.serv.conectado=true;
            this.serv.userC=this.listaUser[i];
            //
            this.router.navigate(['']);
            return;
          }else{
            alert("Contraseña incorrecta");
            return;
          }
        })
        
      }
    }
    if(!usuarioEncontrado){
      alert("Usuario no encontrado");
    return
    }
    
  }

  registrar(){
    if (this.registro.controls["nombres"].value== ""){
      alert("Rellene el nombre");
      return;
    }
    if (this.registro.controls["apellidos"].value== ""){
      alert("Rellene los apellidos");
      return;
    }
    if (this.registro.controls["direccion"].value== ""){
      alert("Rellene la dirección");
      return;
    }
    if (this.registro.controls["rut"].value== ""){
      alert("Rellene el rut");
      return;
    }
    
    for (let i=0;i<this.listaUser.length;i++){
      if (this.registro.controls["rut"].value==this.listaUser[i].rut){
        (alert("Este rut ya se encuentra registrado"));
        return;
      }
    }

    if (this.registro.controls["region"].value== ""){
      alert("Seleccione la región");
      return;
    }
    if (this.registro.controls["comuna"].value== ""){
      alert("Seleccione la comuna");
      return;
    }
    if (this.registro.controls["email"].value== ""){
      alert("Rellene el correo electrónico");
      return;
    }
    if (this.registro.controls["password"].value== ""){
      alert("Rellene la contraseña");
      return;
    }
    if (this.registro.controls["passwordConfirm"].value== ""){
      alert("Vuelva a rellenar la contraseña");
      return;
    }
    if (this.registro.controls["password"].value!=this.registro.controls["passwordConfirm"].value){
      alert("Las constraseñas no coinciden");
      return;
    }

    let user:Usuario={nombres:this.registro.controls["nombres"].value,
    apellidos:this.registro.controls["apellidos"].value,
    direccion:this.registro.controls["direccion"].value,
    rut:this.registro.controls["rut"].value,
    region:this.registro.controls["region"].value,
    comuna:this.registro.controls["comuna"].value,
    email:this.registro.controls["email"].value,
    password:this.registro.controls["password"].value,
    id:0,
    admin:false}
    console.log(user.password)
    this.serv.postUsuario(user);
    alert("Se ha registrado correctamente!")
    
    this.serv.conectado=true
    this.serv.userC=user

    this.router.navigate(['']);

    
  }

  recuperarClave(){
    this.router.navigate(['recuperar-clave']);
  }

  volver(){
    this.router.navigate(['']);
  }

}
