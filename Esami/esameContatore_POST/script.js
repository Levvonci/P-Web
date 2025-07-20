function caricaContatore(endpoint){
    fetch(endpoint)
        .then(response =>{
            if(!response.ok){
                throw new Error("Errore nella fetch")
            }
            return response.json()
        })
        .then(data =>{
            const main = document.querySelector("main")
            const titolo = document.createElement("h2")
            titolo.innerText = "Contatore"
            const contatore = document.createElement("p")
            contatore.classList.add("contatore")
            contatore.innerText = data.counter
            contatore.style.fontSize = "50px"
            contatore.style.marginLeft = "40px"
            contatore.style.marginTop = "-10px"
        
            main.appendChild(titolo)
            main.appendChild(contatore)

        })
         
}

function btn(){
    const btnInc = document.querySelector(".increase")
    const btnDnc = document.querySelector(".decrease")

    btnInc.addEventListener("click", () =>{
        fetch("http://localhost:3000/increase", {method: "POST"})
        .then(res => res.json())
        .then(data => {
                aggiornaContatore(data.counter);
            })
    })

    btnDnc.addEventListener("click", () =>{
        fetch("http://localhost:3000/decrease", {method: "POST"})
        .then(res => res.json())
        .then(data => {
                aggiornaContatore(data.counter);
            })
    })
}

function aggiornaContatore(valore) {
    const contatore = document.querySelector(".contatore");
    if (contatore) {
        contatore.innerText = valore;
    }
}

function tema(endpoint){
    const btnTema = document.querySelector(".theme")
    btnTema.addEventListener("click", () =>{
        fetch(endpoint)
            .then(response =>{
                if(!response.ok){
                    throw new Error("Errore nella fetch colori")
                }
                return response.json()
            })
            .then(data =>{
                const header = document.querySelector("header")
                const footer = document.querySelector("footer")

                header.style.backgroundColor = data.background
                header.style.color = data.text

                footer.style.backgroundColor = data.background
                footer.style.color = data.text
            })
    })
}




caricaContatore("http://localhost:3000/counter")
tema("http://localhost:3000/colors")
btn()
