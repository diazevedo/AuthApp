import React from "react";
import { Route, Redirect } from "react-router-dom";
import Wrapper from "../components/Wrapper";

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Wrapper>
          <Component {...props} />
        </Wrapper>
      )}
    />
  );
};

export default RouteWrapper;
