import "./App.css";
import MemberCard from "./MemberCard";

const App = () => {
  const members = [
    {
      name: "Famara Mae Niere",
      course: "BSIT",
      status: "Active",
      email: "202492549@s.ubaguio.edu",
      phone: "09761492051",
      activities: ["Orientation", "Club Meeting"]
    },
    {
      name: "Romeo Jero Salay",
      course: "ACT",
      status: "Active",
      email: "20198552@s.ubaguio.edu",
      phone: "09763492054",
      activities: ["Fundraiser", "Designer"]
    },
    {
      name: "Remalyn Viloria",
      course: "BSCS",
      status: "Deactive",
      email: "20246004@s.ubaguio.edu",
      phone: "0976762904",
      activities: ["Sing", "Dance" ]
    }
  ];

  return (
    <>
    <div className="Title">
    <h1>University Club Member Dashboard</h1>
    </div>

      <section className="Section">
        <h2>List of Students</h2>
        {members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            course={member.course}
            status={member.status}
            email={member.email}
            phone={member.phone}
            activities={member.activities}
          />
        ))}
      </section>
    </>
  );
};

export default App;