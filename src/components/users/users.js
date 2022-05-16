import React, { useContext } from "react";
import TableHeader from "../layouts/tableHeader";
import UserItems from "./userItems";
import UsersContext from "../../context/users";

function Users() {
  const usersContext = useContext(UsersContext);

  return (
    <main className="my-4 p-4 rounded-md border border-gray-200">
      {usersContext.users.length ? (
        <table className="min-w-full divide-y divide-gray-200 border-b border-gray-300">
          <thead className="bg-gray-100">
            <TableHeader />
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {usersContext.users.map((item) => (
              <UserItems
                item={item}
                key={item.id}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <div className="flex justify-center py-3">
            <p className="text-center text-lg font-bold">
              چیزی برای نمایش وجود ندارد!
            </p>
          </div>
          <div className="mt-2 flex justify-center">
            <p className="text-xs text-gray-700">
              برای اضافه کردن کاربر جدید روی دکمه "افزودن کاربر جدید" کلیک کنید
            </p>
          </div>
        </>
      )}
    </main>
  );
}

export default Users;
