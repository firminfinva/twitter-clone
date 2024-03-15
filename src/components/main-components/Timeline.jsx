import { useEffect, useState } from "react"
import Header from "../timeline/header/Header"
import TweetEditor from "../timeline/tweet-editor/TweetEditor"
import Tweets from "../timeline/tweet/Tweets"
import Trends from "./Trends"


export default function Timeline(){
    return (
        <div className="timeline-main">
            <div className="timeline"> 
                <Header/>
                <TweetEditor />
                <Tweets/>
            </div>
            <Trends/>
        </div>
        
    )
}