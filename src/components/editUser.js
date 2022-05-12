import React from "react";

function EditUser({ setEdit }) {
  return (
    <button
      className="btn-edit"
      onClick={() => setEdit(true)}
    >
      ویرایش
    </button>
  );
}

export default EditUser;
