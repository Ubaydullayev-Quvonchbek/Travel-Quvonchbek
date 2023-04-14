import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import sectImg from "./image/sectionImg.svg";
import "./section-css.css";

const Section = () => {
    return (
        <>
            <section>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={5}>
                            <h1 className="about">About Us</h1>
                            <p className="sectLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            <button className="read-more">Read more <i class="fa-solid fa-arrow-right"></i></button>
                        </Col>
                        <Col lg={5}>
                            <img width='100%' src={sectImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Section;