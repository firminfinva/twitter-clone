import TweetEditorInput from "./TweetEditorInput"
import TweetEditorButtons from "./TweetEditButtons"
import { tweetEditorForm } from "../../../tailwindClasses"

export default function TweetEditorForm(){
    return (
    <div className={tweetEditorForm}>
        <form >
            <TweetEditorInput/>
        </form>
        <TweetEditorButtons/>
    </div>
    )
}