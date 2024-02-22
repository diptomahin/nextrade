// Import necessary dependencies
import React from "react";
import { MdNotifications, MdNotificationsActive } from "react-icons/md";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Link from "next/link";
import useNotificationData from "@/hooks/useNotificationData";
import useSecureAPI from "@/hooks/useSecureAPI";
import toast from "react-hot-toast";
import { BsThreeDotsVertical } from "react-icons/bs";

const TradersNotification = () => {
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [openDeleteOptions, setOpenDeleteOptions] = React.useState({});
  const { notificationsData, notificationRefetch } = useNotificationData();
  const secureAPI = useSecureAPI();

  // Initialize cardValue with initial values based on the length of notificationsData
  const initialCardValue = Array.isArray(notificationsData)
    ? notificationsData.reduce((acc, asset) => {
        return { ...acc, [asset._id]: 0 };
      }, {})
    : {};

  const [cardValue, setCardValue] = React.useState(initialCardValue);

  // Function to handle notification deletion
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

  // Click event handler for notification cards
  const handleCardClick = (asset) => {
    // Your logic for handling click on notification card
    // For example, increment or decrement value
    const updatedValue = cardValue[asset._id] ? cardValue[asset._id] - 1 : 1;
    setCardValue((prevCardValue) => ({
      ...prevCardValue,
      [asset._id]: updatedValue,
    }));

    // Update notificationsData?.length based on the click
    notificationRefetch(); // Assuming notificationRefetch is a function that refetches notificationsData
  };

  console.log(initialCardValue);

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
        {notificationsData?.length ? (
          <p className="absolute left-3 -top-2 font-semibold w-5 h-5 p-[2px] text-sm rounded-full bg-red-500 flex justify-center items-center">
            {Object.values(cardValue).reduce(
              (sum, count) => sum + count,
              notificationsData?.length
            )}
          </p>
        ) : (
          " "
        )}
      </button>
      {isNotificationOpen && (
        <div className="w-80 absolute overflow-x-hidden overflow-y-scroll max-h-[500px] top-[64px] right-24 transform translate-x-1/2 duration-200 bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree flex flex-col gap-2 rounded shadow-2xl shadow-gray-900">
          <div className="flex items-center justify-between border-b-2 border-darkThree px-4 py-3">
            <h2 className="font-semibold">Notifications</h2>
            <Link href={"/dashboard/settings"} className="cursor-pointer">
              <SettingsIcon />
            </Link>
          </div>
          {notificationsData?.length ? (
            <>
              {notificationsData?.map((asset) => (
                <div
                  onClick={() => handleCardClick(asset)}
                  key={asset._id}
                  className={`border-b border-darkThree px-4 py-1`}
                >
                  <div className="flex flex-col gap-1 pb-1">
                    <h2 className="text-sm font-medium">{asset.title}</h2>
                    <p className="text-gray-400 text-xs">{asset.description}</p>
                  </div>

                  <div className="flex items-ce justify-between">
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
                    <div className="relative">
                      <button
                        onClick={() => toggleDeleteOptions(asset._id)}
                        className="btn btn-sm text-base text-white bg-transparent hover:bg-transparent border-none outline-none px-0 "
                      >
                        <BsThreeDotsVertical />
                      </button>
                      {openDeleteOptions[asset._id] && (
                        <div className="absolute right-5 top-1 flex flex-col bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree font-medium rounded-md">
                          <button
                            onClick={() => handleDeleteNotification(asset._id)}
                            className="w-full btn btn-xs text-white/80 justify-end bg-[#ff5252] rounded-md hover:bg-[#ff5252] border-none"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <h2 className="text-center">No notification yet . . .</h2>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TradersNotification;
