import React from "react";

// import Components
import AddUser from "../users/addUser";
import Modal from "./modal";
import Users from "../users/users";

function Main() {
  return (
    <div className="container mx-auto sm:px-20 px-6 font-IRANSans">
      {/* Button for open modal add user */}
      <AddUser />

      {/* open modal (user form) */}
      <Modal />

      {/* users table (show users) */}
      <Users />
    </div>
  );
}

export default Main;
