import { Link, useNavigate } from "react-router-dom"
import { tweetMenuButtons, tweetMenuImg } from "../../tailwindClasses"

export default function MenuButton({icon, value}){

    // function handleClick(){
    //   const navigate = useNavigate()
    //   navigate("/explore")
    // }
    return(<div className={ tweetMenuButtons }>
        <img className={tweetMenuImg}  src={icon} /> 
        <div >
        <Link style={{ color: 'inherit' }} to={value}>{value}</Link>
        
        </div>
      </div>)
}