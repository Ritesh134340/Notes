import axios from "axios"

export default async function getNotes(){
    const response=await axios.get(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/notes/get`, {
        withCredentials: true
      })
    const notes= response.data.notes;
    return notes
}
