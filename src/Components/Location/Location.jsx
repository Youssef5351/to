import React from "react";
import "./Location.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtlassian } from "@fortawesome/free-brands-svg-icons";
import elkomi from "../../assets/Elkoumi.png";

const Location = () => {
  return (
    <div className="location">
      <div className="soso">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bouncy"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3zm-1.396 2.685l1-6.885h-4.25l7.48-10.788h.462L12.866 11h5l-8.25 9.885zm2.621-8.635"
          />
        </svg>
        <span className="los">
          {" "}
          موقع<span className="sfir"> المجمع</span>
        </span>
        <FontAwesomeIcon className="atlas" icon={faAtlassian} />
      </div>
  
<div className="container">    
      <div className="right-side">
      <svg xmlns="http://www.w3.org/2000/svg"  className="fire" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27"/></svg>
        <img src={elkomi} className="elkomi" alt="" />
        <div className="rew">
            <span className="sw">محافظة الاسماعيلية</span>
            <br />
            <hr style={{ width: "50%", height:"3px", backgroundColor: "rgb(35 219 219)",border: "none", marginTop: "20px",marginLeft: "140px" }}/>
            <span className="vre">مدينة ابو صوير</span>
            <br/>
            <span className="tkm">امام السبع ابار الغربية</span>
        </div>
        <hr style={{ width: "35%", height:"3px", backgroundColor: "rgb(35 219 219)",border: "none", marginTop: "20px",marginLeft: "115px" }}/>
        <div className="clock">
          <span className="tex">من السبت الي الخميس</span>
          <br />
          <span className="bro">9:00am-10:00pm</span>
          <br />
          <a href="tel:201279994003"target="_blank">
          <button className="yub">رقم الهاتف</button>
          </a>
          {/* <svg className="wi" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.548 5.216L7.005 20.012l-.29-.167l8.54-14.788a9.37 9.37 0 0 0-6.07-.906L2.73 15.333l-.609 1.055a9.34 9.34 0 0 0 3.818 4.806l-1.522 2.64l.289.166l2.303-3.987h-.002a9.37 9.37 0 0 0 6.068.905l6.321-10.945l.287.167l-6.168 10.683l-.964 1.67a9.32 9.32 0 0 0 7.55-7.555a9.27 9.27 0 0 0-.413-4.802l2.299-3.982l-.29-.167L20.14 8.68a9.34 9.34 0 0 0-3.816-4.806zm-5.842-2.64a9.324 9.324 0 0 0-7.132 12.359L8.893 3.989l.292.162L11.483.167L11.193 0z"/></svg> */}
          <svg className="wi" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m9.496.07l-1.8 3.107l-.868-.498c-1.269-.729-2.852.184-2.852 1.64v6.28l3.9-6.734L9.933.319a.14.14 0 0 0-.053-.19l-.19-.11a.143.143 0 0 0-.193.05Zm-.713 3.734l-4.807 8.301v7.163c0 .674.338 1.23.826 1.562l-1.65 2.85a.14.14 0 0 0 .05.192l.192.109a.14.14 0 0 0 .193-.05l1.665-2.874L13.629 6.59Zm11.63 2.547l-1.8 3.108l-4.33-2.49l-8.217 14.186a1.9 1.9 0 0 0 .764-.248l8.598-4.948l5.42-9.356a.14.14 0 0 0-.05-.193q-.097-.054-.192-.11c-.027-.02-.14-.041-.193.051m-.711 3.735l-2.967 5.123l3.08-1.774c1.268-.731 1.268-2.556 0-3.285z"/></svg>
        </div>
      </div>
      <div className="left-side">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.7240188801084!2d32.11504157503044!3d30.55710049410051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f84268a8f9b431%3A0xfeb808a57f4e4361!2z2YXYrNmF2Lkg2LnZitin2K_Yp9iqINin2YTZg9mI2YXZig!5e0!3m2!1sen!2seg!4v1717591172944!5m2!1sen!2seg"
          width="900"
          height="850"
          className="komi"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </div>    
  );
};

export default Location;