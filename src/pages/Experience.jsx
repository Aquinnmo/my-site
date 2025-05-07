import React, { useState, useEffect } from "react";

const experiencesData = [
    {
        title: "AI Training Contractor",
        company: "DataAnnotation",
        duties: "I did stuff",
        skills: ["Communication", "Attention to Detail"],
        category: "programming",
        startDate: "2023-05-01",
        endDate: null // null for ongoing
    },
    {
        title: "Vice-President of External Affairs",
        company: "University of Guelph School of Computing and Information Science",
        duties: "I did stuff",
        skills: ["Communication", "Attention to Detail"],
        category: "engaged citizen",
        startDate: "2024-09-01",
        endDate: "2025-04-30"
    },
    {
        title: "Guelph Event Team",
        company: "University of Guelph",
        duties: "I did stuff",
        skills: ["Communication", "Attention to Detail"],
        category: "engaged citizen",
        startDate: "2023-09-01",
        endDate: "2024-04-30"
    },
    {
        title: "Opener",
        company: "Marble Slab Creamery",
        duties: "I did stuff",
        skills: ["Communication", "Attention to Detail"],
        category: "customer service",
        startDate: "2022-05-01",
        endDate: "2022-08-31"
    },
    {
        title: "Host",
        company: "Montana's",
        duties: "I did stuff",
        skills: ["Communication", "Attention to Detail"],
        category: "customer service",
        startDate: "2021-06-01",
        endDate: "2021-09-30"
    }
];

const sortOptions = [
    { value: "all", label: "All" },
    { value: "programming", label: "Programming" },
    { value: "customer service", label: "Customer Service" },
    { value: "engaged citizen", label: "Engaged Citizen" }
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
    // Removed chronological and reverse-chronological sort logic

    const handleSortClick = () => {
        setSortIndex((prevIndex) => (prevIndex + 1) % sortOptions.length);
    };

    return (
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
            {filteredExperiences.map((exp, index) => (
                <div key={index} className="job-experience">
                    <h1 className="job-title">{exp.title}</h1>
                    <h2 className="company">At {exp.company}</h2>
                    <h3>Description of Duties:</h3>
                    <p>{exp.duties}</p>
                    <h3>Key Skills:</h3>
                    <ul>
                        {exp.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                    <br />
                </div>
            ))}
        </div>
    );
}

export default Experience;