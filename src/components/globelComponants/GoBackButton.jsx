import { Link } from "react-router-dom"
import { profileBack } from "../../tailwindClasses"

export default function GoBackButton(){
    return( <button className={profileBack}><Link to="/home">Back</Link></button>)
}