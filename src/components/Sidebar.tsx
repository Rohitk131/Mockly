import { Separator } from "@/components/ui/separator"
import Combobox from '../components/combobox';
export default function Sidebar(){
    return(
        <div className='w-1/6 bg-black h-4/5 rounded-xl p-2 pr-4 '>
            <div className="pl-4 pt-4">
            <h1 className="text-white font-mono font-bold text-3xl">Settings</h1>
            <Separator className="my-4"/>
            <h1 className="text-white font-mono">Theme</h1>
            <h1 className="text-white font-mono">Padding</h1>
            <h1 className="text-white font-mono">Device Mockup</h1>
            <Combobox/>
            </div>
        </div>
    )
}