'use client';

import { useEffect, useState } from 'react';
import { getJokeOfTheDay, getRandomJokeByLanguage, type Joke } from '@/data/jokes';

export default function Home() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<'English' | 'Filipino' | 'Bisaya' | 'Daily'>('Daily');

  useEffect(() => {
    loadJoke();
  }, [selectedLanguage]);

  const loadJoke = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (selectedLanguage === 'Daily') {
        setJoke(getJokeOfTheDay());
      } else {
        setJoke(getRandomJokeByLanguage(selectedLanguage));
      }
      setIsLoading(false);
    }, 300);
  };

  return (
    <main className="container">
      <div className="header">
        <h1 className="title">Momshies Website</h1>
        <p className="subtitle">Your Daily Dose of Zany Jokes! 🎭</p>
      </div>

      <div className="language-selector">
        <button
          className={`lang-btn ${selectedLanguage === 'Daily' ? 'active' : ''}`}
          onClick={() => setSelectedLanguage('Daily')}
        >
          🌍 Daily Joke
        </button>
        <button
          className={`lang-btn ${selectedLanguage === 'English' ? 'active' : ''}`}
          onClick={() => setSelectedLanguage('English')}
        >
          🇺🇸 English
        </button>
        <button
          className={`lang-btn ${selectedLanguage === 'Filipino' ? 'active' : ''}`}
          onClick={() => setSelectedLanguage('Filipino')}
        >
          🇵🇭 Filipino
        </button>
        <button
          className={`lang-btn ${selectedLanguage === 'Bisaya' ? 'active' : ''}`}
          onClick={() => setSelectedLanguage('Bisaya')}
        >
          🇵🇭 Bisaya
        </button>
      </div>

      <div className="joke-container">
        {isLoading ? (
          <div className="loading">
            <div className="spinner">🤪</div>
            <p>Loading zany joke...</p>
          </div>
        ) : joke ? (
          <div className="joke-card">
            <div className="joke-language-badge">{joke.language}</div>
            <p className="joke-text">{joke.text}</p>
            <button className="new-joke-btn" onClick={loadJoke}>
              🎲 Get Another Joke!
            </button>
          </div>
        ) : null}
      </div>

      <div className="floating-elements">
        <div className="floating-emoji">😂</div>
        <div className="floating-emoji">🤣</div>
        <div className="floating-emoji">😆</div>
        <div className="floating-emoji">🎉</div>
        <div className="floating-emoji">🎊</div>
        <div className="floating-emoji">✨</div>
      </div>

      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
          position: relative;
          z-index: 1;
        }

        .header {
          text-align: center;
          margin-bottom: 40px;
          animation: bounce 2s ease-in-out infinite;
        }

        .title {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 10px;
          text-shadow: 4px 4px 0px #ff00ff, 8px 8px 0px #00ffff, 12px 12px 0px #ffff00;
          animation: rainbow 3s linear infinite;
          transform: rotate(-2deg);
        }

        .subtitle {
          font-size: 1.5rem;
          color: #fff;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          animation: wiggle 3s ease-in-out infinite;
        }

        .language-selector {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .lang-btn {
          padding: 15px 25px;
          font-size: 1.1rem;
          font-family: inherit;
          font-weight: bold;
          border: 4px solid #fff;
          border-radius: 25px;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #ffe66d, #ff6b6b);
          background-size: 300% 300%;
          animation: gradientShift 3s ease infinite;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }

        .lang-btn:hover {
          transform: scale(1.1) rotate(5deg);
          animation: pulse 0.5s ease infinite;
        }

        .lang-btn.active {
          transform: scale(1.15);
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
          animation: pulse 1s ease infinite;
        }

        .joke-container {
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .joke-card {
          background: rgba(255, 255, 255, 0.95);
          border: 6px solid #ff00ff;
          border-radius: 30px;
          padding: 40px;
          max-width: 700px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          position: relative;
          animation: bounce 2s ease-in-out infinite;
          transform: rotate(1deg);
        }

        .joke-language-badge {
          display: inline-block;
          padding: 8px 20px;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          color: white;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.9rem;
          margin-bottom: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .joke-text {
          font-size: 1.8rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 30px;
          text-align: center;
          font-weight: bold;
        }

        .new-joke-btn {
          width: 100%;
          padding: 20px;
          font-size: 1.3rem;
          font-family: inherit;
          font-weight: bold;
          border: 4px solid #4ecdc4;
          border-radius: 20px;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
          animation: pulse 2s ease infinite;
        }

        .new-joke-btn:hover {
          transform: scale(1.05);
          animation: wiggle 0.5s ease infinite;
        }

        .loading {
          text-align: center;
          color: white;
        }

        .spinner {
          font-size: 4rem;
          animation: spin 1s linear infinite;
          display: inline-block;
          margin-bottom: 20px;
        }

        .floating-elements {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .floating-emoji {
          position: absolute;
          font-size: 3rem;
          animation: float 6s ease-in-out infinite;
          opacity: 0.3;
        }

        .floating-emoji:nth-child(1) {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-emoji:nth-child(2) {
          top: 20%;
          right: 15%;
          animation-delay: 1s;
        }

        .floating-emoji:nth-child(3) {
          bottom: 30%;
          left: 20%;
          animation-delay: 2s;
        }

        .floating-emoji:nth-child(4) {
          bottom: 20%;
          right: 10%;
          animation-delay: 3s;
        }

        .floating-emoji:nth-child(5) {
          top: 50%;
          left: 5%;
          animation-delay: 4s;
        }

        .floating-emoji:nth-child(6) {
          top: 60%;
          right: 5%;
          animation-delay: 5s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-50px) rotate(180deg);
          }
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 1.2rem;
          }

          .joke-text {
            font-size: 1.4rem;
          }

          .lang-btn {
            padding: 12px 20px;
            font-size: 1rem;
          }
        }
      `}</style>
    </main>
  );
}


