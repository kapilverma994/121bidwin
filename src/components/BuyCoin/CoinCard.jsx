import React from "react";

const CoinCard = (props) => {
  return (
    <div>
      <div className="container" style={{ minHeight: 850 }}>
        <div className="py-4" style={{ background: props.color }}>
          <h4 className="py-2 display-4">{props.title}</h4>
          <div className="my-2">
            <img
              className="img-liquid"
              src="https://121directory.com/images/free-member-logo.png"
              alt={props.title}
            />
          </div>
          <h5 className="font-weight-bold">Value</h5>
          <h2 className="font-weight-bold">Rs. {props.price}</h2>
          <h5 className="font-weight-bold mt-4">
            Members Pay Rs. {props.memberpay}
          </h5>
          <p className="mt-4">
            5000 Gems <br /> Extra {props.gems} Gems
          </p>
          <div className="mt-3">
            <a
              href="#"
              className="btn btn-outline-danger btn-sm font-weight-bold"
            >
              Buy Membership
            </a>
          </div>
          <div className="mt-3">
            <a
              href="#"
              className="btn btn-danger text-white btn-lg font-weight-bold"
            >
              Pay Rs. {props.price}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
