export const loadExtension = async (name) => {
  const extension = new Worker(`../extensions/${name}.js`, { type: 'module' });
  return extension;
}