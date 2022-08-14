const pulsanti = document.querySelector("#selettore")
const article = document.querySelector("article.side")

Array.from(pulsanti.children).forEach(li => {
    li.addEventListener("click",  () => {
        switch(li.innerHTML) {
            case "Presentazione":
                toggleDisplay("Presentazione")
            break;

            case "Programmazione":
                toggleDisplay("Programmazione")
            break;

            case "Competenze":
                toggleDisplay("Competenze")
            break;

            case "Progetti":
                toggleDisplay("Progetti")
            break;

            case "Crypto":
                toggleDisplay("Crypto")
            break;
        }

        let index = Array.from(pulsanti.children).indexOf(li)
        toggleArrow(index)
    })
})

const toggleDisplay = (element) => {
    Array.from(article.children).forEach(el => {

        if(el.classList.contains(element.toLowerCase()))
        {
            el.setAttribute("style", "display: block;")
        } else 
        {
            el.setAttribute("style", "display: none;")
        }
    })
}

const toggleArrow = (index) => {
    for (let numero = 0; numero <= (pulsanti.children.length - 1); numero++)
    {
        if (index == numero)
        {
            pulsanti.children[index].innerHTML = 
            `<span class="material-symbols-outlined">chevron_right</span>${pulsanti.children[index].innerHTML}`
        } else {
            pulsanti.children[numero].innerHTML = String(pulsanti.children[numero].innerHTML).replace(
                `<span class="material-symbols-outlined">chevron_right</span>`,
                ""
            )
        }
    }
}