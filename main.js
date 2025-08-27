import { header } from "./componentes/header/headerComponent.js";
import { nav } from "./componentes/navComponentes/navComponent.js";
import { seccion1 } from "./componentes/seccion1/seccion1.js";


function seccion (){
    
    let seccion = document.createElement("section");
    //header
    seccion.appendChild(header());
    
    //seccion

    seccion.appendChild(seccion1());

    //nav
    seccion.appendChild(nav());


   return seccion;
}

document.body.appendChild(seccion());