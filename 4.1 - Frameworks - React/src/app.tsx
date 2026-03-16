import { Detail } from "./detail";
import { Header } from "./header";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { MemberPage } from "./memberPage";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/list/lemoncode" />} />
          <Route path="/list/:filter" element={<MemberPage />} />
          <Route path="/detail/:id/:filter" element={<Detail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};
