import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import '../style.css';

function Navbar ()
{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [linksActive, setLinksActive] = useState(false);
    const mobileMenuRef = useRef(null);
    const overlayRef = useRef(null);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            document.body.classList.remove('menu-open'); // Clean up when component unmounts
        };
    }, []);
    
    const togglePageContent = (fadeOut) => {
        // Get all main content containers
        const mainContent = document.querySelector('main');
        if (!mainContent) return;
        
        if (fadeOut) {
            mainContent.classList.add('fade-out');
        } else {
            // Use setTimeout to allow the menu to fade out before showing content
            setTimeout(() => {
                mainContent.classList.remove('fade-out');
            }, 300);
        }
    };

    const openMobileMenu = () => {
        setIsMobileMenuOpen(true);
        document.body.classList.add('menu-open');
        togglePageContent(true);
        
        // Activate links with a slight delay
        setTimeout(() => {
            setLinksActive(true);
        }, 200);
    };
    
    const closeMobileMenu = () => {
        // First deactivate the links
        setLinksActive(false);
        
        // Then hide the menu with slight delay
        setTimeout(() => {
            setIsMobileMenuOpen(false);
            document.body.classList.remove('menu-open');
            togglePageContent(false);
        }, 300);
    };
    
    const toggleMobileMenu = () => {
        if (isMobileMenuOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    };    return (
        <nav>
            <div className="navbar no-select">
                {isMobile ? (
                    <>
                        <button 
                            className="mobile-menu-button" 
                            onClick={toggleMobileMenu}
                            aria-label="Toggle navigation menu"
                        >
                            Menu
                        </button>
                        <div 
                            className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} 
                            ref={overlayRef}
                        >
                            <div 
                                className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
                                ref={mobileMenuRef}
                            >
                                <button 
                                    className="mobile-menu-close" 
                                    onClick={toggleMobileMenu}
                                    aria-label="Close navigation menu"
                                >
                                    X
                                </button>
                                <div className="mobile-menu-links">
                                    <Link 
                                        to="/" 
                                        className={`nav-link ${linksActive ? 'active' : ''}`} 
                                        onClick={toggleMobileMenu}
                                    >
                                        Home
                                    </Link>
                                    <Link 
                                        to="/projects" 
                                        className={`nav-link ${linksActive ? 'active' : ''}`} 
                                        onClick={toggleMobileMenu}
                                    >
                                        Projects
                                    </Link>
                                    <Link 
                                        to="/experience" 
                                        className={`nav-link ${linksActive ? 'active' : ''}`} 
                                        onClick={toggleMobileMenu}
                                    >
                                        Experience
                                    </Link>
                                    <Link 
                                        to="/interests" 
                                        className={`nav-link ${linksActive ? 'active' : ''}`} 
                                        onClick={toggleMobileMenu}
                                    >
                                        Interests
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/projects" className="nav-link">Projects</Link>
                        <Link to="/experience" className="nav-link">Experience</Link>
                        <Link to="/interests" className="nav-link">Interests</Link>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar;