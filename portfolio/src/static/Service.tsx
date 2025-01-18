import { ServiceData } from "@/types/types.d";

function Service (serviceData : ServiceData) {
    return <div className="flex min-h-[450px] max-h-[450px] min-w-[450px] max-w-[450px] flex-col m-4 p-8 rounded-md transition-colors hover:bg-slate-700">
        <p className="text-xl font-bold">{serviceData.hl}</p>
        <img className="w-full h-full object-cover rounded-md" src={serviceData.img} alt="transition" />
        
    </div>
}

export default Service;