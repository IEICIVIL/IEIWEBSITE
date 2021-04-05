import React from 'react';
import BackgroundSlider from 'react-background-slider'
import Navbar from './Navbar';
import Typed from 'react-typed';
function Header() {
    return (
        <>
            <header className="header"  >
            <BackgroundSlider
            images={["https://www.pexels.com/photo/female-engineer-planning-dam-3862379", "https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", "https://www.bitmesra.ac.in/UploadedDocuments/user_pratyush_869/Header/Header3cd9cb07c4664c29ae582b31633b0a79_Header1.jpg","https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500","https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"]}
            duration={2} transition={0.1} />
            <div className="wrapper__header">
            <input type="checkbox" id="menu" />
            <label htmlFor="menu" className="iconBar" >
                <div className="menu"></div>
            </label>
           <Navbar/>
             </div>
            <section className="enter text-align">
                <h1 className="IEI__text">Institution Of Engineers (INDIA)<br/><span> <Typed
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
