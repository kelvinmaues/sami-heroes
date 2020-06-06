import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "reactstrap";

const ErrorAlert = () => {
  const errorMsg = useSelector((state) => state.request.errMsg);
  if (!errorMsg) {
    return null;
  }
  return <Alert color="danger">{errorMsg}</Alert>;
};

export default ErrorAlert;
