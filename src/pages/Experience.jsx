import React, { useState, useEffect } from "react";

const experiencesData = [
    {
        title: "AI Training Contractor",
        company: "DataAnnotation",
        duties: `I reviewed generated code and made efficiency, readability, and corrective improvements. I enhanced the functionality of 3 different in-development LLMs for code review. I also developed sophisticated, fine-grained, and actionable criteria to judge AI responses to complex prompts`,
        skills: ["Clear Communication", "Attention to Detail", "Code Reviews", "Quality Assurance"],
        category: "programming",
        startDate: "2025-01-05",
        endDate: null // null for ongoing
    },
    {
        title: "Vice-President of External Affairs",
        company: "University of Guelph School of Computing and Information Science",
        duties: "I was elected to communicate with other clubs at the university next year. I will make sure that Computer Science events are organized and well run. I will lead the clubs to more effective collaboration to improve the overall student experience.",
        skills: ["Communication", "Organization Skills", "Time Management", "Leadership", "Collaboration"],
        category: "citizenship",
        startDate: "2025-04-01",
        endDate: null
    },
    {
        title: "Guelph Event Team",
        company: "the University of Guelph",
        duties: "Next year, I will be entrusted with ensuring sports games are safe and engaging for all fans that attend. I will also be tasked with crowd control making sure everyone has a fun experience that doesn’t get out of control.",
        skills: ["Enthusiasm", "School Spirit", "Teamwork"],
        category: "citizenship",
        startDate: "2025-04-01",
        endDate: null
    },
    {
        title: "Opener",
        company: "Marble Slab Creamery Barrie",
        duties: "I managed the day-to-day operations of a team of 5 people. I used my time management and prioritization skills to assign teammates tasks to ensure consistent levels of pre-made stock and minimize in-store wait times.",
        skills: ["Communication", "Customer Service", "Time Management", "Delegation", "Prioritization"],
        category: "customer service",
        startDate: "2020-04-23",
        endDate: "2024-08-31"
    },
    {
        title: "Host",
        company: "Montana's Barrie",
        duties: `I proactively managed the flow of customers into the restaurant, reducing wait times and maximizing seating efficiency while ensuring no server’s section was overlooked. I checked in with servers frequently to help me reduce their stress by managing their workload to meet their expectations.`,
        skills: ["Communication", "Attention to Detail"],
        category: "customer service",
        startDate: "2023-03-01",
        endDate: "2024-05-30"
    },
    {
        title: "Associate",
        company: "Tee 2 Green",
        duties: `I helped run a golf store for a summer. I helped customers find the right equipment for their needs. I also helped with the day-to-day operations of the store, including stocking shelves and managing inventory. I enhanced my need analysis skills by reacting to customer needs in real-time.`,
        skills: ["Communication", "Need Analysis", "Approachability", "Customer Service"],
        category: "customer service",
        startDate: "2023-06-01",
        endDate: "2024-08-30"
    }
];

// Helper function to format dates
const formatDate = (dateString) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    // Adjust for timezone offset to prevent off-by-one day errors
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    const adjustedDate = new Date(date.getTime() + userTimezoneOffset);
    return adjustedDate.toLocaleDateString("en-US", { year: 'numeric', month: 'short' });
};

const sortOptions = [
    { value: "all", label: "All" },
    { value: "programming", label: "Programming" },
    { value: "customer service", label: "Customer Service" },
    { value: "citizenship", label: "Citizenship" }
];

function Experience() 
{
    const [sortIndex, setSortIndex] = useState(0); // Index for sortOptions

    const currentSortOption = sortOptions[sortIndex];
    const filter = currentSortOption.value === "all" ? null : currentSortOption.value;
    const displayValue = currentSortOption.label;

    let filteredExperiences = experiencesData;

    if (filter) {
        filteredExperiences = experiencesData.filter(exp => exp.category === filter);
    }
    // Chronological sort: newest first (based on end date, then start date for ongoing)
    filteredExperiences.sort((a, b) => {
        const dateA = a.endDate ? new Date(a.endDate) : new Date(); // Use current date for ongoing
        const dateB = b.endDate ? new Date(b.endDate) : new Date(); // Use current date for ongoing

        if (dateB - dateA !== 0) {
            return dateB - dateA; // Sort by end date (newest first)
        }
        // If end dates are the same (e.g., both ongoing or same end date), sort by start date (newest first)
        return new Date(b.startDate) - new Date(a.startDate);
    });

    const handleSortClick = () => {
        setSortIndex((prevIndex) => (prevIndex + 1) % sortOptions.length);
    };

    // Add state to track navbar height
    const [navbarHeight, setNavbarHeight] = useState(0);
    // Additional offset for gradient fade effect
    const gradientOffset = 20;

    // Effect to measure navbar height and update state
    useEffect(() => {
        const updateNavbarHeight = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                setNavbarHeight(navbar.offsetHeight);
            }
        };

        // Initial measurement
        updateNavbarHeight();

        // Update on window resize
        window.addEventListener('resize', updateNavbarHeight);
        
        // Cleanup listener
        return () => window.removeEventListener('resize', updateNavbarHeight);
    }, []);

    return (
        <div>
            <div className="project-list">
                <br />
                <button 
                    className="sort-dropdown" // Keep class for styling, but it's a button now
                    onClick={handleSortClick}
                    aria-label={`Sort experiences by ${displayValue}`} // Accessibility
                >
                    <span className="sort-dropdown-label-display">Sort by: {displayValue}</span>
                </button>
                <br />
                {/* Added fixed-width container wrapping all cards to maintain consistent layout */}
                <div className="experience-container" style={{ marginTop: `${navbarHeight + gradientOffset}px` }}>
                    {filteredExperiences.map((exp, index) => (
                        <div key={index} className="job-experience">
                            <div className="job-header">
                                <h1 className="job-title">{exp.title}</h1>
                                <p className="job-dates">{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</p>
                            </div>
                            <h2 className="company">At {exp.company}</h2>
                            <h3>Description of Duties:</h3>
                            <p className="duties-text">{exp.duties}</p>
                            <h3 className="skills-heading">Key Skills:</h3>
                            <ul className="skills-list">
                                {exp.skills.map((skill, i) => <li key={i} className="skill-tag">{skill}</li>)}
                            </ul>
                            {index < filteredExperiences.length - 1 && <hr className="experience-separator" />}
                        </div>
                    ))}
                </div>
            </div>
            <p>Need someone with this experience? <a href="mailto:aquinnmo@outlook.com" target="_blank">Contact me!</a></p>
        </div>
    );
}

export default Experience;