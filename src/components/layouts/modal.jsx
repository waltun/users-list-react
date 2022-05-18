import React, { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/outline";
import UserForm from "../users/userForm";
import UsersContext from "../../context/usersContext";
import validator from "validator";
import { sweetalert } from "../../helpers/helpers";
import axios from "axios";

function Modal() {
  const usersContext = useContext(UsersContext);

  const date = new Date().toLocaleDateString("fa-IR");

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    type: "normal",
    date: date,
  });

  const [error, setError] = useState(false);

  const handleForm = (event) => {
    event.preventDefault();

    if (
      !validator.isEmpty(user.name) &&
      !validator.isEmpty(user.email) &&
      !validator.isEmpty(user.phone)
    ) {
      usersContext.setUsers((prevState) => {
        return [...prevState, { ...user, id: Date.now() }];
      });

      //Send Http request (Store users)
      axios
        .post("https://6283d9436b6c317d5ba74d17.endapi.io/users", {
          ...user,
          id: Date.now(),
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));

      usersContext.setModal(false);
      setError(false);

      //Sweet alert success alert
      sweetalert("ثبت موفق", "کاربر جدید با موفقیت ثبت شد");
    } else {
      usersContext.setModal(true);
      setError(true);
    }
  };

  return (
    <section>
      <Transition.Root show={usersContext.modal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 font-IRANSans"
          onClose={usersContext.setModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative inline-block align-bottom bg-white rounded-lg text-right overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl w-full">
                  <form onSubmit={handleForm}>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <PlusIcon
                            className="h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:mr-4 sm:text-right">
                          <Dialog.Title
                            as="h3"
                            className="text-lg leading-6 font-medium text-gray-900"
                          >
                            افزودن کاربر جدید
                          </Dialog.Title>
                        </div>
                      </div>
                      <div className="mt-4">
                        {/* Show form to add user */}
                        <UserForm setUser={setUser} user={user} error={error} />
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse space-x-2 space-y-2 sm:space-y-0">
                      <button
                        type="submit"
                        className="btn-success py-2 w-full sm:w-auto"
                        onClick={() => usersContext.setModal(false)}
                      >
                        ثبت اطلاعات
                      </button>
                      <button
                        type="button"
                        className="btn-cancel py-2 w-full sm:w-auto"
                        onClick={() => usersContext.setModal(false)}
                      >
                        انصراف
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  );
}

export default Modal;
