import { useContext } from "react";
import GoBackButton from "../components/globelComponants/GoBackButton";
import TweetsContext from "../contexts/TweetsContext";

export default function Profile(){
    let {tweets, user} = useContext(TweetsContext)
    console.log(user)
    return (
        <>
            <GoBackButton/>
            <div>Profile</div>
        </>
       
    )}