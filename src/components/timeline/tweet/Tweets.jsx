import Tweet from "./Tweet"
import TweetProfilePhoto from "../../../assets/Tweet-Profile-Photo.png"
import TweetProfilePhoto2 from "../../../assets/Tweet-Profile-Photo2.png"
import TweetProfilePhoto3 from "../../../assets/Tweet-Profile-Photo3.png"
import Image3 from "../../../assets/image3.png"
import { useContext, useEffect, useState } from "react"
import TweetsContext from "../../../contexts/TweetsContext"

export function Db(){
  let  {tweets} = useContext(TweetsContext)
  return tweets
}
export default function Tweets(){
  let  {tweets} = useContext(TweetsContext)
  let [tweetsdata, setTweetsdata] = useState([])

  useEffect(() => {
    setTweetsdata(tweets)
  },[tweets]);
 
    return (<>
        {tweetsdata?.map(item => (
            <Tweet key={item.id} value={item} index={item.id}/>
        ))}
    </>)
}