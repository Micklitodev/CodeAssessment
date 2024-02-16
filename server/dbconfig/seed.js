const { Ticket } = require("../models")
const db = require('./connection')


db.once('open', async () => {
    await Ticket.deleteMany(); 

    await Ticket.insertMany([
        {
            name: "Elon Money", 
            email: 'mrmoney25@gmail.com',
            description: "This stuff aint working.... "
        },
        {
            name: "Mark Zuckerburgers", 
            email: 'supernerd464@gmail.com',
            description: " This program isnt accurately working.  "
        },

    ]);

    process.exit(); 
})
