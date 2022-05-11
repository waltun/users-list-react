import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/outline";
import Header from "./header";
import AddUser from "./addUser";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="max-w-3xl mx-auto font-IRANSans">
      <Header />

      <AddUser modal={setModal} />

      <section>
        <Transition.Root show={modal} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10 font-IRANSans"
            onClose={setModal}
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
                        <div className="sm:grid grid-cols-2 gap-4">
                          <div className="mb-4">
                            <label htmlFor="inputName" className="form-label">
                              نام
                            </label>
                            <input
                              id="inputName"
                              className="input"
                              name="name"
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
                            />
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
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse space-x-2 space-y-2 sm:space-y-0">
                      <button
                        type="submit"
                        className="btn-success py-2 w-full sm:w-auto"
                        onClick={() => setModal(false)}
                      >
                        ثبت اطلاعات
                      </button>
                      <button
                        type="button"
                        className="btn-cancel py-2 w-full sm:w-auto"
                        onClick={() => setModal(false)}
                      >
                        انصراف
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </section>

      <main className="my-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-center text-sm text-gray-900 font-bold">
                #
              </th>
              <th className="px-4 py-3 text-center text-sm text-gray-900 font-bold">
                نام
              </th>
              <th className="px-4 py-3 text-center text-sm text-gray-900 font-bold">
                ایمیل
              </th>
              <th className="px-4 py-3 text-center text-sm text-gray-900 font-bold">
                شماره تماس
              </th>
              <th className="px-4 py-3 text-center text-sm text-gray-900 font-bold">
                تاریخ ثبت
              </th>
              <th className="px-4 py-3 text-center text-sm text-gray-900 font-bold">
                نوع کاربر
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">اقدامات</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
                <p className="text-sm">1</p>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
                <p className="text-sm">پوریا</p>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
                <p className="text-sm">pooriya@gmail.com</p>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
                <p className="text-sm">09022228553</p>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
                <p className="text-sm">1401/02/21</p>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
                <p className="text-sm">ادمین</p>
              </td>
              <td className="px-4 py-2 whitespace-nowrap space-x-2 space-x-reverse">
                <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-1 rounded-md text-white text-sm">
                  ویرایش
                </button>
                <button className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md text-white text-sm">
                  حذف
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
