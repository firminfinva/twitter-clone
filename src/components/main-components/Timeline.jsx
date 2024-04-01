import { useEffect, useState } from "react"
import Header from "../timeline/header/Header"
import TweetEditor from "../timeline/tweet-editor/TweetEditor"
import Tweets from "../timeline/tweet/Tweets"
import Trends from "./Trends"
import { timelineMain, timeline } from "../../tailwindClasses"


export default function Timeline(){
    return (
        <div className={timelineMain}>
            <div className={timeline}> 
                <Header/>
                <TweetEditor />
                <Tweets/>
            </div>
            <Trends/>
        </div>
        
    )
}