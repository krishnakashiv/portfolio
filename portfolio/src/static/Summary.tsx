
function Summary(){
    return (<>
        <p className="text-4xl mb-8">About Me</p>
        <article className="desktop:text-xl mobile:text-md" itemScope itemType="https://schema.org/author">
            <p className="mb-5">
            Krishna Kashiv is a Full-Stack Data Engineer adept at navigating ambiguity, taking ownership of complex projects, and delivering impactful results through data-driven decision-making. He approaches his work with empathy, understanding the challenges people face, and is driven by a deep desire to build software and infrastructure that empower others in their work and lives.
< br /><br />He holds a Master’s degree in Computer Science from Syracuse University and a Bachelor’s degree in Computer Engineering from Mumbai University. Krishna’s educational background has equipped him with a strong foundation in integrating software development with external hardware systems. A few highlights are:<br /><br />
</p>
        </article>
        <article className="desktop:text-xl mobile:text-md" itemScope itemType="https://schema.org/author">
  <ul className="list-disc pl-5">
    <li className="mb-2 ">
      Contributed to an open-source project for the geoscientific Python community, enhancing tools and resources for Earth system data analysis.
    </li>
    <li className="mb-2 ">
      Building and benchmarking a GPU-enabled High-Performance Computing (HPC) cluster from scratch to accelerate AI/ML workloads, driving advancements in computational efficiency.
    </li>
    <li className="mb-2">
      Developed a national registry and data portal for USDA to support the Net Zero Carbon transition for governments and industries, facilitating sustainability initiatives through data-driven solutions.
    </li>
  </ul>
</article>
 
        <article className="desktop:text-xl mobile:text-md" itemScope itemType="https://schema.org/author">
            <p className="mb-5">Passionate about sustainability, photography, and graphic design, I also enjoy playing tennis and soccer. In my free time, I like building games and designing AI models that excel at playing them.</p>
        </article>
    </>);
}

export default Summary;