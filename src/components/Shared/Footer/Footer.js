import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/" className="logo footer-title">Power <span className="special">X</span></Link>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li>
                                <Link to="#" className="footer-title">Need Help?</Link>
                            </li>
                            <li>
                                <Link to="#">Help Center</Link>
                            </li>
                            <li>
                                <Link to="#">Live chat</Link>
                            </li>
                            <li>
                                <Link to="#">email supports</Link>
                            </li>
                            <li>
                                <Link to="#">gift certificates</Link>
                            </li>
                            <li>
                                <Link to="#">send us feedback</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li>
                                <Link to="#" className="footer-title">Digital Resources</Link>
                            </li>
                            <li>
                                <Link to="#">Articles</Link>
                            </li>
                            <li>
                                <Link to="#">Ebooks</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li>
                                <Link to="#" className="footer-title">Connect with us</Link>
                            </li>
                            <li>
                                <Link to="#"><FontAwesomeIcon className="footer-icon mr-2" icon={faYoutube} /></Link>
                                <Link to="#"><FontAwesomeIcon className="footer-icon mr-2" icon={faFacebook} /></Link>
                                <Link to="#"><FontAwesomeIcon className="footer-icon mr-2" icon={faInstagram} /></Link>
                                <Link to="#"><FontAwesomeIcon className="footer-icon mr-2" icon={faTwitter} /></Link>
                                <Link to="#"><FontAwesomeIcon className="footer-icon mr-2" icon={faWhatsapp} /></Link>
                            </li>
                            <li>
                                <Link to="#">Forum</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li>
                                <Link to="#" className="footer-title">Join our newsletter</Link>
                            </li>
                            <li>
                                <Link to="#">Get exclusive news, updates and features from Shredder Wales Company</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;