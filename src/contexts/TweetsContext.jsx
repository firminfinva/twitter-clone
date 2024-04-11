import React, { createContext, useEffect, useState} from 'react'
import axios  from 'axios';


const TweetsContext = createContext()

export default TweetsContext;


export const TweetsProvider = ({children}) => {
    
    let [tweets, setTweets] = useState()
    let [user, setUser] = useState()

    useEffect(() => {
        axios.get('http://localhost:3001/tweets')
          .then(response => setTweets(response.data.reverse()))
          .catch(error => console.error('Error fetching data:', error));
      },[tweets]);
      useEffect(() => {
          axios.get('http://localhost:3001/currentUser')
          .then(response => setUser(response.data))
          .catch(error => console.error('Error fetching data:', error));
      },[]);

 
    let contextData = {
        user,
        tweets,
        setTweets,
    }

    return(
        <TweetsContext.Provider value={contextData} >
            {children}
        </TweetsContext.Provider>
    )
} 