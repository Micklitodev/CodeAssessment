const { Ticket } = require("../models")
const db = require('./connection')


db.once('open', async () => {
    await Ticket.deleteMany(); 

    await Ticket.insertMany([
        {
            name: "Randy Marsh", 
            email: 'rmash225@gmail.com',
            description: "I am writing to report a critical bug that I encountered while attempting to create a new account on your platform. Unfortunately, the bug prevents users from successfully submitting the account creation form, hindering the onboarding process. Upon clicking the Submit button, the page refreshes, but the form does not submit. No error messages are displayed, and the user remains on the account creation page."
        },
        {
            name: "Mark Zuckerburgers", 
            email: 'superZuck464@gmail.com',
            description: "I am reaching out to report a bug related to the display of product prices in the shopping cart on your e-commerce platform. Upon reviewing the shopping cart, I noticed that the displayed total does not match the sum of the individual product prices. It seems that there is a miscalculation or discrepancy in the pricing calculation.  "
        },

    ]);

    process.exit(); 
})
