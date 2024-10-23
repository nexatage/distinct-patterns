# Distinct Patterns Ecommerce Application

Welcome to the **Fashion Store Ecommerce Application**! 🎉 This repository holds everything you need to build the complete ecommerce platform, from browsing products to managing shopping carts and processing orders. We’re using **React** for the frontend and **Deno** for the backend, along with MongoDB as the database. The project is structured for scalability and ease of development, with both the frontend and backend clearly separated.

---

## Project Overview

This project aims to build a fully functioning ecommerce platform with features such as product listings, shopping cart management, user authentication, and order processing. We are starting with an MVP (Minimum Viable Product) that will lay the foundation of the platform, and future versions will expand with more advanced features.

### Tech Stack:

- **Frontend**: React (with Context API for state management)
- **Backend**: Deno (with MongoDB for data storage)
- **Database**: MongoDB (for storing product, user, and order data)
- **Deployment**: Vercel for frontend, and Heroku/DigitalOcean for backend (MVP)

---

## MVP Features(The basic features we need)

The initial release will focus on the following core features to get the basic ecommerce functionality in place:

### Frontend (FE)
- **Product Listing**: Display fashion items with details like price, description, and image.
- **Cart Management**: Allow users to add products to a shopping cart, update quantities, and remove items.
- **User Authentication**: Enable user signup and login.
- **Checkout & Order Placement**: Let users proceed to checkout and place orders.
- **Responsive Design**: Ensure the app works seamlessly across devices (mobile, tablet, desktop).

### Backend (BE)
- **Product Management**: Implement CRUD operations for products (Create, Read, Update, Delete).
- **User Authentication**: Secure user registration, login, and JWT token-based authentication.
- **Cart API**: Create API endpoints to add, update, and remove items in the user’s cart.
- **Order Management**: Track orders placed by users and their statuses.
- **Error Handling & Security**: Implement error handling and security measures like rate-limiting and JWT protection for APIs.

---

## Project Structure

The repository is organized into separate directories for the **frontend** and **backend**, making it easy to maintain and develop each part independently.

```bash
/project-root
│
├── /backend                  # Deno backend code
│   ├── /src
│   │   ├── /controllers      # API route controllers
│   │   ├── /models           # MongoDB schemas for products, users, orders
│   │   ├── /middlewares      # JWT authentication, request validation, etc.
│   │   ├── /routes           # Define API routes (products, users, orders)
│   │   ├── /config.ts        # Environment variables and configurations

│   ├── deno.json             # Deno dependencies manifest
│   └── README.md             # Backend-specific documentation
│
├── /frontend                 # React frontend code
│   ├── /public               # Static assets (images, favicon, etc.)
│   ├── /src
│   │   ├── /assets           # Handles static files (e.g., images, loaders, videos)
│   │   ├── /components       # Reusable UI components (e.g., buttons, product cards)
│   │   ├── /pages            # Page components (e.g., Home, Product, Cart)
│   │   ├── /services         # Handles API requests to the backend
│   │   ├── /styles           # Global CSS and TailwindCSS configurations
│   ├── /App.jsx              # Handles Routes (product,cart,home)
│   ├── /main.jsx             # Handles main react configurations 
│   ├── package.json          # Frontend dependencies and scripts
│   └── README.md             # Frontend-specific documentation
│
├── /docs                     # General project documentation
│   ├── roadmap.md            # Roadmap for future development
│   ├── API.md                # API documentation for frontend-backend interaction
└── README.md             # Main project readme  

```
### Contribution Guidelines

We welcome contributions from the community! Here’s how you can contribute:

1. **Fork the repository** and create a new branch for your feature or bug fix.
2. Ensure your code follows our style guidelines and is well-documented(for easy development, every decision you make should be written in the README.md file, for FE & BE).


 **A MUST READ FOR EVERYONE**

 checkout the README.md file on the FE folder for the frontend guys
 checkout the README.md file on the BE folder for the backend guys



### General Code Guidelines

1. **Commit Messages**: Use [better-commits](https://github.com/Everduin94/better-commits) for structured commit messages.
2. **Issues**: For every feature or bug fix, create an issue and reference it in your commit.
3. **Optional**: Sign your commits for additional security.


## Resources
1. [Guideline on implementing auth in web apps](https://thecopenhagenbook.com/). **MUST READ FOR ALL DEVELOPERS.**
2. Figma link from the UI/UX guy
   - link: ``


!!!Have a nice day!!!