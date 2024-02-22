// Import necessary dependencies
import React from "react";
import { MdNotifications, MdNotificationsActive } from "react-icons/md";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Link from "next/link";
import useNotificationData from "@/hooks/useNotificationData";
import useSecureAPI from "@/hooks/useSecureAPI";
import toast from "react-hot-toast";

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
    return hours >= 12 ? 'PM' : 'AM';
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
        className={`flex items-center text-white ${isNotificationOpen && "text-primary"}`}
      >
        {isNotificationOpen ? (
          <MdNotificationsActive className="w-6 h-6" />
        ) : (
          <MdNotifications className="w-6 h-6" />
        )}
        {notificationsData?.length ? (
          <p className="absolute left-3 -top-2 font-semibold w-5 h-5 p-[2px] text-sm rounded-full bg-red-500 flex justify-center items-center">
            {Object.values(cardValue).reduce((sum, count) => sum + count,notificationsData?.length)}
          </p>
        ) : (
          " "
        )}
      </button>
      {isNotificationOpen && (
        <div className="absolute overflow-y-auto max-h-[500px] top-12 md:right-40 right-24 transform translate-x-1/2 duration-200 rounded bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree flex flex-col gap-2 p-3 md:w-96 w-80  ">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Notifications</h2>
            <Link href={'/dashboard/settings'} className="cursor-pointer">
              <SettingsIcon />
            </Link>
          </div>
          <div className="bg-darkThree p-[0.8px] my-2"></div>
          {notificationsData?.length ? (
            <>
              {notificationsData.map((asset) => (
                <div onClick={() => handleCardClick(asset)} key={asset._id} className={`bg-darkBG border p-4 rounded-xl ${cardValue[asset._id] === 1 ? 'border-primary' : 'border-none'}`}>
                  <div className="flex justify-between gap-2 ">
                    <div className="flex items-center gap-3">
                      <NotificationsNoneIcon />
                      <div>
                        <h2 className="font-medium">{asset.title}</h2>
                        <p className="text-gray-400 text-sm">
                          {asset.description}
                        </p>
                      </div>
                    </div>
                    <div className="relative left-5">
                      <button
                        onClick={() => toggleDeleteOptions(asset._id)}
                        className="btn btn-sm text-base text-white bg-transparent hover:bg-transparent border-none outline-none"
                      >
                        <MoreVertIcon className="cursor-pointer" />
                      </button>
                      {openDeleteOptions[asset._id] && (
                        <div className="absolute right-10 top-0 flex flex-col bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree font-medium rounded-md">
                          <button
                            onClick={() => handleDeleteNotification(asset._id)}
                            className="w-full btn btn-sm text-sm text-white/80 justify-end bg-transparent rounded-md hover:bg-[#ff5252] border-none pr-6 pl-8"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="mt-2 text-gray-500 text-sm flex items-center justify-end gap-3">
                    {/* Date */}
                    <span>
                      {asset?.postedDate?.day || ' '}-{asset?.postedDate?.month || ' '}-{asset?.postedDate?.year || ' '}
                    </span>
                    {/* Time */}
                    <span>
                      {formatTime(asset?.postedDate?.hours || ' ')}:{padZero(asset?.postedDate?.minutes || ' ')} {getAmPm(asset?.postedDate?.hours || ' ')}
                    </span>
                  </p>
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
