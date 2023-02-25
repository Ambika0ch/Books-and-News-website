import React from 'react';
import './style.css'; // import your CSS file here

const AboutUs = () => {
    return (
        <div className="about-container">
            <h1 className="about-heading">About Us</h1>
            <p className="about-description">We are a team of passionate developers who are dedicated to creating innovative and cutting-edge software solutions. Our mission is to help businesses and individuals leverage technology to achieve their goals.</p>
            <p className="about-description">With years of experience in software development, we have built a reputation for delivering high-quality projects on time and within budget. Our team consists of experts in various technologies and domains, allowing us to provide comprehensive solutions that meet the specific needs of our clients.</p>
            <p className="about-description">At the heart of our approach is a commitment to collaboration and communication. We believe that the best solutions emerge when we work closely with our clients, understanding their goals and challenges, and leveraging our expertise to find the most effective solutions.</p>
            <p className="about-description">If you're interested in working with us or learning more about our services, please don't hesitate to get in touch.</p>
            <p className="about-contact">Contact us at: <a href="mailto:info@yourcompany.com">info@yourcompany.com</a></p>
        </div>
    );
};

export default AboutUs;
