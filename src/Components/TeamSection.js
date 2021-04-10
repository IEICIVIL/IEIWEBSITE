import React from "react";
import Trishant from "../assets/trishantnewedit.jpeg";
import Lavish from "../assets/Lavish.jpeg"
import Ujjwal from "../assets/Ujjwal.jpg";
import Shrique from "../assets/sharik2.jpg";
import Rupesh from "../assets/rupesh.jpeg";
import Anubhaw from "../assets/Anubhaw.JPG";
import facebook from "../assets/Social media icons/icons8-facebook-100.png";
import instagram from "../assets/Social media icons/icons8-instagram-100.png";
import linkedin from "../assets/Social media icons/icons8-linkedin-100.png";




function TeamSection(){

    const teamDetails = [
        {image:Anubhaw,name:"Anubhaw kr. Sinha",desgination:"President"},
      

        {image:Trishant,name:"Trishant Agarwal",desgination:"Joint president"},
          {image:Shrique,name:"Sharique",desgination:"Vice-President"},
        {image:Lavish,name:"Lavish Kavdla",desgination:"Media & Publicity Director"},
        {image:Ujjwal,name:"Ujjwal Prakash",desgination:"Events Director"},
        {image:Rupesh,name:"Rupesh Kumar",desgination:"Technical Director"},


    ]

    return (
              <>
              
<div class="team" id="team">
  <h2>Meet The Team</h2>
  <div class="list">

      {
          teamDetails.map(data=>(
                 <div class="member"><img class="member__img" src={data.image} alt="a doggo"/>
      <div class="member__info"><strong class="member__name">{data.name}</strong><em class="member__desig">{data.desgination}
      
      </em></div>
    </div>
          ))
      }
   
    
    <div class="member join">
      <p>IEI Student Chapter</p>
      <p>Birla Institute of Technology</p><small>Mesra</small>
      <div className="social-media">
        <a href="https://www.facebook.com/IeiCivilBitMesra/"><img src={facebook}/></a>
        <a href="https://www.instagram.com/iei_civil_bitmesra/"><img src={instagram}/></a>
        <a href="https://in.linkedin.com/company/iei-civil-bit-mesra"><img src={linkedin}/></a>

      </div>
    </div>
  </div>
</div>
              </>
    )
} 

export default TeamSection;