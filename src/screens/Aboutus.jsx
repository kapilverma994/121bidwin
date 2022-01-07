import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const Aboutus = () => {
  return (
    <div>
      <Header />
      <section className="mt-4">
        <section id="blog" className="container" style={{ minHeight: "583px" }}>
          <div className="row">
            <div className="col-md-12">
              <h4>About us</h4>
            </div>
            <div className="col-md-7">
              <p className="p-text" />
              <p>
                Posvat Private Limited (Priority On Services &amp; Value at
                Time) has added one more feather to its cap named as
                121directory by expanding its business area in PAN India, the
                Head Office is located in the beautiful City of Dubai where it
                started initially. 121directory is a free listing platform with
                a new concept &amp; focusing on its matured vision and aims to
                fulfill every individual to directly get connected with the
                manufacturer’s all over the Country whether small or large scale
                Industries has the opportunity to list and sell their products
                through their own website while being connected with
                121directory and expand its business in Metro Cities such as New
                Delhi, Mumbai, Kolkata, Chennai, Hyderabad, Bangalore and also
                in UAE (United Arab Emirates). This is your one stop solution
                for all your needs be it Company/ Products/ Equipments/
                Jewellery/ Pets/ Automotive/ Medication/ Digital Industry/
                Restaurants/ Travel/ Real Estate/ Renting etc. The list goes on
                and on until your requirements are fulfilled. We provide all the
                details through SMS, email, phone, Website, Mobile Applications.
                We are expanding every day and we wish to enlist all the local
                and international businesses with us for your convenience.
                Herein you can directly get connected to your nearest business/
                shop owner for the best deals and get the product at home or
                collect it by yourself from the store at your convenience. We
                bring in a platform for every individual to reach out to seller
                directly so that there is no 3rd party included in between.
              </p>
              <p />
            </div>
            <div className="col-md-5">
              <a href="#">
                <img
                  style={{ width: "100%", height: 300 }}
                  src="https://121directory.com/data/about/IMG-20200720183600-2120894955.jpg"
                />
              </a>
            </div>
            <br />
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default Aboutus;
