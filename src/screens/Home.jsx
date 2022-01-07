import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import FeatureSlider from "../components/Home/FeatureSlider";
import HomeProduct from "../components/Home/HomeProduct";

function Home() {
  return (
    <div>
      {/* DESKTOP and mobile view header */}
      <Header />
      {/* desktop view header fixed and shirnk on scroll */}
      {/* mobile view menu open and close javascript */}
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col">
            <a href="#">
              <img
                src="asset/images/strip-banner-sample.jpg"
                alt="offer banner"
                width="100%"
              />
            </a>
          </div>
        </div>
      </div>
      {/* feature product slider */}
      <FeatureSlider />
      <div className="container-fluid">
        {/* Main Content */}
        <HomeProduct />
      </div>
      {/* footer section */}
      <Footer />
    </div>
  );
}

export default Home;
