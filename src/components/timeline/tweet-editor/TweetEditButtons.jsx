import TweetEditorActions from "./TweetEditorActions"
import Button from "./Button"
import { useContext } from "react"
import TweetsContext from "../../../contexts/TweetsContext"
import { tweetEditorButtons } from "../../../tailwindClasses"

export default function TweetEditorButtons(){
   let {tweets, setTweets, createTweetsText,user} = useContext(TweetsContext)

    function handleSubmit(){
      let updatedTweets = [...tweets]
      let newTweet = {
        "id": "0" + (tweets.length +1),
        "tweet_avatar": user["tweet_avatar"],
        "tweet_body": {
          "tweet_author_title": user.titleAuthor,
          "tweet_authors": user.titleAuthor2,
          "tweet_time": "12m",
          "tweet_actions":{
              "reply":"0",
              "retweet":"0",
              "react":"0",
              "share":""},
          "tweet_text": createTweetsText
          }
      }
      updatedTweets.unshift(newTweet)
      setTweets(updatedTweets)
    }
    return (<div className={tweetEditorButtons}>
      <TweetEditorActions/>
      <Button clickEvent={handleSubmit} /> 
      
    </div>)
}