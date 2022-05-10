import React, { useEffect } from "react";
import AddUser from "./AddUser";

function Users() {
  return (
    <div className="mt-6">
      <AddUser />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 text-center text-sm text-gray-900"
            >
              #
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-center text-sm text-gray-900"
            >
              نام
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-center text-sm text-gray-900"
            >
              شماره تماس
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-center text-sm text-gray-900"
            >
              ایمیل
            </th>
            <th
              scope="col"
              className="px-4 py-2 text-center text-sm text-gray-900"
            >
              شماره ملی
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">اقدامات</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-3 text-center text-gray-700">
              <p className="text-sm">1</p>
            </td>
            <td className="px-4 py-3 text-center text-gray-700">
              <p className="text-sm">پوریا مستعان</p>
            </td>
            <td className="px-4 py-3 text-center text-gray-700">
              <p className="text-sm">09022228553</p>
            </td>
            <td className="px-4 py-3 text-center text-gray-700">
              <p className="text-sm">pooriya@gmail.com</p>
            </td>
            <td className="px-4 py-3 text-center text-gray-700">
              <p className="text-sm">0430142821</p>
            </td>
            <td className="px-4 py-3 space-x-2 space-x-reverse">
              <button className="px-4 py-1 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 text-sm">
                ویرایش
              </button>
              <button className="px-4 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 text-sm">
                حذف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Users;
