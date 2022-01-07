import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  const [showData, setShowData] = useState(false);
  console.log(showData);
  return (
    <div>
      <>
        <footer>
          <div className="footer-box">
            {
              showData === true && (
                <Container>
                  <div className="ft-footer">
                    <Row className="pt-3">
                      <Col md={4}>
                        <div className="ft-footer-detail">
                          <div className="ft-footer-h">COMPANY</div>
                          <ul className="ft-footer-d">
                            <li>
                              <Link to="/">Home</Link>
                            </li>
                            <li>
                              <Link to="about-us">About Us</Link>
                            </li>
                            <li>
                              <Link to="contact-us">Contact Us</Link>
                            </li>
                            <li>
                              <a href="#">Join Our Site</a>
                            </li>
                            <li>
                              <a href="#">Partner with 121bidwin</a>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="ft-footer-detail">
                          <div className="ft-footer-h">HOT LINKS </div>
                          <ul className="ft-footer-d">
                            <li>
                              <Link to="how-it-works">How It Works</Link>
                            </li>
                            <li>
                              <a href="#">Terms &amp; Conditions</a>
                            </li>
                            <li>
                              <Link to="privacy-policy">Privacy Policy</Link>
                            </li>
                            <li>
                              <Link to="privacy-policy">Disclaimer</Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="ft-footer-detail">
                          <div className="ft-footer-h">COUNTRIES </div>
                          <ul className="ft-footer-d">
                            <li>
                              <a href="#">India </a>
                            </li>
                            <li>
                              <a href="#">United Arab Emirates </a>
                            </li>
                            <li>
                              <a href="#">United Kingdom </a>
                            </li>
                            <li>
                              <a href="#">United Sates of America </a>
                            </li>
                            <li>
                              <a href="#">Australia </a>
                            </li>
                            <li>
                              <a href="#">China </a>
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="fb-footer m-0 p-0">
                    <Row>
                      <Col md={2} className="p-0 m-0">
                        <div className="ft-footer-img  ">
                          <img
                            src="asset/images/bidwinnew.png"
                            alt="121bidwin"
                            height="100px"
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="fb-footer1">
                          <p className="fbp1">
                            © POSVAT PVT LTD. All Rights Reserved. Powered by{" "}
                            <a href="https://www.posvat.com" target="_blank">
                              posvat.com
                            </a>
                          </p>
                          <p className="fbp1">
                            Note : If you continue to utilize our services, you
                            agree to the Terms and Conditions, Content Policies,
                            Cookie Policy &amp; Privacy Policy of POSVAT. All
                            Trademark are properties of the respective
                            merchants.
                          </p>
                          <div className="clr"></div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div
                          className="ftr_dwn float-right"
                          onClick={() => setShowData(false)}
                          style={{ fontSize: "30px", marginLeft: "80px" }}
                        >
                          <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="ft-footer-app d-flex">
                          <div className="ft-footer-app1">
                            <img
                              src="asset/images/ios-app-logo.png"
                              alt="ios-app-logo"
                            />
                          </div>
                          <div className="ft-footer-app1 ml-2">
                            <img
                              src="asset/images/android-app-logo.png"
                              alt="android-app-logo"
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="clr"></div>
                  </div>
                </Container>
              )
              // </div>
            }
            {showData === false && (
              <Container>
                <div className="fb-footer">
                  <div
                    className="row"
                    style={{
                      borderTop: "#333 1px dotted",
                      paddingTop: 10,
                      marginTop: 20,
                    }}
                  >
                    <div className="col-md-2 ft-footer-img  ">
                      <img
                        src="asset/images/bidwinnew.png"
                        alt="121bidwin"
                        height="100px"
                      />
                    </div>

                    <div className="col-sm-6 text-center text-sm-left">
                      <p>
                        © POSVAT PVT LTD. All Rights Reserved. Powered by{" "}
                        <a href="https://www.posvat.com" target="_blank">
                          posvat.com
                        </a>
                      </p>
                      <p className="fbp1">
                        Note : If you continue to utilize our services, you
                        agree to the Terms and Conditions, Content Policies,
                        Cookie Policy &amp; Privacy Policy of POSVAT. All
                        Trademark are properties of the respective merchants.{" "}
                      </p>
                    </div>
                    <div className="col-sm-3 text-center text-sm-right">
                      <div className="footer-box-social">
                        <a href="#">
                          <i className="fab fa-facebook-square" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter-square" />
                        </a>
                        <a href="#">
                          <i className="fab fa-google-plus-square" />
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube-square" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                    <div
                      className="ftr_up"
                      onClick={() => setShowData(true)}
                      style={{ fontSize: "30px", marginLeft: "76px" }}
                    >
                      <i className="fa fa-caret-up"></i>
                    </div>
                  </div>
                  <div className="clr"></div>
                </div>
              </Container>
            )}
          </div>
        </footer>
      </>
    </div>
  );
}
