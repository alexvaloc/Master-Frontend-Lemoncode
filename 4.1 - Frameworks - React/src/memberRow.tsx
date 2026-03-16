import React from "react";
import { Link } from "react-router-dom";

export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

interface Props {
  member: MemberEntity;
  filter?: string;
}

export const MemberRow: React.FC<Props> = ({ member, filter }) => {
  return (
    <div className="member-row">
      <img src={member.avatar_url} alt={member.login} />
      <span>{member.id}</span>
      <Link to={`/detail/${member.login}/${filter}`}>{member.login}</Link>
    </div>
  );
};
