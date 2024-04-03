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


    return(<div className={userProfile}>
        <GoBackButton/>
        <div className={backgroundProfile}>
            
        </div>
        <img className={profileImg} src={theuser? theuser["tweet_avatar"]: user["tweet_avatar"]}/>
        <div className="ml-2">
            <h3 className="text-white">{theuser? theuser["tweet_body"]["tweet_author_title"]: user["titleAuthor"]}</h3>
            <div className="text-gray-700">@{theuser? theuser["tweet_body"]["tweet_authors"]: user["titleAuthor2"]}</div>
        </div>
        {userId==user.titleAuthor ? <div className="text-gray-400 ml-2 flex flex-col  px-2">
            <div className="flex gap-1">   
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray">
                <rect x="1" y="1" width="22" height="18" rx="2" ry="2" fill="gray"/>
                <line x1="3" y1="5" x2="21" y2="5" fill="gray"/>
                <line x1="3" y1="9" x2="21" y2="9" fill="gray"/>
                <line x1="3" y1="13" x2="15" y2="13" fill="gray"/>
                <line x1="6" y1="17" x2="18" y2="17" fill="gray"/>
            </svg>  
            Joined {user.date} </div>
            <div className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray">
                    <path d="M21 7h-4v-2h-4v2h-4c-1.1 0-2 .9-2 2v12c0 1.1 .9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM5 7h4v2h4v-2h4v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7z" fill="gray"/>
                    <path d="M9 10c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4zM14 10c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4z"  fill="gray"/>
                </svg>
                <span>
                {user.followers} followers 
                </span>
                <span>
                {user.following} following 
                </span>
            </div>
            
        </div>: ""}
        
        <div className="mt-2">
           {filterTweet.length>0?filterTweet.map((tweet) => <Tweet value={tweet} />): filterTweet2.map((tweet) => <Tweet value={tweet} />)}
        </div>
    </div>)
}