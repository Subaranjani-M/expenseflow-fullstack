# ExpenseFlow 💸
> **Track smarter. Spend better.**

ExpenseFlow is a modern, responsive, production-ready full-stack personal finance and expense tracker web application. It empowers individuals to manage their cash flow, categorize transactions, set monthly budgets with proactive threshold warnings, and gain deep financial clarity through interactive charts and real-time calculated insights.

---

## 🚀 Features

- **Modern SaaS Financial Dashboard**:
  - Real-time summary cards: **Total Balance**, **Total Income**, **Total Expenses**, and **Monthly Budget**.
  - Dynamic progress tracking with color-graded visual indicators and threshold status badges.
  - Recent transactions list with type indicators and quick details.
  - **Dynamic Real-Time Insights**: Automatically calculated statistics based on actual spending habits (e.g. highest spending category, month-over-month variances, savings rate, budget pacing).

- **Complete Transaction Management**:
  - Full CRUD: Add, View, Edit, and Delete transactions.
  - Double-confirmation modal before permanently deleting transactions.
  - Multi-dimensional filters: Transaction Type (Income/Expense), Category, Payment Method, Date Range.
  - Full-text search matching transaction title, category, or notes.
  - Sorting by Newest, Oldest, Highest Amount, or Lowest Amount.
  - Support for custom user-created categories.

- **Smart Budget Planning**:
  - Dedicated monthly budgeting page with month and year selector.
  - Multi-tier visual spending warnings:
    - **Below 70%**: Normal status ("Spending is on track")
    - **70%–90%**: Warning ("You're approaching your monthly budget")
    - **Above 90%**: Danger ("You've almost reached your monthly budget")
    - **100% or above**: Exceeded ("Monthly budget exceeded")
  - Non-blocking design: allows recording of legitimate expenses even when exceeding budget.
  - Built-in 50/30/20 financial rule guide and historical budget tracking.

- **Visual Analytics**:
  - **Expense Breakdown**: Interactive Donut/Pie chart by category with dynamic legend.
  - **Income vs Expense**: Monthly comparison bar chart.
  - **Spending Trend**: Trajectory area chart mapping daily/monthly expenditures.
  - Timeframe selector: *This Week*, *This Month*, *Last Month*, *Last 3 Months*, *Last 6 Months*, *This Year*.
  - Ranked category breakdown table with percentage, count, and total spend.

- **Multi-Currency & Customization**:
  - Instant currency switching: **INR (₹)**, **USD ($)**, **EUR (€)**, **GBP (£)**, **AED (د.إ)**, **CAD (CA$)**, **AUD (A$)**, **JPY (¥)**, **SGD (S$)**, **CHF (CHF)**.
  - Persisted Dark & Light mode toggle with smooth glassmorphism and subtle shadows.
  - User profile management with password changes and custom categories manager.

- **Security & Architecture**:
  - Password hashing with **bcryptjs** (salt rounds: 10).
  - Stateless authentication with **JSON Web Tokens (JWT)**.
  - Strict server-side ownership verification: users can only read, write, update, or delete their own records.
  - **Helmet.js** security headers, **CORS** whitelisting, and **Express Rate Limiting**.
  - Centralized Mongoose error handling.
  - Seamless zero-config database startup with automatic embedded MongoDB fallback if a local MongoDB service is not running.

---

## 🛠️ Technology Stack

### Frontend
- **React.js 19**
- **Vite 8**
- **Tailwind CSS 3** (with custom typography, gradients, and dark mode class strategy)
- **React Router 7**
- **Axios** (with Bearer token request interceptor and 401 response handling)
- **Recharts** (Donut, Bar, Area, and Line charts)
- **Lucide React** (modern iconography)

### Backend
- **Node.js** (ES Modules)
- **Express.js** (REST API architecture)
- **Mongoose & MongoDB** (with MongoDB Memory Server fallback for out-of-the-box local development)
- **JSON Web Token (JWT)** & **bcryptjs**
- **Helmet**, **Morgan**, **Express Rate Limit**, and **CORS**

---

## 📁 Folder Structure

```
d:/My website/
├── client/                      # React Frontend Application
│   ├── public/                  # Static assets & SVG logo
│   │   └── logo.svg
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── BudgetModal.jsx
│   │   │   ├── BudgetProgress.jsx
│   │   │   ├── CategoryIcon.jsx
│   │   │   ├── DeleteModal.jsx
│   │   │   ├── EmptyState.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── MobileNav.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── SummaryCard.jsx
│   │   │   └── TransactionModal.jsx
│   │   ├── context/             # React Context Providers
│   │   │   ├── AuthContext.jsx
│   │   │   ├── CurrencyContext.jsx
│   │   │   ├── ThemeContext.jsx
│   │   │   └── ToastContext.jsx
│   │   ├── layouts/             # Master layout shells
│   │   │   └── DashboardLayout.jsx
│   │   ├── pages/               # Application Views
│   │   │   ├── Analytics.jsx
│   │   │   ├── Budget.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Landing.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Transactions.jsx
│   │   ├── services/            # Axios API layer
│   │   │   └── api.js
│   │   ├── utils/               # Constants & Formatters
│   │   │   ├── constants.js
│   │   │   └── formatters.js
│   │   ├── App.jsx              # Routing & Provider setup
│   │   ├── index.css            # Tailwind & Glassmorphism styles
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/                      # Express Backend REST API
│   ├── config/
│   │   └── db.js                # MongoDB connection + Memory Server fallback
│   ├── controllers/             # Request handlers
│   │   ├── analyticsController.js
│   │   ├── authController.js
│   │   ├── budgetController.js
│   │   ├── transactionController.js
│   │   └── userController.js
│   ├── middleware/              # Auth & Error handling
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/                  # Mongoose Schemas & Indexes
│   │   ├── Budget.js
│   │   ├── Transaction.js
│   │   └── User.js
│   ├── routes/                  # Express REST routes
│   │   ├── analyticsRoutes.js
│   │   ├── authRoutes.js
│   │   ├── budgetRoutes.js
│   │   ├── transactionRoutes.js
│   │   └── userRoutes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js                # Server entry point
│
├── test-e2e.js                  # Automated End-to-End API verification suite
├── .gitignore
├── .env.example
├── package.json                 # Workspace root package coordinating scripts
└── README.md
```

