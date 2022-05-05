import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import Socials from "../Socials/Socials";
const SignIn = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const location = useLocation();
  const emailRef = useRef("");
  const passRef = useRef("");
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (error) {
    return (
      <div>
        <h1 className="text-danger text-center">Error: {error.message}</h1>
      </div>
    );
  }

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    console.log(email);
    await sendPasswordResetEmail(email);
    toast("Sent email");
  };
  return (
    <div className="animate__animated animate__backInUp border border-2 w-50 mx-auto">
      <div>
        <h1 className="text-info text-center">Use Credintials to Sign In</h1>
      </div>
      <div>
        <Form onSubmit={handleSignIn} className="w-50 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              name="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control
              ref={passRef}
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button className="mb-4" variant="outline-info" type="submit">
            Sign In
          </Button>
          <p className="text-white">
            Are You New Here? Go to{" "}
            <Link className="text-decoration-none text-info" to="/signUp">
              Sign Up page
            </Link>
          </p>
          <p>
            Forget Password?
            <button
              className="btn btn-link text-white pe-auto text-decoration-none"
              onClick={resetPassword}
            >
              Reset Password
            </button>
          </p>
          <Socials></Socials>
          <ToastContainer />
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
