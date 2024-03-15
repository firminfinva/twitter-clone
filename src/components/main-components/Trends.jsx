import TreendsBlock from "../trends/TrendsBlock";
import WhoToFollow from "../trends/WhoToFollow";
import Options from "./../../assets/Options.png"
import Search from "./../../assets/Search.png"

export default function Trends(){
    return(
        <div className="trends">
            <div className="trends-editor-input">
                <img src={Search} />
                <input className="trends-input" placeholder="search twitter" type="text">
                    
                </input>
            </div>
           <TreendsBlock icon={Options} title="Trends for you" />
           <WhoToFollow title="Who to Follow" />
           <div className="trends-terms">
            Terms of Service Privacy Cookie Policy Imprint Ads info More ... @2021 Twitter, Inc
           </div>
        </div>)
   
}