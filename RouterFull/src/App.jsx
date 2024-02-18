import Instructions from "./Instructions";
import "./styles.scss";
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import Students from "./components/AllStudents";
import SingleStudent from "./components/SingleStudent";
import { DataContext } from "./context/DataContext";

import Home from "./components/Home";

const App = () => {
  const { id } = useParams();

  return (
    <div className="App">
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allStudents">Students</NavLink>
      </nav>
      <div className="Instructions">
        <div className="block">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allStudents" element={<Students />} />
            <Route path="/allStudents/:id" element={<SingleStudent />} />
          </Routes>
        </div>
        <Instructions />
      </div>
    </div>
  );
};

export default App;
