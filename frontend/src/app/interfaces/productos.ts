import { Calificacion } from "./usuarios";


export interface Comentario{
    comentario:string,
    nombre:string,
    id:number
}


export interface Productos{
    nombre:string,
    descripcion:string,
    categorias:string,
    precio:string,
    stock:number,
    comentarios:Array<Comentario>,
    id:number,
    calificacion:Array<Calificacion>,
    imagen:string
}

export const ListaProductos:Array<Productos>=[

]