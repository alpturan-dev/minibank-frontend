import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Accounts from "./pages/accounts";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ProviderLayout>
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
    </ProviderLayout>
  );
}

export default App;

const ProviderLayout = ({ children }) => {
  return (
    <>
      <Toaster position="bottom-right" />
      {children}
    </>
  );
};
