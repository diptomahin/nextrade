
import React, { useEffect } from "react";
import { MdNotifications, MdNotificationsActive } from "react-icons/md";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Link from "next/link";
import useNotificationData from "@/hooks/useNotificationData";

const TradersNotification = () => {
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [isOpenDot, setIsOpenDot] = React.useState(false);
  const {notificationsData,notificationRefetch}=useNotificationData();

  

  console.log(notificationsData);
 
  
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
        {
          notificationsData?.length ? <p className="absolute left-3 -top-2 font-semibold w-5 h-5 p-[2px] text-sm  rounded-full bg-red-500 flex justify-center items-center">{ notificationsData?.length }</p> : ' '
        }
        
      </button>
      {isNotificationOpen && (
        <div className="absolute overflow-y-auto max-h-[500px] top-12 md:right-40 right-24 transform translate-x-1/2 duration-200  rounded bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree flex flex-col gap-2 p-3 md:w-96 w-80  ">
          {/* Content of the dropdown */}

          {/* box header */}
          <div className=" flex items-center justify-between">
            <h2 className="font-semibold">Notifications</h2>
            <Link href={'/dashboard/settings'} className="cursor-pointer"> 

            <SettingsIcon />
            </Link>
          </div>

          <div className="bg-darkThree p-[0.8px] my-2"></div>
          {/*  */}
          
          {notificationsData?.length ? <>
            {notificationsData.map(asset=>
              // cart section
              <div key={asset._id} className="  flex justify-between gap-2 bg-darkBG border border-darkThree p-4 rounded-xl">
                <div className=" flex items-center gap-3">
                  <NotificationsNoneIcon/>
                  <div>
                    <h2 className=" font-medium">{asset.title}</h2>
                    <p className=" text-gray-400 text-sm">
                      {asset.description}
                    </p>
                  </div>
                </div>
                {/* 3 dots button */}
                <div className="relative left-5 ">
                  <button
                    onClick={() => setIsOpenDot(!isOpenDot)}
                    className="btn btn-sm text-base text-white bg-transparent hover:bg-transparent border-none outline-none  "
                  >
                    <MoreVertIcon className="cursor-pointer"/>
                  </button>
                  {isOpenDot && (
                    <div className="absolute right-10 top-0 flex flex-col  bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree font-medium rounded-md">
                      <button className="w-full btn btn-sm text-sm text-white/80 justify-end bg-transparent rounded-md hover:bg-[#ff5252] border-none pr-6 pl-8 ">
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>)}
            </>
             : <>
            <h2 className=" text-center">No notification yet . . .</h2>
            </>}
          
          
        </div>
      )}
    </div>
  );
};

export default TradersNotification;
