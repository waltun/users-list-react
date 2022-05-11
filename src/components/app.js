import React, { useState } from "react";

import Header from "./header";
import AddUser from "./addUser";
import Modal from "./modal";
import Users from "./users";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="max-w-3xl mx-auto font-IRANSans">
      <Header />

      <AddUser modal={setModal} />

      <Modal modal={modal} setModal={setModal} />

      <Users />
    </div>
  );
}

export default App;
