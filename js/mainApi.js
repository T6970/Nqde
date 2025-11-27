onmessage = (e) => {
  switch(e.data.type) {
    case 'createWindow': {
      const eventData = e.data
      const window = document.createElement('div')
      window.classList.add('nest card')
      window.style.width = eventData.content.width + 'px'
      window.style.height = eventData.content.height + 'px'
      window.id = eventData.content.id

      const titleBar = document.createElement('div')
      titleBar.classList.add('title-bar')
      titleBar.innerText = eventData.content.title
      window.appendChild(titleBar)

      document.body.appendChild(window)
      break
    }
    case 'deleteWindow': {
      const window = document.getElementById(e.data.content.id)
      if (window) {
        document.body.removeChild(window)
      }
      break
    }
    default:
      console.warn('Unknown message type:', e.data.type)
  }
}