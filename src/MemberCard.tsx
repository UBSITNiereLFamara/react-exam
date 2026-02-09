import "./App.css";

import MemberProps from "./MemberProps"; 

type MembersProps= {
    name: string;
    course: string;
    status: string;
    email: string;
    phone: string;
    activities: string[];
};

const MemberCard = ({
    name,
    course,
    status,
    email,
    phone,
    activities,
}: MembersProps) => {
    return (
        <div className="member-card">
            <h2>{name}</h2>
            <hr/>
            <p><strong>Course: </strong> {course}</p>
            <p><strong>Status: </strong> {status}</p>
            <p><strong>Email: </strong> {email}</p>
            <p><strong>Phone #: </strong> {phone}</p>
            <hr/>
            <h3>Activities:</h3>

            <MemberProps items={activities} />
            <hr/>
        </div>
    );
};

export default MemberCard;
