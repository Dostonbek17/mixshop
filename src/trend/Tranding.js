import React from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import Trend from '../Json/Trending.json'

const Tranding = () => {
    return (
        <div className="Trending">
            <div className="PageTitles">
                <p>TOP PRODUCTS</p>
                <h4>TRANDING THIS WEEK</h4>
            </div>
            <Container className="trendingCards">
                <Row>
                    {Trend.map((post) =>{
                        return(
                            <Col md="3">
                                  <Card>
                                       <CardHeader>
                                            <img src={post.img} alt="PoroductImage"/>
                                       </CardHeader>
                                       <CardBody>
                                           <div className="infoTitle">
                                              <p className="name">{post.name}</p>
                                              <span className="price">{post.price}</span>
                                           </div>
                                       </CardBody>
                                  </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Tranding;