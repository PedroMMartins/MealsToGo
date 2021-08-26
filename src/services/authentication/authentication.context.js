import React, { createContext, useState, useEffect } from "react";
import * as firebase from "firebase";
import { loginRequest } from "./authentication.service";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
      })
      .catch((e) => {
        setError(e.toString());
      })
      .finally(() => setIsLoading(false));
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error:Passwords do not match");
      return;
    }
    setIsLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        setUser(u);
      })
      .catch((e) => {
        setError(e.toString());
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <AuthenticationContext.Provider
      value={{
        //if there is a user object than is authenticated
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
