import "./App.css"

type MembersProps = {
  items: string[];
};

const MembersProps = ({ items }: MembersProps) => {
  return (
    <ul>
      {items.map((activity, index) => (
        <li key={index}>{activity}</li>
      ))}
    </ul>
  );
};

export default MembersProps;