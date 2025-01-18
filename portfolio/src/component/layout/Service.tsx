import Service from "@/static/Service";
import ContactBtn from "../menu/elements/ContactBtn";

function Services() {
    return <div id="Services" className="flex text-white min-h-full flex-col items-center bg-slate-800">
        <img className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
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
        <p className="desktop:text-[40px] mobile:text-[24px] font-bold text-center mb-4">You have a project? Get in Touch</p>
        <div className="desktop:text-lg mobile:text-sm  space-y-2">
    <p><span className="font-bold">Phone:</span> +1 (646)-898-7884</p>
    <p>
    <span className="font-bold">Email:</span> <a href="mailto:krishna.kashiv@gmail.com" className="text-blue-500 hover:underline">
      krishna.kashiv@gmail.com
      </a>
    </p>
    <p><span className="font-bold">Address:</span> 130 Redfield Pl, Syracuse, NY - 13210</p>
    <br />
  </div>
        <ContactBtn title={"Contact Me"} />

    </div>
}

export default Services;