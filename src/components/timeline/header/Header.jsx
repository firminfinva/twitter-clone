import PageTitle from "./PageTitle"
import TopTweets from "./TopTweets"
export default function Header(){
    return (<div className="header">
        <PageTitle/>
        <TopTweets/>
    </div>)
}