---

## ⚙️ Environment Variables

### Server (`server/.env`)
Create a `.env` file in the `server/` directory:

```env
PORT=5000
NODE_ENV=development

# MongoDB Connection
# Set to your MongoDB Atlas connection string or local mongod URI.
# If omitted or unavailable, the backend automatically starts an in-memory MongoDB instance.
MONGODB_URI=mongodb://127.0.0.1:27017/expenseflow

# JWT Secret
JWT_SECRET=expenseflow_super_secret_jwt_key_2026_production_style
JWT_EXPIRE=30d

# Allowed CORS Origins (comma-separated)
ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
```

### Client (`client/.env`)
Create a `.env` file in the `client/` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 📦 Installation & Setup

### Prerequisites
- **Node.js**: v18.0.0 or later (LTS recommended)
- **npm**: v9.0.0 or later

### 1. Install All Dependencies

From the project root:
```bash
# Install workspace dependencies
npm install

# Install server dependencies
cd server
npm install
cd ..

# Install client dependencies
cd client
npm install
cd ..
```

---

## 🏃 Running the Application

### Option A: Run Both Frontend and Backend Concurrently (Recommended)
From the root directory:
```bash
npm run dev
```

### Option B: Run Services Separately

**1. Start the Backend API (Port 5000):**
```bash
cd server
npm run dev
```

**2. Start the Frontend Vite Server (Port 5173):**
```bash
cd client
npm run dev
```

Open your browser at **[http://localhost:5173](http://localhost:5173)** to explore ExpenseFlow.

---

## 🧪 Automated Testing

An end-to-end programmatic verification suite is included in `test-e2e.js`. It tests:
- Server health check
- User registration and password hashing
- JWT generation and login
- Income and Expense transaction creation
- Custom category handling
- Transaction updates and deletions
- Monthly budget upsert and threshold calculations
- Analytics summary and dynamic real insights
- User profile and currency preference updates

To execute the test suite:
```bash
node test-e2e.js
```

---

## 📡 REST API Overview

### Authentication (`/api/auth`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `POST` | `/api/auth/register` | Register new user account | Public |
| `POST` | `/api/auth/login` | Authenticate user & issue JWT | Public |
| `GET` | `/api/auth/me` | Fetch authenticated user profile | Private |

### Transactions (`/api/transactions`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/api/transactions` | Query, filter, search, & sort transactions | Private |
| `POST` | `/api/transactions` | Record new transaction | Private |
| `GET` | `/api/transactions/:id` | Get single transaction by ID | Private |
| `PUT` | `/api/transactions/:id` | Update transaction | Private |
| `DELETE` | `/api/transactions/:id`| Permanently delete transaction | Private |

### Budget (`/api/budget`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/api/budget` | Get budget & real spending progress for month | Private |
| `POST` / `PUT` | `/api/budget` | Set or update monthly budget target | Private |
| `GET` | `/api/budget/history` | List all historical budgets | Private |

### Analytics & Insights (`/api/analytics`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/api/analytics/summary` | Balance, Income, Expense & Budget totals | Private |
| `GET` | `/api/analytics/categories`| Category spend breakdown for timeframe | Private |
| `GET` | `/api/analytics/trends` | Daily/Monthly spending trajectories | Private |
| `GET` | `/api/analytics/insights` | Real-time computed financial insights | Private |

### User Profile (`/api/users`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/api/users/profile` | Get full profile with preferences | Private |
| `PUT` | `/api/users/profile` | Update name, currency, custom categories| Private |
| `PUT` | `/api/users/change-password` | Change account password | Private |

---

## 🎨 UI & Design Principles

- **Primary Accent**: Violet / Purple (`#7c3aed`) representing financial clarity and precision.
- **Semantic Indicators**: Emerald (`#10b981`) for positive cash inflow; Rose (`#ef4444`) for spending outflow.
- **Typography**: Clean, geometric modern typography with **Plus Jakarta Sans** and **Inter**.
- **Dark Mode**: Fully implemented with CSS class strategy and soft slate backgrounds (`#020617` / `#0f172a`).
- **Responsive**: Fluid adaptation across desktop widescreen, tablet, and mobile devices (with adaptive drawer and bottom navigation).

---

## 🔮 Future Enhancements
- Receipt attachment uploads with OCR receipt scanning.
- Recurring transaction automation (e.g. monthly subscriptions, rent).
- Export to CSV / Excel spreadsheet and PDF financial statements.
- Multi-currency live exchange rate API conversion.
