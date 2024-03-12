import CommonMoreBtn from "./../../assets/CommonMoreBtn.png"

export default function TrendsContents({value}){
    return(<div className="trends-contents">
        <div className="trends-contents-tweet">
            <span>{value.location}</span>
            <span>{value.subject}</span>
            <span>{value.fans} tweets</span>
        </div>
        <div><img src={CommonMoreBtn}/></div>
    </div>)
}