//URL: https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.querySelector("#app");

let posts = [];

function nutriApp(){
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((r) => r.json())
    .then((json) => {
        posts = json;

        posts.map((item) => {
            let liElement = document.createElement("li");
            let h2Element = document.createElement("h2");
            let imgElement = document.createElement("img");
            let pElement = document.createElement("p");

            let titleText = document.createTextNode(item.titulo);
            h2Element.appendChild(titleText);
            liElement.appendChild(h2Element);

            imgElement.src = item.capa;
            liElement.appendChild(imgElement)

            let descriptionText = document.createTextNode(item.subtitulo);
            pElement.appendChild(descriptionText);
            liElement.appendChild(pElement);

            listElement.appendChild(liElement);
        });
    })
    .catch(() => {
        console.log("Deu algum erro❌");
    })
}

nutriApp();