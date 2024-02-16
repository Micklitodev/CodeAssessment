const { Ticket } = require("../models")

const resolvers = {
    Query: {
        getTickets: async () => {
            try {
                const tickets = await Ticket.find()
                return tickets;
            } catch (err) {
                console.log(err)
            }
        },
        getSpecificTicket: async (parent, args, context) => {
            try {
                const specificTicket = await Ticket.findOne({ _id: args._id })
                return specificTicket;
            } catch (err) {
                console.log(err)
            }
        }
    },
    Mutation: {
        createTicket: async (parent, args, context) => {
            try {

                const newTicket = await Ticket.create(args)
                return newTicket;


            } catch (err) {
                console.log(err)
            }
        },
        updateTicketState: async (parent, args) => {
            try {
                const updateTicket = await Ticket.findByIdAndUpdate(args._id, { status: args.status }, {
                    new: true,
                });
                return updateTicket;
            } catch (err) {
                console.log(err)
            }
        },
    },
};
module.exports = resolvers; 
