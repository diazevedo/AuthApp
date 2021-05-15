import React from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from "../components/Loading";
import Wrapper from "../components/Wrapper";
import AuthenticatedLayout from "../components/AuthenticatedLayout";
import { useAuthState } from "../Context/Auth";

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const {
    state: { user, status },
  } = useAuthState();

  if (status === "pending") return <Loading />;

  if (!user && isPrivate) {
    return <Redirect to="/" />;
  }

  if (user && !isPrivate) {
    return <Redirect to="/profile" />;
  }

  const WrapperComp = user ? AuthenticatedLayout : Wrapper;

  return (
    <Route
      {...rest}
      render={(props) => (
        <WrapperComp>
          <Component {...props} />
        </WrapperComp>
      )}
    />
  );
};

export default RouteWrapper;
