import React, { useState } from "react";
import { apiRequest } from "../../api/config";
import { useUserStore } from "../../store/store";
import logo from "/minibank.png";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

const Signin = () => {
  let navigate = useNavigate();
  const { setUser } = useUserStore();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await apiRequest.post("/users/signin", {
        ...credentials,
      });
      setUser({
        id: response.data.id,
        token: response.data.token,
        username: response.data.username,
        email: response.data.email,
      });
      if (response.status === 200) {
        navigate("/");
        toast.success("Successfully signed in!");
      }
      console.log("response", response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3/4 md:max-w-3xl flex flex-col md:flex-row items-center justify-around gap-10"
      >
        <div className="flex items-center justify-center mb-4 flex-2">
          <img src={logo} alt="" className="h-72 w-72 rounded-sm" />
        </div>
        <div className="flex-2">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Login to Mini Bank
          </h2>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={credentials.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
              required
            />
          </div>

          <div className="flex flex-col items-start gap-2">
            <button
              type="submit"
              className="w-24 h-10 bg-primary hover:bg-primary-light text-white py-2 rounded-lg hover:bg-primary-400 transition duration-300 cursor-pointer"
            >
              Sign In
            </button>
            <div className="text-sm">
              Don't you have an account?{" "}
              <Link to="/signup">
                <button className="underline cursor-pointer hover:text-primary-light">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
