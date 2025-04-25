import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Jeedie/" element={<Home />} />
    </Routes>
  );
};
export default App;
