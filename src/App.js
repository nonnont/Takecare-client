// Router
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Components/Pages/Auth/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Login />
      </Router>
    </>
  );
}

export default App;
