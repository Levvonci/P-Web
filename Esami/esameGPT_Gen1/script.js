fetch("http://localhost:3000/books")
    .then(response => {
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        const main = document.querySelector(".Libreria");
        data.data.forEach(element => {
            const div = document.createElement("div");
            const p = document.createElement("p");
            const button = document.createElement("button");
            p.innerText = element.titolo;
            button.innerText = "Segna come letto";
            if(element.letti == true){
                p.className = "Letto";
                button.className = "LettiTrue";
            }else{
                button.className = "LettiFalse";
            }
            div.appendChild(p);
            div.appendChild(button);
            main.appendChild(div);

            const id = element.id;
            const lettiButton = div.querySelector("button");

            lettiButton.addEventListener("click", () => {
                fetch(`http://localhost:3000/books/letti/${id}`,{
                    method: "POST",
                })
                    .then(response => {
                        if(!response.ok){
                            throw new Error("Network response was not ok");
                        }
                        return response.json();
                    })
                    .then(() => {
                        p.className = "Letto";
                        button.className = "LettiTrue";
                    })
            })
        })
    })