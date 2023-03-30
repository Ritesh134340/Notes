import axios from "axios"

export default async function getNotes(){
    const response=await axios.get(`${process.env.SERVER_ADDRESS}/api/notes/get`)
    const notes= response.data.notes;
    return notes
}
