
import React,{useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from './Actions/users';
import './App.css';
import Header from './Components/Header';
import Sponsership from './Components/Sponsership';
import EventSection from './Components/EventSection';
import MapLocation from "./Components/MapLocation";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Aarohan21 from './Components/Aarohan21';
import Gallery from './Components/Gallery';
import TeamSection from './Components/TeamSection';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Navbar from './Components/Navbar';
import GalleryTwo from './Components/GalleryTwo';
import Blog21 from "./Components/Blog21"

function App() {

  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  
  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route path="/blog21" exact>
           

          <Blog21/>
          </Route>
          <Route path="/aarohan21" exact>
           

          <Aarohan21/>
          </Route>
          <Route path="/">
           {/* <form onSubmit={handleSubmit}>
        <h1>Enter Login Details</h1>
        <input type="email" vale={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}/>
        <input type="password" value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}/>
        <button type="submit">Submit</button>
      </form> */}

          <Header  />
          <About />
          {/* <EventSection/> */}
          {/* <Gallery /> */}
          <GalleryTwo/>
          <TeamSection />
          <Sponsership />
          <MapLocation />
          <Footer/>
          {isVisible && 
        
        <button onClick={scrollToTop}  class="top-button" id="js-top">
            <ArrowUpwardIcon  className="top__Icon" />
          </button>
          }
          
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
