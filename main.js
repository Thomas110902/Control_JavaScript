import { header } from "./componentes/header/headerComponent.js";
import { seccion1 } from "./componentes/seccion1/seccion1.js";
import { obtenerNav } from "./componentes/navComponentes/navComponent.js";


let listaDeCompras = localStorage.getItem("carrito");


function seccion(){
 
    let seccion = document.createElement('section');

    
    // LocalStorange1
    if (!listaDeCompras) {
        listaDeCompras = [];
        localStorage.setItem("carrito", JSON.stringify(listaDeCompras));
    }
    console.log(listaDeCompras);



    // header
    seccion.appendChild(header());

    // sección
    seccion.appendChild(seccion1());

    // nav
    seccion.appendChild(obtenerNav());

    return seccion;
}

document.body.appendChild(seccion());

export { listaDeCompras };