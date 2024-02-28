export default function TweetAction({icon, value}){
    return (<div className="tweet-action">
        <img src={icon} />{value}</div>)
}