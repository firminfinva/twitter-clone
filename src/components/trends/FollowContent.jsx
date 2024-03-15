import Verified from "./../../assets/Verified.png"

export default function FollowContent({value}){
    return (<div className="follow-contents">
        <div>
            <img src={value.img}/>
            <div>
                <div className="follow-contents-title1">{value.owner.title1} <img  src={Verified}/> </div>
                <div className="follow-contents-title2">@{value.owner.title2}</div>
            </div>
        </div>
        <button>Follow</button>
    </div>)
}