import React, { useState } from "react";

function EditUserForm({ item, index, users , setUsers , setEdit }) {
  const [editedUser, setEditedUser] = useState(item);

  const handleInputs = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const handleSubmit = () => {
      let newUsersList = users.filter((user) => users.indexOf(user) !== index);
      newUsersList.push(editedUser);
      setUsers([...newUsersList])
      setEdit(false);
  };

  return (
    <tr className="hover:bg-gray-100">
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <p className="text-sm">{index + 1}</p>
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <input
          type="text"
          value={editedUser.name}
          className="input text-xs"
          onChange={handleInputs}
          name="name"
        />
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <input
          type="text"
          value={editedUser.email}
          className="input text-xs"
          onChange={handleInputs}
          name="email"
        />
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <input
          type="text"
          value={editedUser.phone}
          className="input text-xs"
          onChange={handleInputs}
          name="phone"
        />
      </td>
      <td
        className="px-4 py-2 whitespace-nowrap text-center text-gray-700"
        dir="ltr"
      >
        <p className="text-xs">{editedUser.date}</p>
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <select
          className="input text-xs"
          value={editedUser.type}
          onChange={handleInputs}
          name="type"
        >
          <option value="normal">کاربر معمولی</option>
          <option value="admin">کاربر ادمین</option>
        </select>
      </td>
      <td className="px-4 py-2 whitespace-nowrap space-x-2 space-x-reverse">
        <button className="btn-success btn-sm" onClick={handleSubmit}>
          بروزرسانی
        </button>
        <button className="btn-cancel btn-sm" onClick={() => setEdit(false)}>
          انصراف
        </button>
      </td>
    </tr>
  );
}

export default EditUserForm;
