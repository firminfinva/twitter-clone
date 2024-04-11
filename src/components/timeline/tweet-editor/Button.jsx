import { button } from "../../../tailwindClasses"

export default function Button({clickEvent, type}){
    return (<button type={type} onClick={clickEvent} className={button}>Tweet</button>)
}