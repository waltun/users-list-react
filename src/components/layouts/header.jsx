import React, { useContext } from "react";
import AuthContext from "../../context/authContext";

function Header() {
  const authContext = useContext(AuthContext);

  return (
    <header className="bg-gray-200 mb-6 font-IRANSans h-52 bg-gradient-to-r from-cyan-300 to-blue-400">
      <div className="pt-16">
        <p className="text-center text-xl font-bold">پروژه لیست کاربران</p>
      </div>
      <div className="mt-6 flex justify-center">
        {authContext.authenticated ? (
          <button
            type="button"
            className="btn-cancel"
            onClick={() => authContext.setAuth(false)}
          >
            خروج
          </button>
        ) : (
          <button
            type="button"
            className="btn-success"
            onClick={() => authContext.setAuth(true)}
          >
            ورود
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
