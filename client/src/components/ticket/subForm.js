
import Button from '../ui/button'
import Textarea from '../ui/textarea'
import Input from '../ui/input'
import { CardContent, Card } from '../ui/card'
import React, { useState } from 'react';

import { useMutation } from '@apollo/client'
import { CREATE_TICKET } from '../../lib/mutations'



const SubForm = () => {
    const [createTicket] = useMutation(CREATE_TICKET)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        description: "",
    });

    const handleChange = (
        event
    ) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(formData)
            const { data } = await createTicket({
                variables: { ...formData }
            })

            if (!data) {
                throw new Error("500: Please Try Again.")
            }

        } catch (err) {
            console.error(err);
        } finally {
            setFormData({
                email: "",
                name: "",
                description: "",
            });
            // window.location.assign('/')
        }
    };


    return (
        <>
            <div className="flex items-center justify-center h-full">
                <Card>
                    <CardContent>
                        <h2 className="text-3xl mb-6 font-bold text-zinc-700 tracking-tighter text-center sm:text-4xl">
                            Submit a Ticket
                        </h2>
                        <p className="text-gray-500 mb-4 text-center">
                            Fill out the form below and we will get back to you as soon as
                            possible with a resolution.
                        </p>
                        <form>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Input
                                        id="name"
                                        name="name"
                                        type="name"
                                        placeholder="Enter your full name"
                                        onChange={handleChange}
                                        value={formData.name}
                                        className="w-full p-2 rounded"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        onChange={handleChange}
                                        className="w-full p-2 rounded"
                                        value={formData.email}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Textarea
                                        id="description"
                                        name="description"
                                        onChange={handleChange}
                                        placeholder="Enter a detailed message regarding your issue."
                                        className="w-full p-2 rounded min-h-[200px]"
                                        value={formData.description}
                                    />
                                </div>

                                <Button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="w-full p-2 bg-black text-white"
                                    ariaLabel='send message'
                                >
                                    Send message
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>

        </>
    )
}


export default SubForm; 
