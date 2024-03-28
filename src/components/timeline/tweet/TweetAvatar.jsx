import TweetProfilePhoto from '../../../assets/Tweet-Profile-Photo.png';


export default function TweetAvatar({image}){
    let publicPath =  "src/assets"
    console.log(`${publicPath}${image}`)

    return (<>
        <img src={`${publicPath}${image}`} />
    </>)
}