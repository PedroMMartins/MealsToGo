import React, { createContext, useState, useEffect } from "react";
import * as firebase from "firebase";
import { loginRequest } from "./authentication.service";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email.children, password)
      .then((u) => {
        setUser(u);
      })
      .catch((e) => {
        setError(e);
      })
      .finnaly(() => setIsLoading(false));
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
