import TweetTitleAuthor from "./TweetTitleAuthor"
import Verified from "../../../assets/Verified.png"
import TweetTitleDetails from "./TweetTitleDetails"

export default function TweetTitle(props){
    return (<div className="tweet-title">
            <TweetTitleAuthor value={props.value.tweet_author_title}/>
            <img src={Verified} />
            <TweetTitleDetails value="@" />
            <TweetTitleDetails value={props.value.tweet_authors} />
            <TweetTitleDetails value="." />
            <TweetTitleDetails value={props.value.tweet_time} />
        </div>)
}