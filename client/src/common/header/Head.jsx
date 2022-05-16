import React from "react"
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label>+961 01 999 111</label>
            <i className='fa fa-envelope'></i>
            <label>support@TeamLebanon.com</label>
          </div>
          <div className='right row RText'>
          <label>
            <Link to="/FAQS">FAQ'S</Link>
            </label>
            <label>
            <Link to="/PrivacyPolicy">Privacy Policy</Link>
            </label>
            <span>🌐</span>
            <label>EN</label>
            <span>💵</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
