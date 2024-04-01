import { button } from "../../../tailwindClasses"

export default function Button({clickEvent}){
    return (<button onClick={clickEvent} className={button}>Tweet</button>)
}