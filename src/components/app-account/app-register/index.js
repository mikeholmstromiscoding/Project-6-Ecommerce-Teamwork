import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
//import ThanksForRegistring from "../../../views/ThanksForRegistring";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, login } from "../../../store/actions/user";
// import { useHistory } from "react-router-dom";

// import validator from 'validator'

import "../index.css";

export default function Register() {
  const dispatch = useDispatch();
  const registerErrorCode = useSelector((state) => state.user.loginStatusCode);

  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [u_name, set_u_name] = useState("");

  const [uNameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const emailRe = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

  useEffect(() => {
    if (registerErrorCode === 201)
      dispatch(
        login({
          email: email,
          password: password,
        })
      );
  }, [registerErrorCode, email, dispatch, password]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let unameError = "";
    let emailError = "";

    if (evt.target[0].value.length < 3) unameError = "Too short username!";

    if (!emailRe.test(evt.target[1].value)) emailError = "Invalid email!";

    if (emailError === "" && unameError === "") {
      const user = {
        userName: u_name,
        email: email,
        password: password,
      };
      await dispatch(register(user));

      // window.location = "/thanksforregistring";
    }
    setNameError(unameError);
    setEmailError(emailError);
  };

  const handleRegisterError = () => {
    if (emailError !== "")
      return <small className="invalid-login">Invalid email!</small>;
    if (registerErrorCode !== null && registerErrorCode === 409)
      return <small className="invalid-login">Email already exists!</small>;
  };

  const handleUsernameError = () => {
    if (uNameError !== "")
      return <small className="invalid-login">Too short username!</small>;
  };

  const validateUsername = (e) => {
    if (e.target.value.length < 3) setNameError("Too short username!");
    else setNameError("");
  };

  const validateEmail = (e) => {
    if (!emailRe.test(e.target.value)) setEmailError("Invalid email!");
    else setEmailError("");
  };

 

  return (
    <div className="col-12 col-lg-6 mt-4 mt-lg-0">
      <Form className="custom-form" onSubmit={handleSubmit}>
        <h3 className="text-size-24">REGISTER</h3>
        <p className="text-dark-grey-color font-size-14 my-3">
          Registering for this site allows you to access your order status and
          history. Just fill in the fields below, and we’ll get a new account
          set up for you in no time. We will only ask you for information
          necessary to make the purchase process faster and easier.
        </p>
        <div className="form-group">
          <label htmlFor="username" className="text-size-14 font-montserrat">
            Username<span className="text-theme-color">*</span>
          </label>
          <Input
            type="text"
            className="form-control custom-r-input"
            id="username"
            value={u_name}
            onChange={(e) => set_u_name(e.target.value)}
            onBlur={validateUsername}
          />
        </div>
        {handleUsernameError()}
        <div className="form-group">
          <label htmlFor="email" className="text-size-14 font-montserrat">
            Email adress<span className="text-theme-color">*</span>
          </label>
          <Input
            type="email"
            className="form-control custom-r-input"
            id="email"
            value={email}
            onChange={(e) => set_email(e.target.value)}
            onBlur={validateEmail}
          />
        </div>
        {handleRegisterError()}
        <div className="form-group">
          <label htmlFor="password" className="text-size-14 font-montserrat">
            Password <span className="text-theme-color">*</span>
          </label>
          <Input
            type="password"
            className="form-control custom-r-input"
            id="password"
            value={password}
            onChange={(e) => set_password(e.target.value)}
          />
        </div>
        <p className="mt-4">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our{" "}
          <span className="text-size-14 font-montserrat text-theme-color weight-bold">
            privacy policy.
          </span>
        </p>
        <button className="btn custom-theme-btn text-size-18 btn-p-t-c mt-4">
          REGISTER
        </button>
      </Form>
    </div>
  );
}
