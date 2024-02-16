import { useQuery } from '@apollo/client';
import { QUERY_ALL_TICKETS } from '../lib/queries';

const AdminView = () => {
    const { loading, data } = useQuery(QUERY_ALL_TICKETS);

    if (!loading && data) {
        console.log(data.getTickets);
    }

    return (
        <>
            <div>
                Tickets
                <br />
                {data?.getTickets.map((item) => (
                    <div className='border' key={item._id}>
                        <h2> TN: {item._id} </h2>
                        <h3> STATUS: {item.status}</h3>
                        <p> EMAIL: {item.email} </p>
                        <p> DESC: {item.description} </p>
                        <br />
                    </div>
                ))}
            </div>
        </>
    );
};

export default AdminView;
