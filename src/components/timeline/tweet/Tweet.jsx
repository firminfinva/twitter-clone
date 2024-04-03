import { Link } from "react-router-dom"
import TweetAvatar from "./TweetAvatar"
import TweetContent from "./TweetContent"
import { tweet } from "../../../tailwindClasses"

export default function Tweet({value, index}){

    return (<div className={tweet}>
        
        <Link className="flex flex-shrink-0 w-70" to={`/userProfile/${value["tweet_body"]["tweet_author_title"]}`}>
            <TweetAvatar image={value["tweet_avatar"]}/>
        </Link>
       
        
        <TweetContent value= {value.tweet_body} index={index} />
    </div>)
}