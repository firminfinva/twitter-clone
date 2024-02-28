import Tweet from "./Tweet"
import TweetProfilePhoto from "../../../assets/Tweet-Profile-Photo.png"
import TweetProfilePhoto2 from "../../../assets/Tweet-Profile-Photo2.png"
import TweetProfilePhoto3 from "../../../assets/Tweet-Profile-Photo3.png"
import Image3 from "../../../assets/image3.png"

export default function Tweets(){
    let tweets = [
        {
          "id" : "01",
          "tweet_avatar": TweetProfilePhoto,
          "tweet_body": {
            "tweet_author_title": "CNN",
            "tweet_authors": "CNN",
    
            "tweet_time": "7m",
            "tweet_actions":{
                "reply":"57",
                "retweet":"144",
                "react":"184",
                "share":""},
            "tweet_text": "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis.",
          },
        },
        {
            "id" : "02",
            "tweet_avatar": TweetProfilePhoto2,
            "tweet_body": {
              "tweet_author_title": "The new york times",
              "tweet_authors": "nytimes",
              "tweet_image": Image3,
              "tweet_time": "2h",
              "tweet_actions":{
                    "reply":"19",
                    "retweet":"48",
                    "react":"482",
                    "share":"19"},
              "tweet_text": "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.",
            },
          
           
            
          },
          {
            "id" : "03",
            "tweet_avatar": TweetProfilePhoto3,
            "tweet_body": {
              "tweet_author_title": "Twitter",
              "tweet_authors": "Twitter",
              "tweet_time": "Oct 29",
              "tweet_actions":{
                    "reply":"6.8K",
                    "retweet":"36.6K",
                    "react":"267.1K",
                    "share":""},
              "tweet_text": "BIG NEWS lol jk still Twitter",
            },
          
           
            
          },
          {
            "id" : "04",
            "tweet_avatar": TweetProfilePhoto3,
            "tweet_body": {
              "tweet_author_title": "Twitter",
              "tweet_authors": "Twitter",
              "tweet_time": "Oct 24",
              "tweet_actions":{
                "reply":"118.k",
                "retweet":"785.k",
                "react":"3.3M",
                "share":""},
              "tweet_text": "hello literally everyone",
            },
          
           
            
          },
          {
            "id" : "05",
            "tweet_avatar": TweetProfilePhoto3,
            "tweet_body": {
              "tweet_author_title": "Twitter",
              "tweet_authors": "Twitter",
              "tweet_image": Image3,
              "tweet_time": "Oct 24",
              "tweet_actions":{
                    "reply":"118.k",
                    "retweet":"785.k",
                    "react":"3.3M",
                    "share":""},
              "tweet_text": "hello literally everyone",
            },
          
           
            
          },
        
    ]


    return (<>
        {tweets.map(item => (
            <Tweet key={item.id} value={item}/>
        ))}
    </>)
}