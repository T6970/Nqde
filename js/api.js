export const Nqde = {
  newCard (id) {
    if (!id) {
      throw new ReferenceError("No ID provided for new card")
    }
    const card = document.createElement('div')
    card.className = "card"
    card.id = id
    card.style.position = "absolute"
    card.style.left = "100px"
    card.style.top = "100px"
    card.style.width = "800px"
    card.style.height = "600px"
  },
  addContent (id, content) {
    if (!id) {
      throw new ReferenceError("No ID provided for new content")
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
 
  },
  deleteCard (id) {

  },
  moveCard (id, x, y) {

  },
  resizeCard (id, width, height) {

  }
}