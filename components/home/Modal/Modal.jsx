"use client";
import React from "react";
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import BannerImg from "@/assets/random/register.png";
import Image from "next/image";
import Link from "next/link";

const Modal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOpen(true);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  const cancelButtonRef = useRef(null);
  return (
    <div>
      {open && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
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

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-8">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-semibold text-xl mb-3 justify-center  font-semibold leading-6 text-gray-900 text-center grid gap-2"
                          >
                            Trade Smart, Trade Now!
                            <br />
                            Claim Your 10% Bonus.
                            <br />
                            <h1 className=" font-normal text-[18px]">
                              Exclusive{" "}
                              <span className="text-black font-extrabold">
                                Black
                              </span>{" "}
                              <span className=" text-[#334074] font-extrabold">
                                Friday
                              </span>{" "}
                              Register Deals!
                            </h1>
                          </Dialog.Title>
                          <div className="rounded">
                            <Image
                              src={BannerImg}
                              alt="Trad Icon"
                              className="rounded "
                              placeholder="blur"
                            />
                          </div>
                          <div className="mt-4 -mb-3">
                            <p className="text-gray-500 text-center">
                            Embark on your trading journey today and seize the opportunity to boost your earnings! Register now to enjoy an exclusive Black Friday offer – a 10% bonus on your initial deposit. Take advantage of this limited-time deal to supercharge your trading experience. Don't miss out on the chance to maximize your potential gains
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="justify-center py-5 sm:flex sm:flex-row-reverse sm:px-6 text-center">

                        <Link href="/register"> 
                        <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary sm:ml-3 sm:w-auto"
                        onClick={() => setOpen(false)}
                      >
                        Register Now
                      </button>
                        </Link>
                      

                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-7 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto hover:bg-red-700 hover:text-white"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </div>
  );
};

export default Modal;
