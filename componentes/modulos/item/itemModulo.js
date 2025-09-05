import { guardarProducto, obtenerProductos } from "../../control/milocalStorage.js";
export function item(id,title,image,price,description){

    let item = document.createElement('div');
    item.className = "item";
    
    let titulo = document.createElement('p');
    titulo.className = "title"
    titulo.textContent = title;
    item.appendChild(titulo);
    
    let img = document.createElement('img');
    img.src =image;
    item.appendChild(img);

    let descripcion = document.createElement('p');
    descripcion.className = "description"
    descripcion.textContent =  description;
    item.appendChild(descripcion);

    let precio = document.createElement('p');
    precio.className = "price";
    precio.textContent = `Precio: $${price}`;
    item.appendChild(precio);

    item.addEventListener('click', ()=>{
        let carritoLocalStorange = obtenerProductos();
        console.log("carrito", carritoLocalStorange);

        carritoLocalStorange.push({id:id,precio:price,nombre:title, img:image});
        guardarProducto(carritoLocalStorange);
        console.log("Procuto en localStorang");
        location.reload();
    })
    
    
    return item;


}
