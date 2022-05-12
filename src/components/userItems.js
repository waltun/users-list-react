import React from "react";
import DeleteUser from "./deleteUser";
import EditUser from "./editUser";
import EditUserForm from "./editUserForm";

function UserItems({ item, index, setUsers, users, edit, setEdit }) {
  return (
    <>
      {edit ? (
        <EditUserForm
          item={item}
          index={index}
          users={users}
          setUsers={setUsers}
        />
      ) : (
        <tr className="hover:bg-gray-100">
          <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
            <p className="text-sm">{index + 1}</p>
          </td>
          <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
            <p className="text-sm">{item.name}</p>
          </td>
          <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
            <p className="text-sm">{item.email}</p>
          </td>
          <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
            <p className="text-sm">{item.phone}</p>
          </td>
          <td
            className="px-4 py-2 whitespace-nowrap text-center text-gray-700"
            dir="ltr"
          >
            <p className="text-sm">{item.date}</p>
          </td>
          <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
            <p className="text-sm">
              {item.type === "normal" ? "کاربر معمولی" : "کاربر ادمین"}
            </p>
          </td>
          <td className="px-4 py-2 whitespace-nowrap space-x-2 space-x-reverse">
            <EditUser
              index={index}
              setUser={setUsers}
              user={users}
              setEdit={setEdit}
            />

            <DeleteUser index={index} setUser={setUsers} user={users} />
          </td>
        </tr>
      )}
    </>
  );
}

export default UserItems;
