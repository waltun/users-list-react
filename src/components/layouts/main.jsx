import React from 'react';
import AddUser from "../users/addUser";
import Modal from "./modal";
import Users from "../users/users";

function Main({setModal, users, modal, setUsers}) {
    return (
        <>
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

export default Main;