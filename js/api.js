export const NqdeAPI = {
  newCard (id) {
    postMessage(
      { 
        type: 'newCard',
        content: { id: id }
      }
    )
  },
  addContent (id, content) {
    postMessage(
      { 
        type: 'addContent',
        content: { id: id, content: content }
      }
    )
  }
}