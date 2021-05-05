import React from 'react';
import Logo from "../assets/images/logo (1).png";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PhotoAlbumOutlinedIcon from '@material-ui/icons/PhotoAlbumOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import {Link} from 'react-scroll';
import {Link as A} from "react-router-dom";

function Navbar() {

       const [show,handleShow] = React.useState(false);
    React.useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
            handleShow(true);
        }
        else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[])
    return (
         <nav className={ show ? "nav__black" :" "}>
                <ul>
                    <li className="Logo__list">
                        <img src={Logo} alt="IEI LOGO" className="IEI__logo"/>
                    </li>
                   
                    <li>
                    <Link activeClass="active" spy={true} smooth={true} to="about">
                    <InfoOutlinedIcon className="display"/> About Us
                  </Link>
                    </li>
                  <li>
                      <Link activeClass="active" to="images" spy={true} smooth={true}>
                        <PhotoAlbumOutlinedIcon className="display"/> Gallery
                        </Link>
                    </li>
                    <li>
                        <A to="/Aarohan21" >
                        <BusinessOutlinedIcon className="display"/> Aarohan21
                        </A>
                    </li>
                    <li>
                        <A to="/blogs" >
                        <BusinessOutlinedIcon className="display"/> Blogs
                        </A>
                    </li>
                    <li>
                        <Link activeClass="active"  to="team" spy={true} smooth={true}>
                      <PeopleAltOutlinedIcon className="display"/>  Teams
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="sponserhip" spy={true} smooth={true}>
                        <AccountBalanceOutlinedIcon className="display"/>Our Events 2021
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true}>
                        <ContactPhoneOutlinedIcon className="display"/> Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar
