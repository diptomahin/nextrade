// Import necessary dependencies
import React from "react";
import { MdNotifications, MdNotificationsActive } from "react-icons/md";
import Link from "next/link";
import useNotificationData from "@/hooks/useNotificationData";
import useSecureAPI from "@/hooks/useSecureAPI";
import toast from "react-hot-toast";
import { BsThreeDotsVertical } from "react-icons/bs";
import useAuth from "@/hooks/useAuth";

const TradersNotification = () => {
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [isNotifyMenuOpen, setIsNotifyMenuOpen] = React.useState(false);
  const [openDeleteOptions, setOpenDeleteOptions] = React.useState({});
  const { notificationsData, notificationRefetch } = useNotificationData();
 

  const secureAPI = useSecureAPI();
  const {user} = useAuth()

  const notificationCount = notificationsData?.filter(notification =>notification.type === 'unseen')
  console.log(notificationCount);



  // Function to handle single notification deletion
  const handleDeleteNotification = async (notificationId) => {
    try {
      // Send a DELETE request to your backend API
      await secureAPI.delete(`/notifications/${notificationId}`);

      // Refetch notifications data after deletion
      notificationRefetch();

      // Show success toast
      toast.success("Notification deleted successfully");
    } catch (error) {
      console.error("Error deleting notification:", error);

      // Show error toast
      toast.error("Error deleting notification");
    }
  };
  // Function to handle all notification deletion
  const handleDeleteAllNotification = async () => {
    try {
      // Send a DELETE request to your backend API
      await secureAPI.delete(`/notifications/deleteAllNotifications/${user.email}`);

      // Refetch notifications data after deletion
      notificationRefetch();

      // Show success toast
      toast.success("All Notification deleted successfully");
    } catch (error) {
      console.error("Error All deleting notification:", error);

      // Show error toast
      toast.error("Error All deleting notification");
    }
  };

  // Function to toggle delete options for a specific notification
  const toggleDeleteOptions = (notificationId) => {
    setOpenDeleteOptions((prevOptions) => ({
      ...prevOptions,
      [notificationId]: !prevOptions[notificationId],
    }));
  };

  // Helper function to format time in 12-hour format
  const formatTime = (hours) => {
    return hours % 12 || 12; // Convert to 12-hour format
  };

  // Helper function to pad zero for single-digit minutes
  const padZero = (minutes) => {
    return minutes < 10 ? `0${minutes}` : minutes;
  };

  // Helper function to determine AM or PM
  const getAmPm = (hours) => {
    return hours >= 12 ? "PM" : "AM";
  };

  // Click event handler for all notification UnMark 
  const handleMarkAllRead = () => {
    
    secureAPI.patch(`/markAllAsRead/${user.email}`)
    .then((response) => {
      console.log('notification count successfully updated');
    })
    // Update notificationsData?.length based on the click
    notificationRefetch();
  };

  // Click event handler for notification unMark
  const handleMark = (asset) => {
    
    secureAPI.patch(`/notifications/${asset._id}`)
    .then((response) => {
      console.log('notification count successfully updated');
    })
    // Update notificationsData?.length based on the click
    notificationRefetch();
  };

  // Click event handler for notification mark AS Read
  const handleUnMark = (asset) => {
    
    secureAPI.patch(`/markAsRead/${asset._id}`)
    .then((response) => {
      console.log('notification count successfully  restored');
    })
    // Update notificationsData?.length based on the click
    notificationRefetch();
  };

 

  return (
    <div className="relative">
      <button
        onClick={() => setIsNotificationOpen(!isNotificationOpen)}
        className={`flex items-center text-white ${
          isNotificationOpen && "text-primary"
        }`}
      >
        {isNotificationOpen ? (
          <MdNotificationsActive className="w-6 h-6" />
        ) : (
          <MdNotifications className="w-6 h-6" />
        )}
        {notificationsData ? (
          <p className={`absolute left-3 -top-2 font-semibold w-5 h-5 p-[2px] text-sm rounded-full bg-red-500 flex justify-center items-center`}>
            {notificationCount?.length}
          </p>
        ) : (
          " "
        )}
      </button>
      {isNotificationOpen && (
        <div className="absolute overflow-x-hidden overflow-y-scroll max-h-[500px] top-[64px] right-24 transform translate-x-1/2 duration-200 rounded bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree w-80">
          <div className="flex items-center justify-between px-4 py-2 border-b-2 border-darkThree">
            <h2 className="font-semibold">Notifications</h2>

            <div className="relative ">
              <button
                onClick={() => setIsNotifyMenuOpen(!isNotifyMenuOpen)}
                className={`btn btn-sm text-lg h-8 px-[7px] text-white bg-transparent hover:bg-white/10 active:bg-white/20 border-none outline-none rounded-full`}
              >
                <BsThreeDotsVertical />
              </button>
              {isNotifyMenuOpen && (
                <div className="absolute right-8 top-0 w-40 bg-darkBG border border-darkThree font-medium justify-start rounded-b-2xl rounded-s-2xl py-3 z-10">
                  <button onClick={handleMarkAllRead} className="w-full whitespace-nowrap btn btn-xs text-white/80 bg-transparent rounded-none hover:bg-[#ff5252] border-none justify-start pl-3">
                    Mark all as read
                  </button>
                  <button onClick={handleDeleteAllNotification} className="w-full  whitespace-nowrap btn btn-xs text-white/80  bg-transparent rounded-none hover:bg-[#ff5252] border-none justify-start pl-3">
                    Delete all
                  </button>
                  <Link
                    href="/dashboard/settings"
                    onClick={() => setIsNotifyMenuOpen(false)}
                  >
                    <button className="w-full whitespace-nowrap btn btn-xs text-white/80  bg-transparent rounded-none hover:bg-[#ff5252] border-none justify-start pl-3">
                      Notification settings
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          {notificationsData?.length ? (
            <>
              {notificationsData.map((asset) => (
                <div
                  
                  key={asset._id}
                  className={` border-b border-darkThree cursor-pointer px-4 py-2 ${asset.type === 'seen' ? 'bg-darkOne': 'bg-white/5'}`}
                >
                  <div className="space-y-[6px]">
                    <h2 className="font-medium text-sm">{asset.title}</h2>
                    <p className="text-darkGray text-xs">{asset.description}</p>
                  </div>

                  <div className="flex justify-between items-center mt-1">
                    <p className="text-darkGray text-xs flex items-center justify-end gap-3">
                      {/* Date */}
                      <span>
                        {asset?.postedDate?.day || " "}-
                        {asset?.postedDate?.month || " "}-
                        {asset?.postedDate?.year || " "}
                      </span>
                      {/* Time */}
                      <span>
                        {formatTime(asset?.postedDate?.hours || " ")}:
                        {padZero(asset?.postedDate?.minutes || " ")}{" "}
                        {getAmPm(asset?.postedDate?.hours || " ")}
                      </span>
                    </p>
                    <div className="relative ">
                      <button
                        onClick={() => toggleDeleteOptions(asset._id)}
                        className={`btn btn-xs text-sm h-7 px-[7px] text-white bg-transparent hover:bg-white/10 active:bg-white/20 border-none outline-none rounded-full`}
                      >
                        <BsThreeDotsVertical />
                      </button>
                      {openDeleteOptions[asset._id] && (
                        <div className="absolute right-7 bottom-0 w-28 bg-darkBG border border-darkThree font-medium justify-start rounded-t-2xl rounded-s-2xl py-3">
                          {asset.type === "unseen" ? <button
                          onClick={() => handleMark(asset)}
                            className="w-full whitespace-nowrap btn btn-xs text-white/80 bg-transparent rounded-none hover:bg-[#ff5252] border-none justify-start pl-3">
                            Mark as read
                          </button>:<button
                          onClick={() => handleUnMark(asset)}
                            className="w-full whitespace-nowrap btn btn-xs text-white/80 bg-transparent rounded-none hover:bg-[#ff5252] border-none justify-start pl-3">
                            Un Mark
                          </button>}
                          <button
                            onClick={() => handleDeleteNotification(asset._id)}
                            className="w-full btn btn-xs text-white/80  bg-transparent rounded-none hover:bg-[#ff5252] border-none justify-start pl-3"
                          >
                            Delete
                          </button>
                          <button className="w-full btn btn-xs text-white/80  bg-transparent rounded-none hover:bg-[#ff5252] border-none justify-start pl-3">
                            Report issue
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="py-5">
              <h2 className="text-sm text-center">No notification yet . . .</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TradersNotification;
