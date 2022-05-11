import React from "react";

function UserItems() {
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <p className="text-sm">1</p>
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <p className="text-sm">پوریا</p>
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <p className="text-sm">pooriya@gmail.com</p>
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <p className="text-sm">09022228553</p>
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <p className="text-sm">1401/02/21</p>
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <p className="text-sm">ادمین</p>
      </td>
      <td className="px-4 py-2 whitespace-nowrap space-x-2 space-x-reverse">
        <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-1 rounded-md text-white text-sm">
          ویرایش
        </button>
        <button className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md text-white text-sm">
          حذف
        </button>
      </td>
    </tr>
  );
}

export default UserItems;
