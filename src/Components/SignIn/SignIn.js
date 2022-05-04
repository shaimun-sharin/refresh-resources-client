import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";

const SignIn = () => {
  const emailRef = useRef("");
  return (
    <div>
      <div>
        <h1 className="text-info text-center">Use Credintials to Sign In</h1>
      </div>
      <div>
        <Form className="w-50 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="outline-info" type="submit">
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
