import { useParams } from "react-router-dom"
import { Db } from "../components/timeline/tweet/Tweets"
import GoBackButton from "../components/globelComponants/GoBackButton"
export default function UserProfile(){
    const {userId} = useParams()
   
    const db = Db()
    
    const theuser = db.filter((user)=> user['tweet_body']['tweet_author_title']==userId)[0]



    return(<div className="userProfile">
        <GoBackButton/>
        <div className="background-profile"></div>
        <img className="profile-img" src={theuser["tweet_avatar"]}/>
        <div className="profile-title">
            <h3>{theuser["tweet_body"]["tweet_author_title"]}</h3>
            <div>@{theuser["tweet_body"]["tweet_authors"]}</div>
        </div>
    </div>)
}