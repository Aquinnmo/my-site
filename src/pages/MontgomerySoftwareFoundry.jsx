import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const services = [
  {
    title: 'Legacy System Modernization',
    description:
      'Transform brittle, outdated tooling into fast, secure, and maintainable platforms tailored to your workflow.',
  },
  {
    title: 'Process Automation',
    description:
      'Eliminate repetitive work by connecting the systems your team already trusts with bespoke integrations.',
  },
  {
    title: 'Operational Dashboards',
    description:
      'Surface the data that matters most with dashboards that highlight real-time insights and track success.',
  },
];

const differentiators = [
  {
    title: 'Partnership Mindset',
    description:
      'We embed with stakeholders to understand how you serve customers today and where software can amplify your impact tomorrow.',
  },
  {
    title: 'Full-Stack Craftsmanship',
    description:
      'From infrastructure to polished interfaces, the Foundry handles every layer so you receive a unified, reliable solution.',
  },
  {
    title: 'Security-First Delivery',
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
    title: 'Launch & Support',
    description:
      'Deploy with guardrails, knowledge transfer, and the long-term partnership your business deserves.',
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
            Start a project
          </a>
          <Link className="foundry-secondary-cta" to="/projects">
            Explore recent work
          </Link>
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
          As founder and lead developer, Adam brings hands-on experience delivering dependable full-stack solutions and
          partnering with stakeholders to modernize legacy operations. Montgomery Software Foundry Inc. is where that
          experience becomes a dedicated service for organizations ready to scale with confidence.
        </p>
      </section>
    </div>
  );
}

export default MontgomerySoftwareFoundry;
