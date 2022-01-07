import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const FeatureSliderCard = () => {
  return (
    <div>
      <div className="servicecard">
        <Card className="mx-1 p-2 mb-3">
          <Link to="product-detail">
            <Card.Img
              variant="top"
              src="asset/images/sell-product-1.jpg"
              width="100%"
              height="300px"
              alt="job-img3"
            />
          </Link>

          <Card.Body className="p-0">
            {/* <Card.Title>Card Title</Card.Title> */}
            <Card.Text>
              <h6 className="text-center  mt-2" style={{ overflow: "hidden" }}>
                Sport Full HD 1080p Action Camera 30 Meters WaterProof 2 inch
                Screen
              </h6>
              <br />
              <p className="font-weight-bold text-center p-0 m-0">
                Sold by: Posvat
              </p>
              <div className="text-primary text-center">40 More in Stock</div>
              <div className="text-center font-weight-bold text-danger">
                Winner 10
              </div>
              <div className="product-price">
                <span>
                  <i className="fas fa-rupee-sign fa-sm"></i> 1099.00
                </span>
                <i className="fas fa-rupee-sign fa-sm ml-1"></i> 1.00
              </div>
              <div className="m-1">
                <Link
                  className="btn btn-block text-white btn-danger"
                  to="product-detail"
                >
                  Bid Now
                </Link>
              </div>
              <div class="offer-timer text-center p-0 m-0">Charge 5 Gems</div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default FeatureSliderCard;
