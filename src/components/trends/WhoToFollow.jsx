import FollowContent from "./FollowContent";
import TweetProfilePhoto from "./../../assets/Tweet-Profile-Photo.png"
import TweetProfilePhoto2 from "./../../assets/Tweet-Profile-Photo2.png"
import TweetProfilePhoto3 from "./../../assets/Tweet-Profile-Photo3.png"
import { useState } from "react";
import { whoTofollow, trendsTitle, title6 } from "../../tailwindClasses";

export default function WhoToFollow({title}){
    const [showMore, setShowMore] = useState(3)
    function showMoreFollow(){
        setShowMore(5)
    }
    function showLessFollow(){
        setShowMore(3)
    }
    const follows = [
        {id: "01", img:TweetProfilePhoto2 , owner: {title1: "The new york times", title2:"nytimes"}},
        {id: "02", img:TweetProfilePhoto , owner: {title1: "CNN", title2:"CNN"}},
        {id: "03", img:TweetProfilePhoto3 , owner: {title1: "Twitter", title2:"Twitter"}},
        {id: "04", img:TweetProfilePhoto2 , owner: {title1: "title1", title2:"title2"}},
        {id: "05", img:TweetProfilePhoto2 , owner: {title1: "Twitter", title2:"Twitter"}},
        {id: "06", img:TweetProfilePhoto2 , owner: {title1: "title1", title2:"title2"}},
    ]

    return (<div className={whoTofollow}>
      <div className={trendsTitle}> <h6 className={title6}>{title}</h6> </div>
        {follows.map((follow, index) =>{
            if(index<showMore) return <FollowContent key={follow.id} value={follow} />
        } )}
        {showMore==3?<a onClick={()=> showMoreFollow()}>show more</a>: <a onClick={()=> showLessFollow()}>show less</a>}
        
       
    </div>)
}