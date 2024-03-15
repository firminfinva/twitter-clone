import { Link } from "react-router-dom"
export default function GoBackButton(){
    return( <button className="profile-back"><Link to="/home">Back</Link></button>)
}