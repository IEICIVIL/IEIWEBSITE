import React from 'react';

import facebook from "../assets/Social media icons/icons8-facebook-100.png";
import instagram from "../assets/Social media icons/icons8-instagram-100.png";
import linkedin from "../assets/Social media icons/icons8-linkedin-100.png";

function Footer() {
    return (
        <footer>
            <p>© 2021 Civil BIT ,Mesra All Rights Reserved.</p>
        <div className="social-media">
        <a href="https://www.facebook.com/IeiCivilBitMesra/"><img src={facebook}/></a>
        <a href="https://www.instagram.com/iei_civil_bitmesra/"><img src={instagram}/></a>
        <a href="https://in.linkedin.com/company/iei-civil-bit-mesra"><img src={linkedin}/></a>

      </div>
        </footer>
    )
}

export default Footer
