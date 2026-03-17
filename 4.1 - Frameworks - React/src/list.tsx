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
  //página actual:
  const [page, setPage] = React.useState(1);
  //tamaño de página:
  const [perPage] = React.useState(5);
  const hasNextPage = members.length === perPage;

  React.useEffect(() => {
    // if (!debouncedFilter || debouncedFilter.length < 3) return;

    const url = `https://api.github.com/orgs/${debouncedFilter}/members?page=${page}&per_page=${perPage}`;
    try {
      fetch(url)
        .then((response) => response.json()) //response es un objeto, lo parseamos a json
        .then((json) => setMembers(json)); //guardamos resultado en estado
    } catch (e) {
      console.log("Error loading members");
    }
  }, [debouncedFilter, page, perPage]);

  React.useEffect(() => {
    //Si el filtro cambia, volvemos a página 1
    setPage(1);
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
        <div className="pagination">
          <button
            className="pagination-button"
            //Calcula la nueva página usando el valor real más reciente:
            onClick={() => setPage((prevPage) => prevPage - 1)}
            disabled={page === 1}
          >
            Anterior
          </button>
          <span className="pagination-info">Página {page}</span>
          <button
            className="pagination-button"
            onClick={() => setPage((prevPage) => prevPage + 1)}
            // si no hay más resultados, se desactiva
            disabled={!hasNextPage}
          >
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};
