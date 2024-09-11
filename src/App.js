import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminLogin from "./Admin/AdminLogin";
import UserLogin from "./user/UserLogin";
import LoginPage from "./Loginpage";

function App() {
  return (
    <div>
      <Router>
        <LoginPage />
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/user" element={<UserLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
