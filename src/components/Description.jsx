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
            <li>Second year computer science co-op student at the University of Guelph</li>
            <li>SOCIS VP of External Affairs</li>
            <li>University of Guelph Events Staff</li>
            <li>AI Training Contractor for DataAnnotation</li>
            <li>Efficient and effective communicator</li>
            <li>Life-long team player</li>
            <li>Natural leader that thrives in high-pressure scenarios</li>
            <li>Loves listening to other's stories</li>
            <li>Passionate about music</li>
          </ul>
        );
      } else {
        setContent(
          <p>
            I am a second-year computer science enrolled at the University of Guelph
            and also am the Vice-President of External Affairs for the Guelph School of Computer Science.
            I am also helping train AI Models as a contractor for DataAnnotation.
            Beyond what I do professionally, I am an avid hockey player and watcher. I am
            a competitor that wants to be the best at whatever I do, while engaging with 
            everyone I work with.
            <br></br><br></br>
            I am also a member of the University of Guelph Events Staff, where I help run events
            for the university. I am an engaged student and citizen, that want to give back to
            the school and community that has already given me so much.
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