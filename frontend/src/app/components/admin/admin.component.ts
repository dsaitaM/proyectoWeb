import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Usuario,respuestaSVUsuario, pedidos, respuestaSVPedido} from '../../interfaces/usuarios';
import {ServicioService} from '../../servicios/servicio.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  listaUsuarios:Array<Usuario>=[];
  reportePedidos:Array<pedidos>=[];

  constructor(private router: Router,public serv:ServicioService) { }

  ngOnInit(): void {
    this.serv.getUsuarios().subscribe((users: respuestaSVUsuario) => {
      this.listaUsuarios=users.usuarios
    });

    this.serv.getPedidos().subscribe((peds: respuestaSVPedido) => {
      console.log("peds")
      console.log(peds)
      this.reportePedidos=peds.pedidos
    });
  }

  volver(){
    this.router.navigate(['']);
  }
}
