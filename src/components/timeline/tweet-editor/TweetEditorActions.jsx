import Media from '../../../assets/Top-Tweets.png'
import Gif from '../../../assets/Top-Tweets2.png'
import Poll from '../../../assets/Top-Tweets3.png'
import Emoji from '../../../assets/Top-Tweets4.png'
import Schedule from '../../../assets/Top-Tweets5.png'
import { tweetEditorActions } from '../../../tailwindClasses'

export default function TweetEditorActions(){
    return (<div className={tweetEditorActions}>
         <img src={Media} />
        <img src={Gif} />
        <img src={Poll} />
        <img src={Emoji} />
        <img src={Schedule} />
    </div>)
}