import { Link } from "react-router-dom";
import TrendsContents from "./TrendsContents";
import { useState } from "react";
import { trendsBlock, trendsTitle, trendsBlockTitle } from "../../tailwindClasses";

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
    return(<div className={trendsBlock}>
        <div className={trendsTitle}> <h6 className={trendsBlockTitle}>{title}</h6><img className="bg-white" src={icon} /></div>
        {trends.map((trend,index)=> {
            if(index<moreTrends) return <TrendsContents key={trend.id} value={trend} />
        } )}
        
        {moreTrends==3?<a onClick={()=> showMoreTrends()}>show more</a>: <a onClick={()=> showLessTrends()}>show less</a>}
    </div>)
}