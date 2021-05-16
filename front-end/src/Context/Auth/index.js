import React from "react";
import axios from "axios";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [state, setState] = React.useState({
    status: "pending",
    error: null,
    user: null,
  });

  React.useEffect(() => {
    const login = async () => {
      try {
        const { data } = await axios.get("http://localhost:3333/", {
          withCredentials: true,
        });

        setState({ status: "success", error: null, user: data.user });
      } catch (error) {
        setState({ status: "error", error, user: null });
      }
    };

    login();
  }, []);

  return (
    <AuthContext.Provider value={{ state, update: setState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthState = () => {
  const state = React.useContext(AuthContext);

  const isPending = state.status === "pending";
  const isError = state.status === "error";
  const isSuccess = state.status === "success";
  const isAuthenticated = state.user && isSuccess;

  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  };
};
