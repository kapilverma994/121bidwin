import React from "react";

import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import BidwinBanner from "../../components/Bid&Win/BidwinBanner";
import BidWinCard from "../../components/Bid&Win/BidWinCard";
import { Col, Container, Row } from "react-bootstrap";
const BidWin = () => {
  return (
    <div>
      <Header />
      <Container fluid>
        <BidwinBanner />
        <Row>
          <Col md={2}>
            <BidWinCard />
          </Col>
          <Col md={2}>
            <BidWinCard />
          </Col>
          <Col md={2}>
            <BidWinCard />
          </Col>
          <Col md={2}>
            <BidWinCard />
          </Col>
          <Col md={2}>
            <BidWinCard />
          </Col>

          <Col md={2}>
            <BidWinCard />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default BidWin;
