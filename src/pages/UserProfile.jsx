import { useParams } from "react-router-dom"
import GoBackButton from "../components/globelComponants/GoBackButton"
import { useContext } from "react"
import TweetsContext from "../contexts/TweetsContext"
import Tweet from "../components/timeline/tweet/Tweet"
import { userProfile, backgroundProfile, profileImg, tweet} from "../tailwindClasses"

export default function UserProfile(){
    let {tweets, user} = useContext(TweetsContext)
    const {userId} = useParams()

    let filterTweet = tweets.filter((tweet) => tweet["tweet_body"]["tweet_author_title"]==userId)
  
    const theuser = tweets.filter((user)=> user['tweet_body']['tweet_author_title']==userId)[0]

    let filterTweet2 = tweets.filter((tweet) => tweet["tweet_body"]["tweet_author_title"]== user.titleAuthor)

    console.log("User", filterTweet.length)

    return(<div className={userProfile}>
        <GoBackButton/>
        <div className={backgroundProfile}>
            
        </div>
        <img className={profileImg} src={theuser? theuser["tweet_avatar"]: user["tweet_avatar"]}/>
        <div className="ml-2">
            <h3 className="text-white">{theuser? theuser["tweet_body"]["tweet_author_title"]: user["titleAuthor"]}</h3>
            <div className="text-gray-700">@{theuser? theuser["tweet_body"]["tweet_authors"]: user["titleAuthor2"]}</div>
        </div>
        <div className="mt-2">
           {filterTweet.length>0?filterTweet.map((tweet) => <Tweet value={tweet} />): filterTweet2.map((tweet) => <Tweet value={tweet} />)}
        </div>
    </div>)
}