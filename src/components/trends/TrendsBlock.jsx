import { Link } from "react-router-dom";
import TrendsContents from "./TrendsContents";
import { useState } from "react";

export default function TreendsBlock({title, icon}){
    const trends = [
        {id:"01", location: "trends of turky", subject:"SQUID", fans:"2600"},
        {id:"02", location: "trends of turky", subject:"SQUID", fans:"2600"},
        {id:"03", location: "trends of turky", subject:"SQUID", fans:"2600"},
        {id:"04", location: "trends of turky", subject:"SQUID", fans:"2600"},
        {id:"05", location: "trends of turky", subject:"SQUID", fans:"2600"},
    ]
    const [moreTrends, setMoreTrends] = useState(3)
    function showMoreTrends(){
        setMoreTrends(5)
    }
    function showLessTrends(){
        setMoreTrends(3)
    }
    return(<div className="trends-block">
        <div className="trends-title"> <h6 className="title">{title}</h6><img src={icon} /></div>
        {trends.map((trend,index)=> {
            if(index<moreTrends) return <TrendsContents key={trend.id} value={trend} />
        } )}
        
        {moreTrends==3?<a onClick={()=> showMoreTrends()}>show more</a>: <a onClick={()=> showLessTrends()}>show less</a>}
    </div>)
}