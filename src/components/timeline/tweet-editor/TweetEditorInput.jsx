import { useContext } from "react";
import TweetsContext from "../../../contexts/TweetsContext";
import { tweetEditorInput } from "../../../tailwindClasses";

export default function TweetEditorInput(){
    const {createTweetsText, setCreateTweetsText} = useContext(TweetsContext)

    const handleInputChange = (e) => {
        setCreateTweetsText(e.target.value);
    };

    return (<input className={tweetEditorInput} value={createTweetsText} onChange={handleInputChange} placeholder="What's happening"></input>)
}