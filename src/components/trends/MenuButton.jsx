export default function MenuButton({icon, value}){
    return(<div className="tweet-menu-buttons">
        <img src={icon} /> 
        <div>
        {value}
        </div>
      </div>)
}