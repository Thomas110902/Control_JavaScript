export function item(){

    let item = document.createElement('div');
    item.className = "item";

    let titulo = document.createElement('h1');
    titulo.className = "item-h1";
    titulo.textContent = "Hola Thomás";

    let img = document.createElement('img');
    img.className = "item-img";
    img.src = "https://studiosprinkles.com/cdn/shop/files/8_554155aa-6264-4319-a219-84480665ef78.png?v=1737228890&width=533";

    let texto = document.createElement('p');
    texto.className = "item-desc";
    texto.textContent = "Snoopy, el icónico beagle blanco y negro creado por Charles M. Schulz, no es solo una mascota común.  En su mente, Snoopy ha sido piloto de la Primera Guerra Mundial enfrentándose al temido Barón Rojo.";

    item.appendChild(titulo);
    item.appendChild(img);
    item.appendChild(texto);
    
    return item;


}