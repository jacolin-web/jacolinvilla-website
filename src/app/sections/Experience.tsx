import React from 'react';

const Experience: React.FC = () => {
    const skills = [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "CSS",
        "HTML",
        "REST APIs",
        "Git",
        "Figma",
        "Adobe Creative Suite"
    ];
    return (
        <section className="p-8">
            <h2>Skills</h2>
            <div className="flex flex-wrap">
                {skills.map((skill) => (
                    <span key={skill} className="badge"> {skill} </span>
                ))}
            </div>
            
            <h2>Experience</h2>
            <div className="flex flex-wrap gap-3">

            </div>
        </section>
    );
};

export default Experience;