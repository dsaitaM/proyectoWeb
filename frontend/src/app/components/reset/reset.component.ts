import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServicioService} from '../../servicios/servicio.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  constructor(private router: Router,private serv:ServicioService) { }

  ngOnInit(): void {
    this.router.navigate([this.serv.auxRuta]);
  }

}
