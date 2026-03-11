# AI Code Reviewer

A full-stack web application that provides AI-powered code reviews. Paste your code, select the language, and get instant feedback on bugs, quality, and performance from **DeepSeek R1**.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS, Monaco Editor, Framer Motion
- **Backend**: Node.js, Express, Axios
- **AI API**: OpenRouter (deepseek/deepseek-r1:free)

## Features
- **Monaco Code Editor**: Professional editing experience with syntax highlighting.
- **AI Analysis**: Deep analysis of code for bugs, improvements, and performance.
- **Optimized Versions**: Get a cleaner, more efficient version of your code.
- **Rich UI**: Modern, responsive design with smooth animations and glassmorphism.

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- An API key from [OpenRouter](https://openrouter.ai/).

## Setup Instructions

### 1. Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file (already initialized as a template):
   - Update `OPENROUTER_API_KEY` with your actual key.
4. Start the backend:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup
1. Open a new terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm run dev
   ```

## Deployment

This project is optimized for split deployment: **Backend on Render** and **Frontend on Vercel**.

### 1. Backend Deployment (Render)
1.  Connect your repository to [Render](https://render.com/).
2.  Choose **Web Service**.
3.  Set **Root Directory** to `backend`.
4.  **Runtime**: `Node`.
5.  **Build Command**: `npm install`.
6.  **Start Command**: `npm start`.
7.  **Environment Variables**:
    *   `OPENROUTER_API_KEY`: Your key from OpenRouter.
    *   `FRONTEND_URL`: Your Vercel domain (e.g., `https://your-app.vercel.app`).
    *   `PORT`: `5000` (optional, Render handles this).

### 2. Frontend Deployment (Vercel)
1.  Connect your repository to [Vercel](https://vercel.com/).
2.  Set **Root Directory** to `frontend`.
3.  **Framework Preset**: `Vite`.
4.  **Environment Variables**:
    *   `VITE_API_URL`: Your Render backend URL (e.g., `https://your-backend.onrender.com/api`).
5.  Vercel will automatically detect the `vercel.json` for SPA routing.

---

