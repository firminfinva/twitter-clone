import { Link } from 'react-router-dom'
import ProfilePhoto from '../../../assets/Profile-Photo.png'
import { useContext } from 'react'
import TweetsContext from '../../../contexts/TweetsContext'
export default function Avatar(){
    let {user} = useContext(TweetsContext)
    return (<div className="avatar">
       <Link to={`/userProfile/${user["titleAuthor"]}`}><img src={user["tweet_avatar"] } /></Link> 
    </div>)
}