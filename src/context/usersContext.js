import React from "react";

const usersContext = React.createContext({
  users: {},
  modal: false,
});

export default usersContext;
