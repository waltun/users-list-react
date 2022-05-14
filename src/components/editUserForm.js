import {useState} from "react";

function EditUserForm({ item, index }) {
  const [user, setUser] = useState(item);

  const inputHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({...user, [name]: value});
  };

  const submitEdit = () => {
    console.log(user)
  };

  return (
    <tr className="hover:bg-gray-100">
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <p className="text-sm">{index + 1}</p>
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <input
          type="text"
          name="name"
          value={user.name}
          className="input text-xs"
          onChange={inputHandler}
        />
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <input
          type="text"
          name="email"
          value={user.email}
          className="input text-xs"
          onChange={inputHandler}
        />
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <input
          type="text"
          name="phone"
          value={user.phone}
          className="input text-xs"
          onChange={inputHandler}
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
          name="type"
          value={user.type}
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
