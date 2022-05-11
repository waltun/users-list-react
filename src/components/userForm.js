import React from "react";

function UserForm() {
  return (
    <div className="sm:grid grid-cols-2 gap-4">
      <div className="mb-4">
        <label htmlFor="inputName" className="form-label">
          نام
        </label>
        <input id="inputName" className="input" name="name" />
      </div>

      <div className="mb-4">
        <label htmlFor="inputEmail" className="form-label">
          ایمیل
        </label>
        <input id="inputEmail" className="input" name="email" />
      </div>

      <div className="mb-4">
        <label htmlFor="inputPhone" className="form-label">
          شماره تماس
        </label>
        <input id="inputPhone" className="input" name="phone" />
      </div>

      <div className="mb-4">
        <label htmlFor="inputPhone" className="form-label">
          نوع کاربر
        </label>
        <select className="input" name="type">
          <option>کاربر معمولی</option>
          <option>کاربر ادمین</option>
        </select>
      </div>
    </div>
  );
}

export default UserForm;
