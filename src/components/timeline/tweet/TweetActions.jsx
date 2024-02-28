import TweetAction from "./TweetAction"
import Reply from "../../../assets/Reply.png"
import Retweet from "../../../assets/Retweet.png"
import React from "../../../assets/React.png"
import Share from "../../../assets/Share.png"

export default function TweetActions({value}){

    return (<div className="tweet-actions">
            <TweetAction icon={Reply} value={value?.reply}/>
            <TweetAction icon={Retweet} value={value?.retweet}/>
            <TweetAction icon={React} value={value?.react}/>
            <TweetAction icon={Share} value={value?.share}/>
          
    </div>)
}