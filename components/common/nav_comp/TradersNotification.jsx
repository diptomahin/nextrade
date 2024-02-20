import DarkButton from "@/components/library/buttons/DarkButton";
import Image from "next/image";
import React from "react";
import { MdNotifications, MdNotificationsActive } from "react-icons/md";

const TradersNotification = () => {
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsNotificationOpen(!isNotificationOpen)}
        className={`flex items-center text-white ${isNotificationOpen && "text-primary"}`}
      >
        {isNotificationOpen ? (
          <MdNotificationsActive className="w-6 h-6" />
        ) : (
          <MdNotifications className="w-6 h-6" />
        )}
      </button>
      {isNotificationOpen && (
        <div className="absolute top-12 md:right-40 right-24 transform translate-x-1/2  rounded bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree flex flex-col gap-2 p-3 md:w-96 w-80  ">
          {/* Content of the dropdown */}
          <h2 className="">Notifications</h2>
          <div className=" flex items-center gap-2 bg-darkBG p-2 rounded-xl">
              <div className=" flex items-center gap-3">
              <Image src={''} alt="" width={30} height={30} className=" P-2 rounded-full border border-primary"/>
              <div>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              </div>
              </div>
              
          </div>
        </div>
      )}
    </div>
  );
};

export default TradersNotification;
