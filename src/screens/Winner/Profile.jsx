import React from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import WinnerDetail from "../../components/Winner/WinnerDetail";
import WinnerRelatedProduct from "../../components/Winner/WinnerRelatedProduct";

const Profile = () => {
  return (
    <div>
      <Header />
      <WinnerDetail />
      <div class="container-fluid my-4">
        <h3 class="text-center border-bottom mb-3">RELATED PRODUCTS</h3>
        <WinnerRelatedProduct />
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
