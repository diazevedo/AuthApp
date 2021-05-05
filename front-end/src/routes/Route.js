import React from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from "../components/Loading";
import Wrapper from "../components/Wrapper";
import { useAuthState } from "../Context/Auth";

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const { user, isPending } = useAuthState();

  if (isPending) Component = Loading;

  if (!user && isPrivate) return <Redirect to="/" />;

  if (user && !isPrivate) return <Redirect to="/profile" />;

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
