import React, { useState } from "react";
import DeleteUser from "./deleteUser";
import EditUser from "./editUser";
import EditUserForm from "./editUserForm";

function UserItems({ item, setUsers }) {

  const [edit, setEdit] = useState(false)

  let tdTableClass = "px-4 py-2 whitespace-nowrap text-center text-gray-700 text-sm"
  return (
    <>
      {edit ? (
        <EditUserForm
          item={item} 
          setUsers={setUsers}
          setEdit={setEdit}
        />
      ) : (
        <tr className="hover:bg-gray-100">
          <td className={tdTableClass}> {item.name} </td>
          <td className={tdTableClass}> {item.email} </td>
          <td className={tdTableClass}> {item.phone} </td>
          <td className={tdTableClass}> {item.date} </td>
          <td className={tdTableClass}> {item.type === "normal" ? "کاربر معمولی" : "کاربر ادمین"} </td>
          <td className="px-4 py-2 whitespace-nowrap space-x-2 space-x-reverse">
            <EditUser setEdit={() => setEdit(true)} />
            <DeleteUser setUsers={setUsers} id={item.id} />
          </td>
        </tr>
      )}
    </>
  );
}

export default UserItems;
