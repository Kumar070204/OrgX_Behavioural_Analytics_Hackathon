<div align="center">
  
  <h1>🎓 Student Burnout & Dropout Risk Prediction System</h1>
  
  <p>
    <strong>An end-to-end intelligent behavioral analytics platform protecting student well-being.</strong>
  </p>

  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#installation">Installation</a> •
    <a href="#usage">Usage</a> •
    <a href="#architecture">Architecture</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </p>
</div>

<br/>

## 🌟 Overview

The **Student Burnout & Dropout Risk Prediction System** is an advanced analytics application built during the OrgX Behavioural Analytics Hackathon. It leverages behavioral data, academic performance, and engagement metrics to predict student burnout and the risk of dropout. By identifying at-risk students early, the system empowers educational institutions to intervene proactively and offer personalized support.

---

## ✨ Features

- **📊 Comprehensive Dashboard:** Real-time visibility into student metrics, overall wellness, and risk factors.
- **🧠 Predictive Modeling:** Logistic regression-based risk scoring to predict burnout and dropout likelihood.
- **🎯 Personalized Interventions:** Actionable recommendations tailored to individual student profiles.
- **📱 Responsive UI:** Built with Radix UI, shadcn/ui, and Tailwind CSS for a seamless experience on any device.
- **⚡ Blazing Fast:** Powered by Vite, React 18, and TypeScript for rapid development and execution.
- **📈 Data Visualization:** Interactive charts utilizing Recharts to highlight behavioral trends.

---

## 🛠️ Tech Stack

### Frontend & UI
- **Framework:** React 18 & TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, tailwindcss-animate
- **Components:** shadcn/ui, Radix UI primitives
- **Icons & Animation:** Framer Motion, Lucide React, Embla Carousel
- **Routing & State:** React Router DOM, TanStack React Query
- **Charting:** Recharts

### Tooling & Quality
- **Linter/Formatter:** ESLint
- **Testing:** Vitest, Testing Library

---

## 🚀 Installation & Setup

Want to run this project locally? Follow these simple steps:

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.x or newer recommended)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/Kumar070204/OrgX_Behavioural_Analytics_Hackathon.git
cd OrgX_Behavioural_Analytics_Hackathon
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

The application will be running at `http://localhost:5173`.

---

## 📖 Usage

### Running the App
Once the development server is running, navigate the dashboard to explore student metrics. Enter synthetic or real behavioral data into the prediction module to generate risk scores and intervention recommendations.

### Production Build
To create an optimized production build:
```bash
npm run build
```
You can preview the built app using:
```bash
npm run preview
```

---

## 🏗️ System Architecture

1. **Input Layer:** Collects academic, engagement, and behavioral inputs.
2. **Validation & Normalization:** Processes raw inputs to ensure data integrity using Zod schemas.
3. **Analytics Engine:** Computes risk classification and identifies burnout indicators.
4. **Presentation Layer:** Highly interactive React dashboard delivering actionable insights.

---

<div align="center">
  <i>Built with ❤️ for the OrgX Behavioural Analytics Hackathon</i>
</div>
