import React from "react";
import { MemberRow } from "./memberRow";
import { MemberEntity } from "./memberRow";
import { useDebounce } from "use-debounce";

interface Props {
  filter?: string;
}

export const List: React.FC<Props> = ({ filter }) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [debouncedFilter] = useDebounce(filter, 500);

  React.useEffect(() => {
    if (!debouncedFilter || debouncedFilter.length < 3) return;

    try {
      fetch(`https://api.github.com/orgs/${debouncedFilter}/members`)
        .then((response) => response.json()) //response es un objeto, lo parseamos a json
        .then((json) => setMembers(json));
    } catch (e) {
      console.log("Error loading members");
    }
  }, [debouncedFilter]);

  return (
    <>
      <div className="list-container">
        <div className="list-header-row">
          <span>Avatar</span>
          <span>Id</span>
          <span>Name</span>
        </div>
        {members.map((member) => (
          <MemberRow key={member.id} member={member} filter={debouncedFilter} />
        ))}
      </div>
    </>
  );
};
