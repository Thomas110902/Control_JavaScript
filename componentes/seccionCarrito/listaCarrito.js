import { obtenerProuctos } from "../../control/milocalStorage.js"

export function listadeCompras() {
    let seccion = document.createElement('section');
    seccion.classList.add("carrito");

    let recuperarProductos = obtenerProuctos();
    console.log(recuperarProductos);

    recuperarProductos.forEach(element => {
        // contenedor fila
        let fila = document.createElement("div");
        fila.classList.add("item");

        // div imagen
        let divImg = document.createElement("div");
        divImg.classList.add("item-img");

        let img = document.createElement("img");
        img.src = element.imagen || "placeholder.jpg";
        img.alt = element.nombre;
        divImg.appendChild(img);

        // contenedor info
        let divInfo = document.createElement("div");
        divInfo.classList.add("item-info");

        // nombre
        let nombre = document.createElement("p");
        nombre.classList.add("item-nombre");
        nombre.textContent = element.nombre;

        // precio
        let precio = document.createElement("p");
        precio.classList.add("item-precio");
        precio.textContent = `Q${element.precio}`;

        divInfo.appendChild(nombre);
        divInfo.appendChild(precio);

        // ensamblar
        fila.appendChild(divImg);
        fila.appendChild(divInfo);
        seccion.appendChild(fila);
    });

    return seccion;
}
