import React from 'react';
import BackgroundSlider from 'react-background-slider'
import Navbar from './Navbar';
import Typed from 'react-typed';
import imageone from "../assets/pexels-pixabay-259966.jpg";
import imagetwo from "../assets/pexels-tookapic-72138.jpg";
import imagethree from "../assets/pexels-pixabay-162557.jpg";
import imagefour from "../assets/pexels-pixabay-159306.jpg";
import imagefive from "../assets/pexels-pixabay-162540.jpg";



function Header() {
    return (
        <>
            <header className="header"  >
            <BackgroundSlider
            images={[imageone,imagetwo,imagethree,imagefour,imagefive]}
            duration={2} transition={0.1} />
            <div className="wrapper__header">
            <input type="checkbox" id="menu" />
            <label htmlFor="menu" className="iconBar" >
                <div className="menu"></div>
            </label>
           <Navbar/>
             </div>
            <section className="enter text-align">
                <h1 className="IEI__text">Institution Of Engineers (INDIA)<br/><span className="typed-text"> <Typed
                    strings={['BIT MESRA']}
                    typeSpeed={70}
                    loop
                /></span>
                </h1>
                <p></p><br />
                <p> </p>
               
            </section>
    </header>
        </>
    )
}

export default Header
