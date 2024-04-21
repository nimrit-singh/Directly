import React from "react";
import Foot from "../Home/Foot";
import Navbar from "../../parts/Navbar";
import settingsic from '../../../assets/images/icon_gear.png'
import add from '../../../assets/images/Group 61.png'
import './style/dashboard.css'
import Header from "../../parts/Header";
const Dashboard =()=>{
//    let Joblist=[];
//     for(let i=0;i<10000;i++){
// Joblist.push(<Job /)
//    }
   
    return(
        <>
        <Header>
            <div className="header-content"><h1>Directly</h1><img src={settingsic}/></div>
        </Header>
                <Navbar/>
        <div className="cntnr">
         <div className="jobhead"><a>
<img src={add} className="plus"/></a><div>
<h4 className="">Post your requirements</h4>

<h2 className="">You may tell us if you are looking 
<br/>for a job or posting a job</h2></div>
         </div>
           <div className="trending">
            <h3>
                Trending Sectors
            </h3>
            <div className="trndctr">
                <div className="t1">

                </div>
                <div className="t1">

                </div>
            </div>
         </div>

         <div className="trending">
            <h3>
                Trending Sectors
            </h3>
            <div className="trndctr">
                <div className="t1">

                </div>
                <div className="t1">

                </div>
            </div>
         </div>0000000000
        </div>
        <Foot/>
        </>
    )
}
export default Dashboard