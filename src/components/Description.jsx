import React, { useState, useEffect } from 'react';
import '../style.css';

const Description = ({ counter }) => {
  const [visible, setVisible] = useState(true);
  const [content, setContent] = useState('');
  
  useEffect(() => {
    // First make the content fade out
    setVisible(false);
    
    // After fade out completes, update the content
    const timer = setTimeout(() => {
      if (counter === 0) {
        setContent(
          <ul>
            <li>Second year computer science co-op student @ the University of Guelph </li>
            <li>VP of External Affairs SOCIS</li>
            <li>Hockey Player/Fan </li>
          </ul>
        );
      } else {
        setContent(
          <p>
            I am a second-year computer science enrolled at the University of Guelph.
            I am currently the Vice-President of External Affairs for the Guelph School of Computer Science.
            I am also helping train AI Models as a contractor for DataAnnotation.
            Beyond what I do professionally, I am an avid hockey player and watcher. I am
            a competitor that wants to be the best at whatever I do, while engaging with 
            everyone I work with.
          </p>
        );
      }
      // Make the new content fade in
      setVisible(true);
    }, 300); // Match this with CSS transition time
    
    return () => clearTimeout(timer);
  }, [counter]);
  
  return (
    <div id="description" className={`description-container ${visible ? 'fade-in' : 'fade-out'}`}>
      {content}
    </div>
  );
};

export default Description;