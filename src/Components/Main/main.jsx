import React from 'react';
import data from './data';
import Cards from '../Cards/cards';
import cardsData from './cards-data';
import { Col, Container, Row } from 'react-bootstrap';
import "./main-css.css";
import img1 from "./image/tr-tips1.svg";
import img2 from "./image/tr-tips2.svg";

const Main = () => {
    console.log(img2);
    return (
        <>
            <main>
                <Cards />
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="d-flex align-items-center justify-content-between">
                                <h3 className="popular">Hotels and Restaurants</h3>
                                <button className='view-all'>View all <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {data?.map(item => {
                            return (
                                <>
                                    <Col lg={3}>
                                        <div className="Card">
                                            <img src={item?.image} alt="" className='card-image' />
                                            <h3 className="place">{item?.place}</h3>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="location"><i class="fa-solid fa-location-dot"></i> {item?.location}</p>
                                                <img src={item.stars} alt="" className="stars" />
                                            </div>
                                        </div>
                                    </Col>
                                </>
                            )
                        })}
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="d-flex align-items-center justify-content-between">
                                <h3 className="popular">Travel Tips and Advice</h3>
                                <button className='view-all'>View all <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <div className="picture">
                                <img src={img1} alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="str">
                                <div className="text">
                                    <h3 className="placeName">East Village Ice Cream Crawl</h3>
                                    <p className="lorem">We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every…</p>
                                </div>
                                <div className="all-list">
                                    <p className='txt-all'><i class="fa-regular fa-calendar-days"></i>Today</p>
                                    <p className='txt-all'><i class="fa-regular fa-user"></i>Maria Philips</p>
                                    <p className='txt-all'><i class="fa-regular fa-comment"></i>2</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="picture">
                                <img src={img2} alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="str">
                                <div className="text">
                                    <h3 className="placeName">Brooklyn Bridge cinematic photo walk</h3>
                                    <p className="lorem">This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to capture clients at different locations upon request for an additional charge. </p>
                                </div>
                                <div className="all-list">
                                    <p className='txt-all'><i class="fa-regular fa-calendar-days"></i>Today</p>
                                    <p className='txt-all'><i class="fa-regular fa-user"></i>James Calzoni</p>
                                    <p className='txt-all'><i class="fa-regular fa-comment"></i>17</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="d-flex align-items-center justify-content-between">
                                <h3 className="popular">Activities</h3>
                                <button className='view-all'>View all <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </Col>
                        {cardsData?.map(dataMap => {
                            return (
                                <Col lg={3}>
                                    <div className="cardTypes">
                                        <img src={dataMap?.imageCard} alt="" />
                                        <p className="typeCard">{dataMap?.string}</p>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </main >
        </>
    );
}

export default Main;