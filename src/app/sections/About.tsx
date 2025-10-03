import { BookStack, Github, Linkedin } from "iconoir-react";

function About() {
    return (
      <section className="p-8">
        <div className="flex flex-wrap">
          <h2>Hi, I&rsquo;m Jacque. </h2>
          <br/>
          <p className="text-md text-left md:text-left md:text-2xl">
            I&apos;m a frontend engineer specializing in crafting intuitive user experiences and 
             robust product features.
             <br />
             <br />
            I&apos;ve worked in enterprise companies and seed-stage startups such as 
            <a className="inline-link"> Intuit, Synop, and J.P. Morgan</a> where I helped engineering teams 
            achieve scalable design systems without slowing down product development or increasing technical debt.
            <br />
            <br />
            Off the clock, I  <a className="inline-link">write</a>, 
            join <a className="inline-link">game jams</a>, build small <a className="inline-link">web apps</a>,
            and like to <a className="inline-link">make things</a> with my hands.
          </p>
          <div className="flex justify-center md:justify-start gap-1 md:gap-4 text-2xl py-4 w-full">
            <a 
              href="https://www.linkedin.com/in/jlinang/"
              aria-label="LinkedIn"
            >
                <Linkedin/>
            </a>
            <a 
              href="https://github.com/jacolin-web"
              aria-label="GitHub"
            >
                <Github />
            </a>
            <a 
              href="https://jacolinvilla.substack.com/"
              aria-label="Substack">
                <BookStack />
            </a>
          </div>
        </div>
      </section>
    );
}

export default About;