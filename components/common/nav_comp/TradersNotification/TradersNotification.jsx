// Import necessary dependencies
import React from "react";
import { MdNotifications, MdNotificationsActive } from "react-icons/md";
import Link from "next/link";
import useNotificationData from "@/hooks/useNotificationData";
import useSecureAPI from "@/hooks/useSecureAPI";
import toast from "react-hot-toast";
import { BsThreeDotsVertical } from "react-icons/bs";
import { usePathname } from "next/navigation";
import "./notificationsCss.css";

const TradersNotification = () => {
  // State variables
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [isNotifyMenuOpen, setIsNotifyMenuOpen] = React.useState(false);
  const [isOpenMenu, setIsOpenMenu] = React.useState({});

  // Custom hooks for handling notification data and making secure API calls
  const {
    notificationsData,
    refetchNotificationsData,
    notificationsDataLoading,
    notificationsDataPending,
    notificationsDataError,
  } = useNotificationData();
  const secureAPI = useSecureAPI();
  const pathName = usePathname();

  // If data is still loading or there is an error, return nothing
  if (
    notificationsDataLoading ||
    notificationsDataPending ||
    notificationsDataError
  ) {
    return null;
  }

  // Function to toggle open menu for a specific notification
  const handleOpenMenu = (notificationId) => {
    setIsOpenMenu((prevOptions) => ({
      ...Object.fromEntries(
        Object.entries(prevOptions).map(([key, value]) => [key, false])
      ),
      [notificationId]: !prevOptions[notificationId],
    }));

    setIsNotifyMenuOpen(true); // Open NotifyMenu
  };

  // Filter unread notifications
  const nonReaderNotifications = notificationsData.filter(
    (notification) => notification.read === false
  );

  // Function to delete all notifications
  const handleDeleteAllNotification = async (email) => {
    if (!email) {
      return;
    }
    const toastId = toast.loading("Deleting all notifications...", {
      duration: 10000,
    });

    try {
      // Send a DELETE request to your backend API
      const res = await secureAPI.delete(`/notifications/delete-all/${email}`);
      if (res.data.deletedCount > 0) {
        refetchNotificationsData();
        toast.success("All notification deleted successfully", {
          id: toastId,
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error("Something wrong. Please try again", {
        id: toastId,
        duration: 3000,
      });
    }
  };

  // Function to delete a single notification
  const handleDeleteNotification = async (notificationId) => {
    const toastId = toast.loading("Deleting notifications...", {
      duration: 10000,
    });
    try {
      // Send a DELETE request to your backend API
      const res = await secureAPI.delete(
        `/notifications/delete-one/${notificationId}`
      );
      if (res.data.deletedCount > 0) {
        refetchNotificationsData();
        toast.success("Notification deleted successfully", {
          id: toastId,
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error("Something wrong. Please try again", {
        id: toastId,
        duration: 3000,
      });
    }
  };

  // Function to mark all notifications as read
  const handleReadAll = async (email) => {
    if (!email) {
      return;
    }
    try {
      // Send an update notification request to the backend API
      const res = await secureAPI.patch(
        `notifications/update-all-read/${email}`
      );
      if (res.data.modifiedCount > 0) {
        refetchNotificationsData();
      }
    } catch (error) {}
  };

  // Function to mark a single notification as read
  const handleRead = async (_id) => {
    try {
      // Send an update notification request to the backend API
      const res = await secureAPI.patch(`notifications/update-one-read/${_id}`);
      if (res.data.modifiedCount > 0) {
        refetchNotificationsData();
      }
    } catch (error) {}
  };

  // Function to mark all notifications as unread
  const handleUnreadAll = async (email) => {
    if (!email) {
      return;
    }
    try {
      // Send an update notification request to the backend API
      const res = await secureAPI.patch(
        `notifications/update-all-unread/${email}`
      );
      if (res.data.modifiedCount > 0) {
        refetchNotificationsData();
      }
    } catch (error) {}
  };

  // Function to mark a single notification as unread
  const handleUnread = async (_id) => {
    try {
      // Send an update notification request to the backend API
      const res = await secureAPI.patch(
        `notifications/update-one-unread/${_id}`
      );
      if (res.data.modifiedCount > 0) {
        refetchNotificationsData();
      }
    } catch (error) {}
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

  return (
    <div className="relative">
      {/* Button to toggle notification display */}
      <button
        onClick={() => setIsNotificationOpen(!isNotificationOpen)}
        className={`flex items-center  hover:bg-black/10 dark:hover:bg-white/10 active:bg-Black/20 dark:active:bg-white/20 rounded-full p-2 ${
          isNotificationOpen && "text-primary"
        }`}
      >
        {isNotificationOpen ? (
          <MdNotificationsActive className="w-6 h-6" />
        ) : (
          <MdNotifications className="w-6 h-6" />
        )}
        {/* Display the count of unread notifications */}
        {nonReaderNotifications?.length > 0 && (
          <p className="absolute left-5 bottom-5 font-semibold w-5 h-5  rounded-full bg-red-500 text-white dark:text-black flex justify-center items-center">
            <span className="text-[10px] text-white">
              {nonReaderNotifications?.length}
            </span>
          </p>
        )}
      </button>

      {/* Display the notification popup if open */}
      {isNotificationOpen && (
        <div className="absolute overflow-x-hidden overflow-y-auto max-h-[500px] top-[64px] -right-16 md:right-24 transform md:translate-x-1/2 duration-200 border dark:border-darkThree rounded-xl bg-white dark:bg-quaternary text-zinc-950 dark:text-zinc-100 w-60 md:w-80 shadow-2xl dark:shadow-gray-900 scrollbar-thin z-10">
          {/* Header of the notification popup */}
          <div className="sticky top-0 w-full flex items-center justify-between px-4 py-2 border-b-2 bg-white dark:bg-quaternary dark:border-darkThree z-20">
            <h2 className="font-semibold">Notifications</h2>

            {/* Dropdown menu for additional actions */}
            <div className="relative ">
              <button
                onClick={() => setIsNotifyMenuOpen(!isNotifyMenuOpen)}
                className={`btn btn-sm text-lg h-8 px-[7px] dark:text-white bg-transparent hover:bg-black/10 active:bg-black/20 dark:hover:bg-white/10 dark:active:bg-white/20 border-none outline-none rounded-full`}
              >
                <BsThreeDotsVertical />
              </button>

              {/* Additional actions menu */}
              {isNotifyMenuOpen && (
                <div className="absolute right-8 top-0 w-40 bg-whiteBg dark:bg-quaternary border dark:border-darkThree font-medium justify-start rounded-b-2xl rounded-s-2xl py-3 z-10 shadow-xl">
                  <button
                    onClick={() => handleReadAll(notificationsData[0]?.email)}
                    className="w-full whitespace-nowrap btn btn-xs dark:text-white/80 bg-transparent rounded-none hover:bg-[#ff5252] hover:text-white shadow-none border-none justify-start pl-3"
                  >
                    Mark all as read
                  </button>
                  <button
                    onClick={() => handleUnreadAll(notificationsData[0]?.email)}
                    className="w-full whitespace-nowrap btn btn-xs dark:text-white/80 bg-transparent rounded-none hover:bg-[#ff5252] hover:text-white shadow-none border-none justify-start pl-3"
                  >
                    Mark all as unread
                  </button>
                  <button
                    onClick={() =>
                      handleDeleteAllNotification(notificationsData[0]?.email)
                    }
                    className="w-full  whitespace-nowrap btn btn-xs dark:text-white/80  bg-transparent rounded-none hover:bg-[#ff5252] hover:text-white shadow-none border-none justify-start pl-3"
                  >
                    Delete all
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Display individual notifications */}
          {notificationsData?.length ? (
            <div className="flex flex-col gap-3 px-3 py-1 my-1">
              {notificationsData.map((asset) => (
                <div
                  key={asset?._id}
                  className={`relative ${
                    asset?.read
                      ? "bg-transparent"
                      : "bg-zinc-200 dark:bg-white/5"
                  } w-full rounded-xl cursor-pointer p-3`}
                >
                  <Link
                    href={asset?.location ? asset.location : pathName}
                    onClick={() => handleRead(asset?._id)}
                  >
                    <div className="flex gap-4 dark:text-white">
                      {asset.read ? (
                        <MdNotifications className="w-7 h-7" />
                      ) : (
                        <MdNotificationsActive className="w-7 h-7" />
                      )}
                      <div>
                        <h2 className="font-semibold text-sm pr-10 pb-1 text-black dark:text-white">
                          {asset?.title}
                        </h2>
                        <p className="text-zinc-700 dark:text-zinc-300 text-xs">
                          {asset?.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end mt-2">
                      <p className="text-gray-600 dark:text-darkGray text-[10px] flex items-center justify-end gap-3">
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
                    </div>
                  </Link>

                  {/* Actions menu for each notification */}
                  <div className="absolute top-0 right-2 z-10">
                    <button
                      onClick={() => {
                        handleOpenMenu(asset?._id);
                        setIsNotifyMenuOpen(false);
                      }}
                      className={`btn btn-sm px-2 dark:text-white bg-transparent hover:bg-black/10 active:bg-black/20 dark:hover:bg-white/10 dark:active:bg-white/20 border-none outline-none rounded-full`}
                    >
                      <BsThreeDotsVertical />
                    </button>

                    {/* Additional actions menu for each notification */}
                    {isOpenMenu[asset?._id] && (
                      <div className="absolute right-8 top-0 w-32 bg-whiteBg dark:bg-quaternary border  border-zinc-200 dark:border-darkThree font-medium justify-start rounded-b-2xl rounded-s-2xl py-2 shadow-xl">
                        <button
                          onClick={() => handleRead(asset?._id)}
                          className="w-full whitespace-nowrap btn btn-xs dark:text-white/80 bg-transparent rounded-none hover:bg-[#ff5252] hover:text-white shadow-none border-none justify-start pl-3"
                        >
                          Mark as read
                        </button>
                        <button
                          onClick={() => handleUnread(asset?._id)}
                          className="w-full whitespace-nowrap btn btn-xs dark:text-white/80 bg-transparent rounded-none hover:bg-[#ff5252] hover:text-white shadow-none border-none justify-start pl-3"
                        >
                          Mark as unread
                        </button>
                        <button
                          onClick={() => handleDeleteNotification(asset?._id)}
                          className="w-full btn btn-xs dark:text-white/80  bg-transparent rounded-none hover:bg-[#ff5252] hover:text-white shadow-none border-none justify-start pl-3"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Display message when there are no notifications
            <div className="py-10 z-0">
              <h2 className="text-center">No notification yet . . .</h2>
            </div>
          )}
          <div className="sticky bottom-0 w-full bg-white dark:bg-quaternary py-[6px] z-20"></div>
        </div>
      )}
    </div>
  );
};

export default TradersNotification;
