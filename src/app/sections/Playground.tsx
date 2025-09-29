import { EmojiTalkingHappy, Gamepad } from 'iconoir-react';
import React from 'react';

const Playground: React.FC = () => {
    return (
        <section className="p-8">
            <h2>Playground</h2>
            <div className="inline-flex items-center">
                <p className='text-md text-center md:text-left md:text-2xl'>
                    Some projects I&apos;ve worked on just for fun
                </p>  
                <EmojiTalkingHappy/>
            </div>

            {/* Container for Project cards */}
            <div className="gap-3">
                {/* Game jams container */}
                <div className="border rounded p-2 my-2 flex flex-col"> 
                    <div className='inline-flex items-center font-bold text-md gap-2 md:text-2xl'>
                        <Gamepad />
                        <span>
                            GAME JAMS
                        </span> 
                    </div>
                    <GameCard 
                        title="Pumpkitty Mischief" 
                        date="September 2024"
                        description="Built with Godot for Patch Mag Jam 2025." 
                        link="https://jacolin-web.itch.io/pumpkitty-mischief" 
                    />
                    <GameCard 
                        title="Summer Camp Survivor" 
                        date="June 2024"
                        description="Built in 48 hours with Phaser.js for Novice Summer Jam Series 2025: Short Jam." 
                        link="https://jacolin-web.itch.io/summer-camp-survivor" 
                    />
                    <GameCard 
                        title="That&apos;s My Jam!" 
                        date="January 2023"
                        description="A React based web game app where you click on jams to serve your customers." 
                        link="https://thats-my-jam-sage.vercel.app/" 
                    />
                </div>
            </div>
            <p className='italic'> More will be posted soon....</p>
        </section>
    );
};

const GameCard: React.FC<{ title: string; date: string, description: string; link: string }> = ({ title, description, date, link }) => (
    <div className='py-2'> 
        <span className="font-bold text-md md:text-xl"><a href={link}>{title}</a></span>
        <p className="text-xs md:text-sm">Published: {date}</p>
        <p className='italic'>{description}</p>
    </div>
);

export default Playground;