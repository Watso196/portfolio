import * as React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  let errorMessage = "An unexpected error has occurred.";
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
