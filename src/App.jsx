import {
  BrowserRouter,
  Route,
  // Redirect,
  Routes,
} from "react-router-dom";

import './App.css';

import Dashboard from "./store/components/Dashboard";
import Students from "./store/components/Students";

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
