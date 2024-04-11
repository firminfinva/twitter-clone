import { useContext } from "react";
import TweetsContext from "../../../contexts/TweetsContext";
import { tweetEditorInput } from "../../../tailwindClasses";

export default function TweetEditorInput({register}){
    const {createTweetsText, setCreateTweetsText} = useContext(TweetsContext)


    const handleInputChange = (e) => {
        setCreateTweetsText(e.target.value);
    };

    return (<input className={tweetEditorInput} onChange={handleInputChange} placeholder="What's happening" 
            {...register("tweet", {
                    required: "Tweet is required",
                    maxLength: {
                        value: 180,
                        message: "Tweet cannot exceed 180 characters"
                    }
                })}
    ></input>)
}