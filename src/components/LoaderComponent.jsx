import React from "react";
import { Spinner } from "react-bootstrap";
import '../css/body.css'

const LoaderComponent = () => {
  return (
    <div className="loader">
      <Spinner animation="border" />
    </div>
  );
};

export default LoaderComponent;
