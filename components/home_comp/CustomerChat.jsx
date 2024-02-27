import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const CustomerChat = () => {
  return (
    <>
      <FacebookProvider appId="429056069676911">
        <CustomChat
          pageId="108051777809659"
          loggedInGreeting="Welcome back! Seeking assistance? NexTrade team is here to help."
          loggedOutGreeting="Welcome back! Seeking assistance? NexTrade team is here to help."
        />
      </FacebookProvider>
    </>
  );
};

export default CustomerChat;
