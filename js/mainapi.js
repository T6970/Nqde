// API for main.js to interact with extensions

export const NqdeExtension = (ext) => {
  ext.onMessage = (e) => {
    const msg = e.data;
    switch (msg.type) {
      case 'newCard':
        card = document.createElement('div')
        card.className = `card`;
        card.style.position = 'absolute';
        card.style.width = '800px';
        card.style.height = '600px';
        card.style.left = '100px';
        card.style.top  = '100px';
        card.id = msg.content.id;
        document.body.appendChild(card);
        break;
      case 'addContent':
        document.getElementById(msg.content.id).innerHTML += msg.content.content;
        break;
      case 'delCard':
        document.getElementById(msg.content.id).remove();
        break;
      case 'moveCard':
        const moveCard = document.getElementById(msg.content.id);
        moveCard.style.left = msg.content.x + 'px';
        moveCard.style.top  = msg.content.y + 'px';
        break;
      case 'resizeCard':
        const resizeCard = document.getElementById(msg.content.id);
        resizeCard.style.width  = msg.content.width + 'px';
        resizeCard.style.height = msg.content.height + 'px';
        break;
    }
  }
}