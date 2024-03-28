import React, { useEffect } from "react";
import "./success.css";
import logo from "../Components/HomePage/Assests/logo.png";

import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Cookies from "js-cookie";
const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const amt = params.get("amt");
    const amount = Cookies.get("amt");
    if (amount) {
      window.fbq("track", "Purchase", { currency: "INR", value: amount });
      window.gtag("event", "conversion", {
        send_to: "AW-711435738/UBkMCNqpn_MCENrLntMC",
        value: amount,
        currency: "INR",
        transaction_id: "",
      });
    }
    if (amt) {
      Cookies.set("amt", amt, { expires: 2 / (24 * 60) });
      navigate("/letskillit");
    }
  }, [location.search, navigate]);
  return (
    <>
      <Helmet>
        <title>Tutedude</title>
      </Helmet>
      <div>
        <div className="text-center">
          <img className="img-responsive " src={logo} alt="Chania" />
        </div>

        <div className="text-center">
          <h2 className="payment">Payment Successful!</h2>
        </div>

        <div className="jumbotron text-center ">
          <h2
            className="display-3  text-white"
            style={{ fontFamily: "emoji", fontSize: "3.5rem" }}
          >
            Happy learning!
          </h2>
          <p className="lead text-white">
            Please practice along with your instructor, this is a major benefit
            of self paced courses. Wherever you face any doubt just ping to your
            mentor on the chat box mentioned on the course page. Also submit all
            your assignments and exercises to the mentor and we will provide you
            with a feedback. At the end of the course you can ask your mentor
            for the certificate. All the best for your learning experience.
          </p>
          <hr />

          <div className="lead">
            <div
              className="btn btn-primary btn-sm"
              onClick={() => navigate("/")}
            >
              Continue to homepage
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
