import React from "react";

const Card = () => {
  return (
    <div>
      <div className="container" style={{ minHeight: 850 }}>
        <div className="row py-3 mt-3">
          <div className="col-sm-12">
            <h3 className="font-weight-bold">Select Your Membership Plan</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 text-center mt-3">
            <div className="py-4" style={{ background: "#c3d1d8" }}>
              <h4 className="py-2 display-4">PLATINUM</h4>
              <div className="my-2">
                <img
                  className="img-liquid"
                  src="https://121directory.com/images/free-member-logo.png"
                  alt="platinum"
                />
              </div>
              <h2 className="font-weight-bold">1 Year</h2>
              <p className="mt-4">
                10% Discount on Gems <br />
                10% Extra Gems
              </p>
              <h2 className="font-weight-bold mt-4">Rs. 10000</h2>
              <div className="mt-4">
                <a
                  href="#"
                  className="btn btn-danger text-white btn-lg font-weight-bold"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 text-center mt-3">
            <div className="py-4" style={{ background: "#e7cc99" }}>
              <h4 className="py-2 display-4">GOLD</h4>
              <div className="my-2">
                <img
                  className="img-liquid"
                  src="https://121directory.com/images/free-member-logo.png  "
                  alt="gold"
                />
              </div>
              <h2 className="font-weight-bold">6 Months</h2>
              <p className="mt-4">
                10% Discount on Gems <br />
                10% Extra Gems
              </p>
              <h2 className="font-weight-bold mt-4">Rs. 6000</h2>
              <div className="mt-4">
                <a
                  href="#"
                  className="btn btn-danger text-white btn-lg font-weight-bold"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 text-center mt-3">
            <div className="py-4" style={{ background: "#e5e6e7" }}>
              <h4 className="py-2 display-4">SILVER</h4>
              <div className="my-2">
                <img
                  className="img-liquid"
                  src="https://121directory.com/images/free-member-logo.png"
                  alt="silver"
                />
              </div>
              <h2 className="font-weight-bold">1 Month</h2>
              <p className="mt-4">
                10% Discount on Gems <br />
                10% Extra Gems
              </p>
              <h2 className="font-weight-bold mt-4">Rs. 1500</h2>
              <div className="mt-4">
                <a
                  href="#"
                  className="btn btn-danger text-white btn-lg font-weight-bold"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
