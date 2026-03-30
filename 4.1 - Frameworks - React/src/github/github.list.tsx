import React from "react";
import { GithubRow } from "./github.row";
import { MemberEntity } from "./github.model";
import { useDebounce } from "use-debounce";
import { getMembers } from "./github.api";

interface Props {
  filter?: string;
}

export const GithubList: React.FC<Props> = ({ filter }) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [debouncedFilter] = useDebounce(filter, 500);
  //página actual:
  const [page, setPage] = React.useState(1);
  //tamaño de página:
  const [perPage] = React.useState(5);
  const hasNextPage = members.length === perPage;
  //useRef->Mantiene el valor sin hacer re-renders
  // Record ->objeto tipo diccionario: clave string → valor array
  const cacheRef = React.useRef<Record<string, MemberEntity[]>>({});

  React.useEffect(() => {
    /*Caché simple para evitar llamadas innecesarioas a Github */
    //Clave única de filtro:
    const queryKey = `${debouncedFilter}-${page}-${perPage}`;

    //Mirar si ya existe en cache, si existe -> no llamamos API
    if (cacheRef.current[queryKey]) {
      console.log("Usando cache");
      setMembers(cacheRef.current[queryKey]);
      return;
    }

    getMembers(debouncedFilter, page, perPage)
      .then((json) => {
        cacheRef.current[queryKey] = json;
        setMembers(json);
      })
      .catch(() => console.log("Error loading members"));
  }, [debouncedFilter, page, perPage]);

  React.useEffect(() => {
    //Si el filtro cambia, volvemos a página 1
    setPage(1);
    //Reseteamos cache
    cacheRef.current = {};
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
          <GithubRow key={member.id} member={member} filter={debouncedFilter} />
        ))}
        <div className="pagination">
          <button
            className="pagination-button"
            //Calcula la nueva página usando el valor real más reciente:
            onClick={() => setPage((prevPage) => prevPage - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="pagination-info">Page {page}</span>
          <button
            className="pagination-button"
            onClick={() => setPage((prevPage) => prevPage + 1)}
            // si no hay más resultados, se desactiva
            disabled={!hasNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
