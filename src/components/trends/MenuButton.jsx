import { Link, useNavigate } from "react-router-dom"

export default function MenuButton({icon, value}){

    // function handleClick(){
    //   const navigate = useNavigate()
    //   navigate("/explore")
    // }
    return(<div className="tweet-menu-buttons">
        <img src={icon} /> 
        <div >
        <Link style={{ color: 'inherit' }} to={value}>{value}</Link>
        
        </div>
      </div>)
}