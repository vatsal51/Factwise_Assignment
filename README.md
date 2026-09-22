# FactWise Employee Dashboard

A responsive, high-performance employee analytics and management dashboard built with **React 19**, **Vite**, and **AG Grid**.

---

## 🚀 Features

- **Interactive AG Grid Table**: Sortable and filterable data grid displaying employee details including ID, Name, Department, Role, Salary, Status, and more.
- **Real-Time Quick Search**: Debounced quick search to filter across all records efficiently.
- **Key Metric Summary Cards**: Visual highlights displaying:
  - Total Employees
  - Average Salary
  - Active Employees
- **Fast Build & Hot Module Replacement**: Powered by Vite for sub-second server startup and instant HMR.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Tooling**: [Vite](https://vite.dev/)
- **Data Grid**: [AG Grid React](https://www.ag-grid.com/react-data-grid/) (v34)
- **Utilities**: [Lodash](https://lodash.com/) (debouncing)
- **Styling**: Modern CSS & AG Grid Material Theme

---

## 📋 Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher recommended) and `npm` installed on your machine.

Verify installation:
```bash
node -v
npm -v
```

---

## ⚡ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/vatsal51/Factwise_Assignment.git
cd Factwise_Assignment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch the Application (Development Mode)
Start the local Vite development server:
```bash
npm run dev
```

The application will launch automatically at:
```
http://localhost:3000
```
*(If it does not open automatically, click the URL in your terminal or paste it into your browser).*

---

## 📦 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with HMR on `http://localhost:3000` |
| `npm run build` | Bundles the application for production into the `dist/` directory |
| `npm run preview` | Locally serves the production build for validation |

---

## 📁 Project Structure

```
Factwise_Assignment/
├── index.html              # HTML entry point (Vite)
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── public/                 # Static assets (favicons, manifests)
└── src/
    ├── config/
    │   └── gridConfig.jsx  # AG Grid column definitions and configuration
    ├── hooks/
    │   ├── useEmployeeData.js # Data fetching and state management hook
    │   └── useSearch.js       # Debounced search logic
    ├── App.jsx             # Main dashboard view
    ├── App.css             # Dashboard styling
    ├── constants.js        # Global constants and styling tokens
    ├── data.json           # Mock employee dataset
    ├── dataUtils.js        # Metric computation utilities
    ├── index.jsx           # React DOM root entry point
    ├── index.css           # Base styles
    └── SummaryCard.jsx     # Summary statistic card component
```
