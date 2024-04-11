import { Link } from 'react-router-dom'
import ProfilePhoto from '../../../assets/Profile-Photo.png'
import { useContext } from 'react'
import TweetsContext from '../../../contexts/TweetsContext'
import { avatar, avatarImg } from '../../../tailwindClasses'

export default function Avatar(){
    let {user} = useContext(TweetsContext)
    return (<div className={avatar}>
        {user ? <Link to={`/userProfile/${user["titleAuthor"]}`}><img className={avatarImg}  src={user["tweet_avatar"] } /></Link> : ""}
       
    </div>)
}