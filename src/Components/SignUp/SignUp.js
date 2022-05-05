import React from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  if (user) {
    navigate("/home");
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
  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="animate__animated animate__backInDown border border-2 w-50 mx-auto">
      <div>
        <h1 className="text-success text-center">Sign Up for free</h1>
      </div>
      <div>
        <Form onSubmit={handleSignUp} className="w-50 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-white">Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter name" />
          </Form.Group>
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

          <Button className="mb-4" variant="outline-success" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
