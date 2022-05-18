import React, { useContext, useState } from "react";

// import Components
import DeleteUser from "./deleteUser";
import EditUser from "./editUser";
import EditUserForm from "./editUserForm";

// import Contexts
import AuthContext from "../../context/authContext";

function UserItems({ item }) {
  const [edit, setEdit] = useState(false);
  const authContext = useContext(AuthContext);

  let tdTableClass =
    "px-4 py-2 whitespace-nowrap text-center text-gray-700 text-sm";
  return (
    <>
      {edit ? (
        <EditUserForm item={item} setEdit={setEdit} />
      ) : (
        <tr className="hover:bg-gray-100">
          <td className={tdTableClass}> {item.name} </td>
          <td className={tdTableClass}> {item.email} </td>
          <td className={tdTableClass}> {item.phone} </td>
          <td className={tdTableClass}> {item.date} </td>
          <td className={tdTableClass}>
            {" "}
            {item.type === "normal" ? "کاربر معمولی" : "کاربر ادمین"}{" "}
          </td>
          <td className="px-4 py-2 whitespace-nowrap space-x-2 space-x-reverse">
            {authContext.authenticated ? (
              <>
                <EditUser setEdit={() => setEdit(true)} />
                <DeleteUser id={item.id} />
              </>
            ) : (
              <p className="text-xs text-red-500 font-bold">
                برای حذف و ویرایش وارد شوید
              </p>
            )}
          </td>
        </tr>
      )}
    </>
  );
}

export default UserItems;
