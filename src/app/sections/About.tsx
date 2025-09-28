function About() {
    return (
      <section className="p-8">
        <div className="flex flex-wrap">
          <h2>Hi, I&rsquo;m Jacque. </h2>
          <br/>
        <p className="text-md text-center md:text-left md:text-2xl">
          I&apos;m a frontend engineer with over six years of experience from various enterprise companies and 
          seed-stage startups such as
          <a className="inline-link"> Intuit, Synop, and J.P. Morgan </a>.
        
          I specialize in bridging design and engineering—crafting intuitive user experiences, 
          robust design systems and scalable product features. 

          Off the clock, I dabble in <a className="inline-link">writing</a>, 
          join the occasional <a className="inline-link">game jam</a>, 
          and like to <a className="inline-link">make things</a> with my hands.
        </p>
        </div>
      </section>
    );
}

export default About;