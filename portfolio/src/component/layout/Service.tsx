import Service from "@/static/Service";
import ContactBtn from "../menu/elements/ContactBtn";

function Services() {
    return <div id="Skills & Certifications" className="flex text-white min-h-full flex-col items-center bg-slate-800">
        <img className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
        <p className="flex text-4xl my-8 justify-center text-white font-bold">Certifications</p>
        <div className="flex flex-col text-center items-center justify-center w-full h-full max-w-full max-h-full overflow-hidden desktop:flex-row desktop:justify-around">
            <Service hl="Databricks Certified Data Engineer Associate" desc="" img="/images/dbengineerass.svg" />
            <Service hl="Databricks Certified Developer for Apache Spark 3.0" desc="" img="/images/dbdevspark.svg" />
            <Service hl="Databricks Accredited Lakehouse Fundamentals" desc="" img="/images/dblakehousefund.svg" />
            
            
        </div>
        <p className="flex text-4xl my-8 justify-center text-white font-bold">Technical Skills</p>
        <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
            <Service hl="Programming Languages" desc="" img="/icons/pl.svg" />
            <Service hl="Cloud/Data Platforms" desc="Seamless integration into your solution for dynamic content delivery" img="/icons/cloudataplat.svg" />
            <Service hl="Utility/Observability" desc="" img="/icons/utilobs.svg" />
            
            
        </div>
        <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
            <Service hl="Big Data & Distributed Compute" desc="Seamless integration into your solution for dynamic content delivery" img="/icons/bigdata&processing.svg" />
            <Service hl="Analytics & AI/ML" desc="Enhancing visibility and rankings of your web application" img="/icons/analyticsmlai.svg" />
            
            
            
        </div>
        <p className="desktop:text-[40px] mobile:text-[24px] font-bold text-center mb-4">Need me for a project? Reach out to me</p>
        <div className="desktop:text-lg mobile:text-sm  space-y-2">
    <p><span className="font-bold">Phone:</span> +1 (646)-898-7884</p>
    <p>
    <span className="font-bold">Email:</span> <a href="mailto:krishna.kashiv@gmail.com" className="text-blue-500 hover:underline">
      krishna.kashiv@gmail.com
      </a>
    </p>
    <p>Optionally,  click the button below ↓ </p>
    <br />
  </div>
        <ContactBtn title={"Contact Me"} />

    </div>
}

export default Services;