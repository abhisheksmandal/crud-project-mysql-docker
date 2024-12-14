# React MySQL CRUD Application with Docker

## 🚀 Project Overview

A full-stack CRUD (Create, Read, Update, Delete) application built with React, Node.js Express, and MySQL, containerized with Docker for easy development and deployment.

## 📋 Features

- User management with full CRUD operations
- React frontend with Vite
- Express.js backend
- MySQL database
- Docker containerization
- Tailwind CSS styling

## 🛠️ Technologies Used

- Frontend:
  - React (Vite)
  - Tailwind CSS
- Backend:
  - Node.js
  - Express.js
- Database:
  - MySQL
- Containerization:
  - Docker
  - Docker Compose

## 📦 Prerequisites

- Node.js (v14+)
- Docker
- Docker Compose

## 🔧 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/your-project-name.git
cd your-project-name
```

### 2. Environment Configuration

#### Create Environment Files

You'll need to create three `.env` files:

1. Root Directory (Docker) `.env`:

```env
# Docker Compose Environment Variables
MYSQL_ROOT_PASSWORD=your_root_password
MYSQL_DATABASE=your_database_name
MYSQL_USER=your_username
MYSQL_PASSWORD=your_user_password
```

2. Backend `.env` (./backend/.env):

```env
DB_HOST=mysql  # Use service name from docker-compose
DB_USER=your_username
DB_PASSWORD=your_user_password
DB_NAME=your_database_name
DB_PORT=3306
PORT=5000
```

3. Frontend `.env` (./frontend/.env):

```env
VITE_API_URL=http://localhost:5000
```

### 3. Docker Setup

#### Start MySQL Container

```bash
# Pull MySQL Docker Image
docker pull mysql:latest
```

```bash
# Using Docker Compose
docker-compose up -d
```

```bash
# Alternative Docker Run Command
docker run -d \
  --name mysql-container \
  -e MYSQL_ROOT_PASSWORD=your_root_password \
  -e MYSQL_DATABASE=your_database_name \
  -e MYSQL_USER=your_username \
  -e MYSQL_PASSWORD=your_user_password \
  -p 3306:3306 \
  mysql:latest
```

#### Get Docker Container IP

```bash
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id
```

### 4. Install Dependencies

#### Frontend Dependencies

```bash
cd frontend
npm install
```

#### Backend Dependencies

```bash
cd ../backend
npm install
```

### 5. Run the Application

#### Development Mode

```bash
# Frontend
cd frontend
npm run dev
```

```bash
# Backend (in another terminal)
cd backend
npm run start
```

#### Production Build

```bash
# Frontend Build
cd frontend
npm run build
```

```bash
# Backend Start with PM2
cd backend
npm install -g pm2
pm2 start server.js
```

## 🔒 Security Considerations

- Use strong, unique passwords
- Never commit `.env` files to version control
- Implement additional backend security middleware
- Use HTTPS in production

## 🚀 Deployment

- AWS EC2
- DigitalOcean Droplet
- Heroku
- Vercel (Frontend)
