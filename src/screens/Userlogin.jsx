import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const Userlogin = () => {
  return (
    <>
      <Header />
      <Container style={{ minHeight: "550px" }}>
        <div className="border p-5 mt-5 mb-5">
          <div className="text-center ">
            <a className="bg-danger p-3" data-toggle="pill" href="#userlogin">
              <i className="fa fa-user mr-2 text-white" aria-hidden="true" />{" "}
              <span className="text-white font-weight-bold">User Login</span>
            </a>
          </div>

          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-2">
              <a href="#" className="text-primary">
                Forget Password ?
              </a>
            </div>

            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
            <div className="mt-2">
              <p>
                New User ?{" "}
                <Link to="register-user" className="font-weight-bold">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Userlogin;
