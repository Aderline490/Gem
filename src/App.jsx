import {
  BrowserRouter,
  Route,
  // Redirect,
  Routes,
} from "react-router-dom";

import './App.css';

import Dashboard from "./components/Dashboard";
import Students from "./components/Students";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/students" exact element={<Students />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
