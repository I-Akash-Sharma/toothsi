import React from 'react';
import "./styles.css"
import ThankYou from '../assets/thankYou.png';
const Thankyou = () => {
  return (
    <div>
    <img src={ThankYou} alt="Thank you" className="thankYouImage"/>
    </div>
  );
};
  
export default Thankyou;