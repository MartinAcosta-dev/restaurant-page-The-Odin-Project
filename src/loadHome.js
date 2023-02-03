function loadHome(){
    let div = document.createElement("div");
    div.id = "divHome";

    let divCard = document.createElement("div");
    divCard.classList.add("cardHome");
    divCard.textContent = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nam illo totam ratione voluptas quo quisquam laudantium doloribus odit, ipsam non deleniti odio vero, 
    quidem mollitia perspiciatis? Assumenda ipsa ea explicabo.
    `;

    let divCard2 = document.createElement("div");
    divCard2.classList.add("cardHome");

    let img = document.createElement("img");
    img.src = "../src/img/imagen-restaurante.jpg";

    divCard2.appendChild(img);
    div.appendChild(divCard);
    div.appendChild(divCard2);

    document.querySelector("#content").appendChild(div);
    
}

export{
    loadHome
}