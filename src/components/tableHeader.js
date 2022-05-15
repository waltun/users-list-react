import React from "react";

function TableHeader(props) {

    let thTableClass = "px-4 py-3 text-center text-sm text-gray-900 font-bold";

  return (
    <tr>
      <th className={thTableClass}> # </th>
      <th className={thTableClass}> نام </th>
      <th className={thTableClass}>ایمیل </th>
      <th className={thTableClass}> شماره تماس </th>
      <th className={thTableClass}> تاریخ ثبت </th>
      <th className={thTableClass}> نوع کاربر </th>
      <th className="relative px-6 py-3">
        <span className="sr-only">  اقدامات</span>
      </th>
    </tr>
  );
}

export default TableHeader;
