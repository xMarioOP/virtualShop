# 🌟 Virtual Shop

Welcome to **Virtual Shop**, an e-commerce web application built with **React**, **Vite**, and **TailwindCSS**. This project allows users to browse, filter products, view details, and manage their shopping cart dynamically.

---

## 🚀 Features

- **Product Listing**: Explore a diverse range of products fetched from a public API.
- **Search and Filter**: Easily search by title or filter products by category.
- **Product Detail View**: View detailed information about each product.
- **Shopping Cart**: Add products to the cart and review selections.
- **Checkout Side Menu**: Conveniently view and manage your cart.
- **Responsive Design**: A sleek and responsive UI, thanks to TailwindCSS.

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **TailwindCSS**
- **JavaScript (ES6+)**
- **API**: Data sourced from [Escuela JS API](https://api.escuelajs.co/api/v1/products).

---

## 📦 Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/xMarioOP/virtualShop.git

2. **Navigate to the project directory**:

   ```bash
   cd virtualShop

3. **Install dependencies**:

   ```bash
   npm install

4. **Start the development server**:

   ```bash
   npm run dev

5. Open your browser and go to http://localhost:3000

---

## 📊 Context API

The app utilizes the Context API for managing global state, including:

- **count**: Total items in the shopping cart.
- **productToShow**: Currently selected product for detailed viewing.
- **cartProducts**: Products added to the shopping cart.
- **order**: Details of completed orders.
- **items**: List of products fetched from the API.
- **filteredItems**: Products after applying search and filter criteria.

## 🔍 Filtering Functionality

The project supports filtering products by:

- **Search by Title**
- **Filter by Category**
- **Combined Filter**: Search by title and category simultaneously.

## 🌐 API

The product data is fetched from the Escuela JS API. Explore the API [here](https://api.escuelajs.co/api/v1/products).

## 🚀 Deployment

The project is deployed on GitHub Pages. View the live demo [here](https://xmarioop.github.io/virtualShop).

## 🙏 Acknowledgments

This project was inspired by the **React, Vite, and TailwindCSS** course from [Platzi](https://platzi.com/cursos/react-vite-tailwindcss/). Special thanks to the instructors for their valuable teachings.

## 🤝 How to Contribute

If you'd like to contribute:

1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature-name`)
3. **Commit your changes** (`git commit -m 'Add feature'`)
4. **Push the branch** (`git push origin feature-name`)
5. **Open a pull request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
