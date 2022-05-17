import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="body1">
      <div class="about-section">
        <div class="inner-container">
          <h1>Who We Are</h1>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            velit ducimus, enim inventore earum, eligendi nostrum pariatur
            necessitatibus eius dicta a voluptates sit deleniti autem error eos
            totam nisi neque voluptates sit deleniti autem error eos totam nisi
            neque.
          </p>
          <h2>Why Choose Us ?</h2>
          <br />
          <div class="skills">
            <ul>
              <li>
                <h5>WorldWide Delivery</h5>
              </li>
              <br />
              <li>
                <h5>24/7 Support</h5>
              </li>
              <br />
              <li>
                <h5>Safe Payment</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
