import React from 'react';
import { Card, CardBody, CardFooter, Col, Container, Row } from 'reactstrap';
import sniker1 from '../images/img1.png';
import sniker2 from '../images/img4.png';
import sniker3 from '../images/img3.png';

const Collection = () => {
    return (
    <div className="newcollect">
     <Container>
        <Row>    
          <Col md="12" className="pageTitles">
                <p>Straight From Nike</p>
                <h4>NEW COLLACTION</h4>
         </Col>
            <Col className="cardsArea" lg="6" md="12">
                <Row>
                     <Col className="cards" lg="6" md="6">
                          <Card>
                              <CardBody>
                                  <img src={sniker1} alt="sniker1" />
                              </CardBody>
                              <CardFooter>
                              <div className="texts">
                                    <p>Nike Air Force</p>
                                   <span>$99</span>  
                                  </div> 
                              </CardFooter>
                          </Card>
                     </Col>
                     <Col className="cards" lg="6" md="6">
                          <Card>
                              <CardBody>
                                  <img src={sniker2} alt="sniker1" />
                              </CardBody>
                              <CardFooter>
                                  <div className="texts">
                                    <p>Nike Air Force</p>
                                   <span>$99</span>  
                                  </div> 
                              </CardFooter>
                          </Card>
                     </Col>
                     <Col className="cards" lg="6" md="6">
                          <Card>
                              <CardBody>
                                  <img src={sniker1} alt="sniker1" />
                              </CardBody>
                              <CardFooter>
                              <div className="texts">
                                    <p>Nike Air Force</p>
                                   <span>$99</span>  
                                  </div> 
                              </CardFooter>
                          </Card>
                     </Col>
                     <Col className="cards" lg="6" md="6">
                          <Card>
                              <CardBody>
                                  <img src={sniker2} alt="sniker1" />
                              </CardBody>
                              <CardFooter>
                              <div className="texts">
                                    <p>Nike Air Force</p>
                                   <span>$99</span>  
                                  </div> 
                              </CardFooter>
                          </Card>
                     </Col>
                </Row>
            </Col>
            <Col lg="6" md="12">
                <Card>
                    <CardBody>
                        <div className="productPrice">
                            <span>
                                SALE -50%
                            </span>
                            <span>
                                $99
                            </span>
                        </div>
                        <div className="forImg">
                             <img src={sniker3} alt="nike3" />
                        </div>
                    </CardBody>
                    <CardFooter className="leftCardFoot">
                        <h4 className="productName">Naki Area Force 1 Shadow</h4>
                        <p className="productBrand">Brand: Nike</p>
                    </CardFooter>
                </Card>
            </Col>
            <Col md="12" className="buttonArea text-center">
               <a href="#" className="exploreButton">Explore Other Products</a> 
            </Col>
          </Row>
        </Container>
    </div>
    );
};

export default Collection;