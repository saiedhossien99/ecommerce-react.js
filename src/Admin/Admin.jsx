import { useNavigate } from "react-router-dom"
export default function Admin()
{
    const nevigate=useNavigate();
    function additems()
    {
        nevigate('/additems')
    }
    return(
        <div>
            <div className="flex h-16 justify-between bg-cyan-600">
            <p className="font-bold text-4xl mt-2">Admin pannel</p>
            <button className="items-center mr-3"
            onClick={additems}
            >add item</button>
            </div>        
        </div>
    )
}