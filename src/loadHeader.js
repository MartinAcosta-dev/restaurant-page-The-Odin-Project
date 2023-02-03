function loadHeader(){
    let content = document.querySelector("#content");

    let header = document.createElement("header");
    let h1 = document.createElement("h1");
    h1.id = "titulo";
    h1.textContent = "Restaurant Page - The Odin Project"
    header.appendChild(h1);
    
    let ul = document.createElement("ul");
    
    
    let opciones = ["Home", "Menu", "About Us", "Contact"];
    
    for(let i = 0; i <= 3; i++){
        let li = document.createElement("li");
        li.textContent = opciones[i];
    
        ul.appendChild(li);
    }
    
    header.appendChild(ul);
    
    
    content.appendChild(header);
}


export {
    loadHeader
}



