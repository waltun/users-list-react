import React, { useState , useEffect } from "react";

import Header from "./layouts/header";
import AddUser from "./users/addUser";
import Modal from "./layouts/modal";
import Users from "./users/users";
import Main from "./layouts/Main";

function App() {
  const [modal, setModal] = useState(false);
    const [users, setUsers] = useState(() => {
        return "usersList" in localStorage ? [...JSON.parse(localStorage.usersList)] : [];
    })

    useEffect(() => {
        localStorage.usersList = JSON.stringify(users)
    } , [users])

  return (
    <>
      <Header />

      <Main modal={modal} setModal={setModal} users={users} setUsers={setUsers}/>
    </>
  );
}

export default App;
