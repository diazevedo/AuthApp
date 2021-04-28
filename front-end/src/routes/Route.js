import React from "react";
import { Route, Redirect } from "react-router-dom";

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Component {...props} />
        </>
      )}
    />
  );
};

export default RouteWrapper;
