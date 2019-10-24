import React from 'react';
import { Link } from 'react-router-dom';
import NewsCard from './NewsCard';
import QuickLinkCard from './QuickLinkCard';
import ContactCard from './ContactCard';
import LibraryImage from '../assets/shelf.jpg';
import NextButton from '../assets/Polygon.svg';
import StudentImage from '../assets/student.jpg';
import TwitterImage from '../assets/twitter.svg';
import FacebookImage from '../assets/facebook.svg';
import InstagramImage from '../assets/instagram.svg';

const Home = () => (
  <div className="home">
    <section className="landing-page">
      <div className="landing-page__wrapper container">
        <div className="landing-page__wrapper__content">
          <p className="logo">Oasis College</p>
          <h1 className="foreword">
            {`Walk the path
            to greatness with us`}
          </h1>
          <p className="introduction">
            {`We provide our students with world class
            amenities as well as our staff, who hold degrees
            from the most reputable institutions across the globe.`}
          </p>
          <Link className="enroll-btn" to="/signup">
            Enroll Now
          </Link>
          <p className="link-text">
            Returning student? <Link to="/login">click here</Link>
          </p>
        </div>
        <div className="landing-page__wrapper__content--image-only">
          <img src={LibraryImage} alt="" />
        </div>
      </div>
    </section>
    <section className="carousel">
      <div className="section__wrapper">
        <div className="carousel__btn">
          <div>
            <img src={NextButton} alt="carousel button" />
          </div>
        </div>
        <div className="carousel__wrapper">
          <div className="content">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
        <div className="carousel__btn">
          <div className="right">
            <img src={NextButton} alt="carousel button" />
          </div>
        </div>
      </div>
    </section>
    <section className="quick-intro container">
      <div className="quick-intro__content">
        <div className="quick-intro__content__vc">
          <div className="vc-card">
            <div className="vc-card__footer">
              <h4>Rector Ipsum Idolor. Ph.D Manchester.</h4>
              <p>
                The VC since 2015. She has overseen different reforms that has
                ensured Oasis remains peerless in Nigeria while adhering to
                international standards.
              </p>
              <Link to="/about-vc" className="anchor-btn">
                Learn more about the VC
              </Link>
            </div>
          </div>
        </div>
        <div className="quick-intro__content__grid">
          <QuickLinkCard />
          <QuickLinkCard />
          <QuickLinkCard isHidden />
          <QuickLinkCard isHidden />
        </div>
      </div>
    </section>
    <section className="about">
      <div className="section-wrapper container">
        <div className="about__content">
          <div className="about__content__heading">
            <h2>About Oasis College</h2>
          </div>
          <div className="about__content__body">
            <div className="vc-image">
              <img src={StudentImage} alt="The VC" />
            </div>
            <div className="text-only">
              <h3 className="text-only__date">Established in 1995</h3>
              <p className="text-only__info">
                {`Oasis College has gone through changes over time, churning out graduates who are labour market ready.
                
                Our track record of producing graduates with top grades is unprecedented across the country.
                
                Since 2010, we have been the leading supply of talent across top organizations across Nigeria.`}
              </p>
              <Link to="/learn" className="text-only__btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="preview container">
      <div className="preview__wrapper">
        <div className="text-only">
          <div className="text-only__header">
            <h2>
              {`We do more
              than just educating young minds`}
            </h2>
          </div>
          <div className="text-only__body">
            <p>
              {`At Oasis, learning is a way of life. Our world class facilities ensures that both staff and students see beyond the four walls of classrooms and libraries.
              
              We imbibe fun into our daily activities. Take a look around and see for yourself.`}
            </p>
          </div>
          <div className="text-only__footer">
            <Link to="/" className="link-btn">
              Offices & Classes
            </Link>
            <Link to="/" className="link-btn">
              Dorms & Parks
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className="contact-us container">
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </section>
    <footer className="footer container">
      <div className="footer__wrapper">
        <div className="footer__copyright">
          <p className="logo">Oasis College</p>
          <p className="motto">
            {`Investing in tomorrow’s leaders
            by educating them today`}
          </p>
          <p>&copy; All rights reserved, 2019</p>
        </div>
        <div className="footer__links">
          <div className="links-wrapper">
            <div className="link-wrapper">
              <Link to="/" className="bold-link">
                Staff
              </Link>
              <Link to="/" className="link">
                About
              </Link>
            </div>
            <div className="link-wrapper">
              <Link to="/" className="bold-link">
                Faculties
              </Link>
              <Link to="/" className="link">
                Hostels
              </Link>
            </div>
            <div className="link-wrapper">
              <Link to="/" className="bold-link">
                Postgraduates
              </Link>
              <Link to="/" className="link">
                Post UME & Remedials
              </Link>
            </div>
            <div className="link-wrapper">
              <Link to="/" className="bold-link">
                Undergraduates
              </Link>
              <Link to="/" className="link">
                Libraries & Cafeterias
              </Link>
            </div>
            <div className="link-wrapper">
              <Link to="/" className="bold-link">
                Contact Us
              </Link>
              <Link to="/" className="link">
                News & Evenyts
              </Link>
            </div>
            <div className="link-wrapper">
              <Link to="/" className="bold-link">
                Careers
              </Link>
              <Link to="/" className="link">
                Research Institutes
              </Link>
            </div>
          </div>
        </div>
        <div className="footer__socials">
          <div className="media">
            <p className="title">Find us on social media</p>
            <div className="media__wrapper">
              <div>
                <Link to="/">
                  <div className="icon-wrapper">
                    <img src={TwitterImage} alt="twitter" className="icon" />
                  </div>
                  <span className="text">twitter</span>
                </Link>
              </div>
              <div>
                <Link to="/">
                  <div className="icon-wrapper">
                    <img src={FacebookImage} alt="facebook" className="icon" />
                  </div>
                  <span className="text">facebook</span>
                </Link>
              </div>
              <div>
                <Link to="/">
                  <div className="icon-wrapper">
                    <img
                      src={InstagramImage}
                      alt="instagram"
                      className="icon"
                    />
                  </div>
                  <span className="text">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mail">
            <p className="title">For further enquiries</p>
            <Link to="/">info@oasis.edu.ng</Link>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Home;
