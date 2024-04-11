import TweetEditorActions from "./TweetEditorActions"
import Button from "./Button"
import { useContext } from "react"
import TweetsContext from "../../../contexts/TweetsContext"
import { tweetEditorButtons } from "../../../tailwindClasses"
import axios from "axios"

export default function TweetEditorButtons({handleSubmit}){
   let {tweets, setTweets, createTweetsText,user} = useContext(TweetsContext)

    

    function theSubmit(e){
      e.preventDefault(); 
  
      handleSubmit((data) => console.log("data", data))
      
    }
    // function onSubmit(){
    //   let updatedTweets = [...tweets]
    //   let newTweet = {
    //     "id": "0" + (tweets.length +1),
    //     "tweet_avatar": user["tweet_avatar"],
    //     "tweet_body": {
    //       "tweet_author_title": user.titleAuthor,
    //       "tweet_authors": user.titleAuthor2,
    //       "tweet_time": "12m",
    //       "tweet_actions":{
    //           "reply":"0",
    //           "retweet":"0",
    //           "liked": "false",
    //           "react":"0",
    //           "share":""},
    //       "tweet_text": createTweetsText
    //       }
    //   }
    //   // updatedTweets.unshift(newTweet)
    //   // setTweets(updatedTweets)
    //   axios.post('http://localhost:3001/tweets', newTweet)
    //   .then(response => {
    //     console.log('New post added:', response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error adding post:', error);
    //   });
    // }
    return (<div className={tweetEditorButtons}>
      <TweetEditorActions/>
      
      
    </div>)
}