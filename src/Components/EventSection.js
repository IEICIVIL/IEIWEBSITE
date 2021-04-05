import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



function EventSection(){

    const teamdetails =[
     {id:"1",image:"https://images.pexels.com/photos/2469/building-construction-building-site-constructing.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",name:"Ram",summery:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis                        possimus illo quos, corporis minima"},
      {id:"2",image:"https://images.pexels.com/photos/2469/building-construction-building-site-constructing.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",name:"Raj",summery:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis                        possimus illo quos, corporis minima"},
        {id:"3",image:"https://images.pexels.com/photos/159375/construction-site-build-construction-work-159375.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",name:"Ravi",summery:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis                        possimus illo quos, corporis minima"},  {id:"1",image:"https://images.pexels.com/photos/2469/building-construction-building-site-constructing.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",name:"Ram",summery:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis                        possimus illo quos, corporis minima"},
      {id:"2",image:"https://images.pexels.com/photos/2469/building-construction-building-site-constructing.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",name:"Raj",summery:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis                        possimus illo quos, corporis minima"},
        {id:"3",image:"https://images.pexels.com/photos/159375/construction-site-build-construction-work-159375.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",name:"Ravi",summery:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis                        possimus illo quos, corporis minima"},  {id:"1",image:"https://images.pexels.com/photos/2469/building-construction-building-site-constructing.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",name:"Ram",summery:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis                        possimus illo quos, corporis minima"},
      {id:"2",image:"https://images.pexels.com/photos/2469/building-construction-building-site-constructing.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",name:"Raj",summery:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis                        possimus illo quos, corporis minima"},
        {id:"3",image:"https://images.pexels.com/photos/159375/construction-site-build-construction-work-159375.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",name:"Ravi",summery:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis                        possimus illo quos, corporis minima"},  {id:"1",image:"https://images.pexels.com/photos/2469/building-construction-building-site-constructing.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",name:"Ram",summery:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis                        possimus illo quos, corporis minima"},
      {id:"2",image:"https://images.pexels.com/photos/2469/building-construction-building-site-constructing.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",name:"Raj",summery:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis                        possimus illo quos, corporis minima"},
        {id:"3",image:"https://images.pexels.com/photos/159375/construction-site-build-construction-work-159375.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",name:"Ravi",summery:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis                        possimus illo quos, corporis minima"},
		  
		
       
       
    ]
    var persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];
console.log(teamdetails)
    return (
        
	<section class="section-team">
		<div class="container">
			{/* <!-- Start Header Section --> */}
			<div class="row justify-content-center text-center">
				<div class="col-md-8 col-lg-6">
					<div class="header-section">
						
						<h2 class="text-lg text-gray text-custum text-uppercase">OnGoing Events</h2>
					</div>
				</div>
			</div>
			{/* <!-- / End Header Section -->
				<!-- Start Single Person --> */}

			<div class="row ">
				 <Carousel autoPlay infiniteLoop swipeable>
				{
                teamdetails.map(data=>(
                    	  
				   <div>
                    <img src={data.image} />
                    <p className="legend">{data.summery}</p>
					<button className="btn btn-custom">Register</button>
                </div>
			
				
		
                ))
            }
</Carousel>
				{/* <!-- / End Single Person --> */}
			</div>
				
		</div>
	</section>

    )
}

export default EventSection;