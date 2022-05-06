import React from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import Socials from "../Socials/Socials";

const SignUp = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);
  if (user) {
    console.log("user", user);
  }
  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (error || errorUpdate) {
    return (
      <div>
        <h1 className="text-danger text-center">Error: {error.message}</h1>
      </div>
    );
  }
  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });

    navigate("/home");
  };
  return (
    <div className="animate__animated animate__backInDown  w-50 mx-auto">
      <div>
        <h1 className="text-success text-center">Sign Up for free</h1>
      </div>
      <div>
        <Form onSubmit={handleSignUp} className="w-50 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-white">Name</Form.Label>
            <Form.Control
              required
              name="name"
              type="text"
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control
              required
              name="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label required className="text-white">
              Password
            </Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button className="mb-4" variant="outline-success" type="submit">
            Sign Up
          </Button>
          <p className="text-white">
            Already An User? Go Back to
            <button className="btn btn-outline-success ">
              <Link className="text-decoration-none text-white" to="/signIn">
                Sign In page
              </Link>
            </button>
          </p>
          <Socials></Socials>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
