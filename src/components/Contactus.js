import React from 'react';
import instagram from "./icons8-instagram-50.png";
import phone from "./icons8-phone-50.png";
import speech from "./icons8-speech-bubble-50.png";
import whatsapp from "./icons8-whatsapp-50.png";
function Contactus(props) {
    const review={
        name:"Contact Us",
        review:"Don't buy with doubts .Just click and contact us through which you feel comfort. "
    };

    return (
        <div id="contactus" className="contactus-body">
            <div className="contactus-container">
                <div className="review">
                    <div className="review-title">{review.name}</div>
                    <div className="review-review">{review.review}</div>
                </div>
                <div className="contactus-appcontainer">
                <div className="app-icon">
                   <a href="mailto:tubelight056@gmail.com" ><img className="icon" src={whatsapp}/></a> 
                </div>
                <div className="app-icon">
                <a href="tel:8072945605 "><img  className="icon" src={phone}/> </a> 
                </div>
                <div className="app-icon">
                    <a href="sms:8072945605" ><img className="icon" src={speech}/></a>
                </div>
                <div className="app-icon">
                <a href="https://www.instagram.com/d41c_men" ><img className="icon" src={instagram}/></a>
                </div>
                </div>
                <div className="icon-copyright">
                <a  className="icon-copyrighta" target="_blank" href="https://icons8.com/icon/44418/whatsapp">All</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                </div>
            </div>
        </div>
    );
}

export default Contactus;