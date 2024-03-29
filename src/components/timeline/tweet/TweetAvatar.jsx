import TweetProfilePhoto from '../../../assets/Tweet-Profile-Photo.png';
// import {publicPath} from "./../../../assets"


export default function TweetAvatar({image}){
    // let publicPath =  "src/assets"
    console.log("the img",image)

    return (<>
        <img src={image} />
    </>)
}