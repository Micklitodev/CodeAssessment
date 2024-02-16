import { useQuery } from '@apollo/client';
import { QUERY_ALL_TICKETS } from '../lib/queries';
import TicketItem from '../components/ticket/ticketItem';
import { useState, useMemo } from 'react';

const AdminView = () => {
    const { loading, data } = useQuery(QUERY_ALL_TICKETS);
    const [currentQuery, setCurrentQuery] = useState('');

    const filteredTickets = useMemo(() => {
        if (!loading && data) {
            if (currentQuery === '') {
                return data.getTickets;
            }

            if (currentQuery === "new") {
                return data.getTickets.filter((item) => item.status === 'new');
            }
            if (currentQuery === "in progress") {
                return data.getTickets.filter((item) => item.status === 'in progress');
            }
            if (currentQuery === "resolved") {
                return data.getTickets.filter((item) => item.status === 'resolved');
            }
        }

        return [];
    }, [loading, data, currentQuery]);

    return (
        <>
            <div>
                <div className='flex justify-center'>
                    Ticket Status:
                    <br />
                    <select onChange={(e) => setCurrentQuery(e.target.value)} value={currentQuery || ""}>
                        <option value="">All</option>
                        <option value="new">New</option>
                        <option value="in progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                    </select>
                </div>

                {filteredTickets.map((item) => (
                    <TicketItem
                        key={item._id}
                        _id={item._id}
                        email={item.email}
                        name={item.name}
                        status={item.status}
                        description={item.description}
                    />
                ))}
            </div>
        </>
    );
};

export default AdminView;
