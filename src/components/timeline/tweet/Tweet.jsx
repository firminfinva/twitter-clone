import TweetAvatar from "./TweetAvatar"
import TweetContent from "./TweetContent"

export default function Tweet(props){
    return (<div className="tweet">
        <TweetAvatar image={props.value["tweet_avatar"]}/>
        <TweetContent value= {props.value.tweet_body} />
    </div>)
}