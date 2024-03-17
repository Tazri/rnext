import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import Register from "./pages/Register";
import Reset from "./pages/Reset";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} exact />
          </Route>
          <Route path="/reset" element={<Reset />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}
