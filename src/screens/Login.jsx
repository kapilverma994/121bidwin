import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center p-3">
        <h4>Register Your Company</h4>
      </div>
      <Container>
        <div className="row py-sm-2">
          <div className="col-12 p-3 border">
            <div className="row">
              <div className="col-sm-6 border-right p-3">
                <h5 className="font-weight-bold pb-4">
                  <i className="fa fa-user" aria-hidden="true" /> Already
                  Registered ?
                </h5>
                <form
                  name="myform"
                  id="myform"
                  method="post"
                  action
                  encType="multipart/form-data"
                >
                  <div className="form-group">
                    <label htmlFor="email">Enter Your Email Address</label>
                    <input
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      defaultValue
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                    <span className="err" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Enter Your Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="pwd"
                      name="password"
                      required
                    />
                    <span className="err" />
                    <p className="small">
                      <a
                        className="text-primary"
                        href
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Forgot Password ?
                      </a>
                    </p>
                  </div>
                  <div className="err" />
                  <button
                    type="submit"
                    name="login"
                    className="btn btn-warning font-weight-bold"
                  >
                    SIGN IN
                  </button>
                </form>
              </div>
              <div className="col-sm-6 p-3">
                <h5 className="font-weight-bold pb-4">
                  <i className="fa fa-user-plus" aria-hidden="true" /> New
                  Merchant? Register Now
                </h5>
                <form method="post" action encType="multipart/form-data">
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label form="company">Company Name</label>
                    </div>
                    <div className="col-md-12">
                      <input
                        onkeyup="ac_merchant_list(0)"
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        name="company_name"
                        id="company_name"
                        placeholder="Company Name"
                        required
                      />
                      <input
                        type="hidden"
                        name="merchant_id"
                        id="merchant__id"
                      />
                      {/* <input autocomplete="off" type="text" class="form-control" name="company_name" id="company_name" placeholder="Company Name" value="" readonly required>
                              <input type="hidden" name="merchant_id" id="merchant__id" value="" /> */}
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label form="company">Display Name</label>
                    </div>
                    <div className="col-md-12">
                      {/* <input type="text" class="form-control" value="" name="" id="company_name" disabled>
                                  <input type="hidden" value="" name="company_name" id="company_name" />
                                  <input type="hidden" value="" name="merchant_id" id="merchant__id" /> */}
                      <input
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        name="display_name"
                        id="display_name"
                        placeholder="Company Display Name"
                        required
                      />
                      {/* <input type="hidden" name="merchant_id" id="merchant__id" /> */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="lname">Select Industry</label>
                        <select
                          type="text"
                          className="form-control"
                          name="category_name"
                          id="category_name"
                          onchange="getlist();"
                        >
                          <option value={0}>Select Industry</option>
                          <option value={4}>Restaurant &amp; Cafe</option>
                          <option value={8}>Textile Garments </option>
                          <option value={27}>
                            Automotive &amp; Engineering Industry
                          </option>
                          <option value={37}>
                            Travel and Tourism &amp; commercial agency
                          </option>
                          <option value={45}>
                            Hardware, Aluminium, Glass, Metals Suppliers &amp;
                            Fixings, manufacturer
                          </option>
                          <option value={59}>Technology &amp; Computing</option>
                          <option value={66}>Electronics</option>
                          <option value={119}>
                            Animals &amp; Pet Supplies
                          </option>
                          <option value={122}>Toys &amp; Games</option>
                          <option value={123}>
                            Building Materials &amp; Equipment &amp; Industrial
                            Materials Supplies
                          </option>
                          <option value={126}>
                            Food, Beverages &amp; Tobacco
                          </option>
                          <option value={362}>Cafe &amp; Beverage </option>
                          <option value={485}>Management Occupations</option>
                          <option value={486}>
                            Business and Financial Operations Occupations
                          </option>
                          <option value={487}>
                            Computer and Mathematical Occupations
                          </option>
                          <option value={488}>
                            Architecture and Engineering Occupations
                          </option>
                          <option value={489}>
                            Drafters, Engineering Technicians, and Mapping
                            Technicians
                          </option>
                          <option value={490}>
                            Life, Physical, and Social Science Occupations
                          </option>
                          <option value={491}>
                            Community and Social Service Occupations
                          </option>
                          <option value={492}>Legal Occupations</option>
                          <option value={493}>
                            Education, Training, and Library Occupations
                          </option>
                          <option value={494}>
                            Arts, Design, Entertainment, Sports, and Media
                            Occupations
                          </option>
                          <option value={495}>
                            Healthcare Practitioners and Technical Occupations
                          </option>
                          <option value={496}>
                            Healthcare Support Occupations
                          </option>
                          <option value={497}>
                            Protective Service Occupations
                          </option>
                          <option value={498}>
                            Food Preparation and Serving Related Occupations
                          </option>
                          <option value={499}>
                            Building and Grounds Cleaning and Maintenance
                            Occupations
                          </option>
                          <option value={500}>
                            Personal Care and Service Occupations
                          </option>
                          <option value={501}>
                            Sales and Related Occupations
                          </option>
                          <option value={502}>
                            Office and Administrative Support Occupations
                          </option>
                          <option value={503}>
                            Farming, Fishing, and Forestry Occupations
                          </option>
                          <option value={504}>
                            Construction and Extraction Occupations
                          </option>
                          <option value={505}>
                            Installation, Maintenance, and Repair Occupations
                          </option>
                          <option value={506}>Production Occupations</option>
                          <option value={507}>
                            Transportation and Material Moving Occupations
                          </option>
                          <option value={508}>
                            Military Specific Occupations
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="lname" id="dfdf">
                          Select Category
                        </label>
                        <div id>
                          <select
                            className="custom-select"
                            name="scategory"
                            id="subcategory"
                          >
                            <option>Select Category</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="name">First Name</label>
                        <input
                          autoComplete="name"
                          type="text"
                          className="form-control"
                          id="fname"
                          name="fname"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="lname">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lname"
                          name="lname"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="remail"
                          name="email"
                          onkeyup="validate_email(this.value);"
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                          required
                        />
                        <span
                          style={{ color: "red" }}
                          id="email_validation_notification"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input
                          type="password"
                          className="form-control"
                          id="pwd"
                          name="password"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select
                          type="text"
                          className="form-control"
                          name="country_name"
                          id="country_name"
                          onchange="statelist(); phonecode1(this.value);"
                        >
                          <option value>Select Country</option>
                          <option value={1}>Afghanistan</option>
                          <option value={2}>Albania</option>
                          <option value={3}>Algeria</option>
                          <option value={4}>American Samoa</option>
                          <option value={5}>Andorra</option>
                          <option value={6}>Angola</option>
                          <option value={7}>Anguilla</option>
                          <option value={8}>Antarctica</option>
                          <option value={9}>Antigua And Barbuda</option>
                          <option value={10}>Argentina</option>
                          <option value={11}>Armenia</option>
                          <option value={12}>Aruba</option>
                          <option value={13}>Australia</option>
                          <option value={14}>Austria</option>
                          <option value={15}>Azerbaijan</option>
                          <option value={16}>Bahamas The</option>
                          <option value={17}>Bahrain</option>
                          <option value={18}>Bangladesh</option>
                          <option value={19}>Barbados</option>
                          <option value={20}>Belarus</option>
                          <option value={21}>Belgium</option>
                          <option value={22}>Belize</option>
                          <option value={23}>Benin</option>
                          <option value={24}>Bermuda</option>
                          <option value={25}>Bhutan</option>
                          <option value={26}>Bolivia</option>
                          <option value={27}>Bosnia and Herzegovina</option>
                          <option value={28}>Botswana</option>
                          <option value={29}>Bouvet Island</option>
                          <option value={30}>Brazil</option>
                          <option value={31}>
                            British Indian Ocean Territory
                          </option>
                          <option value={32}>Brunei</option>
                          <option value={33}>Bulgaria</option>
                          <option value={34}>Burkina Faso</option>
                          <option value={35}>Burundi</option>
                          <option value={36}>Cambodia</option>
                          <option value={37}>Cameroon</option>
                          <option value={38}>Canada</option>
                          <option value={39}>Cape Verde</option>
                          <option value={40}>Cayman Islands</option>
                          <option value={41}>Central African Republic</option>
                          <option value={42}>Chad</option>
                          <option value={43}>Chile</option>
                          <option value={44}>China</option>
                          <option value={45}>Christmas Island</option>
                          <option value={46}>Cocos (Keeling) Islands</option>
                          <option value={47}>Colombia</option>
                          <option value={48}>Comoros</option>
                          <option value={49}>Congo</option>
                          <option value={50}>
                            Congo The Democratic Republic Of The
                          </option>
                          <option value={51}>Cook Islands</option>
                          <option value={52}>Costa Rica</option>
                          <option value={53}>
                            Cote D'Ivoire (Ivory Coast)
                          </option>
                          <option value={54}>Croatia (Hrvatska)</option>
                          <option value={55}>Cuba</option>
                          <option value={56}>Cyprus</option>
                          <option value={57}>Czech Republic</option>
                          <option value={58}>Denmark</option>
                          <option value={59}>Djibouti</option>
                          <option value={60}>Dominica</option>
                          <option value={61}>Dominican Republic</option>
                          <option value={62}>East Timor</option>
                          <option value={63}>Ecuador</option>
                          <option value={64}>Egypt</option>
                          <option value={65}>El Salvador</option>
                          <option value={66}>Equatorial Guinea</option>
                          <option value={67}>Eritrea</option>
                          <option value={68}>Estonia</option>
                          <option value={69}>Ethiopia</option>
                          <option value={70}>
                            External Territories of Australia
                          </option>
                          <option value={71}>Falkland Islands</option>
                          <option value={72}>Faroe Islands</option>
                          <option value={73}>Fiji Islands</option>
                          <option value={74}>Finland</option>
                          <option value={75}>France</option>
                          <option value={76}>French Guiana</option>
                          <option value={77}>French Polynesia</option>
                          <option value={78}>
                            French Southern Territories
                          </option>
                          <option value={79}>Gabon</option>
                          <option value={80}>Gambia The</option>
                          <option value={81}>Georgia</option>
                          <option value={82}>Germany</option>
                          <option value={83}>Ghana</option>
                          <option value={84}>Gibraltar</option>
                          <option value={85}>Greece</option>
                          <option value={86}>Greenland</option>
                          <option value={87}>Grenada</option>
                          <option value={88}>Guadeloupe</option>
                          <option value={89}>Guam</option>
                          <option value={90}>Guatemala</option>
                          <option value={91}>Guernsey and Alderney</option>
                          <option value={92}>Guinea</option>
                          <option value={93}>Guinea-Bissau</option>
                          <option value={94}>Guyana</option>
                          <option value={95}>Haiti</option>
                          <option value={96}>Heard and McDonald Islands</option>
                          <option value={97}>Honduras</option>
                          <option value={98}>Hong Kong S.A.R.</option>
                          <option value={99}>Hungary</option>
                          <option value={100}>Iceland</option>
                          <option value={101}>India</option>
                          <option value={102}>Indonesia</option>
                          <option value={103}>Iran</option>
                          <option value={104}>Iraq</option>
                          <option value={105}>Ireland</option>
                          <option value={106}>Israel</option>
                          <option value={107}>Italy</option>
                          <option value={108}>Jamaica</option>
                          <option value={109}>Japan</option>
                          <option value={110}>Jersey</option>
                          <option value={111}>Jordan</option>
                          <option value={112}>Kazakhstan</option>
                          <option value={113}>Kenya</option>
                          <option value={114}>Kiribati</option>
                          <option value={115}>Korea North</option>
                          <option value={116}>Korea South</option>
                          <option value={117}>Kuwait</option>
                          <option value={118}>Kyrgyzstan</option>
                          <option value={119}>Laos</option>
                          <option value={120}>Latvia</option>
                          <option value={121}>Lebanon</option>
                          <option value={122}>Lesotho</option>
                          <option value={123}>Liberia</option>
                          <option value={124}>Libya</option>
                          <option value={125}>Liechtenstein</option>
                          <option value={126}>Lithuania</option>
                          <option value={127}>Luxembourg</option>
                          <option value={128}>Macau S.A.R.</option>
                          <option value={129}>Macedonia</option>
                          <option value={130}>Madagascar</option>
                          <option value={131}>Malawi</option>
                          <option value={132}>Malaysia</option>
                          <option value={133}>Maldives</option>
                          <option value={134}>Mali</option>
                          <option value={135}>Malta</option>
                          <option value={136}>Man (Isle of)</option>
                          <option value={137}>Marshall Islands</option>
                          <option value={138}>Martinique</option>
                          <option value={139}>Mauritania</option>
                          <option value={140}>Mauritius</option>
                          <option value={141}>Mayotte</option>
                          <option value={142}>Mexico</option>
                          <option value={143}>Micronesia</option>
                          <option value={144}>Moldova</option>
                          <option value={145}>Monaco</option>
                          <option value={146}>Mongolia</option>
                          <option value={147}>Montserrat</option>
                          <option value={148}>Morocco</option>
                          <option value={149}>Mozambique</option>
                          <option value={150}>Myanmar</option>
                          <option value={151}>Namibia</option>
                          <option value={152}>Nauru</option>
                          <option value={153}>Nepal</option>
                          <option value={154}>Netherlands Antilles</option>
                          <option value={155}>Netherlands The</option>
                          <option value={156}>New Caledonia</option>
                          <option value={157}>New Zealand</option>
                          <option value={158}>Nicaragua</option>
                          <option value={159}>Niger</option>
                          <option value={160}>Nigeria</option>
                          <option value={161}>Niue</option>
                          <option value={162}>Norfolk Island</option>
                          <option value={163}>Northern Mariana Islands</option>
                          <option value={164}>Norway</option>
                          <option value={165}>Oman</option>
                          <option value={166}>Pakistan</option>
                          <option value={167}>Palau</option>
                          <option value={168}>
                            Palestinian Territory Occupied
                          </option>
                          <option value={169}>Panama</option>
                          <option value={170}>Papua new Guinea</option>
                          <option value={171}>Paraguay</option>
                          <option value={172}>Peru</option>
                          <option value={173}>Philippines</option>
                          <option value={174}>Pitcairn Island</option>
                          <option value={175}>Poland</option>
                          <option value={176}>Portugal</option>
                          <option value={177}>Puerto Rico</option>
                          <option value={178}>Qatar</option>
                          <option value={179}>Reunion</option>
                          <option value={180}>Romania</option>
                          <option value={181}>Russia</option>
                          <option value={182}>Rwanda</option>
                          <option value={183}>Saint Helena</option>
                          <option value={184}>Saint Kitts And Nevis</option>
                          <option value={185}>Saint Lucia</option>
                          <option value={186}>Saint Pierre and Miquelon</option>
                          <option value={187}>
                            Saint Vincent And The Grenadines
                          </option>
                          <option value={188}>Samoa</option>
                          <option value={189}>San Marino</option>
                          <option value={190}>Sao Tome and Principe</option>
                          <option value={191}>Saudi Arabia</option>
                          <option value={192}>Senegal</option>
                          <option value={193}>Serbia</option>
                          <option value={194}>Seychelles</option>
                          <option value={195}>Sierra Leone</option>
                          <option value={196}>Singapore</option>
                          <option value={197}>Slovakia</option>
                          <option value={198}>Slovenia</option>
                          <option value={199}>
                            Smaller Territories of the UK
                          </option>
                          <option value={200}>Solomon Islands</option>
                          <option value={201}>Somalia</option>
                          <option value={202}>South Africa</option>
                          <option value={203}>South Georgia</option>
                          <option value={204}>South Sudan</option>
                          <option value={205}>Spain</option>
                          <option value={206}>Sri Lanka</option>
                          <option value={207}>Sudan</option>
                          <option value={208}>Suriname</option>
                          <option value={209}>
                            Svalbard And Jan Mayen Islands
                          </option>
                          <option value={210}>Swaziland</option>
                          <option value={211}>Sweden</option>
                          <option value={212}>Switzerland</option>
                          <option value={213}>Syria</option>
                          <option value={214}>Taiwan</option>
                          <option value={215}>Tajikistan</option>
                          <option value={216}>Tanzania</option>
                          <option value={217}>Thailand</option>
                          <option value={218}>Togo</option>
                          <option value={219}>Tokelau</option>
                          <option value={220}>Tonga</option>
                          <option value={221}>Trinidad And Tobago</option>
                          <option value={222}>Tunisia</option>
                          <option value={223}>Turkey</option>
                          <option value={224}>Turkmenistan</option>
                          <option value={225}>Turks And Caicos Islands</option>
                          <option value={226}>Tuvalu</option>
                          <option value={227}>Uganda</option>
                          <option value={228}>Ukraine</option>
                          <option value={229}>United Arab Emirates</option>
                          <option value={230}>United Kingdom</option>
                          <option value={231}>United States</option>
                          <option value={232}>
                            United States Minor Outlying Islands
                          </option>
                          <option value={233}>Uruguay</option>
                          <option value={234}>Uzbekistan</option>
                          <option value={235}>Vanuatu</option>
                          <option value={236}>
                            Vatican City State (Holy See)
                          </option>
                          <option value={237}>Venezuela</option>
                          <option value={238}>Vietnam</option>
                          <option value={239}>Virgin Islands (British)</option>
                          <option value={240}>Virgin Islands (US)</option>
                          <option value={241}>Wallis And Futuna Islands</option>
                          <option value={242}>Western Sahara</option>
                          <option value={243}>Yemen</option>
                          <option value={244}>Yugoslavia</option>
                          <option value={245}>Zambia</option>
                          <option value={246}>Zimbabwe</option>
                          <option value={247}>Tamilnadu</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="stat" id="dd">
                          State
                        </label>
                        <div id>
                          <select
                            className="custom-select state_name"
                            name="state_name"
                            id="sid"
                            onchange="citylist();"
                          >
                            <option value>Select State</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="city">City</label>
                        <div id="city">
                          <select
                            className="custom-select"
                            name="city_name"
                            id="city1"
                          >
                            <option value>Select City</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="contact">Location</label>
                        {/*  <input type="text" onkeyup="ac_location_list();" class="form-control ac_location" id="location" name="location_name" required>
                                  <input type="text" style="height:0.5px;width:0.5px;border:none;top:62px;left: 47px;position:absolute;" class="location__id" name="location" id="location__id" value="" required> */}
                        <select
                          className="custom-select"
                          name="location"
                          id="location"
                        >
                          <option value>Select Location</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="contact">Contact Number</label>
                        <div className="row">
                          <div className="col-sm-4">
                            <input
                              type="text"
                              className="form-control pcode"
                              name="phonecode"
                              required
                            />
                          </div>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              name="phone"
                              onkeyup="validate_number(this.value);"
                              required
                            />
                            <span
                              style={{ color: "red" }}
                              id="number_validation_notification"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="street">Landline Number</label>
                        <div className="row">
                          <div className="col-sm-4">
                            <input
                              type="text"
                              className="form-control pcode"
                              name="phonecode"
                              required
                            />
                          </div>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              id="landline"
                              name="landline"
                              onkeyup="validate_landline(this.value);"
                              required
                            />
                            <span
                              style={{ color: "red" }}
                              id="landline_validation_notification"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="street">Address</label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    name="register_now"
                    className="btn btn-warning font-weight-bold"
                  >
                    REGISTER NOW
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
