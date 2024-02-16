const { Ticket } = require("../models")

const resolvers = {
    Query: {
        getTickets: async () => {
            try {
                const tickets = await Ticket.find({ status: 'new' })
                return tickets;
            } catch (err) {
                console.log(err)
            }
        }
    },
    Mutation: {
        createTicket: async (parent, args, context) => {
            try {

                const newTicket = await Ticket.create(args)
                console.log(newTicket)
                return newTicket; 
                

            } catch (err) {
                console.log(err)
            }
        },
        updateTicketState: async (parent, args) => {
            try {
                const updateTicket = await Ticket.findByIdAndUpdate(args.id, args, {
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
