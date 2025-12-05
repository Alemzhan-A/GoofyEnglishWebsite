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
    "/videos/jamieVid.mp4",
    "/videos/sarahVid.mp4",
    "/videos/adi.mp4",
    "/videos/emilbek.mp4",
    "/videos/sarahVid.mp4",
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

      {/* About Section */}
      <section className="about-section">
        <div className="section-container about-container">
          <h2 className="section-title">About This Project</h2>

          <div className="about-content">
            <div className="about-authors">
              <p className="about-text">
                <strong>Created by:</strong> Aanchal & Alemzhan
              </p>
              <p className="about-text">
                <strong>Institution:</strong> Carnegie Mellon University Qatar
              </p>
              <p className="about-text">
                <strong>Course:</strong> 76-100 Squires - Multimodal Project
              </p>
            </div>

            <div className="about-purpose">
              <h3 className="about-subtitle">Purpose and Goals</h3>
              <p className="about-description">
                This multimodal project addresses a growing identity-related challenge experienced by multilingual students studying in English-medium universities abroad: the gradual decline in proficiency and confidence in their native languages. Our goal is to bring visibility to this issue by connecting students' lived experiences to scholarly research, using video testimonies as supporting evidence.
              </p>
            </div>

            <div className="about-references">
              <h3 className="about-subtitle">Key References</h3>
              <ul className="references-list">
                <li>Blommaert, J. (2015). Chronotopic identities. <em>Tilburg papers in cultural studies, no. 139.</em></li>
                <li>Blommaert, J., & Varis, P. (2015). Enoughness, accent and light communities: Essays on contemporary identities. <em>Tilburg papers in cultural studies, no. 139.</em></li>
                <li>Hillman, S. (2020). Linguistic shame in the Gulf: Identity, language ideologies, and the multilingual self. <em>Journal of Sociolinguistics, 24(3), 329-346.</em></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="video-section">
        <div className="section-container">
          <h4 className="section-title">
            We asked students studying abroad one question: 
            <i>"Do you ever feel like you are losing expertise in your native language?"</i>
          </h4>
          
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

<p>This website serves as a dedicated platform to explore and bring <strong>visibility</strong> to a subtle yet significant identity challenge faced by <strong>multilingual students</strong> studying in English-medium universities abroad: the gradual decline in proficiency and confidence in their native languages.</p>

<p>Relocating abroad for higher education often immerses students in an English-dominant linguistic environment, leading to a subtle erosion of their native language fluency. This phenomenon manifests in moments of hesitation, struggling to recall basic vocabulary, or pausing mid-sentence during native language conversations—experiences that can lead to feelings of <strong>embarrassment or self-consciousness</strong>.</p>

<p>These moments sometimes trigger what scholar Hilman identifies as <strong>“linguistic shame.”</strong> This emotional response highlights a deeper tension concerning the link between language and belonging.</p>

<ul>
    <li><strong>Identity and Fluency:</strong> As Blommaert and Varis (2015) argue, identity is constructed through recognized <strong>“clusters of features”</strong> that signal authenticity within a community. For multilingual individuals, fluency in their native tongue is often one of the most critical markers in this cluster.</li>
    <li><strong>The Loss of "Enoughness":</strong> When native fluency begins to fade, it can feel like losing a core marker of <strong>“enoughness”</strong> within their local community, inevitably becoming intertwined with profound questions of identity and belonging.</li>
</ul>

<p>The ultimate goal of this project is to <strong>raise awareness</strong> about the identity tensions produced by native-language decline and to offer a <strong>theoretically informed proposal</strong> for how an AI-based tool could meaningfully and practically address these challenges for multilingual students worldwide.</p>

           
          </div>
        </div>
      </section>

      {/* Research Context Section */}
      <section className="research-section">
        <div className="section-container">
          <h2 className="section-title">Understanding the Identity Crisis</h2>

          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">🌍</div>
              <h3 className="research-card-title">Chronotopic Identities</h3>
              <p className="research-card-text">
                Students move from the chronotope of "home" where their native language indexes warmth, familiarity, and belonging, to the chronotope of "university," where English indexes competence, intelligence, and academic legitimacy (Blommaert, 2015).
              </p>
            </div>

            <div className="research-card">
              <div className="research-icon">💬</div>
              <h3 className="research-card-title">Linguistic Shame</h3>
              <p className="research-card-text">
                Hillman (2020) identifies "linguistic shame" as the emotional response when speakers fail to meet community expectations. This reflects a deeper tension about how language ties into belonging and authenticity.
              </p>
            </div>

            <div className="research-card">
              <div className="research-icon">🔍</div>
              <h3 className="research-card-title">Micro-Hegemonies</h3>
              <p className="research-card-text">
                As Blommaert and Varis (2015) argue, identity is constructed through "clusters of features" that a community recognizes as authentic. Declining native-language fluency can trigger feelings of failed authenticity and social inadequacy.
              </p>
            </div>
          </div>

          <div className="research-context">
            <h3 className="context-title">The CMU-Q Context</h3>
            <p className="context-text">
              At Carnegie Mellon University in Qatar, students from dozens of linguistic and cultural backgrounds navigate an English-dominant academic environment. Despite this diversity, the unintentional pressure to prioritize English creates what researchers call "micro-hegemonies"—localized norms that subtly determine which linguistic behaviors are valued and who is recognized as competent.
            </p>
            <p className="context-text">
              Even when students meet friends from the same country on campus, the conversation automatically shifts to English because it feels more efficient or 'natural'. This chronotopic movement illustrates how different spaces impose different indexical expectations on speakers, and students' linguistic identities adapt accordingly.
            </p>
          </div>
        </div>
      </section>

            {/* previous about section */}

      {/* Solution Section */}
      <section className="solution-section">
        <div className="section-container solution-container">
          <h2 className="section-title">A Path Forward</h2>
          <p className="solution-text">
            We believe there's a way to bridge both worlds—to thrive academically while keeping your cultural voice alive.
          </p>
          <p className="solution-description">
            We propose an AI-driven tool that simulates conversations with native speakers, helping students practice their native language and reconnect with their linguistic roots. Our technical guidelines explain how to combine existing APIs (text-to-speech, language translators, face animation models, and multilingual models) to create an accessible solution.
          </p>

          <div className="demo-video-container">
            <h3 className="demo-title">See It In Action</h3>
            <div className="demo-video-wrapper">
              <video
                className="demo-video"
                controls
                controlsList="nodownload"
              >
                <source src="/videos/clideo_editor_33de57dc6cb14c87ac0539f73a0f80d4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="solution-buttons">
            <a
              href="https://docs.google.com/document/d/1-EtaXFxKs8ZUdfwHi7arQmiLk4YTobNHIJFcb1q0KZg/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="solution-btn primary"
            >
              View Technical Guidelines
            </a>
            <button className="solution-btn secondary">
              Learn More About Our Research
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}