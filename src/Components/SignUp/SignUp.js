import React from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SignUp = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  if (user) {
    navigate("/home");
  }
  if (loading) {
    return <p className="text-white">Loading...</p>;
  }
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    console.log(email);
    const password = event.target.password.value;
    console.log(password);
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <div>
        <h1 className="text-info text-center">Use Credintials to Sign In</h1>
      </div>
      <div>
        <Form onSubmit={handleSignUp} className="w-50 mx-auto">
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

          <Button variant="outline-info" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
