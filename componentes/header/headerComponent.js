function header(){
    let header = document.createElement('header');
    header.className = "headercontenedor"

    //text
    let text = document.createElement('text');
    text.innerText = "Thomasss";
    //div
    let div = document.createElement('div');
    div.className = "circulodiv";

    let img = document.createElement('img');
    

    header.appendChild(text);
    header.appendChild(div);

    return header;


}


export { header }