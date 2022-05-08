import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./SignIn.css";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import Socials from "../Socials/Socials";
import axios from "axios";
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

  const handleSignIn = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("http://localhost:5000/login", { email });
    localStorage.setItem("accessToken", data.accessToken);
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter an email first");
    }
  };
  return (
    <div className="signIn-form animate__animated animate__backInUp  w-50 mx-auto">
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
              required
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
          <p className="text-white">
            Forget Password?
            <button
              className="btn btn-link mb-2 text-danger pe-auto text-decoration-none"
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
