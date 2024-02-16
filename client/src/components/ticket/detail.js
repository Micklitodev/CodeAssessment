
import Button from '../ui/button'
import Textarea from '../ui/textarea'
import { CardContent, Card } from '../ui/card'
import { UserIcon, ClockIcon } from '../ui/icons'
import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { GET_SPECIFIC_TICKET } from '../../lib/queries'
import { UPDATE_TICKET_STATE } from '../../lib/mutations'



const Detail = () => {

    const currentUrl = window.location.href;
    const parts = currentUrl.split('/');
    const ticketId = parts[parts.length - 1];

    const { loading, data, refetch } = useQuery(GET_SPECIFIC_TICKET, {
        variables: { id: ticketId },
    });

    const [selectedStatus, setSelectedStatus] = useState('');
    const [formData, setFormData] = useState({
        email: "",
        message: "",
    });

    const [updateTicketState] = useMutation(UPDATE_TICKET_STATE)


    const handleStatusChange = (event) => {
        const selected = event.target.value;
        setSelectedStatus(selected)
        try {
            const { data: data2 } = updateTicketState({
                variables: {
                    id: data.getSpecificTicket._id,
                    status: selected

                }
            })
        } catch (err) {
            console.log(err)
        } finally {
            refetch()
        }

    };

    const handleChange = (
        event
    ) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Would normally send email to ${data.getSpecificTicket.email} with body: '${formData.message}'`)
    }


    return (
        <>
            {!loading ? (<div className='mt-10'>
                <Card>
                    <div>
                        <h1>Ticket #: {data.getSpecificTicket._id}</h1>
                        <br />
                    </div>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-1.5">
                            <div className="flex items-center gap-2 text-sm">
                                <UserIcon className="h-4 w-4" />
                                <span className="font-semibold">{data.getSpecificTicket.name}</span>

                                <span className="text-gray-500 dark:text-gray-400">({data.getSpecificTicket.email})</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <ClockIcon className="h-4 w-4" />
                                <span className="font-semibold">Status :</span>
                                <select
                                    onChange={handleStatusChange}
                                    value={selectedStatus || data.getSpecificTicket.status}
                                    key={selectedStatus}
                                >
                                    {['new', 'in progress', 'resolved'].map(statusOption => (
                                        <option
                                            key={statusOption}
                                            value={statusOption}
                                        >
                                            {statusOption}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>
                        <hr />

                        <div>
                            <h2 className='font-semibold mt-10'> Description </h2>

                            <div className="grid gap-2">
                                <div className="text-sm text-gray-600 ">
                                    {data.getSpecificTicket.description}
                                </div>
                            </div>
                        </div>


                        <div className="grid gap-2 mt-10">
                            <div className="font-semibold">Reply to Ticket</div>
                            <div className="prose prose-sm max-w-none">
                                <form>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        onChange={handleChange}
                                        placeholder="Enter your message"
                                        className="w-full p-2 rounded min-h-[200px]"
                                        value={formData.message}
                                    />
                                    <div className="flex justify-end gap-2 mt-2">
                                        <Button onClick={handleSubmit}>Submit</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>) : null}

        </>)
}

export default Detail; 