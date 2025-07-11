
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
git clone https://github.com/yourusername/personalized-dashboard.git
cd personalized-dashboard
```

2. Install dependencies

```bash
npm install
```

3. Add environment variables

Create a `.env.local` file with your API keys:

```env
NEWS_API_KEY=your_newsapi_key_here
MOVIE_API_URL=https://your-movie-api-url
MOVIE_API_KEY=your_movie_api_key
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
LinkedIn: [Your Profile](https://linkedin.com/in/your-link)  
GitHub: [@yourusername](https://github.com/yourusername)

## 📄 License

This project is licensed under the MIT License.
