import TweetTitle from "./TweetTitle"
import { Link} from "react-router-dom"

export default function TweetBody({value}){
   return (<div className="tweet-body">
       <Link to={`/userProfile/${value["tweet_author_title"]}`}> <TweetTitle value = {value}/></Link> 
   </div>)
}