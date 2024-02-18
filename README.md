## [NexTrade | A online trading and business platform.](https://nextrade-front-end.vercel.app/)

## Description
NexTrade aims to provide a comprehensive online platform for businesses and traders to engage in secure and efficient trading activities. The platform will facilitate the buying and selling of various products and services while offering user-friendly features for seamless transactions.
## Live Link

   [NexTrade Live](https://nextrade-front-end.vercel.app/)

## Server Side

  [NexTrade Server Code](https://github.com/diptomahin/nexTrade-server)


## NexTrade Homepage

![Home Page of NexTrade](/assets//NexTrade%20Mocup.png)

## Key Features

- **Functionality**
  - Trade  Management - Traders can buy and sell assets from and to other traders.
  - Price tracking - Treaders can track real-time values of their assets as well as other assets from the platform.
  - Messaging System - Real-time messaging using WebSocket technology for immediate communication between buyers and sellers.
  - Payment Integration - Integration with Stripe for secure and efficient payment processing.
  - Admin Dashboard - Admins have a dashboard for user management, transaction monitoring, and policy enforcement.e
  - Advertising Banner in home page and many more.


- **Trader Role(Dashboard)**
  - Update profile information such as name, photo.
  - Treaders can buy and sell assets and manage their assets.

- **Admin Role(Dashboard)**
   - Platform administrators are responsible for managing users, and transactions, and enforcing policies.
   - Add another admin or moderator.
   - See different kind of statics, like trader count chart, total transaction amount and user count chart.

- **Authentication:**
  - Gmail and Email/Password authentication system.
  - Implement JWT(Json Web Token) with private route.
  - Utilizes Firebase Authentication for secure user registration and login functionalities.


- **Payment System:**
  - Seamless completion of purchases with the integrated Stripe payment system.
  - Confirm personal information and address details during the checkout process.

- **Responsive Design:**
  - Enjoy a seamless experience across various devices.

## Technologies Used

 - **Frontend:** JavaScript, Next.js, React.js, Tailwind CSS and Material UI.
 - **Backend:** Node.js, Express.js.
 - **Database:** MongoDB.
 - **Authentication:** Firebase Authentication with JWT.
- **Host:** Vercel.

## Admin Credentials
- **Username:** nextrade@gamil.com
- **Password:** Nexttrade123!@#

## Challenges
- One of the most hardest challenge in this project was to implement subscription method.

## How to Run Locally
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure environment variables for MongoDB, Firebase, and Stripe.
4. Run the development server using `npm run dev`.

## Environment Variables
1. **Firebase**
- NEXT_PUBLIC_VITE_apiKey=*************
- NEXT_PUBLIC_VITE_authDomain=********
- NEXT_PUBLIC_VITE_projectId=***********
- NEXT_PUBLIC_VITE_storageBucket=******
- NEXT_PUBLIC_VITE_messagingSenderId=*
- NEXT_PUBLIC_VITE_appId=***************
- NEXT_STRIPE_PUBLIC_KEY=**************
