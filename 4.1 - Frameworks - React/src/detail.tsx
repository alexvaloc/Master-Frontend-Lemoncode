import React from "react";
import { Link, useParams } from "react-router-dom";

interface MemberDetailEntity {
  id: string;
  login: string;
  name?: string;
  company?: string;
  bio?: string;
}

export const Detail: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity | undefined>(
    undefined,
  );
  const { id, filter } = useParams();

  React.useEffect(() => {
    try {
      fetch(`https://api.github.com/users/${id}`)
        .then((response) => response.json())
        .then((json) => setMember(json));
    } catch (e) {
      console.log("Network error loading member");
    }
  }, [id]);

  return (
    <>
      <h3>User ID: {id}</h3>
      <p>id: {member?.id}</p>
      <p>login: {member?.login}</p>
      <p>name: {member?.name}</p>
      <p>company: {member?.company}</p>
      <p>bio: {member?.bio}</p>
      <Link to={`/list/${filter ?? "lemoncode"}`}>Navigate back to List</Link>
    </>
  );
};
