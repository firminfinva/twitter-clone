import TreendsBlock from "../trends/TrendsBlock";
import WhoToFollow from "../trends/WhoToFollow";
import Options from "./../../assets/Options.png"
import Search from "./../../assets/Search.png"
import { trends, trendsEditorInput, trendsInput, trendsTerms } from "../../tailwindClasses";

export default function Trends(){
    return(
        <div className={trends}>
            <div className={trendsEditorInput}>
                <img className="w-5 h-5" src={Search} />
                <input className={trendsInput} placeholder="search twitter" type="text">
                    
                </input>
            </div>
           <TreendsBlock icon={Options} title="Trends for you" />
           <WhoToFollow title="Who to Follow" />
           <div className={trendsTerms}>
            Terms of Service Privacy Cookie Policy Imprint Ads info More ... @2021 Twitter, Inc
           </div>
        </div>)
   
}