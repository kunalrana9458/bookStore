import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    book_id:Number,
    name:String,
    category:String,
    image:String,
    title:String
})

const Book = mongoose.model("Book",bookSchema);

export default Book;