import React from "react";
import Users from "./Users";

function App() {
  return (
    <div className="max-w-4xl mx-auto font-IRANSans">
      <div className="mt-10">
        <p className="text-2xl font-bold text-center">لیست کاربران</p>
      </div>

      <Users />
    </div>
  );
}

export default App;
