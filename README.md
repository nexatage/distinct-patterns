This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:
# Distinct Patterns Ecommerce Application

Welcome to the **Fashion Store Ecommerce Application**! 


🎉 This repository holds everything you need to build the complete ecommerce platform, from browsing products to managing shopping carts and processing orders.



 We’re using **React** for the frontend and **Sanity** for the backend dashboard, along with MongoDB as the database. 
 
 
 The project is structured for scalability and ease of development, with both the frontend and backend clearly separated.

---

## Project Overview

This project aims to build a fully functioning ecommerce platform with features such as product listings, shopping cart management, user authentication, and order processing. 


We are starting with an MVP (Minimum Viable Product) that will lay the foundation of the platform, and future versions will expand with more advanced features.

### Tech Stack:

- **Frontend**: React (with Context API for state management)

- **Backend**: Sanity (with MongoDB for data storage)

- **Database**: Sanity (for storing product, user, and order data)

- **Deployment**: Vercel for frontend

---

## MVP Features(The basic features we need)

The initial release will focus on the following core features to get the basic ecommerce functionality in place:

### Frontend (FE)
- **Product Listing**: Display fashion items with details like price, description, and image.

- **Cart Management**: Allow users to add products to a shopping cart, update quantities, and remove items.

- **User Authentication**: Enable user signup and login.

- **Checkout & Order Placement**: Let users proceed to checkout and place orders.

- **Responsive Design**: Ensure the app works seamlessly across devices (mobile, tablet, desktop).
1.Navbar
### Backend (BE)
- **Product Management**: Implement CRUD operations for products (Create, Read, Update, Delete).

- **User Authentication**: Secure user registration, login, and JWT token-based authentication.

- **Cart API**: Create API endpoints to add, update, and remove items in the user’s cart.

- **Order Management**: Track orders placed by users and their statuses.

- **Error Handling & Security**: Implement error handling and security measures like rate-limiting and JWT protection for APIs.

---

## Project Structure

The repository is organized into separate repositories for the **frontend** and **backend**, making it easy to maintain and develop each part independently.


## Link to the backend repo at
 https://github.com/abdulrahmansoyooye/distinct-patterns-backend.git



```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
