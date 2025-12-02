export const Nqde = {
  newCard (id) {
    postMessage(
      { 
        type: 'newCard',
        content: {
          id: id
        }
      }
    )
  },
  addContent (id, content) {
    postMessage(
      { 
        type: 'addContent',
        content: {
          id: id,
          content: content
        }
      }
    )
  },
  setContent (id, content) {
    postMessage(
      { 
        type: 'setContent',
        content: {
          id: id,
          content: content
        }
      }
    )
  },
  deleteCard (id) {
    postMessage(
      { 
        type: 'delCard',
        content: {
          id: id
        }
      }
    )
  },
  moveCard (id, x, y) {
    postMessage(
      { 
        type: 'moveCard',
        content: {
          id: id,
          x: x,
          y: y
        }
      }
    )
  },
  resizeCard (id, width, height) {
    postMessage(
      { 
        type: 'resizeCard',
        content: {
          id: id,
          width: width,
          height: height
        }
      }
    )
  }
}