import { Nqde } from "../js/api.js";

Nqde.newCard("demo")
Nqde.addContent("demo", '<h1>Nqde</h1>')
Nqde.resizeCard("demo", 400, 300)
Nqde.moveCard("demo", 200, 150)

const innerCard = document.createElement('div')
innerCard.style.height = "175px"
innerCard.classList = "nest card"
innerCard.innerHTML = "<p>This is an inner card.</p>"

Nqde.addContent("demo", innerCard.outerHTML)