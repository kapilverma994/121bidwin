import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import RelatedSllider from "./RelatedSlider";

const MainContent = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Camera</a>
            </li>
            <li className="breadcrumb-item active">
              Sport Full HD 1080p Action Camera 30 Meters WaterProof 2 inch
              Screen, 120-140 Degree Wide Angle
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="prd-main-large-img">
              <img
                className="img-thumbnail"
                id="largeImage"
                src="asset/images/sell-product-1.jpg"
                width="100%"
                alt="product"
              />
            </div>
            <div className="prd-thumb-img">
              <ul id="thumbs">
                <li>
                  <img
                    className="img-thumbnail"
                    src="asset/images/sell-product-1.jpg"
                  />
                </li>
                <li>
                  <img
                    className="img-thumbnail"
                    src="asset/images/additional-image-sample1.jpg"
                  />
                </li>
                <li>
                  <img
                    className="img-thumbnail"
                    src="asset/images/additional-image-sample2.jpg"
                  />
                </li>
                <li>
                  <img
                    className="img-thumbnail"
                    src="asset/images/additional-image-sample3.jpg"
                  />
                </li>
              </ul>
            </div>
            {/* image change script */}
            {/* list of bid winner */}
            <div className="p-3 mt-3 border" style={{ background: "#eee" }}>
              <h4 className="text-danger">List of Winners</h4>
              <div className="small">Winner Name 1 </div>
              <div className="small">Winner Name 2 </div>
              <div className="small">Winner Name 3 </div>
              <div className="small">Winner Name 4 </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="border-bottom pb-2">
              <h3>
                {" "}
                Sport Full HD 1080p Action Camera 30 Meters WaterProof 2 inch
                Screen{" "}
              </h3>
              <div className="small">Sold By: POSVAT </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n\t\t\t.play-bid-box{background:#ed1c24; padding:10px; margin:15px 0 0; border-radius:10px; display:inline-block;}\n\t\t\t.play-pid-price {diaplay:inline-block; font-size:60px; line-height:60px; padding:0 10px; color:#fff;}\n\t\t\t.play-bid-btn {background:#fff; color:#ed1c24; border:0; border-radius:8px; font-size:24px; line-height:24px; font-weight:bold; padding:8px 15px; cursor:pointer;}\n\t\t\t",
              }}
            />
            <div className="prd-price pt-3">Rs. 150.00</div>
            <div className="disc-price">Rs. 1.00 </div>
            <div className="text-success font-weight-bold">You Save 99%</div>
            <div className="play-bid-box">
              <div className="clearfix">
                <div className="float-left">
                  <div className="text-white text-center">
                    Lucky Winner Number 475
                  </div>
                  <div className="play-pid-price text-center">000</div>
                </div>
                <div className="float-left px-4">
                  <div className="text-white font-weight-bold text-center lead">
                    Rs. 1.00
                  </div>
                  <div className="text-center pt-2">
                    <button type="button" className="play-bid-btn">
                      PLAY <i className="fas fa-chevron-right" />
                    </button>
                  </div>
                </div>
                <div className="float-left">
                  <div className="text-white text-center">25</div>
                  <div className="text-center">
                    <img
                      src="images/gold-gems-icon.png"
                      width={40}
                      alt="gems"
                    />
                  </div>
                  <div className="text-white text-center small">
                    GEMS CHARGE
                  </div>
                </div>
              </div>
            </div>
            <div className="text-danger mb-2 p-1 small">
              {" "}
              T&amp;C Apply [ ] Check{" "}
            </div>
            <div className="small py-2">
              Item Condition: Brand New - This item is brand new.
            </div>
            <div className="small">Shipping: POSVAT Delivery - 7 AED</div>
            <div className="small pt-2">Tax: Extra as applicable </div>
            <div className="small py-2">
              Warranty: 3 Days Checking Warranty - Quick and hassle free
              warranty claim process.
            </div>
            <div className="form-group row">
              <label className="col-2 pt-2">Quantity</label>
              <div className="col-2">
                <input type="text" defaultValue={1} className="form-control" />
              </div>
            </div>
            {/* <div class="w-100 small py-2 clearfix">
				<div class="float-left w-50">Minimum Bid: $1.00</div>
				<div class="float-left w-50">0 bids</div>
			</div> */}
            <div>
              <Link
                to="buy-coins"
                className="btn btn-danger font-weight-bold text-white"
              >
                {" "}
                BUY GEMS{" "}
              </Link>
            </div>
            <div className="py-3  mt-4 border-bottom cart-social-icons">
              <a href="#">
                <i className="far fa-heart" />
              </a>
              <a href="#">
                <i className="fab fa-whatsapp" />
              </a>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p" />
              </a>
              <a href="#">
                <i className="far fa-envelope" />
              </a>
              <button type="button" className="ml-3 btn btn-secondary btn-sm">
                Share &amp; Win
              </button>
            </div>
            <div className="w-100 small py-2 clearfix">
              <div className="float-left w-50">0 watching</div>
              <div className="float-left w-50">1 view</div>
            </div>
          </div>
        </div>
        {/* product description */}
        <div className="container my-5">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#productdetail"
              >
                Product Details
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#specification">
                Specification
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div id="productdetail" className="container tab-pane active">
              <br />
              <h5 className="aw_bold aw_mb10">
                Sport HD Action Camera 1.3 Mega Pixel 2 Inch LCD Touch Panel
                With Microphone, Silver
              </h5>
              <ul className="prd-des-list">
                <li>
                  The Sport HD Action Camera 1.3 Mega Pixel 2 Inch LCD Touch
                  Panel With Microphone, Silver Action Cameras is manufactured
                  by Generic.
                </li>
                <li>
                  Buy the Sport HD Action Camera 1.3 Mega Pixel 2 Inch LCD Touch
                  Panel With Microphone, Silver at the best price in the United
                  Arab Emirates.
                </li>
                <li>
                  The purchased Sport HD Action Camera 1.3 Mega Pixel 2 Inch LCD
                  Touch Panel With Microphone, Silver can be delivered to United
                  Arab Emirates.
                </li>
                <li>The product/item is Brand New.</li>
                <li>
                  Buy Sport HD Action Camera 1.3 Mega Pixel 2 Inch LCD Touch
                  Panel With Microphone, Silver in United Arab Emirates of AED
                  69 and save 60%.
                </li>
              </ul>
            </div>
            <div id="specification" className="container tab-pane fade">
              <br />
              <h5>Specifications</h5>
              <ul className="prd-des-list">
                <li>Product specification 1</li>
                <li>Product specification 1</li>
                <li>Product specification 1</li>
                <li>Product specification 1</li>
                <li>Product specification 1</li>
                <li>Product specification 1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid my-4">
        <h3 class="text-center border-bottom mb-3">RELATED PRODUCTS</h3>
        <RelatedSllider />
      </div>
    </div>
  );
};

export default MainContent;
