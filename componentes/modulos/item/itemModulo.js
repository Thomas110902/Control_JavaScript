export function item(titulo,urlImg){

    let item = document.createElement('div');
    item.className = "item";
    item.textContent = titulo;
    
    let img = document.createElement('img');
    img.src = urlImg;
    item.appendChild(img);

    let price = document.createElement('div');
    price.className = "price"
    price.textContent =  price;
    item.appendChild(price);

    let description = document.createElement('div');
    description.className = "description"
    description.textContent =  description;
    item.appendChild(description);

    item.addEventListener('click', ()=>{
        item.classList.add("verde");
        let headercontenedor = document.querySelector('.header');
        headercontenedor.classList.add("ocultar");
    });

    
    return item;


}
