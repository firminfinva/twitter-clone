import { useParams } from "react-router-dom"
import GoBackButton from "../components/globelComponants/GoBackButton"
import { useContext } from "react"
import TweetsContext from "../contexts/TweetsContext"
import Tweet from "../components/timeline/tweet/Tweet"
export default function UserProfile(){
    let {tweets, user} = useContext(TweetsContext)
    const {userId} = useParams()

    let filterTweet = tweets.filter((tweet) => tweet["tweet_body"]["tweet_author_title"]==userId)
  

    
    const theuser = tweets.filter((user)=> user['tweet_body']['tweet_author_title']==userId)[0]



    return(<div className="userProfile">
        <GoBackButton/>
        <div className="background-profile"></div>
        <img className="profile-img" src={theuser? theuser["tweet_avatar"]: user["tweet_avatar"]}/>
        <div className="profile-title">
            <h3>{theuser? theuser["tweet_body"]["tweet_author_title"]: user["titleAuthor"]}</h3>
            <div>@{theuser? theuser["tweet_body"]["tweet_authors"]: user["titleAuthor2"]}</div>
        </div>
        <div className="user_tweets">
           {filterTweet.map((tweet) => <Tweet value={tweet} />)}
        </div>
    </div>)
}