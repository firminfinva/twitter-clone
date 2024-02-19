import Header from "../timeline/header/Header"
import TweetEditor from "../timeline/tweet-editor/TweetEditor"
export default function Timeline(){
    return (<div className="timeline"> 
        <Header/>
        <TweetEditor/>
    </div>)
}