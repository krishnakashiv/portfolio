
function Summary(){
    return (<>
        <p className="text-4xl mb-8">About Me</p>
        <article className="desktop:text-xl mobile:text-md" itemScope itemType="https://schema.org/author">
            <p className="mb-5">
            Krishna is a Full-Stack Data Engineer adept at navigating ambiguity, taking ownership of complex projects, and delivering impactful solutions that drive data-driven decision-making. He holds a Master&apos;s degree in Computer Science from Syracuse University and a Bachelor&apos;s degree in Computer Engineering from Mumbai University. 
< br /><br />Krishna&apos;s educational background has equipped him with a strong foundation in integrating software development with external (cloud/hardware) resources. He approaches his work with empathy, understanding the challenges people face, and is driven by a deep desire to build software and infrastructure that empower others. A few highlights are:<br />
</p>
        </article>
        <article className="desktop:text-xl mobile:text-md" itemScope itemType="https://schema.org/author">
  <ul className="list-disc pl-5">
    
    <li className="mb-2 ">
      Built and benchmarked a GPU-enabled <strong>High-Performance Computing (HPC) </strong>cluster from scratch to accelerate AI/ML workloads, optimizing performance and memory.
    </li>
    <li className="mb-2 ">
      Contributed to an <strong>Open-Source</strong> project for the geoscientific Python community, enhancing tools for Earth System Science(ESS) data analysis and visualization in HPCs.
    </li>
    <li className="mb-2">
      Developed a <strong>National Registry &amp; Data Portal</strong> for USDA to support Net Zero transitions for governments and industries, facilitating sustainability through data-driven solutions.
    </li>
  </ul>
  <br />
</article>
 
        <article className="desktop:text-xl mobile:text-md" itemScope itemType="https://schema.org/author">
            <p className="mb-5">Krishna is a sustainability advocate who expresses his creativity through photography and graphic design. In his free time, you&apos;ll find him at the gym, or playing tennis and soccer with his friends.</p>
        </article>
    </>);
}

export default Summary;