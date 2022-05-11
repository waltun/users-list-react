import React from "react";

function Users() {
  return (
    <main className="my-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-center text-sm text-gray-900 font-bold">
              #
            </th>
            <th className="px-4 py-3 text-center text-sm text-gray-900 font-bold">
              نام
            </th>
            <th className="px-4 py-3 text-center text-sm text-gray-900 font-bold">
              ایمیل
            </th>
            <th className="px-4 py-3 text-center text-sm text-gray-900 font-bold">
              شماره تماس
            </th>
            <th className="px-4 py-3 text-center text-sm text-gray-900 font-bold">
              تاریخ ثبت
            </th>
            <th className="px-4 py-3 text-center text-sm text-gray-900 font-bold">
              نوع کاربر
            </th>
            <th className="relative px-6 py-3">
              <span className="sr-only">اقدامات</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
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
        </tbody>
      </table>
    </main>
  );
}

export default Users;
