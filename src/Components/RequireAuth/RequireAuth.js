import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/signIn" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return (
      <div>
        <h3 className="text-center text-danger">
          Please verify your email first and then try reload
        </h3>
        <button
          className="btn btn-primary d-block mx-auto"
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          Re-send Verification email
        </button>
        <ToastContainer />
      </div>
    );
  }

  return children;
};

export default RequireAuth;
