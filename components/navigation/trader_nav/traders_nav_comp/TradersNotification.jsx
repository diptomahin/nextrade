import React from "react";
import { MdNotifications, MdNotificationsActive } from "react-icons/md";

const TradersNotification = () => {
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  return (
    <div className="relative">
      <button onClick={() => setIsNotificationOpen(!isNotificationOpen)}>
        {isNotificationOpen ? (
          <MdNotificationsActive className="w-6 h-6" />
        ) : (
          <MdNotifications className="w-6 h-6" />
        )}
      </button>
      {isNotificationOpen && (
        <div className="absolute top-12 right-1/2 transform translate-x-1/2 w-40 bg-white flex flex-col gap-2 p-3 border rounded-xl">
          {/* Content of the dropdown */}
        </div>
      )}
    </div>
  );
};

export default TradersNotification;
