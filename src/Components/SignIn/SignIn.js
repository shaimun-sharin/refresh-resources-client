import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import Socials from "../Socials/Socials";
const SignIn = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
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
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
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
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control
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
          <Socials></Socials>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
