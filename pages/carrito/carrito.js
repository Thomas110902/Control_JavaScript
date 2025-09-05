import { header } from "../../componentes/header/headerComponent.js";
import {listadeCompras } from "../../componentes/seccionCarrito/listaCarrito.js";


let seccionCarrito = document.createElement('section');


// cargar header
seccionCarrito.appendChild(header());

seccionCarrito.appendChild(listadeCompras);

document.body.appendChild(seccionCompras);