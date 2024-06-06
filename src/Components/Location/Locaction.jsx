import React from "react";
import "./Location.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtlassian } from '@fortawesome/free-brands-svg-icons';
import elkomi from "../../assets/Elkoumi.png"


const Location = () => {
    return (
        <div className="location">
            <div className="soso">
                <svg xmlns="http://www.w3.org/2000/svg" className="bouncy" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3zm-1.396 2.685l1-6.885h-4.25l7.48-10.788h.462L12.866 11h5l-8.25 9.885zm2.621-8.635"/></svg>
                <span className="los"> موقع<span className="sfir"> المجمع</span></span>
                <FontAwesomeIcon className="atlas" icon={faAtlassian} />
            </div>
            <div className="right-side">
                    <img src={elkomi} className="elkomi" alt="" />
            </div>

            <div className="left-side">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.7240188801084!2d32.11504157503044!3d30.55710049410051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f84268a8f9b431%3A0xfeb808a57f4e4361!2z2YXYrNmF2Lkg2LnZitin2K_Yp9iqINin2YTZg9mI2YXZig!5e0!3m2!1sen!2seg!4v1717591172944!5m2!1sen!2seg"
                    width="1000" 
                    height="700" 
                    className="komi" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}

export default Location;