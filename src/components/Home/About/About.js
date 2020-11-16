import React from 'react';
import './About.scss'

const About = () => {
    return (
        <div className="container about">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <img src="https://i.imgur.com/EZbjc9N.jpg" alt="" className="img-fluid"/>
                </div>
                <div className="col-sm-12 col-md-6">
                    <h1 className="about-heading">About us</h1>
                    <h1 className="special">We are here to dream!</h1>
                    <h1>Our team is here to serve you</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, id obcaecati. Omnis, maiores explicabo! Eligendi aliquid libero pariatur maxime ipsum placeat blanditiis cumque, iure laborum nulla culpa, nisi quaerat eveniet aut harum, maiores ad quos doloribus vero nobis facilis sapiente? Blanditiis culpa minus mollitia quasi soluta qui libero corrupti inventore? Officia vel, aliquid voluptate, odit harum iste veritatis sed quidem reprehenderit magnam consectetur, laboriosam quasi. Animi sint odio nobis laborum!</p>
                </div>
            </div>
        </div>
    );
};

export default About;