function listaAttivita(endpoint){
    fetch(endpoint)
        .then(response =>{
            if(!response.ok){
                throw new Error("Errore fetch")
            }
            return response.json()
        })
        .then(data =>{
            const main = document.querySelector("main")
            main.innerHTML = ""
            data.dati.forEach(element => {
                const div = document.createElement("div")
                div.classList.add("carta")
                const p = document.createElement("p")
                const button = document.createElement("button")
                p.innerText = element.text
                button.innerText = "Completata"
                if(element.completed == true){
                    p.style.textDecoration = "line-through"
                    button.style.textDecoration = "line-through"
                    button.style.backgroundColor = "Grey"
                    button.disable = true
                }

                button.addEventListener("click", () =>{
                    p.style.textDecoration = "line-through"
                    button.style.textDecoration = "line-through"
                    button.style.backgroundColor = "Grey"
                    button.disable = true
                    
                    completaAttivita(`http://localhost:3000/tasks/complete/${element.id}`)
                })

                main.appendChild(div)
                div.appendChild(p)
                div.appendChild(button)
            });
        })
        .catch(error => {
            console.error("Errore durante il caricamento:", error);
        });
}

function completaAttivita(endpoint){
    fetch(endpoint, {method: "POST"})
        .then(response => {
            if(!response.ok){
                throw new Error("Errore nella fetch POST")
            }
            return response.jspon()
        })
        .then(() =>{
            listaAttivita("http://localhost:3000/tasks")
        })
        .catch(error => {
            console.error("Errore durante il completamento:", error);
        });
}

listaAttivita("http://localhost:3000/tasks")
