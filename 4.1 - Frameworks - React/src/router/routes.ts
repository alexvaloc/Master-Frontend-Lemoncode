import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  memberPage: string;
  detail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  memberPage: "/list/:filter",
  detail: "/detail/:id/:filter",
};

//para crear el path de detail, creamos una nueva interfaz heredando de la anterior, pero omitiendo la propiedad detail:
interface Routes extends Omit<SwitchRoutes, "detail"> {
  detail: (id: string, filter: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  detail: (id: string, filter: string) =>
    generatePath(switchRoutes.detail, { id, filter }),
};

//`/detail/${id}/${filter}` aunque se puede hacer asi, generatePath interpreta carácteres extraños sin riesgo en la URL
