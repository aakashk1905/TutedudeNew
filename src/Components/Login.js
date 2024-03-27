import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import "./Mlogin.css";
import { GoogleLogin } from "@react-oauth/google";
import logo from "../Assests/logo.png";
import cross from "../Assests/cross.svg";
import emailImg from "../Assests/email.svg";
import pass from "../Assests/pass.svg";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = ({
  setShowLogin,
  setShowSign,
  closeCross,
  setBought,
  slug,
  redirect,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onLogin = (email, password) => {
    console.log("onLogin email = ", email);
    console.log("redirect", redirect);
    fetch("https://api.tutedude.com/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === "true" || data.success === true) {
          Cookies.set("user_email", email);
          Cookies.set("user_pass", password);
          setShowSign(false);

          if (data.dashboard.courses) {
            var expirationDate = new Date();
            expirationDate.setTime(
              expirationDate.getTime() + 1 * 60 * 60 * 1000
            );
            Cookies.set("bought", JSON.stringify(data.dashboard.courses));
          }
          if (slug) {
            if (
              data.dashboard.courses &&
              data.dashboard.courses.includes(slug)
            ) {
              setBought(true);
              // var expirationDate = new Date();
              // expirationDate.setTime(
              //   expirationDate.getTime() + 1 * 60 * 60 * 1000
              // );
              // Cookies.set("bought", true, { expires: expirationDate });
            } else {
              navigate(redirect);
            }
          }
          Cookies.set("user_name", data.sName);
          setShowLogin(false);
          window.location.reload();
        } else {
          if (password === "googlesignin")
            window.alert(
              "No Account Found With this Google Account!!!! Please Sign Up First"
            );
          else window.alert("Invalid Email or Password");
        }
      })
      .catch((err) => {
        console.log(err);
        window.alert("Something went wrong");
      });
  };

  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div className="login-cont">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin(email.trim(), password.trim());
        }}
        className="login-inner-cont"
      >
        <div className="l-logo-cont">
          <div>Login to</div>
          <img src={logo} alt="logo" />
          {closeCross !== false && (
            <div className="l-cross-cont" onClick={() => setShowLogin(false)}>
              <img src={cross} alt="cross" />
            </div>
          )}
        </div>

        <GoogleLogin
          className="googlesign"
          onSuccess={(credentialResponse) => {
            const decRes = jwtDecode(credentialResponse.credential);
            console.log(decRes.email);
            onLogin(decRes.email, "googlesignin");
          }}
          onError={errorMessage}
        />
        <div className="l-or">OR</div>
        <div className="inp-cont">
          <img src={emailImg} className="inp-img" alt="Email" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="l-inp"
          />
        </div>
        <div className="inp-cont">
          <img className="inp-img" src={pass} alt="Email" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="l-inp"
          />
        </div>
        <button type="submit" className="l-btn">
          Login
        </button>
        <div className="l-new">
          New User?{" "}
          <b
            className="l-sign"
            onClick={() => {
              setShowLogin(false);
              setShowSign(true);
            }}
          >
            Sign Up
          </b>
        </div>
        {/* </div> */}
      </form>
    </div>
  );
};

export default Login;
