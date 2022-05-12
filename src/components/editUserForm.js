import React, { useState } from "react";

function EditUserForm({ item, index, users, setUsers }) {
  const [user, setUser] = useState(item);

  const inputHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitEdit = () => {
    console.log("submited");
  };

  return (
    <tr className="hover:bg-gray-100">
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <p className="text-sm">{index + 1}</p>
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <input
          type="text"
          value={user.name}
          className="input text-xs"
          onChange={inputHandler}
        />
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <input
          type="text"
          value={item.email}
          className="input text-xs"
          onChange={inputHandler}
        />
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <input
          type="text"
          value={item.phone}
          className="input text-xs"
          onChange={inputHandler}
        />
      </td>
      <td
        className="px-4 py-2 whitespace-nowrap text-center text-gray-700"
        dir="ltr"
      >
        <p className="text-xs">{item.date}</p>
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <select
          className="input text-xs"
          value={item.type}
          onChange={inputHandler}
        >
          <option value="normal">کاربر معمولی</option>
          <option value="admin">کاربر ادمین</option>
        </select>
      </td>
      <td className="px-4 py-2 whitespace-nowrap space-x-2 space-x-reverse">
        <button className="btn-success" onClick={submitEdit}>
          بروزرسانی
        </button>
      </td>
    </tr>
  );
}

export default EditUserForm;
