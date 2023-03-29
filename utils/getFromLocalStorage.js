

const getFromLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    const data=JSON.parse(localStorage.getItem(key))
    return data
  }
 return null
}

export default getFromLocalStorage