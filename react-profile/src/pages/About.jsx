import React, { useEffect } from 'react';
import '../assets/css/scroll.css'

function useIntersectionObserver(selector, options, callback) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
        }
      });
    }, options);

    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [selector, options, callback]);
}


export default function About() {
  useIntersectionObserver('.hidden', {}, (target) => {
    target.classList.add('visible');
  });
  return (
    <div id="about" className = "hidden">
     
      <h1>Let's Innovate Together!</h1>
      <p>
        I am a software engineer with a passion for web development. I have
        experience with JavaScript, React, Node.js, and more. I am always
        learning new technologies and looking for opportunities to grow.
      </p>

      <img src="./images/rad.jpg" alt="party pic" className="img-thumbnail hidden" style={{ width: "100%", maxWidth: "400px" }}/>

    </div>
  );
}

