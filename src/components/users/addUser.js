import React from "react";

function AddUser(props) {
  return (
    <section className="flex justify-end">
      <button className="btn-success" onClick={() => props.modal(true)}>
        افزودن کاربر جدید
      </button>
    </section>
  );
}

export default AddUser;
