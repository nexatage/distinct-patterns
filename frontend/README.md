## Getting Started

Follow the steps below to set up the project locally:
### Installation

1. **Clone the repository**:

    ```bash
    git clone <repository-url>
    ```

2. **Setting up the Frontend**:

    ```bash
    cd frontend
    npm install
    npm run dev
    ```

    The frontend will be running on `http://localhost:3000`.

# Frontend (FE) Tasks for Fashion Store Ecommerce

## MVP (Basic React Setup)

### 1. Initial Setup
- [ ] Initialize React project.
- [ ] Set up basic file structure (`components`, `pages`, `services`, etc.).
- [ ] Configure React Router for navigation between pages (Home, Product, Cart).

### 2. Basic Pages and Components
- [ ] **Home Page**: Display featured products and categories.
- [ ] **Product Page**: Show individual product details (image, price, description) with an "Add to Cart" button.
- [ ] **Cart Page**: Allow users to view products added to the cart, update quantities, and remove items.
- [ ] **Login/Signup Pages**: Implement forms for user authentication (signup/login).
  
### 3. State Management
- [ ] Use React Context for managing global state (user authentication, cart).
- [ ] Store user session and cart data in local storage.

### 4. API Integration
- [ ] **Product Fetching**: Connect to backend to fetch product listings.
- [ ] **User Authentication**: Connect to backend for user login/signup.
- [ ] **Cart Management**: Sync cart state with backend (add/remove items).

### 5. UI/UX
- [ ] Implement a responsive navbar with links to home, cart, and user profile.
- [ ] Ensure basic mobile responsiveness (Flexbox/Grid and media queries).
- [ ] Create a loading spinner for API calls (products, user auth).

---

## Post-MVP: Improvements and New Features(Future improvements)

### 1. Enhancing Product Display
- [ ] **Search & Filters**: Add a search bar and product filtering options (category, price, etc.).
- [ ] **Pagination**: Paginate product listings to handle large datasets.
- [ ] **Product Reviews**: Display average product ratings and allow users to leave reviews (pending BE implementation).

### 2. Enhancing User Experience
- [ ] **Wishlist**: Add functionality for users to save products to a wishlist.
- [ ] **Order History**: Display a user’s past orders and their statuses.

### 3. Optimization
- [ ] Lazy load images for better performance on mobile devices.
- [ ] Add skeleton loaders for a better user experience while waiting for data.

### 4. Future Features
- [ ] **Product Recommendations**: Display similar or related products based on user activity.
- [ ] **Payment Gateway**: Add frontend for payment integration once backend support is ready (e.g., Stripe, PayPal).
