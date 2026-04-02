# 📊 Finance Dashboard Backend API

A backend system for managing financial records, users, roles, and dashboard analytics.  
Built with **Node.js, Express, MongoDB, and Swagger**.

---

## 🚀 Live API

- **Base URL:**  
  https://finance-dashboard-backend-bcg3.onrender.com  

- **Swagger Docs:**  
  https://finance-dashboard-backend-bcg3.onrender.com/api-docs  

---

## 🔐 Test Credentials

Use the following user to test APIs:

- **Email:** test@gmail.com  
- **Password:** user123  

---

## 🧠 Features

### 1. User & Role Management
- Register/Login users
- Roles:
  - **Admin** → Full access
  - **Analyst** → Read + analytics
  - **Viewer** → Read only
- Activate/Deactivate users
- Update user roles

---

### 2. Financial Records
- Create records (Admin only)
- Get records with:
  - Pagination
  - Filters (type, category, date)
- Update/Delete records

---

### 3. Dashboard Analytics
- Total income
- Total expenses
- Net balance
- Category-wise totals
- Trends & recent activity

---

### 4. Access Control
- Role-based authorization using middleware
- Protected routes using JWT authentication

---

### 5. Validation & Error Handling
- Input validation for all APIs
- Proper HTTP status codes
- Meaningful error messages

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT
- **API Docs:** Swagger (swagger-ui-express)
- **Language:** TypeScript

---

## 📂 Project Structure

    src/
    ├── controllers/
    ├── middleware/
    ├── routes/
    ├── models/
    ├── config/
    ├── services/
    ├── app.ts
    └── server.ts



---

## 📌 API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Records
- `GET /api/records`
- `POST /api/records` (Admin)
- `PUT /api/records/:id` (Admin)
- `DELETE /api/records/:id` (Admin)

### Dashboard
- `GET /api/dashboard`

### Users (Admin only)
- `GET /api/users`
- `PATCH /api/users/:id/role`
- `PATCH /api/users/:id/status`

---

## 🔑 Authentication

All protected routes require:
Authorization: Bearer <JWT_TOKEN>


---

## ⚙️ Setup Instructions (Local)

```bash
# Clone repo
git clone <your-repo-url>

# Install dependencies
npm install

# Run development server
npm run dev