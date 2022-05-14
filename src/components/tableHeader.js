import React from "react";

function TableHeader(props) {
  return (
    <tr>
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
  );
}

export default TableHeader;
