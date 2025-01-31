import { useAuth0 } from "@auth0/auth0-react";
import { FaGoogle } from "react-icons/fa";

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Welcome Back!
        </h2>
        <form action="#" method="POST"> 
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button className="w-full px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50">
          <FaGoogle />
          Login with Google
        </button>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don&apos;t have an account?
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>

      <button onClick={() =>{ loginWithRedirect()}}>Log In</button>
    </>
  );
}
export default Login;
