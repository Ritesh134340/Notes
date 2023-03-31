import "../../../helper/config/db"

export default async function handler(req, res){

  res.status(200).json({ mesg:"inside user file" })
}