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

export default function Portfolio() {
  useIntersectionObserver('.hidden', {}, (target) => {
    target.classList.add('visible');
  });
    const projects = [
      {
        name: 'name of project',
        description: 'A website that offers fitness training services.',
        link: ''
      },
        {
            name: 'name of project',
            description: 'A website that offers fitness training services.',
            link: ''
        },
        {
            name: 'name of project',
            description: 'A website that offers fitness training services.',
            link: ''
        },
        {
            name: 'name of project',
            description: 'A website that offers fitness training services.',
            link: ''
        },
        {
            name: 'name of project',
            description: 'A website that offers fitness training services.',
            link: ''
        },
        {
            name: 'name of project',
            description: 'A website that offers fitness training services.',
            link: ''
        },
        {
            name: 'name of project',
            description: 'A website that offers fitness training services.',
            link: ''
        },
        {
            name: 'name of project',
            description: 'A website that offers fitness training services.',
            link: ''
        },
        
    ];
    
    return (
      <div id="portfolio">
        <h1>Portfolio</h1>
        <p>
          Check out some of my projects.
        </p>
  
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-12 col-md-6" key={index}>
              <div className="card mb-4 hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                <div className="card-body ">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }