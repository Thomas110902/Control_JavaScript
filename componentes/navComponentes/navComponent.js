import { obtenerProductos } from "../control/milocalStorage.js";
export function obtenerNav(){
    let nav = document.createElement('div');
    nav.className = "nav";

    // cuadro home
    let home = document.createElement('a');
    home.innerText= "🏠";
    home.className= "home" ;
    nav.appendChild(home);

     // cuadro caja
    let caja = document.createElement('a');
    caja.innerText= "📦";
    caja.className= "caja" ;
    nav.appendChild(caja);

     // cuadro signo
    let signo = document.createElement('a');
    signo.innerText= "❔";
    signo.className= "signo" ;
    nav.appendChild(signo);

     // cuadro carrito
    let carrito = document.createElement('a');
    carrito.href = "pages/carrito.html"
    carrito.innerText= "🛒";
    carrito.className= "carrito" ;
    
    let divItem = document.createElement('div');
    divItem.className = "div-item";
  
    
    if(obtenerProductos()!=""){
        carrito.appendChild(divItem);
        
    }
    
    nav.appendChild(carrito);

    return nav;

}