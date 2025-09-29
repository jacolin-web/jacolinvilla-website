import React from 'react';

const Work: React.FC = () => {
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
            <div className="gap-3">
                <CompanyTitle title="Software Engineer II" company="Intuit" />
                <span className='italic'>March 2023- September 2024</span>
                <div>
                    - Served as technical frontend lead for the Segmentation team, collaborating with cross-functional engineering, product, and design teams <br />
                    - Led design system overhaul serving 13+ million users, improving performance and user experience across the platform <br />
                    - Drove multiple technical initiatives such as reducing technical debt, improving testing coverage and strategy, and implementing A/B testing frameworks <br />
                </div>
                <CompanyTitle title="Founding Senior Frontend Engineer" company="Synop" />  
                <span className='italic'>March 2022- December 2022</span>
                <div>
                    - Built design system and component library from scratch <br />
                    - Collaborated with product and design leadership to define technical frontend architecture and user experience strategy <br />
                    - Owned and developed User & Vehicle Management frontend domain and product features <br />
                </div>
                <CompanyTitle title="Associate Software Engineer" company="JPMorgan Chase & Co." />
                <span className='italic'>July 2018 - February 2022</span>
                <div className='grid'>
                    - Developed internal platform used by 130+ employees including C-suite executives <br />
                    - Led demos and training sessions to drive platform adoption across teams <br />
                    - Enhanced multiple applications focusing on user experience and code quality <br />
                </div>
            </div>
        </section>
    );
};

const CompanyTitle: React.FC<{ title: string; company: string; }> = ({ title, company }) => (
    <div className="text-md md:text-xl">
        <span className="font-bold">{title}</span> @ <span className="badge">{company}</span>
    </div>
);

export default Work;