import React from "react";

const usersContext = React.createContext({
  users: {},
  modal: false,
  setUsers: () => {},
  setModal: () => {},
});

export default usersContext;
