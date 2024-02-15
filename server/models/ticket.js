const mongoose = require('mongoose');
const { Schema } = mongoose;

const TicketSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    Description: { 
        type: String, 
        required: true, 
    },
    Status: {
        type: String, 
        default: "new"
    }
})

const Ticket = mongoose.model("Ticket", TicketSchema); 

module.exports = Ticket; 