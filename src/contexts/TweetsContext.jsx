import React, { createContext, useState} from 'react'
import TweetsData from './../data/initial-data.json'


const TweetsContext = createContext()

export default TweetsContext;


export const TweetsProvider = ({children}) => {

    let [tweets, setTweets] = useState(TweetsData.tweets)
    let [createTweetsText, setCreateTweetsText] = useState("")
    let [user, setUser] = useState(TweetsData.user)
 
    let contextData = {
        user,
        tweets,
        setTweets,
        createTweetsText,
        setCreateTweetsText
    }

    return(
        <TweetsContext.Provider value={contextData} >
            {children}
        </TweetsContext.Provider>
    )
} 