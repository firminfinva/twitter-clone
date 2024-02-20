import TweetAction from "./TweetAction"
import Reply from "../../../assets/Reply.png"
import Retweet from "../../../assets/Retweet.png"
import React from "../../../assets/React.png"
import Share from "../../../assets/Share.png"

export default function TweetActions(props){
    return (<div className="tweet-actions">
            <TweetAction icon={Reply} value={props.value?.reply}/>
            <TweetAction icon={Retweet} value={props.value?.retweet}/>
            <TweetAction icon={React} value={props.value?.react}/>
            <TweetAction icon={Share} value={props.value?.share}/>
          
    </div>)
}