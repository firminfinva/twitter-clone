import Verified from "./../../assets/Verified.png"
import { followContents, followContentsTitle1 , followContentsTitle2 } from "../../tailwindClasses"

export default function FollowContent({value}){
    return (<div className={followContents}>
        <div className="flex">
            <img className="w-8 h-8 rounded-full" src={value.img}/>
            <div className="ml-1">
                <div className={followContentsTitle1}>{value.owner.title1} <img className="w-2" src={Verified}/> </div>
                <div className={followContentsTitle2}>@{value.owner.title2}</div>
            </div>
        </div>
        <button className="flex items-center text-xs h-5 px-1 py-1 rounded-lg bg-gray-200 text-black">Follow</button>
    </div>)
}