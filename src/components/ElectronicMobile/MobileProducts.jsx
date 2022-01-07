import React from "react";
import { Col, Row } from "react-bootstrap";
import MobileCard from "./MobileCard";

const MobileProducts = () => {
  return (
    <div>
      <Row>
        <Col md={3} lg={3} xl={3} className=" p-0">
          <MobileCard />
        </Col>
        <Col md={3} lg={3} xl={3} className=" p-0">
          <MobileCard />
        </Col>
        <Col md={3} lg={3} xl={3} className=" p-0">
          <MobileCard />
        </Col>
        <Col md={3} lg={3} xl={3} className=" p-0">
          <MobileCard />
        </Col>
        <Col md={3} lg={3} xl={3} className=" p-0">
          <MobileCard />
        </Col>
        <Col md={3} lg={3} xl={3} className=" p-0">
          <MobileCard />
        </Col>
        <Col md={3} lg={3} xl={3} className=" p-0">
          <MobileCard />
        </Col>
        <Col md={3} lg={3} xl={3} className=" p-0">
          <MobileCard />
        </Col>
      </Row>
    </div>
  );
};

export default MobileProducts;
