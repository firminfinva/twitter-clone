import { Link, useParams } from "react-router-dom"
import { Db } from "../components/timeline/tweet/Tweets"
export default function UserProfile(){
    const {userId} = useParams()
   
    const db = Db()
    
    const theuser = db.filter((user)=> user['tweet_body']['tweet_author_title']==userId)[0]
    console.log(theuser)



    return(<div>
        <button className="profile-back"><Link to="/home">Back</Link></button>
        <div className="background-profile"></div>
        <img className="profile-img" src={theuser["tweet_avatar"]}/>
        <div className="profile-title">
            <h3>{theuser["tweet_body"]["tweet_author_title"]}</h3>
            <div>@{theuser["tweet_body"]["tweet_authors"]}</div>
        </div>
    </div>)
}