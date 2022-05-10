import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon, UserAddIcon } from "@heroicons/react/outline";

function AddUser() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  //Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nation, setNation] = useState("");
  const [gender, setGender] = useState("male");
  const [type, setType] = useState("normal");

  return (
    <div className="my-4">
      <button
        className="bg-green-500 hover:bg-green-600 rounded-md px-6 py-2 text-sm text-white flex items-center"
        onClick={() => setOpen(true)}
      >
        <PlusIcon className="w-6 h-6" />

        <span className="mr-2">افزودن کاربر جدید</span>
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 font-IRANSans"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
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
                  <form>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-center">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <UserAddIcon
                            className="h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:mr-4 sm:text-right">
                          <Dialog.Title
                            as="h3"
                            className="text-md leading-6 font-medium text-gray-900"
                          >
                            افزودن کاربر جدید
                          </Dialog.Title>
                        </div>
                      </div>
                      <div className="mt-4 sm:grid grid-cols-2 gap-4">
                        <div className="mb-4 sm:mb-0">
                          <label
                            className="text-sm font-bold mb-2 block"
                            for="inputName"
                          >
                            نام
                          </label>
                          <input
                            type="text"
                            id="inputName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white px-4 py-2 text-sm border border-gray-400 rounded-md"
                          />
                        </div>
                        <div className="mb-4 sm:mb-0">
                          <label
                            className="text-sm font-bold mb-2 block"
                            for="inputEmail"
                          >
                            ایمیل
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="inputEmail"
                            className="w-full bg-white px-4 py-2 text-sm border border-gray-400 rounded-md"
                          />
                        </div>
                        <div className="mb-4 sm:mb-0">
                          <label
                            className="text-sm font-bold mb-2 block"
                            for="inputPhone"
                          >
                            شماره تماس
                          </label>
                          <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            id="inputPhone"
                            className="w-full bg-white px-4 py-2 text-sm border border-gray-400 rounded-md"
                          />
                        </div>
                        <div className="mb-4 sm:mb-0">
                          <label
                            className="text-sm font-bold mb-2 block"
                            for="inputNation"
                          >
                            کد ملی
                          </label>
                          <input
                            type="text"
                            value={nation}
                            onChange={(e) => setNation(e.target.value)}
                            id="inputNation"
                            className="w-full bg-white px-4 py-2 text-sm border border-gray-400 rounded-md"
                          />
                        </div>
                        <div className="mb-4 sm:mb-0">
                          <label
                            className="text-sm font-bold mb-2 block"
                            for="inputGender"
                          >
                            جنسیت
                          </label>
                          <select
                            className="w-full bg-white px-4 py-2 text-sm border border-gray-400 rounded-md"
                            id="inputGender"
                            onChange={(e) => setGender(e.target.value)}
                          >
                            <option value="male">مرد</option>
                            <option value="female">زن</option>
                          </select>
                        </div>
                        <div className="mb-4 sm:mb-0">
                          <label
                            className="text-sm font-bold mb-2 block"
                            for="inputType"
                          >
                            نوع کاربر
                          </label>
                          <select
                            className="w-full bg-white px-4 py-2 text-sm border border-gray-400 rounded-md"
                            id="inputType"
                            onChange={(e) => setType(e.target.value)}
                          >
                            <option value="admin">مدیریت</option>
                            <option value="normal">معمولی</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:w-auto sm:text-sm"
                        ref={cancelButtonRef}
                      >
                        ثبت کاربر
                      </button>
                      <button
                        type="button"
                        className="mt-3 sm:mt-0 w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
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
    </div>
  );
}

export default AddUser;
