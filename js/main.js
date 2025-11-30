import { loadExtension } from "./load.js"
import { NqdeExtension } from "./mainapi.js"

const editor  = loadExtension("editor")
const toolbar = loadExtension("toolbar")

NqdeExtension(editor)
NqdeExtension(toolbar)