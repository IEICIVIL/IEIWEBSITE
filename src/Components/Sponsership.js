import React from "react";
import cemto from "../assets/Social media icons/icons8-red-cement-mixer-48.png";
import Floaters from "../assets/Social media icons/icons8-surfing-48.png";
import eggs from "../assets/Social media icons/icons8-easter-egg-48.png";
import Tallest from "../assets/Social media icons/icons8-tokyo-tower-48.png";


function Sponsership(){

    const details =[
{eventName:"Cube-De-Cemento",image:cemto},
,{eventName:"Floaters",image:Floaters}
,{eventName:"Save the eggs",image:eggs}
,{eventName:"Tallest",image:Tallest}

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