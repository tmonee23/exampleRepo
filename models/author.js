const mongoose = require("mongoose")
const Book = require("./book")
const authorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

// if trying to delete an author for whome there is a book in the DB
// if an error is passed into next parameter then the remove method doesnt run
// if next passes without error remove method runs
// if error dont remove
// if books are more than 0 dont remove
// otherwise proceed
authorsSchema.pre("remove", function(next){
    Book.find({author: this.id}, (err, book) =>{
        if(err){
            next(err)
        }else if(book.length > 0){
            next(new Error("This author has books still"))
        }else{
            next()
        }
    })
})

module.exports = mongoose.model("Author", authorsSchema)