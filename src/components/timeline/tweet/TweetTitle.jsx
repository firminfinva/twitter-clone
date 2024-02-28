import TweetTitleAuthor from "./TweetTitleAuthor"
import Verified from "../../../assets/Verified.png"
import TweetTitleDetails from "./TweetTitleDetails"

export default function TweetTitle({value}){
    return (<div className="tweet-title">
            <TweetTitleAuthor value={value.tweet_author_title}/>
            <img src={Verified} />
            <TweetTitleDetails value="@" />
            <TweetTitleDetails value={value.tweet_authors} />
            <TweetTitleDetails value="." />
            <TweetTitleDetails value={value.tweet_time} />
        </div>)
}