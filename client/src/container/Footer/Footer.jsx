import React, { useState, useEffect } from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../Wrapper'
import { client } from "../../client.js"
import "./Footer.scss"

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;
  const [isNameEmpty,setIsNameEmpty] = useState(false);
  const [isEmailEmpty,setIsEmailEmpty] = useState(false);
  const [isMessageEmpty,setIsMessageEmpty] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    const {name,email,message} = formData;
    if((name==""||name.replace(/\s/g,'').length==0)){
      setIsNameEmpty(true);
      setTimeout(() => {
        setIsNameEmpty(false)
      }, 2000);
      return;
    }
    if((email==""||email.replace(/\s/g,'').length==0)){
      setIsEmailEmpty(true);
      setTimeout(() => {
        setIsEmailEmpty(false)
      }, 2000);
      return;
    }
    if(message==""||message.replace(/\s/g,'').length==0){
      setIsMessageEmpty(true);
      setTimeout(() => {
        setIsMessageEmpty(false)
      }, 2000);
      return;
    }
    setLoading(true);
    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
      setTimeout(() => {
        setIsFormSubmitted(false)
      }, 5000);
      setFormData({ name: '', email: '', message: '' });
    })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h2 className="head-text">
        Grab a Coffee and Chat with me.
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:jaiaggarwal60@gmail.com" className='p-text'>jaiaggarwal60@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+91 8510029270" className='p-text'>+91 8510029270</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
        {isNameEmpty==true?(<p>Please don't leave the name input empty</p>):(null)}
          <div className="app__flex">
            <input type="text" className='p-text' required placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
          </div>
          {isEmailEmpty==true?(<p>Please don't leave the email input empty</p>):(null)}
          <div className="app__flex">
            <input type="email" className='p-text' required placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
          </div>
          {isMessageEmpty==true?(<p>Please don't leave the message input empty</p>):(null)}
          <div>
            <textarea name="message" value={message} placeholder='Your Message' className='p-text' onChange={handleChangeInput} />
          </div>
          <button className="p-text" type='button' required onClick={handleSubmit}>{!loading?'Send Message':'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}

    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');