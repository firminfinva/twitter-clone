import TweetAction from "./TweetAction"
import Reply from "../../../assets/Replay.svg"
import Retweet from "../../../assets/Retweet.svg"
import React from "../../../assets/React.svg"
import Share from "../../../assets/Share.svg"
import { useRef } from "react"
import { useState } from "react"

export default function TweetActions({value}){
    const [onHover1, setOnHover1] = useState(false)
    const [onHover2, setOnHover2] = useState(false)
    const [onHover3, setOnHover3] = useState(false)
    const [onHover4, setOnHover4] = useState(false)
    const [onClick1, setOnClick1] = useState(false)
    const [onClick2, setOnClick2] = useState(false)
    const [onClick3, setOnClick3] = useState(false)
    const [onClick4, setOnClick4] = useState(false)
    const baseStyle1 = {fill: '#6E767D'};
    const hoverStyle1 = { fill: '#007BFF', stroke: "#007BFF"};
    const hoverStyle2 = { fill: '#00FF00', stroke: "#00FF00", cursor: "pointer", borderRadius: "50%"};
    const hoverStyle3 = { fill: '#FF0000', stroke: "#FF0000"};
    const hoverStyle4 = { fill: '#007BFF', stroke: "#007BFF"};
    function handleHover1(e){
        setOnHover1(true)
    }
    function handleLeave1(){
        setOnHover1(false)
        setOnClick1(false)
    }
    function handleHover2(){
        setOnHover2(true)
    }
    function handleLeave2(){
        setOnHover2(false)
        setOnClick2(false)
    }
    function handleHover3(){
        setOnHover3(true)
    }
    function handleLeave3(){
        setOnHover3(false)
        setOnClick3(false)
    }
    function handleHover4(){
        setOnHover4(true)
    }
    function handleLeave4(){
        setOnHover4(false)
        setOnClick4(false)
    }
    function handleClick1(){
        setOnClick1(true)
    }
    function handleClick2(){
        setOnClick2(true)
    }

    function handleClick3(){
        setOnClick3(true)
    }

    function handleClick4(){
        setOnClick4(true)
    }

    return (<div className="tweet-actions">
            <div className="tweet-action-share custom-tooltip" title="reply" onClick={handleClick1} onMouseEnter={handleHover1} onMouseLeave={handleLeave1}>
                <div>
                    <svg className="tweet-share"  style={onHover1 ? hoverStyle1 : baseStyle1}  width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="34" height="34" rx="17" fill={onHover1 ? 'hsl(202, 100%, 84%)': "black"} />
                    <path  d="M18.705 8.86835L15.2483 8.86002H15.2467C11.6017 8.86002 8.74667 11.7158 8.74667 15.3617C8.74667 18.7767 11.4017 21.3667 14.9675 21.5033V24.6933C14.9675 24.7833 15.0042 24.9317 15.0675 25.0292C15.1858 25.2167 15.3875 25.3183 15.5942 25.3183C15.7092 25.3183 15.825 25.2867 15.9292 25.22C16.1492 25.08 21.3233 21.77 22.6692 20.6317C24.2542 19.29 25.2025 17.3233 25.205 15.3717V15.3575C25.2 11.7183 22.3467 8.86835 18.705 8.86752V8.86835ZM21.8608 19.6783C20.9158 20.4783 17.8092 22.5159 16.2175 23.5475V20.8917C16.2175 20.5467 15.9383 20.2667 15.5925 20.2667H15.2625C12.2125 20.2667 9.99751 18.2034 9.99751 15.3617C9.99751 12.4167 12.3042 10.11 15.2475 10.11L18.7033 10.1183H18.705C21.6483 10.1183 23.955 12.4233 23.9567 15.365C23.9542 16.9567 23.1717 18.5683 21.8617 19.6783H21.8608Z" />
                    </svg>
        
                    <TweetAction color={onHover1 ? hoverStyle1.fill : baseStyle1.fill} value={value?.reply}/>
             
                </div>   
            </div>
           <div className="tweet-action-reply" title="retweet" onClick={handleClick2} onMouseEnter={handleHover2} onMouseLeave={handleLeave2}>
                <div>
                    <svg className="tweet-reply"  style={onHover2 ? hoverStyle2 : baseStyle1} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="68" height="68" rx="34" fill={onHover2 ? 'hsl(202, 100%, 84%)': "black"} />
                    <path d="M19.8083 13.0583C19.565 12.8142 19.1692 12.8142 18.925 13.0583L17.075 14.9083V6.37499C17.075 4.65166 15.6725 3.24999 13.95 3.24999H9.07501C8.73001 3.24999 8.45001 3.52999 8.45001 3.87499C8.45001 4.21999 8.73001 4.49999 9.07501 4.49999H13.95C14.9833 4.49999 15.825 5.34166 15.825 6.37499V14.9083L13.975 13.0583C13.7308 12.8142 13.335 12.8142 13.0917 13.0583C12.8483 13.3025 12.8467 13.6983 13.0917 13.9417L16.0083 16.8583C16.1292 16.9808 16.2892 17.0417 16.45 17.0417C16.6108 17.0417 16.7692 16.9817 16.8917 16.8583L19.8083 13.9417C20.0533 13.6983 20.0533 13.3025 19.8083 13.0583ZM10.925 15.7917H6.05001C5.01667 15.7917 4.17501 14.95 4.17501 13.9167V5.38332L6.02501 7.23332C6.14834 7.35582 6.30834 7.41666 6.46834 7.41666C6.62834 7.41666 6.78834 7.35582 6.91001 7.23332C7.15417 6.98916 7.15417 6.59332 6.91001 6.34999L3.99334 3.43332C3.74917 3.18832 3.35334 3.18832 3.11001 3.43332L0.19334 6.34999C-0.0516599 6.59332 -0.0516599 6.98916 0.19334 7.23332C0.43834 7.47749 0.832507 7.47749 1.07667 7.23332L2.92667 5.38332V13.9167C2.92667 15.64 4.32917 17.0417 6.05167 17.0417H10.9267C11.2717 17.0417 11.5517 16.7617 11.5517 16.4167C11.5517 16.0717 11.2708 15.7917 10.9267 15.7917H10.925Z"/>
                    </svg>
                    <TweetAction color={onHover2 ? hoverStyle2.fill : baseStyle1.fill} value={value?.retweet}/>
                </div>  
           </div>
           
            <div className="tweet-action-vector" title="react" onClick={handleClick3} onMouseEnter={handleHover3} onMouseLeave={handleLeave3}>
                <div>
                    <svg className="tweet-vector"  style={onHover3 ? hoverStyle3 : baseStyle1} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="34" height="34" rx="17" fill={onHover3 ? 'hsl(202, 100%, 84%)': "black"}/>
                        <path d="M10 18.0317H9.98834C7.83584 17.9917 1.62501 12.38 1.62501 7.06499C1.62501 4.51166 3.72917 2.26999 6.12751 2.26999C8.03584 2.26999 9.31918 3.58666 9.99918 4.54499C10.6775 3.58832 11.9608 2.26999 13.87 2.26999C16.27 2.26999 18.3733 4.51166 18.3733 7.06582C18.3733 12.3792 12.1617 17.9908 10.0092 18.03H10V18.0317ZM6.12834 3.52082C4.39501 3.52082 2.87584 5.17749 2.87584 7.06666C2.87584 11.85 8.73751 16.73 10.0008 16.7817C11.2658 16.73 17.1258 11.8508 17.1258 7.06666C17.1258 5.17749 15.6067 3.52082 13.8733 3.52082C11.7667 3.52082 10.59 5.96749 10.58 5.99166C10.3883 6.45999 9.61668 6.45999 9.42418 5.99166C9.41251 5.96666 8.23667 3.52082 6.12917 3.52082H6.12834Z" />
                    </svg>
                    <TweetAction color={onHover3 ? hoverStyle3.fill : baseStyle1.fill} value={value?.react}/>
                </div>
            </div>
            <div className="tweet-action-share" title="share" onClick={handleClick4} onMouseEnter={handleHover4} onMouseLeave={handleLeave4}>
                <div>
                    <svg className="tweet-share"  style={onHover4 ? hoverStyle4 : baseStyle1} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="34" height="34" rx="17" fill={onHover4 ? 'hsl(202, 100%, 84%)': "black"}/>
                    <path d="M21.6083 13.225L17.4417 9.05834C17.1975 8.81417 16.8017 8.81417 16.5583 9.05834L12.3917 13.225C12.1467 13.4692 12.1467 13.865 12.3917 14.1083C12.6367 14.3517 13.0308 14.3533 13.275 14.1083L16.375 11.0083V19.5C16.375 19.845 16.655 20.125 17 20.125C17.345 20.125 17.625 19.845 17.625 19.5V11.0083L20.725 14.1083C20.8467 14.2308 21.0067 14.2917 21.1667 14.2917C21.3267 14.2917 21.4867 14.2317 21.6083 14.1083C21.8525 13.8642 21.8525 13.4692 21.6083 13.225Z"/>
                    <path d="M23.4233 25.2867H10.5767C9.52334 25.2867 8.66667 24.43 8.66667 23.3767V18.6667C8.66667 18.3217 8.94667 18.0417 9.29167 18.0417C9.63667 18.0417 9.91667 18.3217 9.91667 18.6667V23.3767C9.91667 23.7408 10.2125 24.0367 10.5767 24.0367H23.4233C23.7875 24.0367 24.0833 23.7408 24.0833 23.3767V18.6667C24.0833 18.3217 24.3633 18.0417 24.7083 18.0417C25.0533 18.0417 25.3333 18.3217 25.3333 18.6667V23.3767C25.3333 24.43 24.4767 25.2867 23.4233 25.2867Z"/>
                    </svg>
        
                    <TweetAction color={onHover4 ? hoverStyle4.fill : baseStyle1.fill} value={value?.share}/>
                </div>
            </div>
            
          
    </div>)
}