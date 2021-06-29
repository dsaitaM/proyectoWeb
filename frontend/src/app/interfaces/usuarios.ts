import { Productos } from "./productos";

export interface Usuario{
    nombres:string,
    apellidos:string,
    direccion:string,
    rut:string,
    region:string,
    comuna:string,
    email:string,
    password:string,
    admin:boolean,
    id:number
}

export interface carroProducto{  //////////
    producto:Productos,          //////////
    cantidad:number              //////////
}

export interface respuestaSV{  //////////
    products:Productos[],          //////////
    cantidad:number              //////////
}

export interface respuestaSVUsuario{  //////////
    usuarios:Usuario[],          //////////
    cantidad:number              //////////
}

export interface respuestaSVPedido{
    pedidos:pedidos[],
    cantidad:number
}

export interface Calificacion{
    idProd:number,
    idUser:number,
    calification:number,
}

export interface pedidos{
    pedido:string,
    nombreUsuario:string
}

export interface reporteVentas{
    compras:Array<carroProducto>,
    usuario:Usuario
}

export interface sendStock{
    nuevoStock:number
}

export interface sendPw{
    pw:string
}

export interface passwordToken{
    password:string,
    rut:string
}
