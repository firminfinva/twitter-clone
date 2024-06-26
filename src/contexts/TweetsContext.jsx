import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const TweetsContext = createContext();

export default TweetsContext;

export const TweetsProvider = ({ children }) => {
  const [url, setUrl] = useState(
    "https://twitter-clone-express-c1fq.onrender.com"
  );
  let [tweets, setTweets] = useState();
  let [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`${url}/tweets`)
      .then((response) => setTweets(response.data.reverse()))
      .catch((error) => console.error("Error fetching data:", error));
  }, [tweets]);
  useEffect(() => {
    axios
      .get(`${url}/currentUser`)
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  let contextData = {
    user,
    tweets,
    setTweets,
    url,
  };

  return (
    <TweetsContext.Provider value={contextData}>
      {children}
    </TweetsContext.Provider>
  );
};
