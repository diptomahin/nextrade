"use client";
import React from 'react';
import MessengerCustomerChat from "react-messenger-customer-chat";

const Chat = () => {
    return (
        <div className="App">
        <MessengerCustomerChat
          pageId="108051777809659"
          appId="748425737171828"
        />
      </div>
    );
};

export default Chat;