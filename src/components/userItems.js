import React from "react";

function UserItems({ users }) {
  return (
    <>
      {users.length
        ? users.map((item) => (
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
                <p className="text-sm">1</p>
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
              <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
                <p className="text-sm">1401/02/21</p>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
                <p className="text-sm">{item.type}</p>
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
          ))
        : null}
    </>
  );
}

export default UserItems;
