import { Injectable } from '@angular/core';
import {Usuario} from '../interfaces/usuarios';
import {Productos} from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  conectado:boolean=false;

  constructor() { }
}
