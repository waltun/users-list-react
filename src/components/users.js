import React from "react";
import TableHeader from "./tableHeader";
import UserItems from "./userItems";

function Users({ users, setUsers }) {
  return (
    <main className="my-4">
      {users.length ? (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <TableHeader />
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((item) => (
              <UserItems
                item={item}
                key={item.id}
                setUsers={setUsers}
                users={users}
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
