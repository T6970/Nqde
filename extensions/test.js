import { Nqde } from "../src/api.js";

Nqde.newCard("demo")
Nqde.addContent("demo", '<h1>Nqde</h1>')
Nqde.resizeCard("demo", 400, 300)

const innerCard = document.createElement('div')
innerCard.style.height = "175px"
innerCard.classList = "nest card"
innerCard.innerHTML = "<p>This is an inner card.</p>"

Nqde.addContent("demo", innerCard.outerHTML)
Nqde.makeDraggable("demo")