import { Download } from 'iconoir-react';
import React from 'react';

// Work Skills constants
const mailchimpSkills:string[] = [
        "JavaScript",
        "React",
        "HTML",
        "CSS",
        "REST APIs",
        "Git",
        "Figma",
        "Jest",
        "Playwright",
    ];

    const synopSkills:string[] = [
        "React",
        "TypeScript",
        "Vizx",
        "Nx",
        "Jest",
        "RTK Query",
        "Storybook",
        "Figma",
        "Bitbucket",
    ];

    const jpmSkills:string[] = [
        "Java",
        "Typescript",
        "React",
        "HTML",
        "CSS",
        "REST APIs",
        "Git",
    ]

const Work: React.FC = () => {
    return (
        <section className="p-8">
            <h2>Experience</h2>
            <div className="gap-3">
                <CompanyTitle title="Software Engineer II" company="Intuit" />
                <span className='italic'>March 2023- September 2024</span>
                <div>
                    - Served as technical frontend lead for the Segmentation team, collaborating with cross-functional engineering, product, and design teams. <br />
                    - Led design system overhaul serving 13+ million users, improving performance and user experience across the platform. <br />
                    - Drove multiple technical initiatives such as reducing technical debt, improving testing coverage and strategy, and implementing A/B testing frameworks. <br />
                </div>
                <CompanySkills skills={mailchimpSkills} />
                <CompanyTitle title="Founding Senior Frontend Engineer" company="Synop" />  
                <span className='italic'>March 2022- December 2022</span>
                <div>
                    - Built design system and component library from scratch. <br />
                    - Collaborated with product and design leadership to define technical frontend architecture and user experience strategy. <br />
                    - Owned and developed User & Vehicle Management frontend domain and product features. <br />
                </div>
                <CompanySkills skills={synopSkills} />
                <CompanyTitle title="Associate Software Engineer" company="JPMorgan Chase & Co." />
                <span className='italic'>July 2018 - February 2022</span>
                <div>
                    - Developed internal platform used by 130+ employees including C-suite executives. <br />
                    - Led demos and training sessions to drive platform adoption across teams. <br />
                    - Enhanced multiple applications focusing on user experience and code quality. <br />
                </div>
                <CompanySkills skills={jpmSkills} />
            </div>
            <a 
                href="/assets/jacolinvilla-resume.pdf" 
                aria-label='Download Resume'
                className="download-link font-bold inline-flex items-center px-4 py-2 bg-gray-200"
                >
                <Download />
                Download Resume
            </a>
        </section>
    );
};

const CompanyTitle: React.FC<{ title: string; company: string; }> = ({ title, company }) => (
    <div className="text-md md:text-xl">
        <span className="font-bold">{title}</span> @ {company}
    </div>
);

const CompanySkills: React.FC<{ skills: string[] }> = ({ skills }) => (
    <div className="flex flex-wrap mb-2">
        {skills.map((skill) => (
            <span key={skill} className="text-sm badge"> {skill} </span>
        ))}
    </div>
);

export default Work;