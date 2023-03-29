

const saveToLocalStorage = (key,data) => {
    if (typeof window !== 'undefined') {
    localStorage.setItem(key,JSON.stringify(data))
    }
  
}

export default saveToLocalStorage