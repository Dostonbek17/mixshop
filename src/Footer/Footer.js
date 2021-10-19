import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import logoFooter from '../images/logo.png';
import logo1 from '../images/logo1.png';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md="6">
                        <div className="brand">
                            <img src={logoFooter} alt="brand" />&<img src={logo1} alt="nike" />
                            <p className="brandText">
                                Explore Our Nation's Past Every Saturday On C-Span2. 
                                Watch American History TV on C-Span2 starting at 8 am Eastern every Saturday. 
                                All Day. American History TV. Saturdays. 
                                Types: The Library Of Congress, American Writers, Book TV, The Communicators.
                            </p>
                        </div>
                    </Col>
                    <Col md="4">
                        <ul className="products">
                            <p className="them">Products</p>
                            <li>
                                <a href="#">Trending</a>
                            </li>
                            <li>
                                <a href="#">My Account</a>
                            </li>
                            <li>
                                <a href="#">Vebdors</a>
                            </li>
                            <li>
                                <a href="#">Brands</a>
                            </li>
                            <li>
                                <a href="#">Storefront</a>
                            </li>
                        </ul>
                        <ul className="products">
                            <p className="them">Legals</p>
                            <li>
                                <a href="#">License</a>
                            </li>
                            <li>
                                <a href="#">Refound Policy</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contacts</a>
                            </li>
                        </ul>
                        <ul className="products">
                            <p className="them">Contacts</p>
                            <p className="SimpleText">Feel free get in touchwith us via phone or send us a message</p>
                            <li>
                                <a href="tel: +1 234 567 89 10">+1 234 567 89 10</a>
                            </li>
                            <li>
                                <a href="mailto:abdurkhimoff98@gmail">abdurkhimoff98@gmail</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default Footer;