import React from "react";
import { Button, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div>
      <Button className="w-50 mx-auto d-block text-white" variant="danger">
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading... Please wait
      </Button>
    </div>
  );
};

export default Loading;
