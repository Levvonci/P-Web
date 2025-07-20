function caricaID(endpoint){
    fetch(endpoint)
        .then(response =>{
            if(!response.ok){
                throw new error("Errore nella fetch")
            }
            return response.json()
        })
      .then(data =>{
        const main = document.querySelector(".id")
        const frase = document.querySelector(".frase")
        data.dati.forEach(element => {
            const div = document.createElement("div")
            div.innerText = element.ID
            div.style.backgroundColor = "Green"
            main.appendChild(div)
            div.addEventListener("click", () =>{
                frase.innerText = element.frase
            })
        });    
    })
}

caricaID("http://localhost:3000/citations")