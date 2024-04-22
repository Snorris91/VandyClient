import React from "react";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const existDialog = useRef();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((authInfo) => {
        if (authInfo.token) {
          localStorage.setItem("token", JSON.stringify(authInfo));
          navigate("/medications");
        } else {
          existDialog.current.showModal();
        }
      });
  };

  return (
    <main className="container--login text-center">
      <dialog className="dialog dialog--auth" ref={existDialog}>
        <div>User does not exist</div>
        <button
          className="button--close"
          onClick={(e) => existDialog.current.close()}
        >
          Close
        </button>
      </dialog>
      <div className="box flex flex-col text-center border-2 border-solid border-black m-6 w-96 bg-yellow-300">
        <section>
          <form
            className="form--login border-2 border-solid border-black"
            onSubmit={handleLogin}
          >
            <h1 className="text-4xl mt-7 mb-3 font-bold text-center">
              Vandy Medications
            </h1>
            <h2 className="text-xl mb-10 font-bold text-center">
              Please sign in
            </h2>
            <fieldset className="mb-4">
              <label htmlFor="inputusername"> UserName: </label>
              <input
                type="username"
                id="inputusername"
                value={username}
                onChange={(evt) => setUsername(evt.target.value)}
                className="form-control bg-slate-200"
                placeholder="username"
                required
                autoFocus
              />
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="inputPassword"> Password: </label>
              <input
                type="password"
                id="inputPassword"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                className="form-control  bg-slate-200"
                placeholder="Password"
              />
            </fieldset>
            <fieldset>
              <button
                type="submit"
                className="button p-3 rounded-md bg-blue-800 text-blue-100"
              >
                Sign in
              </button>
            </fieldset>
          </form>
        </section>
        <div className="loginLinks">
          <section className="link--register">
            <Link
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              to="/register"
            >
              Not a member yet?
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};
