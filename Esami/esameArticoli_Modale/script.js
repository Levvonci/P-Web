function caricaArticoli(endpoint){
    fetch(endpoint)
        .then(response =>{
            if(!response.ok){
                throw new Error("Errore nella fetch")
            }
            return response.json()
        })
        .then(data =>{
            const main = document.querySelector("main")
            data.dati.forEach(element => {
                const div = document.createElement("div")
                div.classList.add("Articolo")
                const titolo = document.createElement("h3")
                titolo.innerText = element.titolo
                const autore = document.createElement("p")
                autore.innerText = "Autore: " + element.autore
                const descrizione = document.createElement("p")
                descrizione.innerText = element.contenuto
                const bottone = document.createElement("button")
                bottone.classList.add("mostradettagli")
                bottone.innerText = "Mostra dettagli"

                div.appendChild(titolo)
                div.appendChild(autore)
                div.appendChild(descrizione)
                div.appendChild(bottone)
                main.appendChild(div)

                bottone.addEventListener("click", () =>{
                    alert("Titolo: " + element.titolo + "\n" + 
                          "Autore: " + element.autore + "\n" +
                          "Contenuto: " + "Lorem")
                })
            });
        }) 
}

function mostraAutori(endpoint){
    fetch(endpoint)
        .then(response =>{
            if(!response.ok){
                throw new Error("Errore nella fetch")
            }
            return response.json()
        })
        .then(data =>{
            const body = document.querySelector("body")
            const button = document.querySelector(".mostraAutori")
            button.addEventListener("click", () =>{
                const overlay = document.createElement("div")
                overlay.classList.add("overlay")
                const boxauto = document.createElement("div")
                boxauto.classList.add("boxauto")
                const titolo = document.createElement("h2")
                titolo.innerText = "Elenco Autori"
                const ul = document.createElement("ul")
                data.dati.forEach(element =>{
                    const li = document.createElement("li")
                    li.innerText = element
                    ul.appendChild(li)
                })

                const closeBtn = document.createElement("button");
                closeBtn.innerText = "Chiudi";
                closeBtn.addEventListener("click", () => {
                    body.removeChild(overlay);
                });

                boxauto.appendChild(titolo)
                boxauto.appendChild(ul)
                boxauto.appendChild(closeBtn);
                overlay.appendChild(boxauto)
                body.appendChild(overlay)
                
            })
        })
}

caricaArticoli("http://localhost:3000/articoli")
mostraAutori("http://localhost:3000/autori")