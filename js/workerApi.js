export const NqdeAPI = {
  createWindow (width, height, title, id) {
    postMessage(
      {
        type: 'createWindow',
        content:
        {
          width: width, 
          height: height, 
          title: title, 
          id: id
        }
      }
    )
  },
  deleteWindow (id) {
    postMessage(
      {
        type: 'deleteWindow',
        content: {
          id: id
        }
      }
    )
  }
}