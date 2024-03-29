import Button from "../timeline/tweet-editor/Button";
import TweetAction from "../timeline/tweet/TweetAction";
import MenuButton from "../trends/MenuButton";
import Home from "./../../assets/Home.png"
import Normal from "./../../assets/Normal.png"
import Explore from "./../../assets/Explore.png"
import Notifications from "./../../assets/Notifications.png"
import Messages from "./../../assets/Messages.png"
import Bookmarks from "./../../assets/Bookmarks.png"
import Lists from "./../../assets/Lists.png"
import Profile from "./../../assets/Profile.png"
import UserProfile from "./../../assets/Profile-Photo.png"
import More from "./../../assets/More.png"
import ThreeDot from "./../../assets/More-2.png"
import {Link} from "react-router-dom"
import { useContext } from "react";
import TweetsContext from "../../contexts/TweetsContext";


export default function Sidebar() {
    let {user} = useContext(TweetsContext)
    const menu = [
        {img: Normal, value: ""},
        {img: Home, value: "Home"},
        {img: Explore, value: "Explore"},
        {img: Notifications, value: "Notifications"},
        {img: Messages, value: "Messages"},
        {img: Bookmarks, value: "Bookmarks"},
        {img: Lists, value: "Lists"},
        {img: Profile, value: "Profile"},
        {img: More, value: "More"},
    ]
    return (<div className="sidebar">

        <div>
            {menu.map((me)=> <MenuButton key={me.value}  icon={me.img} value={me.value} />)}
             <Button/>
        </div>
        
   
        <div className="sidebar-profile">
            <Link to={`/userProfile/${user["titleAuthor"]}`}>
               <img src={UserProfile} />
            </Link>
           
            <div className="user-info">
                <Link to={`/userProfile/${user["titleAuthor"]}`}>
                <div>Bradley Ortiz</div>
                <div className="author2">@bradley_</div>
                </Link>
               
            </div>
            <img src={ThreeDot} />
        </div>
       
    </div>)
}