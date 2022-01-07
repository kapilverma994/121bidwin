import React from "react";

import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const Contactus = () => {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center p-3">
        <h4>Contact Us</h4>
      </div>
      <section className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div />
              <form
                name="myform"
                id="myform"
                method="post"
                action
                encType="multipart/form-data"
              >
                <div className="form-group">
                  <label> Name </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label> Email </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label> Phone </label>
                  <input
                    type="text"
                    name="phone"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label> Message </label>
                  <textarea
                    className="form-control"
                    rows={6}
                    name="message"
                    placeholder="Message"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-danger"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="col-sm-6">
              <h4>Office address </h4>
              <p>
                Office 302, MK Sikka House, 10-A, Veer Savarkar Block,
                Shakarpur, Near Nirman Vihar Metro Station,Delhi-110092,
                <br />
                NIRMAN VIHAR,Delhi,India
                <br />
                Email: support@posvat.com,
                <br />
                Tel: (+91) 92051079787{" "}
              </p>
              <br />
              <br />
              {/* <h4 style="margin-top:30px">INDIA Office</h4>
						<p>Office 302, MK Sikka House, <br>
							10-A, Veer Savarkar Block, Shakarpur, <br>
							Near Nirman Vihar Metro Station,Delhi-110092 <br>
							Email: support@posvat.com <br>
							Phone: 011-40506415, Mobile: +91-9873968645</p> */}
            </div>
          </div>
        </div>
      </section>
      <div className="w-100 mt-5 border-top border-bottom">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.900668264612!2d77.28516460343843!3d28.635715658219684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5614d9cee3%3A0x1a739c7ab9cd4710!2sNirman+Vihar!5e0!3m2!1sen!2sin!4v1553514447121"
          width="100%"
          height={350}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>

      <Footer />
    </div>
  );
};

export default Contactus;
