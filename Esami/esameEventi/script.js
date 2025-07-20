function caricaEventi(endpoint){
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
                const p = document.createElement("p")
                const button = document.createElement("button")
                div.classList.add("box")
                p.innerText = element.title
                button.innerText = "Partecipa"
                if(element.participated == true){
                    p.style.textDecoration = "line-through"
                    p.style.color = "grey"
                    button.style.textDecoration = "line-through"
                    button.style.color = "white"
                    button.style.backgroundColor = "grey"
                }

                button.addEventListener("click", () =>{
                    p.style.textDecoration = "line-through"
                    p.style.color = "grey"
                    button.style.textDecoration = "line-through"
                    button.style.color = "white"
                    button.style.backgroundColor = "grey"
                    button.disable = true

                    eventoPartecipato(`http://localhost:3000/events/participated/${id}`)
                })
                div.appendChild(p)
                div.appendChild(button)
                main.appendChild(div)

            });
        })
}

let filtroAttivo = false;

function filtro(endpoint) {
    const button = document.querySelector(".filtroButton");
    button.addEventListener("click", () => {
        filtroAttivo = !filtroAttivo;
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
                let eventiFiltrati;
                if (filtroAttivo) {
                    eventiFiltrati = data.dati.filter(e => new Date(e.date) > new Date("2023-10-22"));
                } else {
                    eventiFiltrati = data.dati;
                }
                eventiFiltrati.forEach(element => {
                const div = document.createElement("div");
                const p = document.createElement("p");
                const btn = document.createElement("button");
                div.classList.add("box");
                p.innerText = element.title;
                btn.innerText = "Partecipa";

                if (element.participated === true) {
                p.style.textDecoration = "line-through";
                p.style.color = "grey";
                btn.style.textDecoration = "line-through";
                btn.style.color = "white";
                btn.style.backgroundColor = "grey";
                }

                btn.addEventListener("click", () => {
                p.style.textDecoration = "line-through";
                p.style.color = "grey";
                btn.style.textDecoration = "line-through";
                btn.style.color = "white";
                btn.style.backgroundColor = "grey";
                btn.disabled = true;

                eventoPartecipato(`http://localhost:3000/events/participate/${element.id}`);
                });

                div.appendChild(p);
                div.appendChild(btn);
                main.appendChild(div);
            });
        })
    });
}

caricaEventi("http://localhost:3000/events")
filtro("http://localhost:3000/events");
