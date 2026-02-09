import "./App.css";

import ActivitiesList from "./MemberProps"; 

type MembersPropsType = {
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
}: MembersPropsType) => {
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

            <ActivitiesList activities={activities} />
            <hr/>
        </div>
    );
};

export default MemberCard;
