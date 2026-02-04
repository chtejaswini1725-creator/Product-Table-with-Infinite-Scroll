# React Product Table with Infinite Scroll

## 1. Overview
This project is a simple React application built to display product data fetched from a public API. The goal was to demonstrate practical frontend skills such as API integration, state management, editable UI elements, and infinite scrolling using the Intersection Observer API.  The application fetches product data from the DummyJSON API and displays it in a table with editable product titles. Additional products are loaded automatically as the user scrolls down.
- Use  https://dummyjson.com/products?limit=10&skip=10 to fetch a 
list of products.You’ll receive an object with a products array containing 
product data.
## 2. Tech Stack Used
- React (Vite)
- JavaScript (ES6+)
- HTML & CSS
- Browser Intersection Observer API
No third-party UI or table libraries were used, as per the assignment instructions

## 3. Codebase Structure
The project is structured to keep concerns separated and the code easy to understand.
```
src/
│
├── components/
│   └── ProductTable.jsx
├── hooks/
│   └── useInfiniteScroll.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```
## 4. Component Hierarchy
App.jsx : 
- Root component
- Handles API calls, pagination, and global state
- Manages the list of products and loading state

ProductTable.jsx: 
- Receives product data as props
- Renders the table
- Handles inline editing of the product title
  
useInfiniteScroll.js:
- Custom hook that uses Intersection Observer
- Triggers loading more data when the user scrolls to the bottom
## 4. State Management
State is managed using React Hooks:
- products → stores all fetched product data
- skip → tracks pagination offset for the API
- loading → prevents duplicate API calls during fetch
State updates are handled immutably using setState callbacks to ensure predictable behavior.
## 5. API Integration
 The application uses the following API: https://dummyjson.com/products?limit=10&skip={value}
 - Products are fetched in batches of 10
 - Pagination is handled using the skip parameter
 - Data is appended to the existing product list for infinite scrolling
## 6. Infinite Scrolling Implementation
Infinite scrolling is implemented using the **Intersection Observer API:**
- A div at the bottom of the table acts as a loader reference
- When the loader enters the viewport, the next batch of products is fetched
- This approach is efficient and avoids scroll event listeners. A custom hook (useInfiniteScroll) was created to keep this logic reusable and clean
## 7. Editable Product Title
- The Title field is rendered as an input element
- Users can edit the product name directly in the table
- Changes are stored locally in React state
- No API update is performed, as the API is read-only
This demonstrates controlled components and state updates in React.
## 8. Styling Approach
Styling is kept minimal and readable:
- Basic table layout
- Clear column separation
- Simple hover effects for readability
- Responsive table wrapper for smaller screens
The focus was on functionality and clean code rather than visual design.
## 9. Key Technical Decisions
- Vite was chosen for faster setup and development performance
- Functional components and hooks were used for simplicity and modern React practices
- Custom hook for infinite scroll improves reusability and separation of concerns
- No external libraries were used to strictly follow assignment constraints

## Live Demo
https://product-table-with-infinite-scroll.vercel.app/

## Features
- Fetches products from DummyJSON API
- Displays data in a table
- Editable product title
- Infinite scrolling using Intersection Observer

## Setup 
Step 1: Create Project (Vite – preferred)
```bash
npm create vite@latest product-table -- --template react
cd product-table
```
Step 2: Install the project dependencies
```bash
npm install
```
Step 3: Running the Project  in development mode
```bash
npm run dev
```
## Approach
- Used functional components and hooks
- Separated infinite scroll logic into a custom hook
- Managed editable state locally without mutating API data
  
**Development Approach**
- Split UI and logic for maintainability
- Used Intersection Observer for efficient infinite scrolling
- Maintained immutability while editing product titles

**Challenges**
- Preventing repeated API calls
- Correctly attaching observer to last row

**Solutions**
- Introduced loading flag
- Used callback + custom hook abstraction

## 11. Conclusion
This assignment demonstrates my ability to:
- Work with APIs
- Manage state effectively in React
- Implement real-world UI features like infinite scrolling
- Write clean, readable, and maintainable frontend code
----
## License

This project is licensed under the MIT License.
