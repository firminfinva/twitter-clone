import Media from '../../../assets/Media.png'
import Gif from '../../../assets/Gif.png'
import Poll from '../../../assets/Poll.png'
import Emoji from '../../../assets/Emoji.png'
import Schedule from '../../../assets/Schedule.png'

export default function TweetEditorActions(){
    return (<div className="tweet-editor-actions">
        <img src={Media} />
        <img src={Gif} />
        <img src={Poll} />
        <img src={Emoji} />
        <img src={Schedule} />
    </div>)
}