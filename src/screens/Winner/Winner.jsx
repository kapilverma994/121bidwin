import React from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import AllWinner from "../../components/Winner/AllWinner";
import WinnerSlider from "../../components/Winner/WinnerSllider";

const Winner = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="col-md-12 bg-dark text-white p-2 pl-4 pr-4 mt-3">
          <div className="row">
            <div className="col-md-6">
              <h5>Today Winner</h5>
            </div>
            <div className="col-md-6 text-right ">
              <h5>Bid Now</h5>
            </div>
          </div>
        </div>
      </div>

      <WinnerSlider />
      <AllWinner />
      <Footer />
    </div>
  );
};

export default Winner;
