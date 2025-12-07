/**
 * API for Nqde extensions
 */
export const Nqde = {

  /**
   * Creates a new card element; it will be positioned at (100, 100) with size 800x600.
   * @param {string} id ID for the card.
   * @example Nqde.newCard("myCard")
   */

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

  /**
   * Appends content into a card; existing content will not be removed.
   * @param {string} id ID of the card.
   * @param {HTMLElement} content Content to add into the card.
   */
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

  /**
   * Replaces the content of a card. Doesn't keep existing content.
   * @param {string} id ID of the card.
   * @param {HTMLElement} content New content of the card.
   */
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

  /**
   * Deletes a card.
   * @param {string} id ID of the card.
   */
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

  /**
   * Moves a card to a new position. Positions are in pixels.
   * @param {string} id ID of the card.
   * @param {number} x New x position in pixels.
   * @param {number} y New y position in pixels.
   */

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

  /**
   * Resizes a card. Sizes are in pixels.
   * @param {string} id ID of the card.
   * @param {number} width New width in pixels.
   * @param {number} height New height in pixels.
   */
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