import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CoinCard from "../components/BuyCoin/CoinCard";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const BuyCoins = () => {
  const coindata = [
    {
      title: "Platinum",
      price: "2200",
      memberpay: "1980",
      gems: "5000",
      color: "#c3d1d8",
    },
    {
      title: "Platinum",
      price: "2200",
      memberpay: "1980",
      gems: "5000",
      color: "#c3d1d8",
    },
    {
      title: "Gold",
      price: "1060",
      memberpay: "954",
      gems: "2500",
      color: "#e7cc99",
    },
    {
      title: "Silver",
      price: "220",
      memberpay: "198",
      gems: "500",
      color: "#e5e6e7",
    },
  ];
  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-3 py-3">
          <Col sm={6}>
            <h3 className="font-weight-bold">Choose Your Gems Pack</h3>
          </Col>
          <Col sm={6}>
            <p className="text-center text-danger border border-danger p-1 font-weight-bold small">
              121bidwin Members will get 10% discount and 10% extra Gems
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={4} className="text-center mt-3">
            <CoinCard
              title="Platinum"
              price="2200"
              memberpay="1980"
              gems="5000"
              color="#c3d1d8"
            />
          </Col>
          <Col sm={4} className="text-center mt-3">
            <CoinCard
              title="Gold"
              price="1060"
              memberpay="954"
              gems="2500"
              color="#e7cc99"
            />
          </Col>
          <Col sm={4} className="text-center mt-3">
            <CoinCard
              title="Silver"
              price="220"
              memberpay="198"
              gems="500"
              color="#e5e6e7"
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default BuyCoins;
