function caricaLista(endpoint){
    fetch(endpoint)
        .then(response =>{
            if(!response.ok){
                throw new Error("Errore nella fetch")
            }
            return response.json()
        })
        .then(data =>{
            const main = document.querySelector("main")
            main.innerHTML = ""
            data.dati.forEach(element => {
                const div = document.createElement("div")
                div.classList.add("box")
                const p = document.createElement("p")
                const bnt = document.createElement("button")
                p.innerText = element.task
                bnt.innerText = "Completa"
                if(element.done == true){
                    p.style.textDecoration = "line-through"
                    p.style.color = "grey"
                    bnt.style.textDecoration = "line-through"
                    bnt.style.backgroundColor = "grey"
                    bnt.disable = true
                }
                bnt.addEventListener("click", () =>{
                    p.style.textDecoration = "line-through"
                    p.style.color = "grey"
                    bnt.style.textDecoration = "line-through"
                    bnt.style.backgroundColor = "grey"
                    bnt.disable = true
                })

                div.appendChild(p)
                div.appendChild(bnt)
                main.appendChild(div)
            });
            const fare = document.querySelector(".tutti")
            fare.addEventListener("click", () =>{
                caricaLista(endpoint)
            })
        })
}

function daFare(endpoint){
    fetch(endpoint)
        .then(response =>{
            if(!response.ok){
                throw new Error("Errore nella fetch")
            }
            return response.json()
        })
        .then(data =>{
            const main = document.querySelector("main")
            main.innerHTML = ""
            data.dati.forEach(element => {
                const div = document.createElement("div")
                div.classList.add("box")
                const p = document.createElement("p")
                const bnt = document.createElement("button")
                p.innerText = element.task
                bnt.innerText = "Completa"
                
                bnt.addEventListener("click", () =>{
                    p.style.textDecoration = "line-through"
                    p.style.color = "grey"
                    bnt.style.textDecoration = "line-through"
                    bnt.style.backgroundColor = "grey"
                    bnt.disable = true
                })

                div.appendChild(p)
                div.appendChild(bnt)
                main.appendChild(div)
            })
            const dafare = document.querySelector(".da-fare")
            dafare.addEventListener("click", () =>{
                daFare(endpoint)
            })
        })
}

function switchtheme(){
    const chiaro = document.querySelector(".light")
    const scuro = document.querySelector(".dark")
    const body = document.querySelector("body")
    const header = document.querySelector("header")
    const footer = document.querySelector("footer")
    const div = document.querySelectorAll(".box")
    chiaro.addEventListener("click", () =>{
        body.style.backgroundColor = "#fafafa"
        body.style.color = "#222222"
        header.style.backgroundColor = "#ccc"
        footer.style.backgroundColor = "#ccc"
        div.forEach(element =>{
            element.style.backgroundColor = "#fff"
            element.style.borderColor = "#999999"
        })
    })
    scuro.addEventListener("click", () =>{
        body.style.backgroundColor = "#1e1e1e"
        body.style.color = "#e0e0e0"
        header.style.backgroundColor = "#111"
        footer.style.backgroundColor = "#111"
        div.forEach(element =>{
            element.style.backgroundColor = "#333"
            element.style.borderColor = "#555"
        })
    })
}

switchtheme()
daFare("http://localhost:3000/tasks-pending")
caricaLista("http://localhost:3000/tasks")
