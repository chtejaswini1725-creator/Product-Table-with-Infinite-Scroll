# Product Table with Infinite Scroll
- Use  https://dummyjson.com/products?limit=10&skip=10 to fetch a list of products.You’ll receive an object with a products array containing product data.

## Live Demo
https://product-table-with-infinite-scroll.vercel.app/

## Features
- Fetches products from DummyJSON API
- Displays data in a table
- Editable product title
- Infinite scrolling using Intersection Observer

## Tech Stack
- React (Vite)
- JavaScript
- Intersection Observer API

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
----
## License

This project is licensed under the MIT License.
