import TweetTitle from "./TweetTitle"

export default function TweetBody(props){
   return (<div className="tweet-body">
    <TweetTitle value = {props.value}/>
   </div>)
}