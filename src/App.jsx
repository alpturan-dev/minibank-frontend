import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Accounts from "./pages/accounts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route element={<AuthLayout />}> */}
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        {/* </Route> */}

        <Route path="accounts" element={<Accounts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
