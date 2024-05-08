import TweetEditorInput from "./TweetEditorInput";
import TweetEditorButtons from "./TweetEditButtons";
import { tweetEditorForm } from "../../../tailwindClasses";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import TweetsContext from "../../../contexts/TweetsContext";
import axios from "axios";
import Button from "./Button";

export default function TweetEditorForm() {
  let { tweets, user, url } = useContext(TweetsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(p) {
    let newTweet = {
      id: "0" + (tweets.length + 1),
      tweet_avatar: user["tweet_avatar"],
      tweet_body: {
        tweet_author_title: user.titleAuthor,
        tweet_authors: user.titleAuthor2,
        tweet_time: "12m",
        tweet_actions: {
          reply: "0",
          retweet: "0",
          liked: "false",
          react: "0",
          share: "",
        },
        tweet_text: p.tweet,
      },
    };

    axios
      .post(`${url}/tweets`, newTweet)
      .then((response) => {
        console.log("New post added:", response.data);
      })
      .catch((error) => {
        console.log("url", url);
        console.error("Error adding post:", error);
      });
  }

  return (
    <div className={tweetEditorForm}>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <TweetEditorInput register={register} />
        <div className="text-red-400">{errors?.tweet?.message}</div>
        <div className="flex justify-between">
          <TweetEditorButtons />
          <Button type="submit" />
        </div>
      </form>
    </div>
  );
}
