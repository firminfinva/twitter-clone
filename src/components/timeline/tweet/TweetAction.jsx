export default function TweetAction({icon, value, color}){
    return (<div className="tweet-action" style={{color:color}}>
             {value}
            </div>)
}