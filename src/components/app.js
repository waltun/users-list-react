import React, { useState , useEffect } from "react";

import Header from "./layouts/header";
import AddUser from "./users/addUser";
import Modal from "./layouts/modal";
import Users from "./users/users";

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
      <div className="container mx-auto sm:px-20 px-6 font-IRANSans">
        {/* Button for open modal add user */}
        <AddUser modal={setModal} />

        {/* open modal (user form) */}
        <Modal
          modal={modal}
          setModal={setModal}
          users={users}
          setUsers={setUsers}
        />

        {/* users table (show users) */}
        <Users
          users={users}
          setUsers={setUsers}
        />
      </div>
    </>
  );
}

export default App;
