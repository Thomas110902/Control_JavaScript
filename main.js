function seccion (){
    
    let seccion = document.createElement("section");

    let h1 = document.createElement("h1");
    h1.innerText = "Hola mundo";
    seccion.appendChild(h1);

    document.body.appendChild(seccion);

    let p = document.createElement("p");
    p.innerText = "Introduccion a Java_Script"
    seccion.appendChild(p);

    

   return seccion;
}

document.body.appendChild(seccion());