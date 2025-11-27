const editor = document.getElementById('editor')
import "./mainApi.js"

const extensions = []
const main = async () => {
  try {
    const load = await fetch('../extlist.txt')
    const extensionNames = (await load.text()).split('\n').filter(name => name.trim() !== '')
    
    for (let i = 0; i < extensionNames.length; i++) {
      const extension = new Worker(`../extensions/${extensionNames[i]}.js`)

      extensions.push(extension)
    }

    editor.addEventListener('keydown', (e) => {
      extensions.forEach(extension => {
        extension.postMessage({type: 'keypress', key: e.key})
      })
    })
  } catch (e) {
    console.error(e)
  }
}
main()