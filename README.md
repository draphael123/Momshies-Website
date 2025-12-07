# Momshies Website 🎭

A zany, colorful website featuring daily jokes in English, Filipino, and Bisaya!

## Features

- 🌍 **Daily Joke Rotation**: Get a new joke every day automatically
- 🇺🇸 **English Jokes**: Classic and weird English humor
- 🇵🇭 **Filipino Jokes**: Tagalog jokes for Filipino speakers
- 🇵🇭 **Bisaya Jokes**: Cebuano/Bisaya jokes for Visayan speakers
- 🎨 **Zany Design**: Colorful, animated, and fun UI
- 🎲 **Random Jokes**: Get random jokes by language anytime

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository

2. Go to [vercel.com](https://vercel.com)

3. Click "New Project"

4. Import your GitHub repository

5. Vercel will automatically detect Next.js and deploy

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)

2. Click "New Project"

3. Import your Git repository or upload the project folder

4. Vercel will automatically configure and deploy

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── data/
│   └── jokes.ts        # Joke database and utilities
├── package.json        # Dependencies
├── tsconfig.json      # TypeScript configuration
├── next.config.js     # Next.js configuration
└── vercel.json        # Vercel deployment configuration
```

## How It Works

- **Daily Joke**: Uses the day of the year to cycle through all jokes, ensuring a new joke every day
- **Language Selection**: Filter jokes by language or get the daily joke (which rotates through all languages)
- **Random Jokes**: Click "Get Another Joke!" to get a random joke in the selected language

## Customization

To add more jokes, edit `data/jokes.ts` and add new joke objects to the `jokes` array.

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- CSS-in-JS (styled-jsx)

## License

Free to use and modify!

---

Made with 🤪 and lots of zany energy!


