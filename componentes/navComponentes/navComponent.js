export function nav(){
    let nav = document.createElement('div');
    nav.className = "nav";

    // cuadro home
    let home = document.createElement('div');
    home.innerText= "🏠";
    home.className= "home" ;
    nav.appendChild(home);

     // cuadro home
    let caja = document.createElement('div');
    caja.innerText= "📦";
    caja.className= "caja" ;
    nav.appendChild(caja);

     // cuadro home
    let signo = document.createElement('div');
    signo.innerText= "❔";
    signo.className= "signo" ;
    nav.appendChild(signo);

     // cuadro home
    let carrito = document.createElement('div');
    carrito.innerText= "🛒";
    carrito.className= "carrito" ;
    nav.appendChild(carrito);

    return nav;

}