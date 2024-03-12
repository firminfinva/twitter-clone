import TreendsBlock from "../trends/TrendsBlock";
import WhoToFollow from "../trends/WhoToFollow";
import Options from "./../../assets/Options.png"

export default function Trends(){
    return(
        <div className="trends">
            <div className="trends-editor-input">
                <input className="trends-input" type="text"></input>
            </div>
           <TreendsBlock icon={Options} title="Trends for you" />
           <WhoToFollow title="Who to Follow" />
        </div>)
   
}