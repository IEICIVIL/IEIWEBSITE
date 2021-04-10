import React from "react";
import cemto from "../assets/Social media icons/icons8-red-cement-mixer-48.png";
import Floaters from "../assets/Social media icons/icons8-surfing-48.png";
import eggs from "../assets/Social media icons/icons8-easter-egg-48.png";
import Tallest from "../assets/Social media icons/icons8-tokyo-tower-48.png";
import bridge from "../assets/Social media icons/icons8-bridge-48.png";
import GDC from "../assets/Social media icons/icons8-confusion-48.png";
import Prof from "../assets/Social media icons/icons8-futurama-professor-farnsworth-48.png";
import autocad from "../assets/Social media icons/icons8-autocad-48.png";
import techniq from "../assets/Social media icons/icons8-manual-handling-48.png";
import fun from "../assets/Social media icons/icons8-party-whistle-48.png";
import finger from "../assets/Social media icons/icons8-fingerprint-scan-48.png";
import wiz from "../assets/Social media icons/icons8-wizard-48.png"



function Sponsership(){

    const details =[
{eventName:"Cube-De-Cemento",image:cemto},
,{eventName:"Floaters",image:Floaters}
,{eventName:"Save the eggs",image:eggs}
,{eventName:"Tallest",image:Tallest},
{eventName:"Bridge the Gap",image:bridge},
,{eventName:"Geometric Dumb Charades",image:GDC}
,{eventName:"Professor’s Cut",image:Prof}
,{eventName:"Autocad designing",image:autocad},
{eventName:"TechniQ",image:techniq},
,{eventName:"FUN-VEYING",image:fun}
,{eventName:"Ciberbridgeton",image:finger}
,{eventName:"C-Wiz",image:wiz}

    ]

    return (
        <div className="sponserSection" id="sponserhip">
           
              <h1 className=" text__body text-uppercase text-custum text-uni">Our Events 2021</h1>
<div class="slider__sponser">
    <div class="slide-track">
        <div class="slide" style={{color: '#000'}}>
            {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" /> */}
            {details.map(data=>(
                <h1 className="eventHeading">
                    <img src={data.image}/>
                    <span>{data.eventName}</span></h1>
            ))}
        </div>
    </div>
</div>
        </div>
    )
}
export default Sponsership;