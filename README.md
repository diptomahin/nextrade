## [NexTrade | A online trading and business platform.](https://nextrade-front-end.vercel.app/)

## Description

NexTrade aims to provide a comprehensive online platform for businesses and traders to engage in secure and efficient trading activities. The platform will facilitate the buying and selling of various products and services while offering user-friendly features for seamless transactions.

## Live Link

[NexTrade Live](https://nextrade-front-end.vercel.app/)

## Server Side

[NexTrade Server Code](https://github.com/diptomahin/nexTrade-server)

## NexTrade Homepage

[![Home Page of NexTrade](https://i.postimg.cc/Z5v2wYKy/Screenshot.png)](https://postimg.cc/jDKM5bfs)

## Key Features

- **Functionality**

  - Trading page - Traders can buy and sell assets from trading page
  - Market page - Traders can explore all the assets available to the site in the market page and make fractional investment
  - portfolio Page - Assets bought from portfolio page willshown in the portfolio page and trader can exchange coin and sell bought assets from the merket page 
  - Price tracking - Treaders can track real-time values of their assets as well as other assets from the platform.
  - review System - Real-time review 
  - Payment Integration - Integration with Stripe for secure and efficient payment processing with deposit and withdrawal functionality
  - Academy page - Traders can get market insights and trading knowledge from academy page blogs 
  - Watchlist - Traders can add assets to watchlist for continues update
  - Notification - Real time notification form admin and trader for all kind of trading activity
  - profile - Profile can e viewed and updated from the profile page
  - Admin Dashboard - Admins have a dashboard for user management, academy management, review monitoring, transaction monitoring, and policy enforcement.e
  - Advertising Banner on the home page and many more.

- **Trader Role(Dashboard)**

  - Update profile information such as name, and photo.
  - Treaders can buy and sell assets and manage their assets.

- **Admin Role(Dashboard)**

   - Platform administrators are responsible for managing users, and transactions, and enforcing policies.
   - Add another admin or moderator.
   - Manage academy page and post blogs
   - See different kinds of statics, like trader count chart, total transaction amount, and user count chart.


- **Authentication:**

  - Gmail and Email/Password authentication system.
  - Implement JWT(Json Web Token) with private route.
  - Utilizes Firebase Authentication for secure user registration and login functionalities.

- **Payment System:**

  - Seamless completion of purchases with the integrated payment system.
  - Confirm personal information and address details during the checkout process.

- **Responsive Design:**
  - Enjoy a seamless browsing experience across any device in the world.

## Technologies Used

- **Frontend:** JavaScript, Next.js, React.js, Tailwind CSS and Material UI.
- **Backend:** Node.js, Express.js, Socket.IO.
- **Database:** MongoDB.
- **Authentication:** Firebase Authentication with JWT.
- **Host:** Vercel.

## Admin Credentials

- **Username:** admin@nextrade.com
- **Password:** Nextrade123!@#

## User Credentials

- **Username:** user@nextrade.com
- **Password:** Nextrade123!@#

## Challenges

- Implementing the Google translation feature and integrating Live Cryptocurrency APIs were among the toughest hurdles in this project. Ensuring our trading platform caters to international users necessitated the implementation of the Google Translate Widget, offering support for over 136 languages. This task posed a notable challenge due to the need for our website to be accessible in multiple languages worldwide.

## Contributor

- [Md. Nuruzzama](https://github.com/mdnuruzzamannirob)
- [Md. Saimur Rahaman](https://github.com/srssieam)
- [MD Tajul Islam](https://github.com/mdtajulislammt)
- [Ariful Islam](https://github.com/hellomrariful)
- [Julfiker Ali](https://github.com/jasaiful)
- [Mahin Ahmed Dipta](https://github.com/diptomahin)

## How to Run Locally

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure environment variables for MongoDB and Firebase.
4. Run the development server using `npm run dev`.

## Environment Variables

1. **Firebase**

- NEXT_PUBLIC_VITE_apiKey=**\*\***\*\***\*\***
- NEXT_PUBLIC_VITE_authDomain=\***\*\*\*\*\***
- NEXT_PUBLIC_VITE_projectId=\***\*\*\*\*\*\***
- NEXT_PUBLIC_VITE_storageBucket=**\*\*\***
- NEXT_PUBLIC_VITE_messagingSenderId=\*\*\*
- NEXT_PUBLIC_VITE_appId=**\*\***\*\*\***\*\***
- NEXT_STRIPE_PUBLIC_KEY=**\*\***\*\*\***\*\***
