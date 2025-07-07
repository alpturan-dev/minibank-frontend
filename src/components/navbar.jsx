import { User, LogOut } from "lucide-react";
import logo from "/minibank.png";
import { Link, useNavigate } from "react-router";
import { useUserStore } from "../store/store";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, clearUser } = useUserStore();

  const handleLogout = () => {
    clearUser();
    navigate("/signin");
    toast("Logged out!");
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center justify-center flex-2">
                <img
                  src={logo}
                  alt=""
                  className="h-16 w-16 drop-shadow-2xl rounded-xs"
                />
              </div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/accounts"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Accounts
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <User />
                  <span className="font-semibold">{user.username}</span>
                </div>
                <Link to="/signin" onClick={handleLogout}>
                  <button className="bg-primary text-white py-2 px-2 hover:opacity-80 transition-colors cursor-pointer flex gap-1 font-semibold rounded-sm">
                    Logout
                    <LogOut />
                  </button>
                </Link>
              </div>
            ) : (
              <Link to="/signin">
                <button className="text-gray-700 hover:text-primary transition-colors cursor-pointer">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
