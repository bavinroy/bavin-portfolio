import { useState, useEffect } from "react";

interface AnimatedTitleProps {
  titles: string[];
  className?: string;
}

const AnimatedTitle = ({ titles, className = "" }: AnimatedTitleProps) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (isTyping) {
      // Typing effect
      if (displayText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Pause before erasing
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Erasing effect
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Move to next title
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, currentTitleIndex, isTyping, titles]);

  return (
    <span className={`${className} relative`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default AnimatedTitle;