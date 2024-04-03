import PageTitle from "./PageTitle"
import TopTweets from "./TopTweets"
import { header } from "../../../tailwindClasses"

export default function Header(){
    return (<div className={header}>
        <PageTitle/>
        <TopTweets/>
    </div>)
}