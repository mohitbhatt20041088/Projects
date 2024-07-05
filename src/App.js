import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import  Home  from "./Pages/Home";
import  Offer  from "./Pages/Offer";
import  Profile  from "./Pages/Profile";
import  SignIn  from "./Pages/SignIn";
import  SignUp  from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
