export function item(title,image,price,description){

    let item = document.createElement('div');
    item.className = "item";
    
    
    let titulo = document.createElement('p');
    titulo.className = "title"
    titulo.textContent = title;
    item.appendChild(titulo);
    
    let img = document.createElement('img');
    img.src =image;
    item.appendChild(img);

    let precio = document.createElement('p');
    precio.className = "price";
    precio.textContent = `Precio: $${price}`;
    item.appendChild(precio);

    let descripcion = document.createElement('p');
    descripcion.className = "description"
    descripcion.textContent =  description;
    item.appendChild(descripcion);

    item.addEventListener('click', ()=>{
        item.classList.add("azul");
        let headercontenedor = document.querySelector('.header');
        headercontenedor.classList.add("ocultar");
    });

    
    return item;


}
