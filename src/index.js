/**
 * API for Nqde extensions
 */
export const Nqde = {

  // Section make new thing

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
   * @param {string} content Content to add into the card.
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
   * @param {string} content New content of the card.
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






  // Section destroy thing

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





  // Section edit thing

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
  },

  maxWidthCard (id) {
    if (!id) {
      throw new ReferenceError("No ID provided")
    }
    const card = document.getElementById(id)
    if (!card) {
      throw new ReferenceError(`No card found with ID: ${id}`)
    }
    card.style.width = window.innerWidth - 20 + "px"
  },

  maxHeightCard (id) {
    if (!id) {
      throw new ReferenceError("No ID provided")
    }
    const card = document.getElementById(id)
    if (!card) {
      throw new ReferenceError(`No card found with ID: ${id}`)
    }
    card.style.height = window.innerHeight - 20 + "px"
  },

  maximizeCard (id) {
    this.maxWidthCard(id)
    this.maxHeightCard(id)
  },

  // Section modifier of thing

  /**
   * Makes a card draggable with the mouse.
   * @param {string} id ID of the card.
   */
  makeDraggable (id) {
    const card = document.getElementById(id)
    card.isDown = false
    card.originX = card.style.left
    card.originY = card.style.top
    if (!id) {
      throw new ReferenceError("No ID provided")
    }
    if (!card) {
      throw new ReferenceError(`No card found with ID: ${id}`)
    }
    card.addEventListener('mousedown', (e) => {
      console.log(`Dragging ${id}`)
      card.isDown = true
      card.style.cursor = "grabbing"
      card.originX = card.style.left
      card.originY = card.style.top
    })

    document.addEventListener("mouseup", () => {
      card.isDown = false
      card.style.cursor = "grab"
    })
    
    document.addEventListener("mousemove", (e) => {
      if (!card.isDown) return
    
      const x = e.clientX - card.originX
      const y = e.clientY - card.originY
    
      card.style.left = x + "px"
      card.style.top = y + "px"
    })
  }
}