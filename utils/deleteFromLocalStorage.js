

const deleteFromLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
    }
       
      }
  


export default deleteFromLocalStorage