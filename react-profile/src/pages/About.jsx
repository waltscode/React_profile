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
    <section>
    <div id="about" className="hidden" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
    <div>
      <h1 className='egg'>Full-Stack Web Developer</h1>
    </div>
    <div>
      <img src="./images/profilemask.png" alt="party pic" className="hidden" style={{ width: "100%", maxWidth: "400px" }} />
    </div>
  </div>
  
  </section>
  
);
}

