const mongoose = require('mongoose');
const { Schema } = mongoose;

const TicketSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "new"
    }
})

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket; 