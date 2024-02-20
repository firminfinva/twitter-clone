import TweetEditorInput from "./TweetEditorInput"
import TweetEditorButtons from "./TweetEditButtons"
export default function TweetEditorForm(){
    return (
    <div className="tweet-editor-form">
        <form >
            <TweetEditorInput/>
        </form>
        <TweetEditorButtons/>
    </div>
    )
}