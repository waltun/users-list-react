import React from "react";
import AddUser from "./AddUser";

function Users() {
  let items = [];

  JSON.parse(localStorage.getItem("data"))
    ? items.push(JSON.parse(localStorage.getItem("data")))
    : (items = null);

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
              ایمیل
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-center text-sm text-gray-900"
            >
              شماره تماس
            </th>
            <th
              scope="col"
              className="px-4 py-2 text-center text-sm text-gray-900"
            >
              کد ملی
            </th>
            <th
              scope="col"
              className="px-4 py-2 text-center text-sm text-gray-900"
            >
              جنسیت
            </th>
            <th
              scope="col"
              className="px-4 py-2 text-center text-sm text-gray-900"
            >
              نوع کاربر
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">اقدامات</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items
            ? items.map((item, index) => (
                <tr className="hover:bg-gray-100" key={item.id}>
                  <td className="px-4 py-3 text-center text-gray-700">
                    <p className="text-sm">{index + 1}</p>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-700">
                    <p className="text-sm">{item.name}</p>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-700">
                    <p className="text-sm">{item.email}</p>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-700">
                    <p className="text-sm">{item.phone}</p>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-700">
                    <p className="text-sm">{item.nation}</p>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-700">
                    <p className="text-sm">
                      {item.gender === "male" ? "مرد" : "زن"}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-700">
                    <p className="text-sm">
                      {item.type === "admin" ? "مدیریت" : "معمولی"}
                    </p>
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
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
