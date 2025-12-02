// API for main.js to interact with extensions

export const NqdeExtension = (ext) => {
  ext.onMessage = (e) => {
    const msg = e.data;

    switch (msg.type) {

      case 'newCard':
        console.log(`Creating ${msg.content.id}`)
        card = document.createElement('div')
        card.className = `card`
        card.style.position = 'absolute'
        card.style.width = '800px'
        card.style.height = '600px'
        card.style.left = '100px'
        card.style.top  = '100px'
        card.id = msg.content.id
        document.body.appendChild(card)
        break
        
      case 'addContent':
        console.log(`Adding ${msg.content.content} to ${msg.content.id}`)
        document.getElementById(msg.content.id).innerHTML += msg.content.content
        break

      case 'setContent':
        console.log(`Setting ${msg.content.id} to ${msg.content.content}`)
        document.getElementById(msg.content.id).innerHTML = msg.content.content
        break

      case 'delCard':
        console.log(`Deleting ${msg.content.id}`)
        document.getElementById(msg.content.id).remove()
        break

      case 'moveCard':
        console.log(`Moving ${msg.content.id} to (${msg.content.x}, ${msg.content.y})`)
        const moveCard = document.getElementById(msg.content.id)
        moveCard.style.left = msg.content.x + 'px'
        moveCard.style.top  = msg.content.y + 'px'
        break

      case 'resizeCard':
        console.log(`Resizing ${msg.content.id} to (${msg.content.width}, ${msg.content.height})`)
        const resizeCard = document.getElementById(msg.content.id)
        resizeCard.style.width  = msg.content.width + 'px'
        resizeCard.style.height = msg.content.height + 'px'
        break

    }
  }
}