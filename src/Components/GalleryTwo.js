import React from 'react';
import img1 from "../assets/images/portfolio/01.jpg";
import img2 from "../assets/images/portfolio/02.jpg";
import img3 from "../assets/images/portfolio/03.jpg";
import img4 from "../assets/images/portfolio/04.jpg";
import img5 from "../assets/images/portfolio/05.jpg";
import img6 from "../assets/images/portfolio/06.jpg";
import img7 from "../assets/images/portfolio/07.jpg";
import img8 from "../assets/images/portfolio/08.jpg";
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';

const GalleryTwo = () => {

     const GalleryImage =[
    {id:"01",image:img1,title:"Prizes",description:"A little bit of interesting information about this fantastic image default"},
    {id:"02",image:img2,title:"Save the eggs",description:"A little bit of interesting information about this fantastic image default"},
    {id:"03",image:img3,title:"Inaugral ceremony",description:"A little bit of interesting information about this fantastic image default"},
    {id:"04",image:img4,title:"Floaters",description:"A little bit of interesting information about this fantastic image default"},
    {id:"05",image:img5,title:"Tallest",description:"A little bit of interesting information about this fantastic image default"},
    {id:"06",image:img6,title:"Cube de cemento",description:"A little bit of interesting information about this fantastic image default"},
    {id:"07",image:img7,title:"Floaters",description:"A little bit of interesting information about this fantastic image default"},
    {id:"08",image:img8,title:"Save the eggs",description:"A little bit of interesting information about this fantastic image default"},
   
  ]

//     $('[data-fancybox="gallery"]').fancybox({
//     buttons: [
//       "slideShow",
//       "thumbs",
//       "zoom",
//       "fullScreen",
//       "share",
//       "close"
//     ],
//     loop: false,
//     protect: true
//   });


    return (
   <div className="gallery__two" id="images">
        <div className="Gallery__text text-uni text-uppercase">
            <h1>The Gallery</h1>
        </div>
            <ul>
            {
                GalleryImage.map(data=>(
                            <li><img src={data.image} width="200" />
            <p>{data.title}</p></li>
                ))
            }
        
        </ul>
        <div class="light"></div>
    
</div>
    
    )
}

export default GalleryTwo
