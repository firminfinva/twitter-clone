import TweetBody from "./TweetBody"
import TweetText from "./TweetText"
import TweetActions from "./TweetActions"
import TweetImage from "./TweetImage"

export default function TweetContent({value}){

    return (<div className="tweet-content">
        <TweetBody value ={value} />
        <TweetText value={value.tweet_text} />
        <TweetImage value={value.tweet_image}/>
        
        <TweetActions value={value.tweet_actions}/>
    </div>)
}