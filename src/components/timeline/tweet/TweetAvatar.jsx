import TweetProfilePhoto from '../../../assets/Tweet-Profile-Photo.png';
import { tweetAvatar } from '../../../tailwindClasses';


export default function TweetAvatar({image}){
    return (<>
        <img className={tweetAvatar} src={image} />

    </>)
}