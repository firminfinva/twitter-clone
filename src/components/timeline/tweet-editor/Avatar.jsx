import { Link } from 'react-router-dom'
import ProfilePhoto from '../../../assets/Profile-Photo.png'
export default function Avatar(){
    return (<div className="avatar">
       <Link to="/Profile"><img src={ProfilePhoto } /></Link> 
    </div>)
}