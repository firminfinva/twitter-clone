import CommonMoreBtn from "./../../assets/CommonMoreBtn.png"
import { trendsContents, trendsContentsTweet, trendsContentsTweetSpan1, trendsContentsTweetSpan2, trendsContentsTweetSpan3 } from "../../tailwindClasses"

export default function TrendsContents({value}){
    return(<div className={trendsContents}>
        <div className={trendsContentsTweet}>
            <span className={trendsContentsTweetSpan1}>{value.location}</span>
            <span className={trendsContentsTweetSpan2}>{value.subject}</span>
            <span className={trendsContentsTweetSpan3}>{value.fans} tweets</span>
        </div>
        <div><img src={CommonMoreBtn}/></div>
    </div>)
}