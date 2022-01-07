import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import MainContent from "../components/ProductDetail/MainContent";

const ProductDetail = () => {
  return (
    <div>
      <Header />
      {/* main content */}
      <MainContent />
      <Footer />
    </div>
  );
};

export default ProductDetail;
