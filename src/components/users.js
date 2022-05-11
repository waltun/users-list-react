import React from "react";
import UserItems from "./userItems";

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
          <UserItems />
        </tbody>
      </table>
    </main>
  );
}

export default Users;
