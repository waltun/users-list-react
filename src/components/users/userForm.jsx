import React from "react";

function UserForm({ user, setUser, error }) {
  const handleInputs = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  return (
    <>
      {error ? (
        <div className="my-4">
          <span className="text-xs text-red-600">
            لطفا تمامی موارد را تکمیل کنید!
          </span>
        </div>
      ) : null}
      <div className="sm:grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="inputName" className="form-label">
            نام
          </label>
          <input
            id="inputName"
            className="input"
            name="name"
            onChange={handleInputs}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="inputEmail" className="form-label">
            ایمیل
          </label>
          <input
            id="inputEmail"
            className="input"
            name="email"
            onChange={handleInputs}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="inputPhone" className="form-label">
            شماره تماس
          </label>
          <input
            id="inputPhone"
            className="input"
            name="phone"
            onChange={handleInputs}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="inputPhone" className="form-label">
            نوع کاربر
          </label>
          <select className="input" name="type" onChange={handleInputs}>
            <option value="normal">کاربر معمولی</option>
            <option value="admin">کاربر ادمین</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default UserForm;
