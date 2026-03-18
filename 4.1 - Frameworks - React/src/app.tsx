import { Header } from "./header";
import { AppRouter, switchRoutes } from "./router";

export const App: React.FC = () => {
  return (
    <>
      <Header></Header>
      <AppRouter />
    </>
  );
};
