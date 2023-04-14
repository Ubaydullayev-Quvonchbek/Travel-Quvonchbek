import React from 'react';
import "./footer-css.css";
import { Col, Container, Row } from 'react-bootstrap';
import footerLogo from "./image/footerLogo.svg";

const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row className='justify-content-between'>
                        <Col lg={3}>
                            <div className="footerLogo">
                                <img src={footerLogo} alt="" />
                            </div>
                            <p className="footer-poragraf">We always make our customers happy by providing as many choises as possible</p>
                            <div className="d-flex align-items-center">
                                <a href="https://www.facebook.com/profile.php?id=100077345103490"><i class="fa-brands fa-facebook"></i></a>
                                <a href="https://twitter.com/quvonchbeku048"><i class="fa-brands fa-twitter"></i></a>
                                <a href="https://www.instagram.com/quvonchbek_ubaydullayev/"><i class="fa-brands fa-instagram"></i></a>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="d-flex justify-content-between">
                                <ul>
                                    <li className='footer-lists-bolt'>About</li>
                                    <li className='footer-lists'>About Us</li>
                                    <li className='footer-lists'>Features</li>
                                    <li className='footer-lists'>News</li>
                                    <li className='footer-lists'>Menu</li>
                                </ul>
                                <ul>
                                    <li className='footer-lists-bolt'>Company</li>
                                    <li className='footer-lists'>Why 2rism</li>
                                    <li className='footer-lists'>Partner With Us</li>
                                    <li className='footer-lists'>FAQ</li>
                                    <li className='footer-lists'>Blog</li>
                                </ul>
                                <ul>
                                    <li className='footer-lists-bolt'>Support</li>
                                    <li className='footer-lists'>Account</li>
                                    <li className='footer-lists'>Support Center</li>
                                    <li className='footer-lists'>Feedback</li>
                                    <li className='footer-lists'>Contact Us</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <h3 className="review">Subscribe on our destination review newsletters</h3>
                            <div className="d-flex align-items-center">
                                <div className="gmailCard d-flex align-items-center">
                                    <i class="fa-regular fa-envelope"></i>
                                    <div>
                                        <p className="emailName">Your Email</p>
                                        <p className="emailNameBolt">johndoe@gmail.com</p>
                                    </div>
                                </div>
                                <button className="indigoBtn"><i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
