fetch("http://localhost:3000/utenti")
    .then(response =>{
        if(!response.ok){
            throw new error("Errore nella fetch");
        }
        return response.json()
    })
    .then(data =>{
        const ul = document.querySelector(".colonna1 ul")
        data.dati.forEach(element => {
            const li = document.createElement("li")
            li.textContent = element.nome+" "+element.cognome;
            ul.appendChild(li);
        })
    })
    .then(data =>{
        const button = document.querySelector(".colonna2 button")
        button.addEventListener("click", () =>{
            const body = document.querySelector("body")
            body.style.backgroundColor = "#d81b60";
            const link = document.querySelector(".menu a")
            link.forEach(element =>{
                element.style.color = "#ffffff"
            })
        })
    })