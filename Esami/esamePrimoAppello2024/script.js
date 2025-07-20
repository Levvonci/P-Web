function caricaPersone(endpoint){
    fetch(endpoint)
        .then(response =>{
            if(!response.ok){
                throw new Error("Errore nella fetch")
            }
            return response.json()
        })
        .then(data =>{
            const ul = document.querySelector(".listaPersone")
            data.dati.forEach(element => {
                const li = document.createElement("li")
                li.classList.add("persona")
                li.innerText = element.nome + " " + element.cognome
                ul.appendChild(li)

                li.addEventListener("click", () =>{
                    alert("Nome: " + element.nome + ", Cognome: " + element.cognome + ", Etá: " + element.età)
                })
            });
            
        })
        .catch(error => {
            console.error("Errore durante il caricamento:", error);
        });
}   

function cambiaTema(){
    const link = document.querySelectorAll("li a")
    const button = document.querySelector(".theme")
    const body = document.querySelector("body")
    button.addEventListener("click", () =>{
        link.forEach(element =>{
            element.style.color = "#313131"
        })
        body.style.backgroundColor = "#00796b"
    })
}

cambiaTema()
caricaPersone("http://localhost:3000/persone")