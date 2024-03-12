import TweetAvatar from "./TweetAvatar"
import TweetContent from "./TweetContent"

export default function Tweet({value}){
    return (<div className="tweet">
        <TweetAvatar image={value["tweet_avatar"]}/>
        <TweetContent value= {value.tweet_body} />
    </div>)
}