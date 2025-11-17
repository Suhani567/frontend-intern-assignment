# Mini Product Dashboard

A modern, responsive React application for browsing and managing products with a beautiful dark/light theme toggle.

# Overview of the Dashboard 

## Light Mode 
<img width="1639" height="912" alt="image" src="https://github.com/user-attachments/assets/c03a2d5f-2b98-4921-9828-b208c61991e4" />

## Dark Mode 
<img width="1475" height="906" alt="image" src="https://github.com/user-attachments/assets/38734016-bbd3-4d77-9762-a20cc0a1647a" />

## 🚀 Features

- **Product Catalog**: Browse products from the FakeStore API
- **Search Functionality**: Search products by title
- **Category Filtering**: Filter products by categories
- **Price Sorting**: Sort products by price (low to high, high to low)
- **Pagination**: Navigate through products with 6 products per page in a 3x2 grid layout
- **Product Details Modal**: View detailed product information
- **Theme Toggle**: Switch between light and dark modes
- **Responsive Design**: Works on desktop and mobile devices
- **Skeleton Loading**: Smooth loading states with skeleton placeholders
- **Modern UI**: Clean, accessible design with smooth animations
- **Logo Display**: Custom logo in the header

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **FakeStore API** - Product data source
- **ESLint** - Code linting

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Suhani567/frontend-intern-assignment.git
cd frontend-intern-assignment
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5177](http://localhost:5177) in your browser

## 🏗️ Build for Production

```bash
npm run build
```

## 📱 Usage

- **Search**: Type in the search bar to find products by title
- **Filter**: Use the category dropdown to filter by product categories
- **Sort**: Sort products by price using the sort dropdown
- **Pagination**: Use the pagination controls to navigate through pages (6 products per page)
- **Theme**: Click the theme toggle button to switch between light and dark modes
- **View Details**: Click "View Details" on any product card to see more information

## 🎨 Theme System

The app supports both light and dark themes with CSS custom properties for consistent theming across all components.

## 📁 Project Structure

```
src/
├── components/
│   ├── ProductCard.jsx      # Individual product display
│   ├── ProductModal.jsx     # Product details modal
│   ├── SearchBar.jsx        # Search input component
│   ├── FilterBar.jsx        # Category filter dropdown
│   ├── SortBar.jsx          # Price sorting dropdown
│   ├── Pagination.jsx       # Pagination component for navigating pages
│   ├── ThemeToggle.jsx      # Theme switcher
│   └── SkeletonLoader.jsx   # Loading skeleton
│
├── pages/
│   └── Dashboard.jsx        # Main dashboard page
├── styles/
│   ├── components.css       # Component-specific styles
│   └── dashboard.css        # Dashboard layout styles
├── App.jsx                  # Main app component
├── index.css                # Global styles and theme variables
└── main.jsx                 # App entry point
```

## 🔧 Development

- Uses Vite for fast development and building
- ESLint for code quality
- Hot module replacement for instant updates
- Responsive design with mobile-first approach

## 📄 License

This project is for educational purposes as part of a frontend internship assignment.
