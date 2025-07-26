
# 🧠 Personalized Content Dashboard

A modern web application that delivers personalized news and movie recommendations based on user-selected preferences.

## 🚀 Features

- ⚙️ User Settings page to choose preferred **News Categories** and **Movie Genres**
- 📰 Curated **News Feed** fetched from NewsAPI
- 🎬 Tailored **Movie Recommendations** powered by IMDb-style API
- 🌗 Dark Mode Support
- 📱 Responsive Design
- 🧠 State managed via **Redux Toolkit**
- ⚙️ Built using **Next.js App Router** and **TypeScript**

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **State Management**: Redux Toolkit
- **Type Safety**: TypeScript
- **APIs**: NewsAPI, IMDb-based Movie API

## 🧪 Testing

- Unit testing with **React Testing Library** & **Jest**
- Mocking API requests using **MSW** (Mock Service Worker)

## 🧭 Folder Structure

```
personalized-dashboard/
├── app/
│   ├── layout.tsx
│   ├── news/page.tsx
│   ├── recommendations/page.tsx
│   └── settings/page.tsx
├── src/
│   ├── components/
│   ├── features/
│   ├── services/
│   ├── store/
│   └── utils/
├── public/
├── README.md
└── ...
```

## ⚙️ Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/prasadchodagiri7989/pgagi-assignment.git
cd pgagi-assignment
```

2. Install dependencies

```bash
npm install
```

3. Add environment variables

Create a `.env.local` file with your API keys:

```env
NEXT_PUBLIC_NEWS_API_KEY=ae97b8e26c714d588fe20c2a8c7872da
NEXT_PUBLIC_RAPIDAPI_HOST=imdb236.p.rapidapi.com
NEXT_PUBLIC_RAPIDAPI_KEY=b5383b3dc8msh1444dab0d8a6121p1afec2jsn4b91ed4c9324
```

4. Run the app

```bash
npm run dev
```

## 🧪 Run Tests

```bash
npm run test
```

## ✨ Future Enhancements

- 👤 User authentication
- 🧠 AI-generated summaries for news articles
- 📅 Scheduling daily content digest
- 🗳️ Feedback on recommendations

## 🧑‍💻 Author

**Chodagiri Prasad**  
Email: chodagiriprasad5@gmail.com  
LinkedIn: [https://www.linkedin.com/in/prasadchodagiri/](https://www.linkedin.com/in/prasadchodagiri/)  
GitHub: [@prasadchodagiri7989](https://github.com/prasadchodagiri7989)

