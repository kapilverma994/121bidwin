import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const RegisterUser = () => {
  return (
    <>
      <Header />
      <Container style={{ minHeight: "550px" }}>
        <div className="border p-5 mt-5 mb-5">
          <div className="text-center ">
            <a
              className="bg-danger p-3"
              data-toggle="pill"
              href="#RegisterUser"
            >
              <i className="fa fa-user mr-2 text-white" aria-hidden="true" />{" "}
              <span className="text-white font-weight-bold">User Login</span>
            </a>
          </div>

          <form className="mt-4">
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="form-group">
                  <label htmlFor="">Select Country</label>
                  <select
                    className="form-control"
                    name="country"
                    onchange="get_state_list(this.value, this);"
                    id="register_country"
                  >
                    <option selected value>
                      Select Country
                    </option>
                    <option data-countrycode={93} value={1}>
                      Afghanistan
                    </option>
                    <option data-countrycode={355} value={2}>
                      Albania
                    </option>
                    <option data-countrycode={213} value={3}>
                      Algeria
                    </option>
                    <option data-countrycode={1684} value={4}>
                      American Samoa
                    </option>
                    <option data-countrycode={376} value={5}>
                      Andorra
                    </option>
                    <option data-countrycode={244} value={6}>
                      Angola
                    </option>
                    <option data-countrycode={1264} value={7}>
                      Anguilla
                    </option>
                    <option data-countrycode={0} value={8}>
                      Antarctica
                    </option>
                    <option data-countrycode={1268} value={9}>
                      Antigua And Barbuda
                    </option>
                    <option data-countrycode={54} value={10}>
                      Argentina
                    </option>
                    <option data-countrycode={374} value={11}>
                      Armenia
                    </option>
                    <option data-countrycode={297} value={12}>
                      Aruba
                    </option>
                    <option data-countrycode={61} value={13}>
                      Australia
                    </option>
                    <option data-countrycode={43} value={14}>
                      Austria
                    </option>
                    <option data-countrycode={994} value={15}>
                      Azerbaijan
                    </option>
                    <option data-countrycode={1242} value={16}>
                      Bahamas The
                    </option>
                    <option data-countrycode={973} value={17}>
                      Bahrain
                    </option>
                    <option data-countrycode={880} value={18}>
                      Bangladesh
                    </option>
                    <option data-countrycode={1246} value={19}>
                      Barbados
                    </option>
                    <option data-countrycode={375} value={20}>
                      Belarus
                    </option>
                    <option data-countrycode={32} value={21}>
                      Belgium
                    </option>
                    <option data-countrycode={501} value={22}>
                      Belize
                    </option>
                    <option data-countrycode={229} value={23}>
                      Benin
                    </option>
                    <option data-countrycode={1441} value={24}>
                      Bermuda
                    </option>
                    <option data-countrycode={975} value={25}>
                      Bhutan
                    </option>
                    <option data-countrycode={591} value={26}>
                      Bolivia
                    </option>
                    <option data-countrycode={387} value={27}>
                      Bosnia and Herzegovina
                    </option>
                    <option data-countrycode={267} value={28}>
                      Botswana
                    </option>
                    <option data-countrycode={0} value={29}>
                      Bouvet Island
                    </option>
                    <option data-countrycode={55} value={30}>
                      Brazil
                    </option>
                    <option data-countrycode={246} value={31}>
                      British Indian Ocean Territory
                    </option>
                    <option data-countrycode={673} value={32}>
                      Brunei
                    </option>
                    <option data-countrycode={359} value={33}>
                      Bulgaria
                    </option>
                    <option data-countrycode={226} value={34}>
                      Burkina Faso
                    </option>
                    <option data-countrycode={257} value={35}>
                      Burundi
                    </option>
                    <option data-countrycode={855} value={36}>
                      Cambodia
                    </option>
                    <option data-countrycode={237} value={37}>
                      Cameroon
                    </option>
                    <option data-countrycode={1} value={38}>
                      Canada
                    </option>
                    <option data-countrycode={238} value={39}>
                      Cape Verde
                    </option>
                    <option data-countrycode={1345} value={40}>
                      Cayman Islands
                    </option>
                    <option data-countrycode={236} value={41}>
                      Central African Republic
                    </option>
                    <option data-countrycode={235} value={42}>
                      Chad
                    </option>
                    <option data-countrycode={56} value={43}>
                      Chile
                    </option>
                    <option data-countrycode={86} value={44}>
                      China
                    </option>
                    <option data-countrycode={61} value={45}>
                      Christmas Island
                    </option>
                    <option data-countrycode={672} value={46}>
                      Cocos (Keeling) Islands
                    </option>
                    <option data-countrycode={57} value={47}>
                      Colombia
                    </option>
                    <option data-countrycode={269} value={48}>
                      Comoros
                    </option>
                    <option data-countrycode={242} value={49}>
                      Congo
                    </option>
                    <option data-countrycode={242} value={50}>
                      Congo The Democratic Republic Of The
                    </option>
                    <option data-countrycode={682} value={51}>
                      Cook Islands
                    </option>
                    <option data-countrycode={506} value={52}>
                      Costa Rica
                    </option>
                    <option data-countrycode={225} value={53}>
                      Cote D'Ivoire (Ivory Coast)
                    </option>
                    <option data-countrycode={385} value={54}>
                      Croatia (Hrvatska)
                    </option>
                    <option data-countrycode={53} value={55}>
                      Cuba
                    </option>
                    <option data-countrycode={357} value={56}>
                      Cyprus
                    </option>
                    <option data-countrycode={420} value={57}>
                      Czech Republic
                    </option>
                    <option data-countrycode={45} value={58}>
                      Denmark
                    </option>
                    <option data-countrycode={253} value={59}>
                      Djibouti
                    </option>
                    <option data-countrycode={1767} value={60}>
                      Dominica
                    </option>
                    <option data-countrycode={1809} value={61}>
                      Dominican Republic
                    </option>
                    <option data-countrycode={670} value={62}>
                      East Timor
                    </option>
                    <option data-countrycode={593} value={63}>
                      Ecuador
                    </option>
                    <option data-countrycode={20} value={64}>
                      Egypt
                    </option>
                    <option data-countrycode={503} value={65}>
                      El Salvador
                    </option>
                    <option data-countrycode={240} value={66}>
                      Equatorial Guinea
                    </option>
                    <option data-countrycode={291} value={67}>
                      Eritrea
                    </option>
                    <option data-countrycode={372} value={68}>
                      Estonia
                    </option>
                    <option data-countrycode={251} value={69}>
                      Ethiopia
                    </option>
                    <option data-countrycode={61} value={70}>
                      External Territories of Australia
                    </option>
                    <option data-countrycode={500} value={71}>
                      Falkland Islands
                    </option>
                    <option data-countrycode={298} value={72}>
                      Faroe Islands
                    </option>
                    <option data-countrycode={679} value={73}>
                      Fiji Islands
                    </option>
                    <option data-countrycode={358} value={74}>
                      Finland
                    </option>
                    <option data-countrycode={33} value={75}>
                      France
                    </option>
                    <option data-countrycode={594} value={76}>
                      French Guiana
                    </option>
                    <option data-countrycode={689} value={77}>
                      French Polynesia
                    </option>
                    <option data-countrycode={0} value={78}>
                      French Southern Territories
                    </option>
                    <option data-countrycode={241} value={79}>
                      Gabon
                    </option>
                    <option data-countrycode={220} value={80}>
                      Gambia The
                    </option>
                    <option data-countrycode={995} value={81}>
                      Georgia
                    </option>
                    <option data-countrycode={49} value={82}>
                      Germany
                    </option>
                    <option data-countrycode={233} value={83}>
                      Ghana
                    </option>
                    <option data-countrycode={350} value={84}>
                      Gibraltar
                    </option>
                    <option data-countrycode={30} value={85}>
                      Greece
                    </option>
                    <option data-countrycode={299} value={86}>
                      Greenland
                    </option>
                    <option data-countrycode={1473} value={87}>
                      Grenada
                    </option>
                    <option data-countrycode={590} value={88}>
                      Guadeloupe
                    </option>
                    <option data-countrycode={1671} value={89}>
                      Guam
                    </option>
                    <option data-countrycode={502} value={90}>
                      Guatemala
                    </option>
                    <option data-countrycode={44} value={91}>
                      Guernsey and Alderney
                    </option>
                    <option data-countrycode={224} value={92}>
                      Guinea
                    </option>
                    <option data-countrycode={245} value={93}>
                      Guinea-Bissau
                    </option>
                    <option data-countrycode={592} value={94}>
                      Guyana
                    </option>
                    <option data-countrycode={509} value={95}>
                      Haiti
                    </option>
                    <option data-countrycode={0} value={96}>
                      Heard and McDonald Islands
                    </option>
                    <option data-countrycode={504} value={97}>
                      Honduras
                    </option>
                    <option data-countrycode={852} value={98}>
                      Hong Kong S.A.R.
                    </option>
                    <option data-countrycode={36} value={99}>
                      Hungary
                    </option>
                    <option data-countrycode={354} value={100}>
                      Iceland
                    </option>
                    <option data-countrycode={91} value={101}>
                      India
                    </option>
                    <option data-countrycode={62} value={102}>
                      Indonesia
                    </option>
                    <option data-countrycode={98} value={103}>
                      Iran
                    </option>
                    <option data-countrycode={964} value={104}>
                      Iraq
                    </option>
                    <option data-countrycode={353} value={105}>
                      Ireland
                    </option>
                    <option data-countrycode={972} value={106}>
                      Israel
                    </option>
                    <option data-countrycode={39} value={107}>
                      Italy
                    </option>
                    <option data-countrycode={1876} value={108}>
                      Jamaica
                    </option>
                    <option data-countrycode={81} value={109}>
                      Japan
                    </option>
                    <option data-countrycode={44} value={110}>
                      Jersey
                    </option>
                    <option data-countrycode={962} value={111}>
                      Jordan
                    </option>
                    <option data-countrycode={7} value={112}>
                      Kazakhstan
                    </option>
                    <option data-countrycode={254} value={113}>
                      Kenya
                    </option>
                    <option data-countrycode={686} value={114}>
                      Kiribati
                    </option>
                    <option data-countrycode={850} value={115}>
                      Korea North
                    </option>
                    <option data-countrycode={82} value={116}>
                      Korea South
                    </option>
                    <option data-countrycode={965} value={117}>
                      Kuwait
                    </option>
                    <option data-countrycode={996} value={118}>
                      Kyrgyzstan
                    </option>
                    <option data-countrycode={856} value={119}>
                      Laos
                    </option>
                    <option data-countrycode={371} value={120}>
                      Latvia
                    </option>
                    <option data-countrycode={961} value={121}>
                      Lebanon
                    </option>
                    <option data-countrycode={266} value={122}>
                      Lesotho
                    </option>
                    <option data-countrycode={231} value={123}>
                      Liberia
                    </option>
                    <option data-countrycode={218} value={124}>
                      Libya
                    </option>
                    <option data-countrycode={423} value={125}>
                      Liechtenstein
                    </option>
                    <option data-countrycode={370} value={126}>
                      Lithuania
                    </option>
                    <option data-countrycode={352} value={127}>
                      Luxembourg
                    </option>
                    <option data-countrycode={853} value={128}>
                      Macau S.A.R.
                    </option>
                    <option data-countrycode={389} value={129}>
                      Macedonia
                    </option>
                    <option data-countrycode={261} value={130}>
                      Madagascar
                    </option>
                    <option data-countrycode={265} value={131}>
                      Malawi
                    </option>
                    <option data-countrycode={60} value={132}>
                      Malaysia
                    </option>
                    <option data-countrycode={960} value={133}>
                      Maldives
                    </option>
                    <option data-countrycode={223} value={134}>
                      Mali
                    </option>
                    <option data-countrycode={356} value={135}>
                      Malta
                    </option>
                    <option data-countrycode={44} value={136}>
                      Man (Isle of)
                    </option>
                    <option data-countrycode={692} value={137}>
                      Marshall Islands
                    </option>
                    <option data-countrycode={596} value={138}>
                      Martinique
                    </option>
                    <option data-countrycode={222} value={139}>
                      Mauritania
                    </option>
                    <option data-countrycode={230} value={140}>
                      Mauritius
                    </option>
                    <option data-countrycode={269} value={141}>
                      Mayotte
                    </option>
                    <option data-countrycode={52} value={142}>
                      Mexico
                    </option>
                    <option data-countrycode={691} value={143}>
                      Micronesia
                    </option>
                    <option data-countrycode={373} value={144}>
                      Moldova
                    </option>
                    <option data-countrycode={377} value={145}>
                      Monaco
                    </option>
                    <option data-countrycode={976} value={146}>
                      Mongolia
                    </option>
                    <option data-countrycode={1664} value={147}>
                      Montserrat
                    </option>
                    <option data-countrycode={212} value={148}>
                      Morocco
                    </option>
                    <option data-countrycode={258} value={149}>
                      Mozambique
                    </option>
                    <option data-countrycode={95} value={150}>
                      Myanmar
                    </option>
                    <option data-countrycode={264} value={151}>
                      Namibia
                    </option>
                    <option data-countrycode={674} value={152}>
                      Nauru
                    </option>
                    <option data-countrycode={977} value={153}>
                      Nepal
                    </option>
                    <option data-countrycode={599} value={154}>
                      Netherlands Antilles
                    </option>
                    <option data-countrycode={31} value={155}>
                      Netherlands The
                    </option>
                    <option data-countrycode={687} value={156}>
                      New Caledonia
                    </option>
                    <option data-countrycode={64} value={157}>
                      New Zealand
                    </option>
                    <option data-countrycode={505} value={158}>
                      Nicaragua
                    </option>
                    <option data-countrycode={227} value={159}>
                      Niger
                    </option>
                    <option data-countrycode={234} value={160}>
                      Nigeria
                    </option>
                    <option data-countrycode={683} value={161}>
                      Niue
                    </option>
                    <option data-countrycode={672} value={162}>
                      Norfolk Island
                    </option>
                    <option data-countrycode={1670} value={163}>
                      Northern Mariana Islands
                    </option>
                    <option data-countrycode={47} value={164}>
                      Norway
                    </option>
                    <option data-countrycode={968} value={165}>
                      Oman
                    </option>
                    <option data-countrycode={92} value={166}>
                      Pakistan
                    </option>
                    <option data-countrycode={680} value={167}>
                      Palau
                    </option>
                    <option data-countrycode={970} value={168}>
                      Palestinian Territory Occupied
                    </option>
                    <option data-countrycode={507} value={169}>
                      Panama
                    </option>
                    <option data-countrycode={675} value={170}>
                      Papua new Guinea
                    </option>
                    <option data-countrycode={595} value={171}>
                      Paraguay
                    </option>
                    <option data-countrycode={51} value={172}>
                      Peru
                    </option>
                    <option data-countrycode={63} value={173}>
                      Philippines
                    </option>
                    <option data-countrycode={0} value={174}>
                      Pitcairn Island
                    </option>
                    <option data-countrycode={48} value={175}>
                      Poland
                    </option>
                    <option data-countrycode={351} value={176}>
                      Portugal
                    </option>
                    <option data-countrycode={1787} value={177}>
                      Puerto Rico
                    </option>
                    <option data-countrycode={974} value={178}>
                      Qatar
                    </option>
                    <option data-countrycode={262} value={179}>
                      Reunion
                    </option>
                    <option data-countrycode={40} value={180}>
                      Romania
                    </option>
                    <option data-countrycode={70} value={181}>
                      Russia
                    </option>
                    <option data-countrycode={250} value={182}>
                      Rwanda
                    </option>
                    <option data-countrycode={290} value={183}>
                      Saint Helena
                    </option>
                    <option data-countrycode={1869} value={184}>
                      Saint Kitts And Nevis
                    </option>
                    <option data-countrycode={1758} value={185}>
                      Saint Lucia
                    </option>
                    <option data-countrycode={508} value={186}>
                      Saint Pierre and Miquelon
                    </option>
                    <option data-countrycode={1784} value={187}>
                      Saint Vincent And The Grenadines
                    </option>
                    <option data-countrycode={684} value={188}>
                      Samoa
                    </option>
                    <option data-countrycode={378} value={189}>
                      San Marino
                    </option>
                    <option data-countrycode={239} value={190}>
                      Sao Tome and Principe
                    </option>
                    <option data-countrycode={966} value={191}>
                      Saudi Arabia
                    </option>
                    <option data-countrycode={221} value={192}>
                      Senegal
                    </option>
                    <option data-countrycode={381} value={193}>
                      Serbia
                    </option>
                    <option data-countrycode={248} value={194}>
                      Seychelles
                    </option>
                    <option data-countrycode={232} value={195}>
                      Sierra Leone
                    </option>
                    <option data-countrycode={65} value={196}>
                      Singapore
                    </option>
                    <option data-countrycode={421} value={197}>
                      Slovakia
                    </option>
                    <option data-countrycode={386} value={198}>
                      Slovenia
                    </option>
                    <option data-countrycode={44} value={199}>
                      Smaller Territories of the UK
                    </option>
                    <option data-countrycode={677} value={200}>
                      Solomon Islands
                    </option>
                    <option data-countrycode={252} value={201}>
                      Somalia
                    </option>
                    <option data-countrycode={27} value={202}>
                      South Africa
                    </option>
                    <option data-countrycode={0} value={203}>
                      South Georgia
                    </option>
                    <option data-countrycode={211} value={204}>
                      South Sudan
                    </option>
                    <option data-countrycode={34} value={205}>
                      Spain
                    </option>
                    <option data-countrycode={94} value={206}>
                      Sri Lanka
                    </option>
                    <option data-countrycode={249} value={207}>
                      Sudan
                    </option>
                    <option data-countrycode={597} value={208}>
                      Suriname
                    </option>
                    <option data-countrycode={47} value={209}>
                      Svalbard And Jan Mayen Islands
                    </option>
                    <option data-countrycode={268} value={210}>
                      Swaziland
                    </option>
                    <option data-countrycode={46} value={211}>
                      Sweden
                    </option>
                    <option data-countrycode={41} value={212}>
                      Switzerland
                    </option>
                    <option data-countrycode={963} value={213}>
                      Syria
                    </option>
                    <option data-countrycode={886} value={214}>
                      Taiwan
                    </option>
                    <option data-countrycode={992} value={215}>
                      Tajikistan
                    </option>
                    <option data-countrycode={0} value={247}>
                      Tamilnadu
                    </option>
                    <option data-countrycode={255} value={216}>
                      Tanzania
                    </option>
                    <option data-countrycode={66} value={217}>
                      Thailand
                    </option>
                    <option data-countrycode={228} value={218}>
                      Togo
                    </option>
                    <option data-countrycode={690} value={219}>
                      Tokelau
                    </option>
                    <option data-countrycode={676} value={220}>
                      Tonga
                    </option>
                    <option data-countrycode={1868} value={221}>
                      Trinidad And Tobago
                    </option>
                    <option data-countrycode={216} value={222}>
                      Tunisia
                    </option>
                    <option data-countrycode={90} value={223}>
                      Turkey
                    </option>
                    <option data-countrycode={7370} value={224}>
                      Turkmenistan
                    </option>
                    <option data-countrycode={1649} value={225}>
                      Turks And Caicos Islands
                    </option>
                    <option data-countrycode={688} value={226}>
                      Tuvalu
                    </option>
                    <option data-countrycode={256} value={227}>
                      Uganda
                    </option>
                    <option data-countrycode={380} value={228}>
                      Ukraine
                    </option>
                    <option data-countrycode={971} value={229}>
                      United Arab Emirates
                    </option>
                    <option data-countrycode={44} value={230}>
                      United Kingdom
                    </option>
                    <option data-countrycode={1} value={231}>
                      United States
                    </option>
                    <option data-countrycode={1} value={232}>
                      United States Minor Outlying Islands
                    </option>
                    <option data-countrycode={598} value={233}>
                      Uruguay
                    </option>
                    <option data-countrycode={998} value={234}>
                      Uzbekistan
                    </option>
                    <option data-countrycode={678} value={235}>
                      Vanuatu
                    </option>
                    <option data-countrycode={39} value={236}>
                      Vatican City State (Holy See)
                    </option>
                    <option data-countrycode={58} value={237}>
                      Venezuela
                    </option>
                    <option data-countrycode={84} value={238}>
                      Vietnam
                    </option>
                    <option data-countrycode={1284} value={239}>
                      Virgin Islands (British)
                    </option>
                    <option data-countrycode={1340} value={240}>
                      Virgin Islands (US)
                    </option>
                    <option data-countrycode={681} value={241}>
                      Wallis And Futuna Islands
                    </option>
                    <option data-countrycode={212} value={242}>
                      Western Sahara
                    </option>
                    <option data-countrycode={967} value={243}>
                      Yemen
                    </option>
                    <option data-countrycode={38} value={244}>
                      Yugoslavia
                    </option>
                    <option data-countrycode={260} value={245}>
                      Zambia
                    </option>
                    <option data-countrycode={263} value={246}>
                      Zimbabwe
                    </option>
                  </select>
                </div>
              </Col>
              <Col md={4}>
                <div className="form-group">
                  <label htmlFor="">Select State</label>
                  <select name="" id="" className="form-control">
                    <option data-countrycode={263} value={246}>
                      Zimbabwe
                    </option>
                  </select>
                </div>
              </Col>
              <Col md={4}>
                <div className="form-group">
                  <label htmlFor="">Select City</label>
                  <select name="" id="" className="form-control">
                    <option data-countrycode={263} value={246}>
                      Zimbabwe
                    </option>
                  </select>
                </div>
              </Col>
            </Row>
            <div className="form-group">
              <label htmlFor="">Mobile Number</label>
              <div className="row">
                <div className="col-md-2">
                  <input
                    type="text"
                    className="form-control font-weight-bold"
                    value={"+91"}
                  />
                </div>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control font-weight-bold"
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <div className="mt-2">
              <p>
                Already Register ?{" "}
                <Link to="user-login" className="font-weight-bold">
                  Login
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

export default RegisterUser;
