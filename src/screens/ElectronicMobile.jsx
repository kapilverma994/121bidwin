import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Banner from "../components/ElectronicMobile/Banner";
import MiddleBanner from "../components/ElectronicMobile/MiddleBanner";

import MobileProducts from "../components/ElectronicMobile/MobileProducts";
import MobileSlider from "../components/ElectronicMobile/MobileSlider";

const ElectronicMobile = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className="container-fluid">
        <MobileProducts />
      </div>
      <MiddleBanner />
      <MobileSlider />
      <div class="container-fluid">
        <div class="row my-3">
          <div class="col">
            <a href="#">
              <img
                src="asset/images/strip-banner-sample3.jpg"
                alt="offer banner"
                width="100%"
                class="offr-bnn"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <MobileProducts />
      </div>
      <div class="container-fluid">
        <div class="row my-3">
          <div class="col">
            <a href="#">
              <img
                src="asset/images/strip-banner-sample4.jpg"
                alt="offer banner"
                width="100%"
                class="offr-bnn"
              />
            </a>
          </div>
        </div>
      </div>
      <MobileSlider />
      <Footer />
    </div>
  );
};

export default ElectronicMobile;
