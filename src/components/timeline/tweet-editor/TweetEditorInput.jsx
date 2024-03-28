import { useContext } from "react";
import TweetsContext from "../../../contexts/TweetsContext";

export default function TweetEditorInput(){
    const {createTweetsText, setCreateTweetsText} = useContext(TweetsContext)

    const handleInputChange = (e) => {
        setCreateTweetsText(e.target.value);
    };

    return (<input className="tweet-editor-input" value={createTweetsText} onChange={handleInputChange} placeholder="What's happening"></input>)
}