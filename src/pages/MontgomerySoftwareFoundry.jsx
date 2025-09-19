import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const services = [
  {
    title: 'Legacy System Modernization',
    description:
      'Transform brittle, outdated systems into fast and secure platforms tailored to you.',
  },
  {
    title: 'Custom-Built Applications',
    description:
      'We specialize in crafting innovative, reliable, and tailored digital tools to meet your unique needs and help your business thrive.',
  },
  {
    title: 'Operational Dashboards',
    description:
      'Create easy to understand dashboards to track important data and measure success.',
  },
];

const differentiators = [
  {
    title: 'Partnership Mindset',
    description:
      'We work closely with you to deliver exactly what you need, the first time.',
  },
  {
    title: 'Full Stack Craftsmanship',
    description:
      'From infrastructure to polished interfaces, the Foundry handles every layer so you receive a unified, reliable solution.',
  },
  {
    title: 'Security First Delivery',
    description:
      'Each engagement is grounded in secure coding practices, proactive reviews, and deployment pipelines that support confident releases.',
  },
];

const engagementSteps = [
  {
    title: 'Discover',
    description:
      'Map objectives, constraints, and existing tooling to define a shared blueprint for success.',
  },
  {
    title: 'Design & Build',
    description:
      'Iterate quickly on interactive prototypes before forging production-ready software.',
  },
  {
    title: 'Seamless Launch',
    description:
      'Launch with confidence and get ongoing support for your business.',
  },
];

function MontgomerySoftwareFoundry() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const desktopOffset = 40;
  const mobileOffset = 16;

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const topOffset = navbarHeight + (windowWidth <= 768 ? mobileOffset : desktopOffset);

  return (
    <div className="foundry-page" style={{ marginTop: `${topOffset}px` }}>
      <section className="foundry-hero">
        <h1>Montgomery Software Foundry Inc.</h1>
        <p className="foundry-tagline">
          Custom software forged for small businesses that need modern, dependable tools.
        </p>
        <div className="foundry-cta-group">
          <a className="foundry-cta" href="mailto:adam@montgomeryfoundry.com">
            Get in touch
          </a>
          {/* 
          <Link className="foundry-secondary-cta" to="/projects">
            Explore recent work
          </Link>
          */}
        </div>
      </section>

      <section className="foundry-section">
        <h2>What we build</h2>
        <div className="foundry-grid">
          {services.map((service) => (
            <article key={service.title} className="foundry-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="foundry-section">
        <h2>Why teams choose the Foundry</h2>
        <div className="foundry-grid">
          {differentiators.map((item) => (
            <article key={item.title} className="foundry-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="foundry-section">
        <h2>Our collaborative process</h2>
        <div className="foundry-steps">
          {engagementSteps.map((step) => (
            <article key={step.title} className="foundry-step">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="foundry-section foundry-highlight">
        <h2>Built by Adam Montgomery</h2>
        <p>
          As founder and lead developer, I established Montgomery Software Foundry Inc. in the summer of 2025. Driven by my passion for building software, I bring hands-on experience delivering dependable full-stack solutions and partnering with stakeholders to modernize legacy operations. Montgomery Software Foundry Inc. is where that excitement becomes a dedicated service for organizations ready to scale with confidence.
        </p>
      </section>
    </div>
  );
}

export default MontgomerySoftwareFoundry;