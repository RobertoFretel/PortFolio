const arrow = document.querySelector("a.icon")
const continuo = document.querySelector("div#continuo")
const body = document.body
const summary = document.querySelector("summary")

arrow.addEventListener("click", (e) => {
    e.preventDefault()

    switch(arrow.classList[1]){
        case "off":
            arrow.innerHTML = "expand_less"
            arrow.classList.replace("off", "on")
            window.scrollTo({
                top: continuo.offsetTop
            })
        break;
        
        case "on":
            arrow.innerHTML = "expand_more"
            arrow.classList.replace("on", "off")
            window.scrollTo({
                top: body.offsetTop
            })
        break;
    }

})

if(window.innerWidth > 600) {
    summary.addEventListener("click", (e) => {
        e.preventDefault()
    })
}