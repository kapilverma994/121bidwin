import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const WinnerCard = () => {
  return (
    <div>
      <div className="servicecard">
        <Card className="p-2">
          <Link to="product-detail">
            <Card.Img
              style={{ width: "50%", marginLeft: "120px" }}
              variant="top"
              src="asset/images/win-app-img.png"
              height="200px"
              alt="job-img3"
            />
          </Link>

          <Card.Body className="p-0">
            {/* <Card.Title>Card Title</Card.Title> */}
            <Card.Text>
              <h6 className="text-center  mt-2" style={{ overflow: "hidden" }}>
                Ashok Sharma
              </h6>

              <p className="font-weight-bold text-center p-0 m-0">Delhi</p>

              <div className="m-1">
                <Link
                  className="btn btn-block text-white btn-danger"
                  to="winner-profile"
                >
                  Click View Detail
                </Link>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default WinnerCard;
