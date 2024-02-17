"use client"
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import BannerImg from "@/assets/random/register.png";
import Image from "next/image";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import Cookies from "js-cookie";
import DarkButton from "../library/buttons/DarkButton";
import { MdCancel } from "react-icons/md";

const Modal = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const isModalShown = Cookies.get("isModalShown");
    if (!isModalShown) {
      setTimeout(() => {
        setOpen(true);
        Cookies.set("isModalShown", "true", { expires: 1 / 24 }); // 1 hour expiration
      }, 5000);
    }
  }, []);

  const cancelButtonRef = useRef(null);

  if (user) {
    return null;
  }

  return (
    <Fragment>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={setOpen}
          initialFocus={cancelButtonRef}
        >
          <div className="flex items-center justify-center min-h-screen px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative z-10 bg-white rounded-lg max-w-md w-full p-6">
              <button onClick={() => setOpen(false)}
                    ref={cancelButtonRef} className="text-4xl text-blue-500 hover:text-red-600 absolute -top-2 -right-2">
              <MdCancel />
              </button>

           
                <Dialog.Title className="text-xl font-semibold text-center text-gray-700">
                  Trade Smart, Trade Now!
                  <br />
                  Claim Your 10% Bonus.
                  <br />
                  <span className="font-normal text-lg text-gray-700">
                    Exclusive{" "}
                    <span className="text-black font-extrabold">Black</span>{" "}
                    <span className="text-red-600 font-extrabold">
                      Friday
                    </span>{" "}
                    Register Deals!
                  </span>
                </Dialog.Title>
                <div className="flex justify-center my-4">
                  <Image
                    src={BannerImg}
                    alt="Trade Icon"
                    width={350}
                    height={100}
                    className="rounded"
                  />
                </div>
                <p className="text-gray-700 text-center">
                Start your trading journey now! Register today to unlock a special Black Friday offer: Get a 10% bonus on your first deposit. Don't miss out on this limited-time deal to boost your earnings!
                </p>
                <div className="flex justify-center mt-4 space-x-4">
                  <Link href="/register">
                    <DarkButton>Register Now</DarkButton>
                  </Link>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </Fragment>
  );
};

export default Modal;
