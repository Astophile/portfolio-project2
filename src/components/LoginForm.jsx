import React from "react";

import { useEffect, useState } from "react";
import formLogo from "../assets/Olx-black.png";

function LoginForm() {
  const [loginForm, setLoginForm] = useState("");
  const [require, setRequire] = useState(false);

  const [lastForm, setLastForm] = useState("");
  const [lastRequire, setLastRequire] = useState(false);

  const [mailForm, setMailForm] = useState("");
  const [mailRequire, setMailRequire] = useState(false);

  useEffect(() => {
    console.log("");
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (loginForm === "") {
      setRequire(true);
    }
    if (lastForm === "") {
      setLastRequire(true);
    }
    if (mailForm === "") {
      setMailRequire(true);
    }
  };

  const inputHandler = (e) => {
    setLoginForm(e.target.value);

    if (e.target.value !== "") {
      setRequire(false);
    }
  };

  const passHandler = (e) => {
    setLastForm(e.target.value);

    if (e.target.value !== "") {
      setLastRequire(false);
    }
  };

  const mailHandler = (e) => {
    setMailForm(e.target.value);

    if (e.target.value !== "") {
      setMailRequire(false);
    }
  };

  return (
    <>
      <div class="container-fluid">
        <div class="card logincard">
          <form class="forms" onSubmit={onSubmitHandler}>
            <div className="formlogo">
              <img src={formLogo} />
            </div>
            <div class="title">
              <h5>WELCOME TO OLX</h5>
              <h6>The trusted community of buyers and sellers.</h6>
            </div>
            <div>
              <div>
                <input
                  class="usernameinput"
                  placeholder="Full Name"
                  value={loginForm}
                  onChange={(e) => {
                    inputHandler(e);
                  }}
                />
                {require && <span>*Require Field</span>}
              </div>
              <div>
                <input
                  class="passwordinput"
                  type="password"
                  placeholder="Password"
                  value={lastForm}
                  onChange={(e) => {
                    passHandler(e);
                  }}
                />
                {lastRequire && <span>Require Field</span>}
              </div>

              <div>
                <input
                  class="passwordinput"
                  placeholder="E-Mail"
                  type="mail"
                  value={mailForm}
                  onChange={(e) => {
                    mailHandler(e);
                  }}
                />
                {mailRequire && <span>Require Field</span>}
              </div>
            </div>

            <div>
              <span class="forgotbutton"> Forgot </span>
              <a class="linksection" href="$">
                Username/Password
              </a>
            </div>

            <div class="loginformbtn">
              <button class="buttonclass">Sign In</button>
            </div>

            <div class="bottom">
              <span>Don't have an account? </span>
              <br />
              <a class="sign-up">SIGN UP NOW!</a>
            </div>
            <p className="Privacy-Terms">
              By continuing, you are accepting{" "}
              <a class="terms">OLX Terms of use</a> and{" "}
              <a class="terms">Privacy Policy</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
