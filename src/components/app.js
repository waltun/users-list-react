import React, { useState } from "react";

import Header from "./header";
import AddUser from "./addUser";
import Modal from "./modal";
import Users from "./users";

function App() {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto font-IRANSans">
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
          edit={edit}
          setEdit={setEdit}
        />
      </div>
    </>
  );
}

export default App;
