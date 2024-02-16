import { CardContent, Card } from "../ui/card"
import { UserIcon, EmailIcon, ClockIcon } from '../ui/icons'

const TicketItem = (props) => {
    const {
        _id,
        name,
        email,
        status,
        description,
    } = props

    return (
        <a key={_id} href={`/ticket-detail/${_id}`}>
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <UserIcon className="w-6 h-6" />
                            <span className="font-semibold">{name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <EmailIcon className="w-6 h-6" />
                            <span className="text-sm">{email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <ClockIcon className="w-6 h-6" />
                            <span className="text-sm">{status}</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm text-gray-500 mt-2">
                            {description}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </a>
    )
}



export default TicketItem; 