import React, { useState } from 'react'
import './App.css'

function App() {
  const [noCount, setNoCount] = useState(0)
  const [yesClicked, setYesClicked] = useState(false)
  const [noHovered, setNoHovered] = useState(false)

  const yesButtonSize = 16 + noCount * 4
  
  const responses = [
    "Are you sure dude?",
    "Really sure bae?",
    "Think about it...",
    "Ayy kam aan Jahaan!",
    "Don't be a goat!",
    "u wont be the g.o.a.t",
    "fine?",
    "I'm not giving up!",
    "Say yes man!",
  ]

  // Add your image file names here - place images in /public/images/
  // Example: "image1.jpg", "funny-cat.png", etc.
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
  ]

  const currentImage = images[Math.min(noCount - 1, images.length - 1)]

  const noButtonText = noCount > 0 ? responses[Math.min(noCount - 1, responses.length - 1)] : "No"

  const handleYes = () => {
    setYesClicked(true)
  }

  const handleNo = () => {
    setNoCount(noCount + 1)
  }

  if (yesClicked) {
    return (
      <div className="container success">
        <div className="success-content">
          <div className="fireworks">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="confetti"></div>
            ))}
          </div>
          <h1 className="success-text">YES! 🎉</h1>
          <p className="success-message">I'm the happiest person alive! </p>
          <p className="success-date">Love you dude :)</p>
          <div className="heart-animation">❤️</div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="content">
        <div className="hearts-background">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="floating-heart">💕</div>
          ))}
        </div>
        
        <h1 className="title">Will you be my Valentine?</h1>
        
        <div className="question-section">
          <p className="subtitle">Jahan Ismail My dear</p>
          <div className="emoji-display">😍💑💍</div>
          {noCount > 0 && <img src={currentImage} alt="funny reaction" className="meme-display" />}
        </div>

        <div className="buttons-container">
          <button 
            className="yes-button"
            onClick={handleYes}
            style={{ fontSize: `${yesButtonSize}px` }}
          >
            Yes 💕
          </button>
          
          <button 
            className={`no-button ${noHovered ? 'hovered' : ''}`}
            onClick={handleNo}
            onMouseEnter={() => setNoHovered(true)}
            onMouseLeave={() => setNoHovered(false)}
          >
            {noButtonText}
          </button>
        </div>

        {noCount > 0 && (
          <p className="plea">
            Come on, the YES button is growing! 👉
          </p>
        )}
      </div>
    </div>
  )
}

export default App
