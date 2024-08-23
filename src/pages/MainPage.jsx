import React from "react";
import "./mainpagestyling.css";
import logo from "./images/logo.png";
import about from "./images/Rectangle 3.png";
import construction1 from "./images/Rectangle 19.png"
import construction2 from "./images/Rectangle 20.png"
import construction3 from "./images/Rectangle 21.png"
import project1 from "./images/Rectangle 19.png";
import project2 from "./images/Rectangle 20.png"
import project3 from "./images/Rectangle 21.png"
import news1 from "./images/Rectangle 25.png";

const MainPage = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="nav-links">
          <a href="index.html">Home</a>
          <a href="about.html">About us</a>
          <a href="Our Service.html">Our Service</a>
          <a href="Our Project.html">Our Project</a>
          <a href="Contact Us.html">Contact Us</a>
        </div>
      </header>

      <div className="hero-background">
        <div className="heroholder">
          <h1>DONNE KA COMPANY</h1>
          <h2>We help you materialize your design imagination</h2>
          <button>View Projects</button>
        </div>
      </div>

      <div className="aboutHolder">
        <div className="aboutImage">
          <img src={about} alt="About Us" />
        </div>

        <div className="aboutText">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, non sit
            quisque tempus. Nisl, sem convallis urna sed. Cras tempor blandit
            tincidunt tempor sed at. Laoreet facilisis lectus sapien nunc
            facilisi suspendisse nunc sit et. Elementum odio ante enim vulputate
            neque. Praesent tempus in eu ultricies a. Cum in viverra euismod
            fringilla.
          </p>

          <button>Learn More</button>
        </div>
      </div>

      <div className="servicerContainer">
        <h1>Our Service</h1>

        <div className="serviceHolder">
          <div>
            <img src={construction1} alt="Construction" />
            <h2>Construction</h2>
          </div>

          <div>
            <img src={construction2} alt="Construction" />
            <h2>Construction</h2>
          </div>

          <div>
            <img src={construction3} alt="Construction" />
            <h2>Construction</h2>
          </div>
        </div>

        <h2>View All</h2>
      </div>

      <div className="overviewHolder">
        <div className="overviewContainer">
          <h2>Over 3 Decades of Experience in Construction</h2>
          <button>Contact Us</button>
        </div>
      </div>

      <div className="servicerContainer">
        <h1>Our Project</h1>

        <div className="serviceHolder">
          <div>
            <img src={project1} alt="Commercial Construction" />
            <h2>Commercial Construction</h2>
          </div>

          <div>
            <img src={project2} alt="Property Development" />
            <h2>Property Development</h2>
          </div>

          <div>
            <img src={project3} alt="House Renovation" />
            <h2>House Renovation</h2>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <h2 style={{ color: "red" }}>Testimonial</h2>

        <div className="testimonialHolder">
          <div className="testimonialImage">
            <img src="./images/Dodo.jpg" alt="Testimonial" />
          </div>

          <div className="testimonialText">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam
              egestas posuere odio sed auctor. Nam enim tellus, eget arcu,
              sollicitudin amet volutpat morbi quam. Egestas tristique aliquam
              sem pellentesque accumsan, diam. Quis tortor iaculis sapien eu
              neque, mattis vel. Quam libero gravida et.
            </p>
            <div className="testimonialTextText">
              <h3>Dominion Daniel</h3>

              <h2>Donne KA Company Limited</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="servicerContainer">
        <h1>News and Events</h1>

        <div className="serviceHolder">
          <div className="newHolder">
            <img src={news1} alt="News" />
            <div className="serviceText">
              <h2>Construction</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo voluptas ipsum itaque ut minima quas alias doloremque
                molestiae expedita eligendi.
              </p>
              <div className="a">
                <a href="">Read More</a>
              </div>
            </div>
          </div>

          <div className="newHolder">
            <img src={news1} alt="News" />
            <div className="serviceText">
              <h2>Construction</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo voluptas ipsum itaque ut minima quas alias doloremque
                molestiae expedita eligendi.
              </p>
              <div className="a">
                <a href="">Read More</a>
              </div>
            </div>
          </div>

          <div className="newHolder">
            <img src={news1} alt="News" />
            <div className="serviceText">
              <h2>Construction</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo voluptas ipsum itaque ut minima quas alias doloremque
                molestiae expedita eligendi.
              </p>
              <div className="a">
                <a href="">Read More</a>
              </div>
            </div>
          </div>

          <div className="newHolder">
            <img src={news1} alt="News" />
            <div className="serviceText">
              <h2>Construction</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo voluptas ipsum itaque ut minima quas alias doloremque
                molestiae expedita eligendi.
              </p>
              <div className="a">
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subscribe">
        <div className="subscribeholder">
          <h2>Subscribe to Our NewsLetter</h2>

          <div className="inputHolder">
            <input type="text" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footerwrapper">
          <div className="footer-info">
            <div>
              <img src="./images/Group 34.png" alt="Footer Logo" />
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ut
              et sed suspendisse a vel. Leo ornare tristique tellus facilisis
              eget sed faucibus ut. Eu lectus elit justo velit lobortis mi,
              tortor consectetur dolor. In ac tortor amet, at vestibulum sit
              viverra m.
            </p>
          </div>

          <div className="footer-info">
            <h2>Quick Link</h2>

            <div>
              <p>Home</p>
              <p>About Us</p>
              <p> Our Services</p>
              <p>Our Project</p>
              <p>Contact Us</p>
            </div>
          </div>

          <div className="footer-info">
            <h2>Contact Us</h2>
            <div>
              <p>Address - 5 Norman Williams Street Ikoyi Lagos, Nigeria</p>

              <p>Phone -234 906 185 1216 | Telephone - 906 185 1216</p>

              <p>Email - dominiondaniel61@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="footer-down">
          <div className="border"></div>
          &copy; 2024 DONNE KA. All Right Reserved.
        </div>
      </div>
    </div>
  );
};

export default MainPage;
