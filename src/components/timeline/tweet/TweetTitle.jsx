import TweetTitleAuthor from "./TweetTitleAuthor"
import Verified from "../../../assets/Verified.png"
import TweetTitleDetails from "./TweetTitleDetails"
import { tweetTitle } from "../../../tailwindClasses"

export default function TweetTitle({value}){
    return (<div className={tweetTitle}>
            <TweetTitleAuthor value={value.tweet_author_title}/>
            <img className="w-4 h-4" src={Verified} />
            <TweetTitleDetails value="@" />
            <TweetTitleDetails value={value.tweet_authors} />
            <TweetTitleDetails value="." />
            <TweetTitleDetails value={value.tweet_time} />
        </div>)
}