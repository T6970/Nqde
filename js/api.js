export const Nqde = {
  newCard (id) {
    if (!id) {
      throw new ReferenceError("No ID provided")
    }
    const card = document.createElement('div')
    card.className = "card"
    card.id = id
    card.style.position = "absolute"
    card.style.left = "100px"
    card.style.top = "100px"
    card.style.width = "800px"
    card.style.height = "600px"
    document.body.appendChild(card)
  },
  addContent (id, content) {
    if (!id) {
      throw new ReferenceError("No ID provided")
    }
    if (!content) {
      throw new ReferenceError("No content provided")
    }
    const card = document.getElementById(id)
    if (!card) {
      throw new ReferenceError(`No card found with ID: ${id}`)
    }
    card.innerHTML += content
  },
  setContent (id, content) {
    if (!id) {
      throw new ReferenceError("No ID provided")
    }
    if (!content) {
      throw new ReferenceError("No content provided")
    }
    const card = document.getElementById(id)
    if (!card) {
      throw new ReferenceError(`No card found with ID: ${id}`)
    }
    card.innerHTML = content
  },
  deleteCard (id) {
    if (!id) {
      throw new ReferenceError("No ID provided")
    }
    const card = document.getElementById(id)
    if (!card) {
      throw new ReferenceError(`No card found with ID: ${id}`)
    }
    card.remove()
  },
  moveCard (id, x, y) {
    if (!id) {
      throw new ReferenceError("No ID provided")
    }
    const card = document.getElementById(id)
    if (!card) {
      throw new ReferenceError(`No card found with ID: ${id}`)
    }
    card.style.left = x + "px"
    card.style.top = y + "px"
  },
  resizeCard (id, width, height) {
    if (!id) {
      throw new ReferenceError("No ID provided")
    }
    const card = document.getElementById(id)
    if (!card) {
      throw new ReferenceError(`No card found with ID: ${id}`)
    }
    card.style.width = width + "px"
    card.style.height = height + "px"
  }
}