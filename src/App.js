import React, { useState } from 'react';
import './index.css';

const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export default function LanguageAwarenessWebsite() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalVideos = 5;

  const videos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ"
  ];

  const quotes = [
    "I can't express emotions in my native language anymore.",
    "My grandparents don't understand me when I visit home.",
    "I think in English now, even in my dreams.",
    "I've forgotten words I used to know as a child.",
    "My accent sounds foreign in my own language.",
    "I feel disconnected from my cultural roots."
  ];

  const rotateCarousel = (direction) => {
    setCurrentIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return totalVideos - 1;
      if (newIndex >= totalVideos) return 0;
      return newIndex;
    });
  };

  const getVideoStyle = (index) => {
    const position = (index - currentIndex + totalVideos) % totalVideos;
    const angle = (position * 360) / totalVideos;
    const radians = (angle * Math.PI) / 180;
    
    const radius = 350;
    const x = Math.sin(radians) * radius;
    const z = Math.cos(radians) * radius;
    
    const scale = (z + radius) / (radius * 2);
    const opacity = Math.max(0.3, scale);
    const zIndex = Math.round(scale * 100);
    
    return {
      transform: `translate(-50%, -50%) translate3d(${x}px, 0px, ${z}px) scale(${scale})`,
      opacity: position === 0 ? 1 : opacity,
      zIndex: zIndex,
      filter: position === 0 ? 'none' : 'blur(2px)'
    };
  };

  return (
    <div className="app-container">
      {/* Hero Header */}
      <header className="hero-header">
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1 className="main-title">Lost in Translation</h1>
          <p className="main-subtitle">
            When pursuing dreams abroad means losing the language of home
          </p>
        </div>
      </header>

      {/* Video Carousel Section */}
      <section className="video-section">
        <div className="section-container">
          <h2 className="section-title">Voices from Abroad</h2>
          
          <div className="carousel-wrapper">
            <div className="carousel-container">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="video-item"
                  style={getVideoStyle(index)}
                >
                  <div className="video-frame">
                    <iframe
                      src={video}
                      className="video-iframe"
                      frameBorder="0"
                      allowFullScreen
                      title={`Video ${index + 1}`}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-controls">
              <button onClick={() => rotateCarousel(-1)} className="carousel-btn carousel-btn-prev">
                <ChevronLeft />
                Previous
              </button>
              <button onClick={() => rotateCarousel(1)} className="carousel-btn carousel-btn-next">
                Next
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Boxes Section */}
      <section className="quotes-section">
        <div className="section-container">
          <div className="quotes-grid">
            {quotes.map((quote, index) => (
              <div key={index} className="quote-box">
                <p className="quote-text">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="explanation-section">
        <div className="section-container explanation-container">
          <h2 className="section-title">The Silent Erosion</h2>
          
          <div className="explanation-content">
            <p>
              Language is more than words—it's the fabric of identity, the bridge to heritage, and the keeper of culture. When international students immerse themselves in foreign academic environments, they often find themselves in a linguistic crossroads.
            </p>
            
            <p>
              The pressure to excel academically in a second language is immense. Students spend hours reading, writing, and thinking in English or other foreign languages. Slowly, imperceptibly, their native tongue begins to slip away. Vocabulary shrinks, grammar becomes uncertain, and the natural flow of their mother language feels forced.
            </p>
            
            <p>
              This isn't just about losing words—it's about losing connection. Connection to family, to community, to the stories and wisdom passed down through generations. It's about young people returning home and feeling like strangers in their own culture.
            </p>
            
            <p>
              The data paints a concerning picture: studies show that prolonged exposure to a dominant foreign language can significantly impact native language proficiency, especially in academic and formal contexts. What starts as occasional forgetfulness can evolve into a profound linguistic gap.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="section-container solution-container">
          <p className="solution-text">
            We believe there's a way to bridge both worlds—to thrive academically while keeping your cultural voice alive.
          </p>
          <button className="solution-btn">
            Explore Our Approach
          </button>
        </div>
      </section>
    </div>
  );
}