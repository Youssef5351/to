import React from "react";
import "./LandingPage.css"; // You may need to create this CSS file for styling
import Youssef from "../../assets/Elkoumi.png"
import Doctor from "../../assets/doctorito new.png"

const LandingPage = () => {
    return (
        <div className="landing">
            <div className="greet">
                <p><span>اهلاً, مرحباً بك في موقعنا الطبي </span></p>
            </div>
            <div className="background">
            <svg viewBox="0 0 100 100" width="700" xmlns="http://www.w3.org/2000/svg"><path d="M82,63.5Q66,77,49,79.5Q32,82,23,66Q14,50,20,29Q26,8,48,11.5Q70,15,84,32.5Q98,50,82,63.5Z" stroke="none" fill="#3383cc"></path><path d="M82,63.5Q66,77,49,79.5Q32,82,23,66Q14,50,20,29Q26,8,48,11.5Q70,15,84,32.5Q98,50,82,63.5Z" transform="translate(1.96 -5.36)" stroke="#215788" stroke-width="1" fill="none"></path></svg>
                <div className="dots">
                    <svg viewBox="0 0 100 100" height="200px" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="fill" viewBox="0,0,100,100" width="10%" height="10%"><g><path d="M37.005 37.0007L62.995 62.9991" stroke="black" stroke-width="8" stroke-linejoin="round"></path>
                    <path d="M62.995 37.0007L37.005 62.9991" stroke="black" stroke-width="8" stroke-linejoin="round"></path></g></pattern></defs><path d="M81.5,65.5Q68,81,49.5,82Q31,83,25,66.5Q19,50,26,35.5Q33,21,53.5,14.5Q74,8,84.5,29Q95,50,81.5,65.5Z" stroke="none" stroke-width="0" fill="url(#fill)"></path></svg>
                </div>
            </div>
            
            <div>
                <img src={Doctor} alt="" className="doctor"/>
            </div>
            <div className="explore">
                
            </div>
        </div>
    );
};

export default LandingPage;
