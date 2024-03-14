import { Link } from "react-router-dom"
import TweetAvatar from "./TweetAvatar"
import TweetContent from "./TweetContent"

export default function Tweet({value}){
    return (<div className="tweet">

        <Link to={`/userProfile/${value["tweet_body"]["tweet_author_title"]}`}><TweetAvatar image={value["tweet_avatar"]}/></Link>
        <TweetContent value= {value.tweet_body} />
    </div>)
}