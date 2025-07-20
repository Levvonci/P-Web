function caricaLista(endpoint) {
    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error("Errore nella fetch");
            }
            return response.json();
        })
        .then(data => {
            const main = document.querySelector("main");
            main.innerHTML = "";
            data.dati.forEach(element => {
                const div = document.createElement("div");
                div.classList.add("box");
                const p = document.createElement("p");
                p.innerText = element.testo;
                const button = document.createElement("button");
                button.innerText = "Completa"
                if(element.completato == true){
                    p.style.textDecoration = "line-through"
                    p.style.textColor = "grey"
                    button.style.textDecoration = "line-through"
                    button.style.backgroundColor = "grey"
                }
                div.appendChild(p);
                div.appendChild(button);
                main.appendChild(div);
            });
        })
        .catch(error => {
            console.error("Errore durante il caricamento:", error);
        });
}

//Start della pagina
caricaLista("http://localhost:3000/items");

//Tutti
document.querySelector(".tutti").addEventListener("click", () => {
    caricaLista("http://localhost:3000/items");
});

//Solo Completati
document.querySelector(".completati").addEventListener("click", () => {
    caricaLista("http://localhost:3000/items-complete");
});

//Tema Chiaro
document.querySelector(".chiaro").addEventListener("click", () => {
    const body = document.querySelector("body");
    body.style.backgroundColor = "#f0f0f0";

    const container = document.querySelector(".container");
    container.style.backgroundColor = "white";
    container.style.color = "#333333";

    const box = document.querySelectorAll(".box");
    box.forEach(element => {
        element.style.backgroundColor = "whitesmoke";
        element.style.borderColor = "black"
    });
});

//Tema Scuro
document.querySelector(".scuro").addEventListener("click", () => {
    const body = document.querySelector("body");
    body.style.backgroundColor = "#222222";

    const container = document.querySelector(".container");
    container.style.backgroundColor = "black";
    container.style.color = "white";

    const box = document.querySelectorAll(".box");
    box.forEach(element => {
        element.style.backgroundColor = "#333333";
        element.style.borderColor = "#666666"
    });
});