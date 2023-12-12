import React from 'react';
import {Link} from "react-router-dom";
import CalltoActionSeven from "../../elements/calltoaction/CalltoActionSeven";
import footerOne from "../../data/footer/footerOne.json";
import ScrollTop from "./ScrollTop";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import Logo from "../../elements/logo/Logo";

const footerIntemOne =  footerOne[1];
const footerIntemTwo =  footerOne[2];
const footerIntemThree =  footerOne[3];
const footerIntemFive =  footerOne[5];

const indexOneLink = (footerIntemOne.quicklink);
const indexTwoLink = (footerIntemTwo.quicklink);
const FooterTwo = () => {
    return (
        <>
            <footer className="rn-footer footer-style-default variation-two">
                <CalltoActionSeven />
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* Start Single Widget  */}
                        <div className="mb-5 col-lg-3 col-sm-6">
                            <Logo 
                                image={`${process.env.PUBLIC_URL}/images/logo/dark-colored.svg`}
                                image2={`${process.env.PUBLIC_URL}/images/logo/dark-colored.svg`}
                            />
                        </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemOne.title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {indexOneLink.map((data, index) => (
                                                <li key={index}><Link to>{data.text}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}
                            {/* Start Single Widget  */}
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemThree.title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {indexTwoLink.map((data, index) => (
                                                <li key={index}><Link to>{data.text}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemFive.title}</h4>
                                    <div className="inner">
                                        <h6 className="subtitle">{footerIntemFive.subtitle}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                        {/* start social icon */}
                        <ul className="social-icon social-default justify-content-start">
                        <li><Link to="facebook.com"><FiFacebook /></Link></li>
                        <li><Link to="twitter.com"><FiTwitter /></Link></li>
                        <li><Link to="instagram.com"><FiInstagram /></Link></li>
                        <li><Link to="linkdin.com"><FiLinkedin /></Link></li>
                        </ul>
                         <a className="btn-default btn-icon"href="#">Contact</a>
                        </div>
                        
                </div>
                </div>
            </footer>
            <ScrollTop />
        </>
    )
}

export default FooterTwo;
