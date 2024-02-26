import TweetBody from "./TweetBody"
import TweetText from "./TweetText"
import TweetActions from "./TweetActions"
import TweetImage from "./TweetImage"

export default function TweetContent(props){

    return (<div className="tweet-content">
        <TweetBody value ={props.value} />
        <TweetText value={props.value.tweet_text} />
        <TweetImage value={props.value.tweet_image}/>
        
        <TweetActions value={props.value.tweet_actions}/>
    </div>)
}