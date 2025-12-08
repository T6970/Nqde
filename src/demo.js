import { Nqde } from "./api.js";

Nqde.newCard("demo")
Nqde.addContent("demo", newElement("h1", "Nqde"))
Nqde.resizeCard("demo", 400, 300)

const innerCard = document.createElement('div')
innerCard.style.height = "175px"
innerCard.classList = "nest card"
innerCard.innerHTML = newElement("p", "This is an inner card.")

Nqde.addContent("demo", innerCard.outerHTML)
Nqde.makeDraggable("demo")

const newElement = (type, content) => {
  const el = document.createElement(type)
  el.innerHTML = content
  return el.outerHTML
}
