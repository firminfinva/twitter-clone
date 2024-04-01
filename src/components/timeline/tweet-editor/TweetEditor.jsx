import Avatar from "./Avatar"
import TweetEditorForm from "./TweetEditorForm"
import { tweetEditor } from "../../../tailwindClasses"

export default function TweetEditor(){
    return (<div className={tweetEditor}>
        <Avatar/>
        <TweetEditorForm/>
    </div>)
}