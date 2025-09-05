import { item } from "../modulos/item/itemModulo.js";
import { productos } from "../../database/productos.js";

export function seccion1(){

    let seccion1 = document.createElement('seccion1');
    seccion1.className = "seccion1";


   productos.forEach(element => {
    seccion1.appendChild(item(element.id,element.title,element.image,element.price,element.description))
   });
        
    return seccion1;


}