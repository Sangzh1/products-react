import { useLogin } from "../hooks/useLogin";
import { useRef } from "react";
import { Link } from "react-router-dom";

function Login() {
  const { login } = useLogin();

  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email.current.value, password.current.value);
  };

  return (
    <div className="h-screen bg-slate-900 grid place-items-center top-0">
      <div>
        <h1 className="text-white text-3xl font-bold mb-1">Nice to see you!</h1>
        <p className="text-white mb-9">Enter your email and password to sign in</p>
        <form onSubmit={handleSubmit}>
          <div className="items-center mb-5">
            <label className="mr-5 text-white" htmlFor="username">
              Email{" "}
            </label>
            <input
              ref={email}
              type="email"
              placeholder="Your email address"
              id="email"
              className="w-full text-white max-w-xs py-[10px] px-[15px] rounded-2xl bg-transparent border"
              required
            />
          </div>
          <div className="items-center mb-[30px]">
              <label className="mr-5 text-white" htmlFor="password">
                Password
              </label>
              <input
                ref={password}
                type="password"
                id="password"
                placeholder="Your password"
                className="w-full max-w-xs text-white py-[10px] px-[15px] rounded-2xl bg-transparent border"
                required
              />
            </div>
            <div className="form-control mb-5">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="toggle mr-3 toggle-primary" />
                <span className="label-text text-white">Remember me</span>
              </label>
            </div>
            <div className="mb-4">
              <button className="uppercase w-full text-white text-xs py-[10px] px-[15px] rounded-xl bg-indigo-600">Sign In</button>
            </div>
        </form>
        <div className="flex items-center justify-center">
            <span className="text-slate-400 mr-2">Don't have an account?</span>
            <Link to='/signup' className="text-white">Sign Up</Link>
          </div>
      </div>
    </div>
  );
}

export default Login;
