import { useSignup } from "../hooks/useSignup";
import { useRef } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";

function Signup() {
  const displayName = useRef();
  const photoURL = useRef();
  const email = useRef();
  const password = useRef();
  const { signup } = useSignup();


  const handleSubmit = (e) => {
    e.preventDefault();
    signup(
      displayName.current.value,
      email.current.value,
      password.current.value,
      photoURL.current.value
    );
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-900">
      <h1 className="text-white text-3xl mb-3">Welcome!</h1>
      <p className="text-white text-base w-[333px] text-center mb-[30px]">
        Use these awesome forms to login or create new account in your project
        for free.
      </p>
      <div className="py-10 bg-slate-700 px-10 rounded-lg">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="items-center mb-5">
              <label className="mr-5 text-white" htmlFor="username">
                Name{" "}
              </label>
              <input
                ref={displayName}
                type="text"
                placeholder="Your full name"
                id="username"
                className="w-full max-w-xs py-[10px] px-[15px] rounded-2xl bg-transparent text-white border"
                required
              />
            </div>
            <div className="items-center mb-5">
              <label className="mr-5 text-white" htmlFor="username">
                Avatar{" "}
              </label>
              <input
                ref={photoURL}
                type="url"
                placeholder="Your avatar link"
                id="avatar"
                className="w-full text-white max-w-xs py-[10px] px-[15px] rounded-2xl bg-transparent border"
                required
              />
            </div>
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
              <button className="uppercase w-full text-white text-xs py-[10px] px-[15px] rounded-xl bg-indigo-600">Sign up</button>
            </div>
          </form>
          <div className="flex items-center justify-center">
            <span className="text-slate-400 mr-2">Already have an account?</span>
            <Link to='/login' className="text-white">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
