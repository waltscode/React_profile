import React, { useEffect } from 'react';
import '../assets/stylings/hero.css';

export default function About() {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(element => {
      observer.observe(element);
    });

    // Clean up function
    return () => {
      hiddenElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div>
    <section>
      <div id="about">
        <h1 className="hidden">Let's Innovate Together!</h1>
        <p className="hidden">
          I am a software engineer with a passion for web development. I have
          experience with JavaScript, React, Node.js, and more. I am always
          learning new technologies and looking for opportunities to grow.
        </p>
        <img
          src="./images/rad.jpg"
          alt="party pic"
          className="img-thumbnail hidden"
          style={{ width: '100%', maxWidth: '400px' }}
        />
      </div>
    </section>
    
    <section>
      {<div id="about">
        <h1 className="hidden">Let's Innovate Together!</h1>
        <p className="hidden">
          I am a software engineer with a passion for web development. I have
          experience with JavaScript, React, Node.js, and more. I am always
          learning new technologies and looking for opportunities to grow.
        </p>
        <img
          src="./images/rad.jpg"
          alt="party pic"
          className="img-thumbnail hidden"
          style={{ width: '100%', maxWidth: '400px' }}
        />
      </div>}
    </section>
  </div>
  );
}

