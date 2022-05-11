import React from "react";
import TableHeader from "./tableHeader";
import UserItems from "./userItems";

function Users() {
  return (
    <main className="my-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <TableHeader />
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <UserItems />
        </tbody>
      </table>
    </main>
  );
}

export default Users;
