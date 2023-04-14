import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import data from './data.js';
import './card-css.css';

const Cards = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="d-flex align-items-center justify-content-between">
                            <h3 className="popular">Popular Destinations</h3>
                            <button className='view-all'>View all <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {data?.map((res) => {
                        return (
                            <>
                                <Col lg={2}>
                                    <div className="Card">
                                        <img src={res?.img} alt="" />
                                        <h5 className='name'>{res?.name}</h5>
                                        <p className='cityName'>{res?.cityName}</p>
                                    </div>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </Container>
        </>
    );
}

export default Cards;