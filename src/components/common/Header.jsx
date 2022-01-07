import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <header className="tp-header">
        <div className="top-blk-strip">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 text-left">
                <ul>
                  <li>
                    <a href="mailto:support@121bidwin.com">
                      <i className="fa fa-envelope" aria-hidden="true" />{" "}
                      support@121bidwin.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+123456489">
                      <i className="fa fa-phone-square" aria-hidden="true" />{" "}
                      +123456489
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 text-right">
                <ul>
                  <li>
                    <a href="#">Languages</a>
                  </li>
                  {/*<li><a href="https://www.121bidwin.com/login-register.php">Login</a></li>*/}
                  {/* <li>
                    <a href="https://www.121directory.com/login-register">
                      Register
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2 text-center py-2">
              <div className="brand-logo">
                {/* <Link to="/">
                  <img
                    src="asset/images/121bidwin1.png"
                    width="50%"
                    alt="121bidwin"
                  />
                </Link> */}
                <Link to="/">
                  <img
                    src="asset/images/bidwinnew.png"
                    alt="121bidwin"
                    height="90px"
                  />
                </Link>
              </div>
            </div>
            {/* <div class="col-sm-3 text-left">
				<ul class="top-hdr-menu">
					<li><a href="#">Home</a></li>
					<li><a href="#">Buy</a></li>
					<li><a href="#">Sale</a></li>
				</ul>
			</div>
			*/}
            <div className="col-sm-8 text-right mt-md-2 mt-lg-4">
              <div className="row">
                <div className="col-4 p-0">
                  <form action=" ">
                    <select className="custom-select">
                      <option selected>All Category</option>
                      <option>Electronics</option>
                      <option>Food and Beverages</option>
                    </select>
                  </form>
                </div>
                <div className="col-6 p-0">
                  <form>
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="search"
                        placeholder="What Are You Looking For ?"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-danger" type="submit">
                          <i className="fas fa-search" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-2 text-center mt-md-2 mt-lg-4 d-flex ">
              <div className="pt-2 ml-5">
                <a href="#">
                  <i className="fa fa-shopping-cart fa-lg" aria-hidden="true" />
                  <span className="small text-danger"> 00</span>
                </a>
              </div>
              <div className="ml-4">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleShow}
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-100"
          style={{ backgroundImage: "linear-gradient(#ec1c24, #bb0108)" }}
        >
          <div className="container">
            <div className="row mt-1">
              <div className="top-red-hdr-menu">
                <ul>
                  <li>
                    <Link className="bid-and-win-btn" to="/bid-win">
                      Bid &amp; Win
                    </Link>
                  </li>
                  <li>
                    <Link to="/how-it-works">How It Works</Link>
                  </li>
                  <li>
                    <Link to="winner">Winners</Link>
                  </li>
                  <li>
                    <Link to="/buy-coins">Buy Gems</Link>
                  </li>
                  <li>
                    <Link to="/membership">Membership</Link>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      All Categories{" "}
                    </a>
                    <ul className="dropdown-menu p-2" style={{ width: 260 }}>
                      <li>
                        <a href="#">Electronics</a>
                      </li>
                      <li>
                        <a href="#">Food and Beverages</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hdr-cat-menu">
          <ul>
            <li>
              <a href="#">
                Electronics <i className="fas fa-caret-down" />
              </a>
              <div className="sub-cat-menu">
                <ul>
                  <li>
                    <Link to="electronic-mobile">Mobile</Link>
                  </li>
                  <li>
                    <a href="electronic-mob-access.php">Mobile Accessories</a>
                  </li>
                  <li>
                    <a href="elect-smrt-wrble.php">Smart Wearable Tech</a>
                  </li>
                  <li>
                    <a href="elect-lpt.php">Laptop</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="elect-dsktp.php">Desktop PCs</a>
                  </li>
                  <li>
                    <a href="elect-game-access.php">Gaming &amp; Accessories</a>
                  </li>
                  <li>
                    <a href="elect-cmptr-access.php">Computer Accessories</a>
                  </li>
                  <li>
                    <a href="cmptr-priph.php">Computer Peripherals</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="elect-tablet.php">Tablets</a>
                  </li>
                  <li>
                    <a href="elect-television.php">Televisions</a>
                  </li>
                  <li>
                    <a href="elect-hm-entrtmnt.php">Home Entertainment</a>
                  </li>
                  <li>
                    <a href="elect-smrt-hm-automtn.php">
                      Smart Home Automation
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="elect-camera.php">Camera</a>
                  </li>
                  <li>
                    <a href="elect-camera-access.php">Camera Accessories</a>
                  </li>
                  <li>
                    <a href="elect-ntwrk-cmpnt.php">Network Components</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                TVs &amp; Appliances <i className="fas fa-caret-down" />
              </a>
              <div className="sub-cat-menu">
                <ul>
                  <li>
                    <a href="tvs-television.php">Television</a>
                  </li>
                  <li>
                    <a href="tvs-android.php">Andriod TVs</a>
                  </li>
                  <li>
                    <a href="tvs-smrt-altra.php">Smart &amp; Ultra HD</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="tvs-tp-brand.php">Top Brands</a>
                  </li>
                  <li>
                    <a href="tvs-sbss.php">Shop By Screen Size</a>
                  </li>
                  <li>
                    <a href="tvs-wash-mchn.php">Washing Machine</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="tvs-sbrand.php">Shop By Brand</a>
                  </li>
                  <li>
                    <a href="tvs-refri.php">Refrigerators</a>
                  </li>
                  <li>
                    <a href="tvs-air-cndtns.php">Air Conditions</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="tvs-ktchn.php">Kitchen Appliances</a>
                  </li>
                  <li>
                    <a href="tvs-health.php">Healthy Living Appliances</a>
                  </li>
                  <li>
                    <a href="tvs-smrt-hm.php">Smart Home Appliances</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="tvs-tp-brand.php">Top Brands</a>
                  </li>
                  <li>
                    <a href="tvs-buyguid.php">Buying Guides</a>
                  </li>
                  <li>
                    <a href="tvs-newlunch.php">New Launches</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                Men <i className="fas fa-caret-down" />
              </a>
              <div className="sub-cat-menu">
                <ul>
                  <li>
                    <a href="men-footwear.php">Footwear</a>
                  </li>
                  <li>
                    <a href="men-grmng.php">Men's Grooming</a>
                  </li>
                  <li>
                    <a href="men-cloth.php">Clothing</a>
                  </li>
                  <li>
                    <a href="men-topwear.php">Top Wear</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="men-bottm.php">Bottom Wear</a>
                  </li>
                  <li>
                    <a href="men-tsc.php">Tie, Socks, Caps &amp; More</a>
                  </li>
                  <li>
                    <a href="men-kurtap.php">Kurta, Pyjama &amp; More</a>
                  </li>
                  <li>
                    <a href="men-fabric.php">Fabrics</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="men-wntr.php">Winter Wear</a>
                  </li>
                  <li>
                    <a href="men-sprt.php">Sports Wear</a>
                  </li>
                  <li>
                    <a href="men-innwear.php">Innerwear &amp; Sleepwear</a>
                  </li>
                  <li>
                    <a href="men-watch.php">Watches</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="men-accessories.php">Accessories</a>
                  </li>
                  <li>
                    <a href="men-sprt-fit.php">Sports &amp; Fitness Store</a>
                  </li>
                  <li>
                    <a href="men-smrt-watch.php">Smart Watches</a>
                  </li>
                  <li>
                    <a href="men-smrt-band.php">Smart Bands</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="men-persnl.php">Personal Care Appliances</a>
                  </li>
                  <li>
                    <a href="men-future.php">Featured</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                Women <i className="fas fa-caret-down" />
              </a>
              <div className="sub-cat-menu">
                <ul>
                  <li>
                    <a href="wmen-cloth.php">Clothing</a>
                  </li>
                  <li>
                    <a href="wmen-wntr.php">Winter &amp; Seasonal Wear</a>
                  </li>
                  <li>
                    <a href="wmen-wstrn.php">Western Wear</a>
                  </li>
                  <li>
                    <a href="wmen-lngr-slp.php">Lingerie &amp; Sleepwear</a>
                  </li>
                  <li>
                    <a href="wmen-ethnic.php">Ethnic Wear</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="wmen-sprt.php">Sports Wear</a>
                  </li>
                  <li>
                    <a href="wmen-swim.php">Swim &amp; Beachwear</a>
                  </li>
                  <li>
                    <a href="wmen-intrntnl.php">International Brands</a>
                  </li>
                  <li>
                    <a href="wmen-arrival.php">New Arrivals</a>
                  </li>
                  <li>
                    <a href="wmen-undr.php">Under 499</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="wmen-ftwear.php">Footwear</a>
                  </li>
                  <li>
                    <a href="wmen-sndl.php">Sandal</a>
                  </li>
                  <li>
                    <a href="wmen-shoes.php">Shoes</a>
                  </li>
                  <li>
                    <a href="wmen-ballerinas.php">Ballerinas</a>
                  </li>
                  <li>
                    <a href="wmen-sliprff.php">Slippers &amp; Flip-Flops</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="wmen-watch.php">Watches</a>
                  </li>
                  <li>
                    <a href="wmen-smrt-watch.php">Smart Watches</a>
                  </li>
                  <li>
                    <a href="wmen-prsnlca.php">Personal Case Appliances</a>
                  </li>
                  <li>
                    <a href="wmen-beautyg.php">Beauty &amp; Grooming</a>
                  </li>
                  <li>
                    <a href="wmen-Jwlry.php">Jewellery</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="wmen-access.php">Accessories</a>
                  </li>
                  <li>
                    <a href="wmen-ftrd.php">Featured</a>
                  </li>
                  <li>
                    <a href="wmen-trndng.php">Trending Today</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                Baby &amp; Kids <i className="fas fa-caret-down" />
              </a>
              <div className="sub-cat-menu">
                <ul>
                  <li>
                    <a href="bkd-cloth.php">Kids Clothing</a>
                  </li>
                  <li>
                    <a href="bkd-bcloth.php">Boys clothing</a>
                  </li>
                  <li>
                    <a href="bkd-gcloth.php">Girls Clothing</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="bkd-bbcloth.php">Baby Boy Clothing</a>
                  </li>
                  <li>
                    <a href="bkd-bgcloth.php">Baby Girl Clothing</a>
                  </li>
                  <li>
                    <a href="bkd-kftwear.php">Kids Footwear</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="bkd-bftwear.php">Boys Footwear</a>
                  </li>
                  <li>
                    <a href="bkd-gftwear.php">Girls Footwear</a>
                  </li>
                  <li>
                    <a href="bkd-byftwear.php">Baby Footwear</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="bkd-character.php">Character Shoes</a>
                  </li>
                  <li>
                    <a href="bkd-kwntr.php">Kids Winter Wear</a>
                  </li>
                  <li>
                    <a href="bkd-toy.php">Toys</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="bkd-schlsupl.php">School Supplies</a>
                  </li>
                  <li>
                    <a href="bkd-bcare.php">Baby Care</a>
                  </li>
                  <li>
                    <a href="bkd-feature.php">Featured Brands</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                Home &amp; Furniture <i className="fas fa-caret-down" />
              </a>
              <div className="sub-cat-menu">
                <ul>
                  <li>
                    <a href="hfntr-ktchndng.php">Kitchen &amp; Dining</a>
                  </li>
                  <li>
                    <a href="hfntr-dngsrv.php">Dining &amp; Serving</a>
                  </li>
                  <li>
                    <a href="hfntr-ktchnstro.php">Kitchen Storage</a>
                  </li>
                  <li>
                    <a href="hfntr-hkplndry.php">House Keeping &amp; Laundry</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="hfntr-Furniture.php">Furniture</a>
                  </li>
                  <li>
                    <a href="hfntr-offurniture.php">Offers on Furniture</a>
                  </li>
                  <li>
                    <a href="hfntr-fab-furniture.php">Fab Furniture Fest</a>
                  </li>
                  <li>
                    <a href="hfntr-furnishing.php">Furnishing</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="hfntr-smrthauto.php">Smart Home Automation</a>
                  </li>
                  <li>
                    <a href="hfntr-toolhard.php">Tools &amp; Hardware</a>
                  </li>
                  <li>
                    <a href="hfntr-hdecor.php">Home Decor</a>
                  </li>
                  <li>
                    <a href="hfntr-light.php">Lighting</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="hfntr-petsupplies.php">Pet Supplies</a>
                  </li>
                  <li>
                    <a href="hfntr-dcfurniture.php">
                      Durability Certified Furniture
                    </a>
                  </li>
                  <li>
                    <a href="hfntr-featured.php">Featured</a>
                  </li>
                  <li>
                    <a href="hfntr-garden-store.php">Gardening Store</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="hfntr-bakeware.php">Bakeware Store</a>
                  </li>
                  <li>
                    <a href="hfntr-perfect-store.php">Perfect Home Store</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                Sports, Books &amp; More <i className="fas fa-caret-down" />
              </a>
              <div className="sub-cat-menu">
                <ul>
                  <li>
                    <a href="sport-book.php">Books</a>
                  </li>
                  <li>
                    <a href="sport-stationery.php">Stationery</a>
                  </li>
                  <li>
                    <a href="sport-gaming.php">Gaming</a>
                  </li>
                  <li>
                    <a href="sport-music.php">Music</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="sport-movies.php">Movies &amp; TV Shows</a>
                  </li>
                  <li>
                    <a href="sport-musical-instru.php">Musical Instruments</a>
                  </li>
                  <li>
                    <a href="sport-hobby-store.php">The Hobby Store</a>
                  </li>
                  <li>
                    <a href="sport-sports.php">Sports</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="sport-exercise.php">Exercise &amp; Fitness</a>
                  </li>
                  <li>
                    <a href="sport-carbike.php">Car &amp; Bike Accessories</a>
                  </li>
                  <li>
                    <a href="sport-car-electronics.php">
                      Car Electronics &amp; Appliances
                    </a>
                  </li>
                  <li>
                    <a href="sport-helment.php">Helmets &amp; Riding Gear</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="sport-health.php">Health &amp; Nutrition</a>
                  </li>
                  <li>
                    <a href="sport-grocery.php">Grocery</a>
                  </li>
                  <li>
                    <a href="sport-featured.php">Featured</a>
                  </li>
                  <li>
                    <a href="sport-gourmet.php">
                      Gourmet &amp; Specialty Foods
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </header>
      {/* mobile view header */}
      <div className="mobile-header">
        <div className="m-hdr-logo" onclick="openNavMenu()">
          <i className="fas fa-bars fa-2x" />
        </div>
        <div className="brand-logo">
          <a href="https://www.121bidwin.com/">
            <img
              src="https://www.121bidwin.com/images/121bidwin-logo.svg"
              width="98px"
              alt="121bidwin"
            />
          </a>
        </div>
        <div className="m-2 pt-1">
          <a href="#">
            <i className="fa fa-shopping-cart fa-lg" aria-hidden="true" />
            <span className="small text-danger"> 00</span>
          </a>
        </div>
        <div id="m-navBox" className="m-nav-box">
          <div className="m-menu-content">
            <h4>
              <i className="fas fa-user-circle" /> Hello.{" "}
              <a href="https://www.121bidwin.com/login-register.php">Sign In</a>
            </h4>
            <div className="navClosebtn">
              <a
                href="javascript:void(0)"
                className="closebtn"
                onclick="closeNavMenu()"
              >
                ×
              </a>
            </div>
            <div className="my-3">
              <form className="form-inline" action=" ">
                <input
                  className="form-control"
                  style={{ width: "70%" }}
                  type="search"
                  placeholder="What Are You Looking For ?"
                />
                <button className="btn btn-danger" type="submit">
                  <i className="fas fa-search" />
                </button>
              </form>
            </div>
            <div className="m-menuList">
              <ul>
                <li>
                  <a href="#">Buy</a>
                </li>
                <li>
                  <a href="#">Sale</a>
                </li>
              </ul>
            </div>
            <div className="m-menuList">
              <ul>
                <li>
                  <a href="#">Clearance</a>
                </li>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Mobility</a>
                </li>
                <li>
                  <a href="#">Fashion</a>
                </li>
                <li>
                  <a href="#">Best Sellers</a>
                </li>
                <li>
                  <a href="#">Latest Deals</a>
                </li>
                <li>
                  <a href="#">Gift Sets </a>
                </li>
                <li>
                  <a href="#">Baby Care &amp; Toys </a>
                </li>
                <li>
                  <a href="#">Car Care</a>
                </li>
                <li>
                  <a href="#">Special offers</a>
                </li>
                <li>
                  <a href="#">Renewed Gadgets</a>
                </li>
                <li>
                  <a href="#">Open Box</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Modal show={show} onHide={handleClose} className="modal right fade">
          <Modal.Header>
            <Modal.Title>Sign in</Modal.Title>
            <Button variant="danger" onClick={handleClose}>
              X
            </Button>
          </Modal.Header>

          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="">
                  <a href="#"> Forget Your Password ?</a>
                </label>
              </div>
              <button type="submit" className="btn btn-warning text-white">
                Sign in
              </button>
            </form>
          </Modal.Body>

          <Modal.Footer style={{ justifyContent: "space-between" }}>
            <Link to="user-login" className="btn btn-success text-white">
              User Login
            </Link>
            <Link to="/login" className="btn btn-danger text-white">
              Merchant Login
            </Link>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
