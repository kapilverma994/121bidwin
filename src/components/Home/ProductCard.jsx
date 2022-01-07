import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div>
      <div className="prd-box-list servicecard">
        <div>
          <Link to="product-detail">
            <img src="asset/images/sell-product-1.jpg" width="100%" />
          </Link>
        </div>
        <p className="small text-center pt-2">
          <Link to="product-detail">
            Sport Full HD 1080p Action Camera 30 Meters WaterProof 2 inch Screen
          </Link>{" "}
          <br />
          <span className="font-weight-bold small text-center">
            Sold by: POSVAT
          </span>
          <br />
          <span className="text-primary text-center">40 More in Stock</span>
          <br />
          <span className="font-weight-bold text-center text-danger">
            Winner 10
          </span>
        </p>
        <div className="clearfix">
          <div className="float-left">
            <div className="prd-bx-off-price">
              <i className="fas fa-rupee-sign fa-sm" /> 1.00
            </div>
            <div className="prd-bx-price">
              <i className="fas fa-rupee-sign fa-sm" /> 1099{" "}
            </div>
          </div>
          <div className="float-right">
            <div className="text-right">
              <Link to="product-detail" className="book-now-btn">
                BID NOW
              </Link>
              <br />
            </div>
            <span className="small text-right"> Charge 5 Gems </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
