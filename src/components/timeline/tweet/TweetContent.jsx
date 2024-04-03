import TweetBody from "./TweetBody"
import TweetText from "./TweetText"
import TweetActions from "./TweetActions"
import TweetImage from "./TweetImage"
import { tweetContent } from "../../../tailwindClasses"

export default function TweetContent({value, index}){
   
    return (<div className={tweetContent}>
        <TweetBody value ={value} />
        <TweetText value={value.tweet_text} />
        <TweetImage value={value.tweet_image}/>
        
        <TweetActions value={value.tweet_actions} index={index} />
    </div>)
}