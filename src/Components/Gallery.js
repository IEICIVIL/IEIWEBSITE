import React from 'react';
import img1 from "../assets/images/portfolio/01.jpg";
import img2 from "../assets/images/portfolio/02.jpg";
import img3 from "../assets/images/portfolio/03.jpg";
import img4 from "../assets/images/portfolio/04.jpg";
import img5 from "../assets/images/portfolio/05.jpg";
import img6 from "../assets/images/portfolio/06.jpg";
import img7 from "../assets/images/portfolio/07.jpg";
import img8 from "../assets/images/portfolio/08.jpg";




// https://www.pexels.com/photo/exterior-of-historic-building-with-local-cafe-6213669/


function Gallery() {

  const GalleryImage =[
    {id:"01",image:img1,title:"title1",description:"A little bit of interesting information about this fantastic image default"},
    {id:"02",image:img2,title:"title2",description:"A little bit of interesting information about this fantastic image default"},
    {id:"03",image:img3,title:"title3",description:"A little bit of interesting information about this fantastic image default"},
    {id:"04",image:img4,title:"title4",description:"A little bit of interesting information about this fantastic image default"},
    {id:"05",image:img5,title:"title5",description:"A little bit of interesting information about this fantastic image default"},
    {id:"06",image:img6,title:"title6",description:"A little bit of interesting information about this fantastic image default"},
    {id:"07",image:img7,title:"title7",description:"A little bit of interesting information about this fantastic image default"},
    {id:"08",image:img8,title:"title8",description:"A little bit of interesting information about this fantastic image default"},
   
  ]


    return (
        <div className="stage">
 
<div id="gallery">
  <div id="header">
    <div id="logo"></div>
  </div>
  <div id="images">

    {
      GalleryImage.map(GalleryData=>(
        <div class="figure"><img class="image" src={GalleryData.image}/>
      <div class="caption">
        <div class="body">
          <div class="number">{GalleryData.id}</div>
          <hr/>
          <h1 class="title"> <b class="text-uppercase">{GalleryData.title}</b></h1>
          <p class="text">{GalleryData.description}</p>
        </div>
      </div>
    </div>
      ))
    }
    
    

    
  </div>
</div>
        </div>
    )
}

export default Gallery
