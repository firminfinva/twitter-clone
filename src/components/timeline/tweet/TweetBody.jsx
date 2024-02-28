import TweetTitle from "./TweetTitle"

export default function TweetBody({value}){
   return (<div className="tweet-body">
    <TweetTitle value = {value}/>
   </div>)
}