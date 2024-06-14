import React, { useState } from 'react'
import './ChariotStyles.css';
import ChariotLogo from './ChariotLogo.png'


function ChariotLogin() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isSubmit, setIsSubmit] =useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSendOtp = () => {
    setIsOtpSent(true);
    console.log("GEt Otp")
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };


  const handleSubmit =() => {
    setIsSubmit(true)
    console.log('Logging in with email:', email);
    console.log("click submit")
  }

  return (
    <div className='main'>
      <img
        src={ChariotLogo}
        alt="image not found"
        style={{
          width: '274px',
          height: '94px',
        }}
      />
      <div className='first'>
        <div>
          <input className='email' type="email" placeholder='YOUR OFFICIAL MAIL ID' value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <button type="button" onClick={handleSendOtp} className='email getOtp'>GET OTP</button>
        </div>
      </div>

      <div className="marginSize">
        <input className='email enterOtp' type='text' placeholder='ENTER OTP' value={otp} onChange={handleOtpChange} />
      </div>

      <div className="marginSize">
        <button className='submit' onClick={handleSubmit}>SUBMIT</button>
      </div>

      <div className="tagline" style={{ position: 'absolute', bottom: '0', right: '0' }}>
        <div>
          <text>POWERED BY</text>
          <br />
          <text>ITINERARYCNTRL.COM</text>
        </div>
      </div>

    </div>

  )
}

export default ChariotLogin




