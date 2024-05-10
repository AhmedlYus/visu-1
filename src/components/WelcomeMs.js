import React, { useEffect, useState } from 'react';
import '../styles/Home.css';

function WelcomeMs() {
  const [text, setText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    const arrText = [
      "<span class='bigger'>Step into the world of espionage with James Bond </span"
    ];
    const speed = 60;
    let index = 0;
    let arrLength = arrText[0].length;
    const scroll = 5;

    let textPos = 0;
    let content = '';
    let row;

    const textWrite = () => {
      row = Math.max(0, index - scroll);
      let tempContent = '';
      while (row < index) {
        tempContent += arrText[row++] + ' ';
      }
      setText(tempContent + arrText[index].substring(0, textPos) + '_');
      if (textPos++ === arrLength) {
        textPos = 0;
        index++;
        if (index !== arrText.length) {
          arrLength = arrText[index].length;
          setTimeout(textWrite, 500);
        }
      } else {
        setTimeout(textWrite, speed);
      }
    };

    textWrite();

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsRotating(true);
      } else {
        setIsRotating(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div
        className={`welcome-box${isHovered ? ' hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`bottom-box${isRotating ? ' rotating' : ''}`}
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </div>
    </div>
  );
}

export default WelcomeMs;
