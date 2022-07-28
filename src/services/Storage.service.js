const baseKey = '@assista/'

export const setStorageItem = (key, value) => {
  localStorage.setItem(`${baseKey}${key}`, value)
}

export const getStorageItem = (key) => {
  return localStorage.getItem(`${baseKey}${key}`)
}

export const removeStorageItem = (key) => {
  localStorage.removeItem(`${baseKey}${key}`)
}