import axios from "axios";
import React, { useContext, useState } from "react";
import UsersContext from "../../context/usersContext";
import { sweetalert } from "../../helpers/helpers";

function EditUserForm({ item, setEdit }) {
  const usersContext = useContext(UsersContext);
  const [user, setUser] = useState(item);

  const handleInputes = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    //Delete Http request (Delete users)
    axios
      .put(`https://6283d9436b6c317d5ba74d17.endapi.io/users/${item.id}`, {
        ...user,
      })
      .then((response) =>
        usersContext.setUsers((prevState) =>
          prevState.map((u) => (u.id === item.id ? user : u))
        )
      )
      .catch((error) => console.log(error));

    setEdit(false);

    //Sweet alert success alert
    sweetalert("ویرایش موفق", "کاربر مورد نظر با موفقیت ویرایش شد");
  };

  return (
    <tr className="hover:bg-gray-100">
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <input
          type="text"
          value={user.name}
          className="input text-xs"
          onChange={handleInputes}
          name="name"
        />
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <input
          type="text"
          value={user.email}
          className="input text-xs"
          onChange={handleInputes}
          name="email"
        />
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <input
          type="text"
          value={user.phone}
          className="input text-xs"
          onChange={handleInputes}
          name="phone"
        />
      </td>
      <td
        className="px-4 py-2 whitespace-nowrap text-center text-gray-700"
        dir="ltr"
      >
        <p className="text-xs">{user.date}</p>
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <select
          className="input text-xs"
          value={user.type}
          onChange={handleInputes}
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
