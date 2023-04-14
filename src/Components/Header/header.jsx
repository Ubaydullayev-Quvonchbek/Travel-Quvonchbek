import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bg_image from './image/logo.svg';
import "./header-css.css";

const Header = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <header>
                <nav>
                    <Container>
                        <Row className='justify-content-between align-items-center'>
                            <Col lg={1}>
                                <div className="logo">
                                    <img src={bg_image} alt="" />
                                </div>
                            </Col>
                            <Col lg={10}>
                                <ul className="list d-flex align-items-end">
                                    <li className="list-item opacity-100">home</li>
                                    <li className="list-item">hotels</li>
                                    <li className="list-item">restaurants</li>
                                    <li className="list-item">tours</li>
                                    <li className="list-item">destinations</li>
                                    <li className="list-item">activities</li>
                                    <li className="list-item">contact</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </nav>
                <Container>
                    <Row className='justify-content-center text-center'>
                        <Col lg={10}>
                            <h1 className='most'>Discover the most engaging places</h1>
                            <button className='globe'><i class="fa-solid fa-globe"></i> Discover on 3D Globe</button>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
}

export default Header;