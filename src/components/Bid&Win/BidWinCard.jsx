import React from "react";

const BidWinCard = () => {
  return (
    <div>
      <div className="bid-prd-list">
        <div>
          <a href="product-detail-page.php">
            <img src="asset/images/product-sample-fan.jpg" width="100%" />
          </a>
        </div>
        <p className="small text-center pt-2">
          <a href="product-detail-page.php">
            Flipkart SmartBuy Classic Ceiling Fan(Brown, Pack ...
          </a>
        </p>
        <div className="clearfix">
          <div className="float-left font-weight-bold"> Rs. 24.00 </div>
          <div className="float-right font-weight-bold"> 04 </div>
        </div>
        <div className="text-center py-2">
          <h5 className="text-success font-weight-bold">Anshrul Huf</h5>
        </div>
        <div className="my-1">
          <a
            className="btn btn-block font-weight-bold text-white btn-danger"
            href="#"
          >
            Bid Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default BidWinCard;
