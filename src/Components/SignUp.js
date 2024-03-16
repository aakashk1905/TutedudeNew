import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import "./Mlogin.css";
import logo from "../Assests/logo.png";
import cross from "../Assests/cross.svg";
import phone from "../Assests/Phone.svg";
import Person from "../Assests/Person.svg";
import emailImg from "../Assests/email.svg";
import pass from "../Assests/pass.svg";

const SignUp = ({ setShowSign, setShowLogin, closeCross }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const onSignUp = (email, password, name, phone) => {
    console.log("onLogin email = ", email);

    fetch("https://api.tutedude.com/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name,
        phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success === "true" || data.success === true) {
          Cookies.set("user_email", email);
          Cookies.set("user_pass", password);
          Cookies.set("user_name", name);
          window.alert("Registration Successfull!!!");
          setShowSign(false);
        } else {
          window.alert("Email Already Registerd!!! Please Log In...");
          setShowSign(false);
          setShowLogin(true);
        }
      })
      .catch((err) => {
        console.log(err);
        window.alert("Something went wrong");
      });
  };
  const handlenumchange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 10) {
      setMobile(value);
    }
  };
  return (
    <div className="login-cont">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSignUp(email.trim(), password.trim(), name.trim(), mobile.trim());
        }}
        className="login-inner-cont"
      >
        <div className="l-logo-cont">
          <div>SignUp to</div>
          <img src={logo} alt="logo" />
          {closeCross !== false && (
            <div className="l-cross-cont" onClick={() => setShowSign(false)}>
              <img src={cross} alt="cross" />
            </div>
          )}
        </div>
        <div className="inp-conts">
          <div className="inp-cont">
            <img src={Person} className="inp-img" alt="Email" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="l-inp"
            />
          </div>
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
              placeholder="Password(min 6 letters)"
              className="l-inp"
            />
          </div>
          <div className="inp-cont">
            <img src={phone} className="inp-img" alt="Email" />
            <input
              type="tel"
              value={mobile}
              onChange={handlenumchange}
              placeholder="Phone Number"
              className="l-inp"
            />
          </div>
        </div>
        <button type="submit" className="l-btn">
          SignUp
        </button>
        <div className="l-new">
          Already have an Account?{" "}
          <b
            className="l-sign"
            onClick={() => {
              setShowSign(false);
              setShowLogin(true);
            }}
          >
            Login
          </b>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
