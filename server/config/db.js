import mongoose from 'mongoose'


if (!process.env.MONGO_URL) {
    throw new Error(
      'Error in MongoDb Uri !'
    )
  }

  let cached = global.mongoose

  if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
  }
  
  async function dbConnect () {
    if (cached.conn) {
      return cached.conn
    }
  
    if (!cached.promise) {
     
      cached.promise = mongoose.connect(process.env.MONGO_URL).then(mongoose => {
        return mongoose
      })
    }
    cached.conn = await cached.promise
    return cached.conn
  }
  
  export default dbConnect

