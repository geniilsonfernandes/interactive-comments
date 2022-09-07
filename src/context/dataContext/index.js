import React, { createContext, useContext } from "react";
import propTypes from "prop-types";

export const UserDataStorageContext = createContext();

export const UserDataStorageProvider = ({ children }) => {
  const localUser = "root";
  const localUid = 999;
  const islogin = true;

  return (
    <UserDataStorageContext.Provider value={{ localUser, localUid, islogin }}>
      {children}
    </UserDataStorageContext.Provider>
  );
};

UserDataStorageProvider.propTypes = {
  children: propTypes.node
};

export const useStorageContext = () => {
  return useContext(UserDataStorageContext);
};
