import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../privacypolicy.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function Policy() {
  return (
    <>
      <Header />
      <div>
        <>
          <div className="main-content container-fluid">
            <Row>
              <section id="sidemenutb">
                <div className="sidemenu">
                  <div className="row">
                    <nav className="col-sm-2 col-4 p-0" id="myScrollspy">
                      <ul className="nav nav-pills flex-column nav1">
                        <li className="nav-item">
                          {/*<a class="" href=""><h3 class="border-bottom pb-2"><i class="fas fa-tachometer-alt"></i> HOT LINKS</h3></a>*/}
                          <a className href>
                            <h5 className="border-bottom pb-2 text-center">
                              {" "}
                              HOT LINKS
                            </h5>
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                          >
                            <i className="fa fa-life-ring" /> Terms &amp;
                            Conditions
                          </a>
                          <div className="dropdown-menu dropdown1menu">
                            <a className="dropdown-item" href="#overview">
                              OVERVIEW
                            </a>
                            <a
                              className="dropdown-item"
                              href="#general-conditions"
                            >
                              GENERAL CONDITIONS
                            </a>
                            <a className="dropdown-item" href="#online-terms">
                              {" "}
                              ONLINE TERMS
                            </a>
                            <a
                              className="dropdown-item"
                              href="#accuracy-completeness-and-timeliness-of-information"
                            >
                              ACCURACY, COMPLETENESS AND TIMELINESS OF
                              INFORMATION
                            </a>
                            <a
                              className="dropdown-item"
                              href="#modifications-to-the-service-and-prices"
                            >
                              MODIFICATIONS TO THE SERVICE AND PRICES
                            </a>
                            <a
                              className="dropdown-item"
                              href="#products-or-services-if-applicable"
                            >
                              PRODUCTS OR SERVICES (if applicable)
                            </a>
                            <a
                              className="dropdown-item"
                              href="#accuracy-of-billing-and-account-information"
                            >
                              ACCURACY OF BILLING AND ACCOUNT INFORMATION
                            </a>
                            <a className="dropdown-item" href="#optional-tools">
                              OPTIONAL TOOLS
                            </a>
                            <a
                              className="dropdown-item"
                              href="#third-party-links"
                            >
                              THIRD-PARTY LINKS
                            </a>
                            <a
                              className="dropdown-item"
                              href="#user-comments-feedback-and-other-submissions"
                            >
                              USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS
                            </a>
                            <a
                              className="dropdown-item"
                              href="#personal-information"
                            >
                              PERSONAL INFORMATION
                            </a>
                            <a
                              className="dropdown-item"
                              href="#errors-inaccuracies-and-omissions"
                            >
                              ERRORS, INACCURACIES AND OMISSIONS
                            </a>
                            <a
                              className="dropdown-item"
                              href="#prohibited-uses"
                            >
                              PROHIBITED USES
                            </a>
                            <a
                              className="dropdown-item"
                              href="#disclaimer-of-warranties-limitation-of-liability"
                            >
                              DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
                            </a>
                            <a
                              className="dropdown-item"
                              href="#indemnification"
                            >
                              INDEMNIFICATION
                            </a>
                            <a className="dropdown-item" href="#severability">
                              SEVERABILITY
                            </a>
                            <a className="dropdown-item" href="#termination">
                              TERMINATION
                            </a>
                            <a
                              className="dropdown-item"
                              href="#entire-agreement"
                            >
                              ENTIRE AGREEMENT
                            </a>
                            <a className="dropdown-item" href="#governing-law">
                              GOVERNING LAW
                            </a>
                            <a
                              className="dropdown-item"
                              href="#changes-to-terms-of-service"
                            >
                              CHANGES TO TERMS OF SERVICE
                            </a>
                            <a
                              className="dropdown-item"
                              href="#contact-information"
                            >
                              CONTACT INFORMATION
                            </a>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                          >
                            <i className="fa fa-life-ring" /> Privacy Policy
                          </a>
                          <div className="dropdown-menu dropdown1menu">
                            <a className="dropdown-item" href="#introduction">
                              INTRODUCTION
                            </a>
                            <a
                              className="dropdown-item"
                              href="#personal-information-we-collect"
                            >
                              PERSONAL INFORMATION WE COLLECT
                            </a>
                            <a
                              className="dropdown-item"
                              href="#how-do-we-use-your-personal-information"
                            >
                              HOW DO WE USE YOUR PERSONAL INFORMATION?
                            </a>
                            <a
                              className="dropdown-item"
                              href="#sharing-your-personal-information"
                            >
                              SHARING YOUR PERSONAL INFORMATION
                            </a>
                            <a
                              className="dropdown-item"
                              href="#behavioural-advertising"
                            >
                              BEHAVIOURAL ADVERTISING
                            </a>
                            <a className="dropdown-item" href="#do-not-track">
                              DO NOT TRACK
                            </a>
                            <a className="dropdown-item" href="#your-rights">
                              YOUR RIGHTS
                            </a>
                            <a className="dropdown-item" href="#data-retention">
                              DATA RETENTION
                            </a>
                            <a className="dropdown-item" href="#changes">
                              CHANGES
                            </a>
                            <a className="dropdown-item" href="#minors">
                              MINORS{" "}
                            </a>
                            <a className="dropdown-item" href="#contact-us">
                              CONTACT US{" "}
                            </a>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                          >
                            <i className="fa fa-life-ring" /> Disclaimer
                          </a>
                          <div className="dropdown-menu dropdown1menu">
                            <a className="dropdown-item" href="#disclaimer">
                              DISCLAIMER
                            </a>
                            <a className="dropdown-item" href="#consent">
                              CONSENT
                            </a>
                            <a className="dropdown-item" href="#update">
                              UPDATE
                            </a>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                          >
                            <i className="fa fa-life-ring" /> Coronavirus
                            Guidelines
                          </a>
                          <div className="dropdown-menu dropdown1menu">
                            <a
                              className="dropdown-item"
                              href="#stay-healthy-safe-with-social-distance"
                            >
                              Stay Healthy &amp; Safe with Social Distance{" "}
                            </a>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                          >
                            <i className="fa fa-life-ring" /> Menu improvement
                          </a>
                          <div className="dropdown-menu dropdown1menu">
                            <a
                              className="dropdown-item"
                              href="#menu-pictures-description"
                            >
                              Menu pictures &amp; description{" "}
                            </a>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                          >
                            <i className="fa fa-life-ring" /> Membership
                            Agreement
                          </a>
                          <div className="dropdown-menu dropdown1menu">
                            <a
                              className="dropdown-item"
                              href="#agreement-information"
                            >
                              Agreement information
                            </a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                    <div className="col-sm-10 col-8">
                      <h3 className="text-center">Terms &amp; Conditions</h3>
                      <div id="overview">
                        <h5 className="nav-navyblue">OVERVIEW</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "10.5pt" }}>
                                This website is operated by Posvat Pvt. Ltd..
                                Throughout the site, the terms “we”, “us” and
                                “our” refer to Posvat Pvt. Ltd. Posvat Pvt. Ltd.
                                offers this website, including all information,
                                tools and services available from this site to
                                you, the user, conditioned upon your acceptance
                                of all terms, conditions, policies and notices
                                stated here.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "10.5pt" }}>
                                By visiting our site and/ or purchasing
                                something from us, you engage in our “Service”
                                and agree to be bound by the following terms and
                                conditions (“Terms of Service”, “Terms”),
                                including those additional terms and conditions
                                and policies referenced herein and/or available
                                by hyperlink. These Terms of Service apply to
                                all users of the site, including without
                                limitation users who are browsers, vendors,
                                customers, merchants, and/ or contributors of
                                content.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "10.5pt" }}>
                                Please read these Terms of Service carefully
                                before accessing or using our website. By
                                accessing or using any part of the site, you
                                agree to be bound by these Terms of Service. If
                                you do not agree to all the terms and conditions
                                of this agreement, then you may not access the
                                website or use any services. If these Terms of
                                Service are considered an offer, acceptance is
                                expressly limited to these Terms of Service.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "10.5pt" }}>
                            Any new features or tools which are added to the
                            website shall also be subject to the Terms of
                            Service. You can review the most current version of
                            the Terms of Service at any time on this page. We
                            reserve the right to update, change or replace any
                            part of these Terms of Service by posting updates
                            and/or changes to our website. It is your
                            responsibility to check this page periodically for
                            changes. Your continued use of or access to the
                            website following the posting of any changes
                            constitutes acceptance of those changes.
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="general-conditions">
                        <h5 className="nav-navyblue">GENERAL CONDITIONS</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "10.5pt" }}>
                            <span
                              style={{ fontFamily: '"Calibri","sans-serif"' }}
                            >
                              We reserve the right to refuse service to anyone
                              for any reason at any time.&nbsp;
                              <br />
                              You understand that your content (not including
                              credit card information), may be transferred
                              unencrypted and involve (a) transmissions over
                              various networks; and (b) changes to conform and
                              adapt to technical requirements of connecting
                              networks or devices. Credit card information is
                              always encrypted during transfer over
                              networks.&nbsp;
                              <br />
                              You agree not to reproduce, duplicate, copy, sell,
                              resell or exploit any portion of the Service, use
                              of the Service, or access to the Service or any
                              contact on the website through which the service
                              is provided, without express written permission by
                              us.&nbsp;
                              <br />
                              The headings used in this agreement are included
                              for convenience only and will not limit or
                              otherwise affect these Terms.
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="online-terms">
                        <h5 className="nav-navyblue"> ONLINE TERMS</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "10.5pt" }}>
                            By agreeing to these Terms of Service, you represent
                            that you are at least the age of majority in your
                            state or province of residence, or that you are the
                            age of majority in your state or province of
                            residence and you have given us your consent to
                            allow any of your minor dependents to use this
                            site.&nbsp;
                            <br />
                            You may not use our products for any illegal or
                            unauthorized purpose nor may you, in the use of the
                            Service, violate any laws in your jurisdiction
                            (including but not limited to copyright laws).&nbsp;
                            <br />
                            You must not transmit any worms or viruses or any
                            code of a destructive nature.&nbsp;
                            <br />A breach or violation of any of the Terms will
                            result in an immediate termination of your Services.
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="accuracy-completeness-and-timeliness-of-information">
                        <h5 className="nav-navyblue">
                          ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION
                        </h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "10.5pt" }}>
                            <span
                              style={{ fontFamily: '"Calibri","sans-serif"' }}
                            >
                              We are not responsible if information made
                              available on this site is not accurate, complete
                              or current. The material on this site is provided
                              for general information only and should not be
                              relied upon or used as the sole basis for making
                              decisions without consulting primary, more
                              accurate, more complete or timelier sources of
                              information. Any reliance on the material on this
                              site is at your own risk.&nbsp;
                              <br />
                              This site may contain certain historical
                              information. Historical information, necessarily,
                              is not current and is provided for your reference
                              only. We reserve the right to modify the contents
                              of this site at any time, but we have no
                              obligation to update any information on our site.
                              You agree that it is your responsibility to
                              monitor changes to our site.
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="modifications-to-the-service-and-prices">
                        <h5 className="nav-navyblue">
                          MODIFICATIONS TO THE SERVICE AND PRICES
                        </h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "10.5pt" }}>
                            <span
                              style={{ fontFamily: '"Calibri","sans-serif"' }}
                            >
                              Prices for our products are subject to change
                              without notice.&nbsp;
                              <br />
                              We reserve the right at any time to modify or
                              discontinue the Service (or any part or content
                              thereof) without notice at any time.&nbsp;
                              <br />
                              We shall not be liable to you or to any
                              third-party for any modification, price change,
                              suspension or discontinuance of the Service.
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="products-or-services-if-applicable">
                        <h5 className="nav-navyblue">
                          PRODUCTS OR SERVICES (if applicable)
                        </h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "10.5pt" }}>
                            <span
                              style={{ fontFamily: '"Calibri","sans-serif"' }}
                            >
                              Certain products or services may be available
                              exclusively online through the website by the
                              Merchant’s. These products or services may have
                              limited quantities and are subject to return or
                              exchange only according to our Merchant’s Return
                              Policy.&nbsp;
                              <br />
                              We have made every effort to display as accurately
                              as possible the colors and images of products that
                              appear. We cannot guarantee that your computer
                              monitor's display of any color will be
                              accurate.&nbsp;
                              <br />
                              We reserve the right, but are not obligated, to
                              limit the sales of products or Services to any
                              person, geographic region or jurisdiction. We may
                              exercise this right on a case-by-case basis. All
                              descriptions of products or product pricing are
                              subject to change at anytime without notice, at
                              the sole discretion of Merchant. We reserve the
                              right to discontinue any product at any time. Any
                              offer for any product or service made on this site
                              is void where prohibited.&nbsp;
                              <br />
                              We do not warrant that the quality of any
                              products, services, information, or other material
                              purchased or obtained by you will meet your
                              expectations, or that any errors in the Service
                              will be corrected. All the queries/ complaints
                              should be directly dealt with the respective
                              Merchant from whom the product/ service is
                              purchased or obtained, we do not take any
                              responsibility of the same.
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="accuracy-of-billing-and-account-information">
                        <h5 className="nav-navyblue">
                          ACCURACY OF BILLING AND ACCOUNT INFORMATION
                        </h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "10.5pt" }}>
                                We reserve the right to refuse any order you
                                place through our website. We/ Merchant may, in
                                our sole discretion, limit or cancel quantities
                                purchased per person, per household or per
                                order. These restrictions may include orders
                                placed by or under the same customer account,
                                the same credit card, and/or orders that use the
                                same billing and/or shipping address. In the
                                event that we make a change to or cancel an
                                order, we may attempt to notify you by
                                contacting the eâ€‘mail and/or billing
                                address/phone number provided at the time the
                                order was made. We reserve the right to limit or
                                prohibit orders that, in our sole judgment,
                                appear to be placed by retailers, dealers,
                                resellers, distributors or wholesalers.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "10.5pt" }}>
                            <span
                              style={{ fontFamily: '"Calibri","sans-serif"' }}
                            >
                              You agree to provide current, complete and
                              accurate purchase and account information for all
                              purchases made at through the website. You agree
                              to promptly update your account and other
                              information, including your email address and
                              credit card numbers and expiration dates, so that
                              we can complete your transactions and contact you
                              as needed.
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="optional-tools">
                        <h5 className="nav-navyblue">OPTIONAL TOOLS</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "10.5pt" }}>
                                We may provide you with access to third-party
                                tools over which we neither monitor nor have any
                                control nor input.&nbsp;
                                <br />
                                You acknowledge and agree that we provide access
                                to such tools ”as is” and “as available” without
                                any warranties, representations or conditions of
                                any kind and without any endorsement. We shall
                                have no liability whatsoever arising from or
                                relating to your use of optional third-party
                                tools.&nbsp;
                                <br />
                                Any use by you of optional tools offered through
                                the site is entirely at your own risk and
                                discretion and you should ensure that you are
                                familiar with and approve of the terms on which
                                tools are provided by the relevant third-party
                                provider(s).&nbsp;
                                <br />
                                We may also, in the future, offer new services
                                and/or features through the website (including,
                                the release of new tools and resources). Such
                                new features and/or services shall also be
                                subject to these Terms of Service.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="third-party-links">
                        <h5 className="nav-navyblue">THIRD-PARTY LINKS</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "10.5pt" }}>
                                Certain content, products and services available
                                via our Service may include materials from
                                third-parties.&nbsp;
                                <br />
                                Third-party links on this site may direct you to
                                third-party websites that are not affiliated
                                with us. We are not responsible for examining or
                                evaluating the content or accuracy and we do not
                                warrant and will not have any liability or
                                responsibility for any third-party materials or
                                websites, or for any other materials, products,
                                or services of third-parties.&nbsp;
                                <br />
                                We are not liable for any harm or damages
                                related to the purchase or use of goods,
                                services, resources, content, or any other
                                transactions made in connection with any
                                third-party websites. Please review carefully
                                the third-party's policies and practices and
                                make sure you understand them before you engage
                                in any transaction. Complaints, claims,
                                concerns, or questions regarding third-party
                                products should be directed to the third-party.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="user-comments-feedback-and-other-submissions">
                        <h5 className="nav-navyblue">
                          USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS
                        </h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "10.5pt" }}>
                                If, at our request, you send certain specific
                                submissions (for example contest entries) or
                                without a request from us you send creative
                                ideas, suggestions, proposals, plans, or other
                                materials, whether online, by email, by postal
                                mail, or otherwise (collectively, 'comments'),
                                you agree that we may, at any time, without
                                restriction, edit, copy, publish, distribute,
                                translate and otherwise use in any medium any
                                comments that you forward to us. We are and
                                shall be under no obligation (1) to maintain any
                                comments in confidence; (2) to pay compensation
                                for any comments; or (3) to respond to any
                                comments.&nbsp;
                                <br />
                                We may, but have no obligation to, monitor, edit
                                or remove content that we determine in our sole
                                discretion are unlawful, offensive, threatening,
                                libelous, defamatory, pornographic, obscene or
                                otherwise objectionable or violates any party’s
                                intellectual property or these Terms of
                                Service.&nbsp;
                                <br />
                                You agree that your comments will not violate
                                any right of any third-party, including
                                copyright, trademark, privacy, personality or
                                other personal or proprietary right. You further
                                agree that your comments will not contain
                                libelous or otherwise unlawful, abusive or
                                obscene material, or contain any computer virus
                                or other malware that could in any way affect
                                the operation of the Service or any related
                                website. You may not use a false eâ€‘mail
                                address, pretend to be someone other than
                                yourself, or otherwise mislead us or
                                third-parties as to the origin of any comments.
                                You are solely responsible for any comments you
                                make and their accuracy. We take no
                                responsibility and assume no liability for any
                                comments posted by you or any third-party.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="personal-information">
                        <h5 className="nav-navyblue">PERSONAL INFORMATION</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "10.5pt" }}>
                                Your submission of personal information through
                                the website is governed by our Privacy Policy.
                                Click To view our Privacy Policy.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="errors-inaccuracies-and-omissions">
                        <h5 className="nav-navyblue">
                          ERRORS, INACCURACIES AND OMISSIONS
                        </h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "10.5pt" }}>
                                Occasionally there may be information on our
                                site or in the Service that contains
                                typographical errors, inaccuracies or omissions
                                that may relate to product descriptions,
                                pricing, promotions, offers, product shipping
                                charges, transit times and availability. We
                                reserve the right to correct any errors,
                                inaccuracies or omissions, and to change or
                                update information or cancel orders if any
                                information in the Service or on any related
                                website is inaccurate at any time without prior
                                notice (including after you have submitted your
                                order).&nbsp;
                                <br />
                                We undertake no obligation to update, amend or
                                clarify information in the Service or on any
                                related website, including without limitation,
                                pricing information, except as required by law.
                                No specified update or refresh date applied in
                                the Service or on any related website, should be
                                taken to indicate that all information in the
                                Service or on any related website has been
                                modified or updated.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="prohibited-uses">
                        <h5 className="nav-navyblue">PROHIBITED USES</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "10.5pt" }}>
                                In addition to other prohibitions as set forth
                                in the Terms of Service, you are prohibited from
                                using the site/ website or its content: (a) for
                                any unlawful purpose; (b) to solicit others to
                                perform or participate in any unlawful acts; (c)
                                to violate any international, federal,
                                provincial or state regulations, rules, laws, or
                                local ordinances; (d) to infringe upon or
                                violate our intellectual property rights or the
                                intellectual property rights of others; (e) to
                                harass, abuse, insult, harm, defame, slander,
                                disparage, intimidate, or discriminate based on
                                gender, sexual orientation, religion, ethnicity,
                                race, age, national origin, or disability; (f)
                                to submit false or misleading information; (g)
                                to upload or transmit viruses or any other type
                                of malicious code that will or may be used in
                                any way that will affect the functionality or
                                operation of the Service or of any related
                                website, other websites, or the Internet; (h) to
                                collect or track the personal information of
                                others; (i) to spam, phish, pharm, pretext,
                                spider, crawl, or scrape; (j) for any obscene or
                                immoral purpose; or (k) to interfere with or
                                circumvent the security features of the Service
                                or any related website, other websites, or the
                                Internet. We reserve the right to terminate your
                                use of the Service or any related website for
                                violating any of the prohibited uses.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="disclaimer-of-warranties-limitation-of-liability">
                        <h5 className="nav-navyblue">
                          DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
                        </h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "10.5pt" }}>
                                We do not guarantee, represent or warrant that
                                your use of our service will be uninterrupted,
                                timely, secure or error-free.&nbsp;
                                <br />
                                We do not warrant that the results that may be
                                obtained from the use of the service will be
                                accurate or reliable.&nbsp;
                                <br />
                                You agree that from time to time we may remove
                                the service for indefinite periods of time or
                                cancel the service at any time, without notice
                                to you.&nbsp;
                                <br />
                                You expressly agree that your use of, or
                                inability to use, the service is at your sole
                                risk. The service and all products and services
                                delivered to you through the service are (except
                                as expressly stated by us) provided 'as is' and
                                'as available' for your use, without any
                                representation, warranties or conditions of any
                                kind, either express or implied, including all
                                implied warranties or conditions of
                                merchantability, merchantable quality, fitness
                                for a particular purpose, durability, title, and
                                non-infringement.&nbsp;
                                <br />
                                In no case shall Posvat Pvt. Ltd., our
                                directors, officers, employees, affiliates,
                                agents, contractors, interns, suppliers, service
                                providers or licensors be liable for any injury,
                                loss, claim, or any direct, indirect,
                                incidental, punitive, special, or consequential
                                damages of any kind, including, without
                                limitation lost profits, lost revenue, lost
                                savings, loss of data, replacement costs, or any
                                similar damages, whether based in contract, tort
                                (including negligence), strict liability or
                                otherwise, arising from your use of any of the
                                service or any products procured using the
                                service, or for any other claim related in any
                                way to your use of the service or any product,
                                including, but not limited to, any errors or
                                omissions in any content, or any loss or damage
                                of any kind incurred as a result of the use of
                                the service or any content (or product) posted,
                                transmitted, or otherwise made available via the
                                service, even if advised of their possibility.
                                Because some states or jurisdictions do not
                                allow the exclusion or the limitation of
                                liability for consequential or incidental
                                damages, in such states or jurisdictions, our
                                liability shall be limited to the maximum extent
                                permitted by law.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="indemnification">
                        <h5 className="nav-navyblue">INDEMNIFICATION</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "10.5pt" }}>
                                You agree to indemnify, defend and hold harmless
                                www.121directory.com , Posvat Pvt. Ltd.(Our
                                Parent), subsidiaries, affiliates, partners,
                                officers, directors, agents, contractors,
                                licensors, service providers, subcontractors,
                                suppliers, interns and employees, harmless from
                                any claim or demand, including reasonable
                                attorneys’ fees, made by any third-party due to
                                or arising out of your breach of these Terms of
                                Service or the documents they incorporate by
                                reference, or your violation of any law or the
                                rights of a third-party.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="severability">
                        <h5 className="nav-navyblue">SEVERABILITY</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "10.5pt" }}>
                                In the event that any provision of these Terms
                                of Service is determined to be unlawful, void or
                                unenforceable, such provision shall nonetheless
                                be enforceable to the fullest extent permitted
                                by applicable law, and the unenforceable portion
                                shall be deemed to be severed from these Terms
                                of Service, such determination shall not affect
                                the validity and enforceability of any other
                                remaining provisions.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="termination">
                        <h5 className="nav-navyblue">TERMINATION</h5>
                        <p />
                        <p>
                          The obligations and liabilities of the parties
                          incurred prior to the termination date shall survive
                          the termination of this agreement for all
                          purposes.&nbsp;
                          <br />
                          These Terms of Service are effective unless and until
                          terminated by either you or us. You may terminate
                          these Terms of Service at any time by notifying us
                          that you no longer wish to use our Services, or when
                          you cease using our site.&nbsp;
                          <br />
                          If in our sole judgment you fail, or we suspect that
                          you have failed, to comply with any term or provision
                          of these Terms of Service, we also may terminate this
                          agreement at any time without notice and you will
                          remain liable for all amounts due up to and including
                          the date of termination; and/or accordingly may deny
                          you access to our Services (or any part thereof).
                        </p>
                        <p />
                      </div>
                      <div id="entire-agreement">
                        <h5 className="nav-navyblue">ENTIRE AGREEMENT</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "10.5pt" }}>
                                The failure of us to exercise or enforce any
                                right or provision of these Terms of Service
                                shall not constitute a waiver of such right or
                                provision.&nbsp;
                                <br />
                                These Terms of Service and any policies or
                                operating rules posted by us on this site or in
                                respect to The Service constitutes the entire
                                agreement and understanding between you and us
                                and govern your use of the Service, superseding
                                any prior or contemporaneous agreements,
                                communications and proposals, whether oral or
                                written, between you and us (including, but not
                                limited to, any prior versions of the Terms of
                                Service).
                                <br />
                                Any ambiguities in the interpretation of these
                                Terms of Service shall not be construed against
                                the drafting party.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="governing-law">
                        <h5 className="nav-navyblue">GOVERNING LAW</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "10.5pt" }}>
                                These Terms of Service and any separate
                                agreements whereby we provide you Services shall
                                be governed by and construed in accordance with
                                the laws of India.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="changes-to-terms-of-service">
                        <h5 className="nav-navyblue">
                          CHANGES TO TERMS OF SERVICE
                        </h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "10.5pt" }}>
                                You can review the most current version of the
                                Terms of Service at any time at this page.&nbsp;
                                <br />
                                We reserve the right, at our sole discretion, to
                                update, change or replace any part of these
                                Terms of Service by posting updates and changes
                                to our website. It is your responsibility to
                                check our website periodically for changes. Your
                                continued use of or access to our website or the
                                Service following the posting of any changes to
                                these Terms of Service constitutes acceptance of
                                those changes.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="contact-information">
                        <h5 className="nav-navyblue">CONTACT INFORMATION</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "10.5pt" }}>
                                Questions about the Terms of Service should be
                                sent to us at info@Posvat.com
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <h3 className="text-center">Privacy Policy</h3>
                      <div id="introduction">
                        <h5 className="nav-navyblue">INTRODUCTION</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      This Privacy Policy describes how your
                                      personal information is collected, used,
                                      and shared when you visit or make a
                                      purchase from www.121directory.com (the
                                      “Site”).
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="personal-information-we-collect">
                        <h5 className="nav-navyblue">
                          PERSONAL INFORMATION WE COLLECT
                        </h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      When you visit www.121directory.com, we
                                      automatically collect certain information
                                      about your device, including information
                                      about your web browser, IP address, time
                                      zone, and some of the cookies that are
                                      installed on your device. Additionally, as
                                      you browse the Site, we collect
                                      information about the individual web pages
                                      or products that you view, what websites
                                      or search terms referred you to the Site,
                                      and information about how you interact
                                      with the Site. We refer to this
                                      automatically-collected information as
                                      “Device Information”.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      We collect Device Information using the
                                      following technologies:&nbsp;
                                      <br />
                                      - “Cookies” are data files that are placed
                                      on your device or computer and often
                                      include an anonymous unique identifier.
                                      For more information about cookies, and
                                      how to disable cookies, visit
                                      http://www.allaboutcookies.org.&nbsp;
                                      <br />
                                      - “Log files” track actions occurring on
                                      www.121directory.com, and collect data
                                      including your IP address, browser type,
                                      Internet service provider, referring/exit
                                      pages, and date/time stamps.&nbsp;
                                      <br />- “Web beacons”, “tags”, and
                                      “pixels” are electronic files used to
                                      record information about how you browse
                                      www.121directory.com.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      Additionally when you make a purchase or
                                      attempt to make a purchase through
                                      www.121directory.com, we collect certain
                                      information from you, including your name,
                                      billing address, shipping address, payment
                                      information (including credit card
                                      numbers), email address, and phone number.
                                      We refer to this information as “Order
                                      Information”.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      When we talk about “Personal Information”
                                      in this Privacy Policy, we are talking
                                      both about Device Information and Order
                                      Information.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="how-do-we-use-your-personal-information">
                        <h5 className="nav-navyblue">
                          HOW DO WE USE YOUR PERSONAL INFORMATION?
                        </h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      We use the Order Information that we
                                      collect generally to fulfill any orders
                                      placed through{" "}
                                    </span>
                                  </span>
                                </span>
                                <a
                                  href="http://www.121directory.com"
                                  style={{
                                    color: "blue",
                                    textDecoration: "underline",
                                  }}
                                >
                                  <span style={{ fontSize: "10.5pt" }}>
                                    <span
                                      style={{
                                        fontFamily: '"Calibri","sans-serif"',
                                      }}
                                    >
                                      www.121directory.com
                                    </span>
                                  </span>
                                </a>
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      {" "}
                                      or subdomains of 121directory or posvat
                                      (including processing your payment
                                      information, arranging for shipping, and
                                      providing you with invoices and/or order
                                      confirmations). Additionally, we use this
                                      Order Information to:&nbsp;
                                      <br />
                                      - Communicate with you;&nbsp;
                                      <br />
                                      - Screen the orders for potential risk or
                                      fraud; and&nbsp;
                                      <br />- When in line with the preferences
                                      you have shared with us, provide you with
                                      information or advertising relating to our
                                      products or services.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      We use the Device Information that we
                                      collect to help us screen for potential
                                      risk and fraud (in particular, your IP
                                      address), and more generally to improve
                                      and optimize our Site (for example, by
                                      generating analytics about how our
                                      customers browse and interact with the
                                      Site, and to assess the success of our
                                      marketing and advertising campaigns).
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="sharing-your-personal-information">
                        <h5 className="nav-navyblue">
                          SHARING YOUR PERSONAL INFORMATION
                        </h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      We share your Personal Information with
                                      third parties to help us use your Personal
                                      Information, as described above. For
                                      example, we use our subdomains to power
                                      our online directory www.121directory.com.{" "}
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      We also use Google Analytics to help us
                                      understand how our customers use the Site
                                      -- you can read more about how Google uses
                                      your Personal Information here:
                                      https://www.google.com/intl/en/policies/privacy/.
                                      You can also opt-out of Google Analytics
                                      here:
                                      https://tools.google.com/dlpage/gaoptout.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      Finally, we may also share your Personal
                                      Information to comply with applicable laws
                                      and regulations, to respond to a subpoena,
                                      search warrant or other lawful request for
                                      information we receive, or to otherwise
                                      protect our rights.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="behavioural-advertising">
                        <h5 className="nav-navyblue">
                          BEHAVIOURAL ADVERTISING
                        </h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      As described above, we use your Personal
                                      Information to provide you with targeted
                                      advertisements or marketing communications
                                      we believe may be of interest to you. For
                                      more information about how targeted
                                      advertising works, you can visit the
                                      Network Advertising Initiative’s (“NAI”)
                                      educational page at
                                      http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      You can opt out of targeted advertising by
                                      using the links below:&nbsp;
                                      <br />
                                      - Facebook:
                                      https://www.facebook.com/settings/?tab=ads&nbsp;
                                      <br />
                                      - Google:
                                      https://www.google.com/settings/ads/anonymous&nbsp;
                                      <br />- Bing:
                                      https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      Additionally, you can opt out of some of
                                      these services by visiting the Digital
                                      Advertising Alliance’s opt-out portal at:
                                      http://optout.aboutads.info/.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="do-not-track">
                        <h5 className="nav-navyblue">DO NOT TRACK</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      Please note that we do not alter our
                                      Site’s data collection and use practices
                                      when we see a Do Not Track signal from
                                      your browser.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="your-rights">
                        <h5 className="nav-navyblue">YOUR RIGHTS</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      If you are a European resident, you have
                                      the right to access personal information
                                      we hold about you and to ask that your
                                      personal information be corrected,
                                      updated, or deleted. If you would like to
                                      exercise this right, please contact us
                                      through the contact information below.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      Additionally, if you are a European
                                      resident we note that we are processing
                                      your information in order to fulfill
                                      contracts we might have with you (for
                                      example if you make an order through the
                                      Site or subdomains), or otherwise to
                                      pursue our legitimate business interests
                                      listed above. Additionally, please note
                                      that your information will be transferred
                                      outside of Europe, including to Canada and
                                      the United States.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="data-retention">
                        <h5 className="nav-navyblue">DATA RETENTION</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "10.5pt" }}>
                            <span
                              style={{ fontFamily: '"Calibri","sans-serif"' }}
                            >
                              <span style={{ color: "#0b0b0b" }}>
                                When you place an order through subdomains of{" "}
                                <a
                                  href="http://www.121directory.com"
                                  style={{
                                    color: "blue",
                                    textDecoration: "underline",
                                  }}
                                >
                                  www.121directory.com
                                </a>{" "}
                                or through any subsidiaries of Posvat Pvt. Ltd.,
                                we will maintain your Order Information for our
                                records unless and until you ask us to delete
                                this information.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="changes">
                        <h5 className="nav-navyblue">CHANGES</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      We may update this privacy policy from
                                      time to time in order to reflect, for
                                      example, changes to our practices or for
                                      other operational, legal or regulatory
                                      reasons.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="minors">
                        <h5 className="nav-navyblue">MINORS </h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      The Site is not intended for individuals
                                      under the age of 18.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="contact-us">
                        <h5 className="nav-navyblue">CONTACT US </h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      For more information about our privacy
                                      practices, if you have questions, or if
                                      you would like to make a complaint, please
                                      contact us by eâ€‘mail at
                                      support@121directory.com or by mail using
                                      the details provided below:
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      Posvat Pvt. Ltd.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "12pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman",serif',
                                }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span
                                    style={{
                                      fontFamily: '"Calibri","sans-serif"',
                                    }}
                                  >
                                    <span style={{ color: "#0b0b0b" }}>
                                      [Privacy Compliance Officer]&nbsp;
                                      <br />
                                      302, 10A, Veer Savarkar Block, Shakarpur,
                                      Near Nirman Vihar Metro Station Gate no-2,
                                      Delhi-92, India
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <h3 className="text-center">Disclaimer</h3>
                      <div id="disclaimer">
                        <h5 className="nav-navyblue">DISCLAIMER</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span style={{ color: "#666666" }}>
                                    Please feel free to contact us by email at{" "}
                                  </span>
                                </span>
                                <a
                                  href="mailto:info@posvat.com"
                                  style={{
                                    color: "blue",
                                    textDecoration: "underline",
                                  }}
                                >
                                  <span style={{ fontSize: "10.5pt" }}>
                                    info@posvat.com
                                  </span>
                                </a>
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span style={{ color: "#666666" }}>
                                    {" "}
                                    if you require any more information or have
                                    any questions about our site's disclaimer.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span style={{ color: "#666666" }}>
                                    All the information on this website -
                                    www.121directory.com - is published in good
                                    faith and for general information purpose
                                    only. www.121directory.com does not make any
                                    warranties about the completeness,
                                    reliability and accuracy of this
                                    information. Any action you take upon the
                                    information you find on this website
                                    (www.121directory.com), is strictly at your
                                    own risk.{" "}
                                  </span>
                                </span>
                                <a
                                  href="http://www.121directory.com"
                                  style={{
                                    color: "blue",
                                    textDecoration: "underline",
                                  }}
                                >
                                  <span style={{ fontSize: "10.5pt" }}>
                                    www.121directory.com
                                  </span>
                                </a>
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span style={{ color: "#666666" }}> or </span>
                                </span>
                                <a
                                  href="http://www.posvat.com"
                                  style={{
                                    color: "blue",
                                    textDecoration: "underline",
                                  }}
                                >
                                  <span style={{ fontSize: "10.5pt" }}>
                                    www.posvat.com
                                  </span>
                                </a>
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span style={{ color: "#666666" }}>
                                    {" "}
                                    will not be liable for any losses and/or
                                    damages in connection with the use of our
                                    website.{" "}
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span style={{ color: "#666666" }}>
                                    From our website, you can visit other
                                    websites by following hyperlinks to such
                                    external sites. While we strive to provide
                                    only quality links to useful and ethical
                                    websites, we have no control over the
                                    content and nature of these sites. These
                                    links to other websites do not imply a
                                    recommendation for all the content found on
                                    these sites. Site owners and content may
                                    change without notice and may occur before
                                    we have the opportunity to remove a link
                                    which may have gone 'bad'.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "10.5pt" }}>
                            <span
                              style={{ fontFamily: '"Calibri","sans-serif"' }}
                            >
                              <span style={{ color: "#666666" }}>
                                Please be also aware that when you leave our
                                website, other sites may have different privacy
                                policies and terms which are beyond our control.
                                Please be sure to check the Privacy Policies of
                                these sites as well as their "Terms of Service"
                                before engaging in any business or uploading any
                                information.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="consent">
                        <h5 className="nav-navyblue">CONSENT</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <span style={{ fontSize: "10.5pt" }}>
                                  <span style={{ color: "#666666" }}>
                                    By using our website, you hereby consent to
                                    our disclaimer and agree to its terms.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <div id="update">
                        <h5 className="nav-navyblue">UPDATE</h5>
                        <p />
                        <p>
                          <span style={{ fontSize: "10.5pt" }}>
                            <span
                              style={{ fontFamily: '"Calibri","sans-serif"' }}
                            >
                              <span style={{ color: "#666666" }}>
                                Should we update, amend or make any changes to
                                this document, those changes will be prominently
                                posted here.
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                      <h3 className="text-center">Coronavirus Guidelines</h3>
                      <div id="stay-healthy-safe-with-social-distance">
                        <h5 className="nav-navyblue">
                          Stay Healthy &amp; Safe with Social Distance{" "}
                        </h5>
                        <p />
                        <div
                          className="page-element page-element-type-text widget-container widget-text"
                          id="element-5297"
                          style={{
                            WebkitTextStrokeWidth: 0,
                            borderBottomColor: "currentColor",
                            borderBottomStyle: "none",
                            borderBottomWidth: 0,
                            borderImageOutset: 0,
                            borderImageRepeat: "stretch",
                            borderImageSlice: "100%",
                            borderImageSource: "none",
                            borderImageWidth: 1,
                            borderLeftColor: "currentColor",
                            borderLeftStyle: "none",
                            borderLeftWidth: 0,
                            borderRightColor: "currentColor",
                            borderRightStyle: "none",
                            borderRightWidth: 0,
                            borderTopColor: "currentColor",
                            borderTopStyle: "none",
                            borderTopWidth: 0,
                            outlineWidth: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            textAlign: "left",
                            textIndent: 0,
                            width: 959,
                          }}
                        >
                          <div
                            className="contents"
                            style={{
                              borderBottomColor: "currentColor",
                              borderBottomStyle: "none",
                              borderBottomWidth: 0,
                              borderImageOutset: 0,
                              borderImageRepeat: "stretch",
                              borderImageSlice: "100%",
                              borderImageSource: "none",
                              borderImageWidth: 1,
                              borderLeftColor: "currentColor",
                              borderLeftStyle: "none",
                              borderLeftWidth: 0,
                              borderRightColor: "currentColor",
                              borderRightStyle: "none",
                              borderRightWidth: 0,
                              borderTopColor: "currentColor",
                              borderTopStyle: "none",
                              borderTopWidth: 0,
                              outlineWidth: 0,
                              paddingBottom: 0,
                              paddingLeft: 0,
                              paddingRight: 0,
                              paddingTop: 0,
                            }}
                          >
                            <p style={{ textAlign: "left" }}>
                              <span style={{ fontSize: "100%" }}>
                                <span style={{ color: "#555555" }}>
                                  <span style={{ fontFamily: "inherit" }}>
                                    <span style={{ fontSize: 14 }}>
                                      <span style={{ fontFamily: "DM Sans" }}>
                                        <span style={{ fontSize: 16 }}>
                                          <span style={{ color: "#37465a" }}>
                                            <span
                                              style={{ fontFamily: "inherit" }}
                                            >
                                              <span
                                                style={{ color: "#444444" }}
                                              >
                                                In light of the recent outbreak
                                                of the Coronavirus we are taking
                                                precautionary measures to ensure
                                                you, our riders, and our
                                                customers all stay safe and
                                                healthy whilst continuing to
                                                enjoy your&nbsp;
                                              </span>
                                              <span
                                                style={{ color: "#444444" }}
                                              >
                                                tasty food.
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </p>
                            <p style={{ textAlign: "left" }}>&nbsp;</p>
                            <p style={{ textAlign: "left" }}>
                              <span style={{ fontSize: "100%" }}>
                                <span style={{ color: "#555555" }}>
                                  <span style={{ fontFamily: "inherit" }}>
                                    <span style={{ fontSize: 14 }}>
                                      <span style={{ fontFamily: "DM Sans" }}>
                                        <span style={{ fontSize: 16 }}>
                                          <span style={{ color: "#37465a" }}>
                                            <span
                                              style={{ fontFamily: "inherit" }}
                                            >
                                              <span
                                                style={{ color: "#444444" }}
                                              >
                                                We have started rolling out the
                                                following measures in the
                                                upcoming days:
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </p>
                            <ul
                              className="padding_left"
                              style={{ listStyleType: "disc" }}
                            >
                              <li>
                                <span style={{ fontSize: "100%" }}>
                                  <span style={{ color: "#555555" }}>
                                    <span style={{ fontFamily: "inherit" }}>
                                      <span style={{ fontSize: 14 }}>
                                        <span style={{ fontFamily: "DM Sans" }}>
                                          <span style={{ color: "#444444" }}>
                                            <strong>
                                              Awareness &amp; education
                                              campaigns
                                            </strong>{" "}
                                            towards riders and customers based
                                            on government guidelines
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span style={{ fontSize: "100%" }}>
                                  <span style={{ color: "#555555" }}>
                                    <span style={{ fontFamily: "inherit" }}>
                                      <span style={{ fontSize: 14 }}>
                                        <span style={{ fontFamily: "DM Sans" }}>
                                          <span style={{ fontSize: "100%" }}>
                                            <span
                                              style={{ fontFamily: "inherit" }}
                                            >
                                              <span
                                                style={{ color: "#444444" }}
                                              >
                                                <strong>
                                                  Protective rider gear
                                                </strong>{" "}
                                                - we will be distributing
                                                protective gear sanitary wipes,
                                                and face/dust masks to all our
                                                riders and will ensure they
                                                understand how to properly use
                                                these
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span style={{ fontSize: "100%" }}>
                                  <span style={{ color: "#555555" }}>
                                    <span style={{ fontFamily: "inherit" }}>
                                      <span style={{ fontSize: 14 }}>
                                        <span style={{ fontFamily: "DM Sans" }}>
                                          <span style={{ fontSize: "100%" }}>
                                            <span
                                              style={{ fontFamily: "inherit" }}
                                            >
                                              <span
                                                style={{ color: "#444444" }}
                                              >
                                                <strong>
                                                  Free delivery for people in
                                                  quarantined venues
                                                </strong>{" "}
                                                - in close cooperation with
                                                government &amp; local health
                                                authorities
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span style={{ fontSize: "100%" }}>
                                  <span style={{ color: "#555555" }}>
                                    <span style={{ fontFamily: "inherit" }}>
                                      <span style={{ fontSize: 14 }}>
                                        <span style={{ fontFamily: "DM Sans" }}>
                                          <span style={{ color: "#444444" }}>
                                            <span style={{ fontSize: "100%" }}>
                                              <span
                                                style={{
                                                  fontFamily: "inherit",
                                                }}
                                              >
                                                <strong>
                                                  Donation for Corona Tests
                                                </strong>{" "}
                                                - the cost of a single test kit
                                                is very high and posvat&nbsp;is
                                                making a donation to finance
                                                these tests. We encourage you to
                                                join us in financially
                                                supporting the{" "}
                                              </span>
                                            </span>
                                            <span style={{ fontSize: "100%" }}>
                                              <span
                                                style={{
                                                  fontFamily: "inherit",
                                                }}
                                              >
                                                government in its great efforts
                                                to contain the situation.
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span style={{ fontSize: "100%" }}>
                                  <span style={{ color: "#555555" }}>
                                    <span style={{ fontFamily: "inherit" }}>
                                      <span style={{ fontSize: 14 }}>
                                        <span style={{ fontFamily: "DM Sans" }}>
                                          <span style={{ fontSize: "100%" }}>
                                            <span
                                              style={{ fontFamily: "inherit" }}
                                            >
                                              <span
                                                style={{ color: "#444444" }}
                                              >
                                                <strong>
                                                  Minimize Cash usage
                                                </strong>{" "}
                                                - Progressively, in case of a
                                                significant increase in Corona
                                                Virus cases, we would like to
                                                minimize the usage of cash, by
                                                promoting online payments to
                                                reduce touching and handling
                                                money
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </li>
                            </ul>
                            <p style={{ textAlign: "left" }}>&nbsp;</p>
                            <p style={{ textAlign: "left" }}>
                              <span style={{ fontSize: "100%" }}>
                                <span style={{ color: "#555555" }}>
                                  <span style={{ fontFamily: "inherit" }}>
                                    <span style={{ fontSize: 14 }}>
                                      <span style={{ fontFamily: "DM Sans" }}>
                                        <span style={{ fontSize: 16 }}>
                                          <span style={{ color: "#37465a" }}>
                                            <span
                                              style={{ fontFamily: "inherit" }}
                                            >
                                              <span
                                                style={{ fontSize: "100%" }}
                                              >
                                                <span
                                                  style={{
                                                    fontFamily: "inherit",
                                                  }}
                                                >
                                                  <span
                                                    style={{ color: "#444444" }}
                                                  >
                                                    In addition, here are strict
                                                    health guidelines on that
                                                    you and your teams should
                                                    adhere to at all times:
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </p>
                            <p style={{ textAlign: "left" }}>&nbsp;</p>
                          </div>
                        </div>
                        <div
                          className="page-element page-element-type-text widget-container widget-text"
                          id="element-5345"
                          style={{
                            WebkitTextStrokeWidth: 0,
                            borderBottomColor: "currentColor",
                            borderBottomStyle: "none",
                            borderBottomWidth: 0,
                            borderImageOutset: 0,
                            borderImageRepeat: "stretch",
                            borderImageSlice: "100%",
                            borderImageSource: "none",
                            borderImageWidth: 1,
                            borderLeftColor: "currentColor",
                            borderLeftStyle: "none",
                            borderLeftWidth: 0,
                            borderRightColor: "currentColor",
                            borderRightStyle: "none",
                            borderRightWidth: 0,
                            borderTopColor: "currentColor",
                            borderTopStyle: "none",
                            borderTopWidth: 0,
                            outlineWidth: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            textAlign: "left",
                            textIndent: 0,
                            width: 682,
                          }}
                        >
                          <div
                            className="contents"
                            style={{
                              borderBottomColor: "currentColor",
                              borderBottomStyle: "none",
                              borderBottomWidth: 0,
                              borderImageOutset: 0,
                              borderImageRepeat: "stretch",
                              borderImageSlice: "100%",
                              borderImageSource: "none",
                              borderImageWidth: 1,
                              borderLeftColor: "currentColor",
                              borderLeftStyle: "none",
                              borderLeftWidth: 0,
                              borderRightColor: "currentColor",
                              borderRightStyle: "none",
                              borderRightWidth: 0,
                              borderTopColor: "currentColor",
                              borderTopStyle: "none",
                              borderTopWidth: 0,
                              outlineWidth: 0,
                              paddingBottom: 0,
                              paddingLeft: 0,
                              paddingRight: 0,
                              paddingTop: 0,
                            }}
                          >
                            <ul
                              className="padding_left"
                              style={{ listStyleType: "disc" }}
                            >
                              <li>
                                <span style={{ fontSize: "100%" }}>
                                  <span style={{ color: "#555555" }}>
                                    <span style={{ fontFamily: "inherit" }}>
                                      <span style={{ fontSize: 14 }}>
                                        <span style={{ fontFamily: "DM Sans" }}>
                                          <span style={{ fontSize: "100%" }}>
                                            <span style={{ color: "#444444" }}>
                                              <span
                                                style={{
                                                  fontFamily: "inherit",
                                                }}
                                              >
                                                Do NOT go to work if you are not
                                                feeling well.
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span style={{ fontSize: "100%" }}>
                                  <span style={{ color: "#555555" }}>
                                    <span style={{ fontFamily: "inherit" }}>
                                      <span style={{ fontSize: 14 }}>
                                        <span style={{ fontFamily: "DM Sans" }}>
                                          <span style={{ fontSize: "100%" }}>
                                            <span style={{ color: "#444444" }}>
                                              <span
                                                style={{
                                                  fontFamily: "inherit",
                                                }}
                                              >
                                                Avoid close contact with people
                                                who are sick.
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span style={{ fontSize: "100%" }}>
                                  <span style={{ color: "#555555" }}>
                                    <span style={{ fontFamily: "inherit" }}>
                                      <span style={{ fontSize: 14 }}>
                                        <span style={{ fontFamily: "DM Sans" }}>
                                          <span style={{ fontSize: "100%" }}>
                                            <span style={{ color: "#444444" }}>
                                              <span
                                                style={{
                                                  fontFamily: "inherit",
                                                }}
                                              >
                                                Avoid touching your face -
                                                particularly with unwashed hands
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span style={{ fontSize: "100%" }}>
                                  <span style={{ color: "#555555" }}>
                                    <span style={{ fontFamily: "inherit" }}>
                                      <span style={{ fontSize: 14 }}>
                                        <span style={{ fontFamily: "DM Sans" }}>
                                          <span style={{ fontSize: "100%" }}>
                                            <span style={{ color: "#444444" }}>
                                              <span
                                                style={{
                                                  fontFamily: "inherit",
                                                }}
                                              >
                                                Cover your cough or sneeze with
                                                a tissue, then throw the tissue
                                                in the trash.
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span style={{ fontSize: "100%" }}>
                                  <span style={{ color: "#555555" }}>
                                    <span style={{ fontFamily: "inherit" }}>
                                      <span style={{ fontSize: 14 }}>
                                        <span style={{ fontFamily: "DM Sans" }}>
                                          <span style={{ fontSize: "100%" }}>
                                            <span style={{ color: "#444444" }}>
                                              <span
                                                style={{
                                                  fontFamily: "inherit",
                                                }}
                                              >
                                                Clean and disinfect all your
                                                equipment and gear frequently
                                                (at least 2-3 daily) with a
                                                household cleaning product
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span style={{ fontSize: "100%" }}>
                                  <span style={{ color: "#555555" }}>
                                    <span style={{ fontFamily: "inherit" }}>
                                      <span style={{ fontSize: 14 }}>
                                        <span style={{ fontFamily: "DM Sans" }}>
                                          <span style={{ fontSize: "100%" }}>
                                            <span style={{ color: "#444444" }}>
                                              <span
                                                style={{
                                                  fontFamily: "inherit",
                                                }}
                                              >
                                                Wash your hands often with soap
                                                and water for at least 20
                                                seconds, especially after going
                                                to the bathroom; before eating;
                                                and after blowing your nose,
                                                coughing, or sneezing.
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span style={{ fontSize: "100%" }}>
                                  <span style={{ color: "#555555" }}>
                                    <span style={{ fontFamily: "inherit" }}>
                                      <span style={{ fontSize: 14 }}>
                                        <span style={{ fontFamily: "DM Sans" }}>
                                          <span style={{ fontSize: "100%" }}>
                                            <span style={{ color: "#444444" }}>
                                              <span
                                                style={{
                                                  fontFamily: "inherit",
                                                }}
                                              >
                                                Use an alcohol-based hand
                                                sanitizer if soap and water are
                                                not readily available
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="page-element page-element-type-text widget-container widget-text"
                          id="element-5346"
                          style={{
                            WebkitTextStrokeWidth: 0,
                            borderBottomColor: "currentColor",
                            borderBottomStyle: "none",
                            borderBottomWidth: 0,
                            borderImageOutset: 0,
                            borderImageRepeat: "stretch",
                            borderImageSlice: "100%",
                            borderImageSource: "none",
                            borderImageWidth: 1,
                            borderLeftColor: "currentColor",
                            borderLeftStyle: "none",
                            borderLeftWidth: 0,
                            borderRightColor: "currentColor",
                            borderRightStyle: "none",
                            borderRightWidth: 0,
                            borderTopColor: "currentColor",
                            borderTopStyle: "none",
                            borderTopWidth: 0,
                            outlineWidth: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            textAlign: "left",
                            textIndent: 0,
                            width: 959,
                          }}
                        >
                          <div
                            className="contents"
                            style={{
                              borderBottomColor: "currentColor",
                              borderBottomStyle: "none",
                              borderBottomWidth: 0,
                              borderImageOutset: 0,
                              borderImageRepeat: "stretch",
                              borderImageSlice: "100%",
                              borderImageSource: "none",
                              borderImageWidth: 1,
                              borderLeftColor: "currentColor",
                              borderLeftStyle: "none",
                              borderLeftWidth: 0,
                              borderRightColor: "currentColor",
                              borderRightStyle: "none",
                              borderRightWidth: 0,
                              borderTopColor: "currentColor",
                              borderTopStyle: "none",
                              borderTopWidth: 0,
                              outlineWidth: 0,
                              paddingBottom: 0,
                              paddingLeft: 0,
                              paddingRight: 0,
                              paddingTop: 0,
                            }}
                          >
                            <p style={{ textAlign: "left" }}>
                              <span style={{ fontSize: "100%" }}>
                                <span style={{ color: "#555555" }}>
                                  <span style={{ fontFamily: "inherit" }}>
                                    <span style={{ fontSize: 14 }}>
                                      <span style={{ fontFamily: "DM Sans" }}>
                                        <span style={{ fontSize: 16 }}>
                                          <span style={{ color: "#37465a" }}>
                                            <span
                                              style={{ fontFamily: "inherit" }}
                                            >
                                              <span
                                                style={{ color: "#444444" }}
                                              >
                                                <span
                                                  style={{ fontSize: "100%" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontFamily: "inherit",
                                                    }}
                                                  >
                                                    Please follow these food
                                                    collection protocols when
                                                    interacting with riders
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </p>
                            <ul
                              className="padding_left"
                              style={{ listStyleType: "disc" }}
                            >
                              <li>
                                <span style={{ fontSize: "100%" }}>
                                  <span style={{ color: "#555555" }}>
                                    <span style={{ fontFamily: "inherit" }}>
                                      <span style={{ fontSize: 14 }}>
                                        <span style={{ fontFamily: "DM Sans" }}>
                                          <span style={{ fontSize: "100%" }}>
                                            <span style={{ color: "#444444" }}>
                                              <span
                                                style={{
                                                  fontFamily: "inherit",
                                                }}
                                              >
                                                <strong>HAND SANITIZERS</strong>{" "}
                                                - please provide hand sanitizers
                                                for staff and riders at
                                                collection points in your
                                                premises
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span style={{ fontSize: "100%" }}>
                                  <span style={{ color: "#555555" }}>
                                    <span style={{ fontFamily: "inherit" }}>
                                      <span style={{ fontSize: 14 }}>
                                        <span style={{ fontFamily: "DM Sans" }}>
                                          <strong>PRIOR TO COLLECTION</strong>
                                          <span style={{ fontSize: "100%" }}>
                                            <span style={{ color: "#444444" }}>
                                              <span
                                                style={{
                                                  fontFamily: "inherit",
                                                }}
                                              >
                                                {" "}
                                                - Sanitize/wash your hands in
                                                between every order
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span style={{ fontSize: "100%" }}>
                                  <span style={{ color: "#555555" }}>
                                    <span style={{ fontFamily: "inherit" }}>
                                      <span style={{ fontSize: 14 }}>
                                        <span style={{ fontFamily: "DM Sans" }}>
                                          <strong>COLLECTION</strong>
                                          <span style={{ fontSize: "100%" }}>
                                            <span style={{ color: "#444444" }}>
                                              <span
                                                style={{
                                                  fontFamily: "inherit",
                                                }}
                                              >
                                                {" "}
                                                - staff should handle order
                                                Items at the bottom of the bag
                                                to leave bag handles clean for
                                                customers
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </li>
                            </ul>
                            <p style={{ textAlign: "left" }}>&nbsp;</p>
                            <p style={{ textAlign: "left" }}>
                              <span style={{ fontSize: "100%" }}>
                                <span style={{ color: "#555555" }}>
                                  <span style={{ fontFamily: "inherit" }}>
                                    <span style={{ fontSize: 14 }}>
                                      <span style={{ fontFamily: "DM Sans" }}>
                                        <span style={{ fontSize: 16 }}>
                                          <span style={{ color: "#37465a" }}>
                                            <span
                                              style={{ fontFamily: "inherit" }}
                                            >
                                              <span
                                                style={{ color: "#444444" }}
                                              >
                                                <span
                                                  style={{ fontSize: "100%" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontFamily: "inherit",
                                                    }}
                                                  >
                                                    Should you have any further
                                                    questions or concerns with
                                                    regards to the above please
                                                    contact your Account
                                                    Manager. If you are
                                                    concerned about your health
                                                    please{" "}
                                                  </span>
                                                </span>
                                              </span>
                                              <span
                                                style={{ color: "#444444" }}
                                              >
                                                contact the health authorities
                                                immediately.
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </p>
                            <p style={{ textAlign: "left" }}>&nbsp;</p>
                            <p style={{ textAlign: "left" }}>
                              <span style={{ fontSize: "100%" }}>
                                <span style={{ color: "#555555" }}>
                                  <span style={{ fontFamily: "inherit" }}>
                                    <span style={{ fontSize: 14 }}>
                                      <span style={{ fontFamily: "DM Sans" }}>
                                        <span style={{ fontSize: 16 }}>
                                          <span style={{ color: "#37465a" }}>
                                            <span
                                              style={{ fontFamily: "inherit" }}
                                            >
                                              <span
                                                style={{ color: "#444444" }}
                                              >
                                                <span
                                                  style={{ fontSize: "100%" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontFamily: "inherit",
                                                    }}
                                                  >
                                                    We will continue to provide
                                                    you with updates and
                                                    reminders to ensure everyone
                                                    stays safe and stays
                                                    healthy.
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </p>
                          </div>
                        </div>
                        <p />
                      </div>
                      <h3 className="text-center">Menu improvement</h3>
                      <div id="menu-pictures-description">
                        <h5 className="nav-navyblue">
                          Menu pictures &amp; description{" "}
                        </h5>
                        <p />
                        <ul className="padding_left">
                          <li>
                            <strong>Hero Picture</strong> - This is the picture
                            that the customers see when searching for the
                            restaurant. It is required to have one to be shown
                            on the app. It needs to be 1200x1000 JPEG with only
                            food. No hands or branding.
                          </li>
                          <li>
                            <strong>Menu Images</strong> - A menu with pictures
                            normally outsells one without pictures by 40%; thus
                            it is super important to have them to grow your
                            business on the platform. They need to be 1200x1000
                            JPEG with only food. No hands or branding. Please
                            upload pictures&nbsp;sure to name the pictures as
                            per the menu.
                          </li>
                          <li>
                            <strong>Arabic Translation</strong> - To cater to a
                            bigger customer base, you can add an Arabic
                            translation to your menu. Do you have it available?
                            It is important to note that we need the English and
                            Arabic translation on the same file so to know which
                            translation matches each item.
                          </li>
                          <li>
                            <strong>Menu description</strong> - We can add a
                            250-character long description of your restaurant,
                            so your customers can know what the concept is
                            about.&nbsp;
                          </li>
                          <li>
                            <strong>Item description</strong> - To make it
                            easier for the customer what a dish is about, you
                            can add a description to every item on your
                            menu.&nbsp;
                          </li>
                          <li>
                            <strong>Modifiers</strong> - An easy way to grow
                            your average ticket is by adding modifiers to your
                            dishes. A modifier is an option to change the dish.
                            Something like in a pizza, the size is small, medium
                            and large, the pizza size is the modifier. You can
                            have as many as you want and charge or not for
                            those. It also helps develop a personalized
                            experience for the customer.
                          </li>
                        </ul>
                        <p />
                      </div>
                      <h3 className="text-center">Membership Agreement</h3>
                      <div id="agreement-information">
                        <h5 className="nav-navyblue">Agreement information</h5>
                        <p />
                        <p>
                          <strong>
                            <span style={{ fontSize: "11.5pt" }}>
                              1.3 Rajasthan Restaurant&amp; café L.L.C.
                            </span>
                          </strong>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      1.3.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;A limited liability company
                                    incorporated under the laws of Abu Dhabi,
                                    United Arab Emirates with the business
                                    license no.{" "}
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      1.3.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Rajasthan Restaurant&amp; café
                                    L.L.C.has developed a system identified by
                                    the service mark&nbsp;
                                    <a href="https://121directory.com/">
                                      <span style={{ color: "#337ab7" }}>
                                        "rajasthancafe.com"
                                      </span>
                                    </a>
                                    &nbsp;and relates to the establishment and
                                    operation of an on line Marketplace concept,
                                    referred to as&nbsp;
                                    <a href="https://121directory.com/">
                                      <span style={{ color: "#337ab7" }}>
                                        "rajasthancafe.com"
                                      </span>
                                    </a>
                                    ; in the business of online e-commerce
                                    product ordering and delivery server, and
                                    owns the website&nbsp;
                                    <a href="https://121directory.com/">
                                      <span style={{ color: "#337ab7" }}>
                                        "rajasthancafe.com"
                                      </span>
                                    </a>
                                    &nbsp;and related E-commerce applications.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      1.4 Rajasthancafe.com shall, on behalf of
                                      the MERCHANT:
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      1.4.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Receive and transmit customers’ orders
                                    to the Merchant. with the business license
                                    no. [xxxxxx], and registered address Pobox
                                    .72535 ,&nbsp; Abu Dhabi, UAE]
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      1.4.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Accept payments on behalf of the
                                    MERCHANT through&nbsp;
                                    <a href="https://121directory.com/">
                                      <span style={{ color: "#337ab7" }}>
                                        "rajasthancafe.com"
                                      </span>
                                    </a>
                                    &nbsp;affiliated Debit and/or Credit payment
                                    gateways (the “Payment Gateways”).
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      1.4.3
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Provide and deliver Rajasthancafe.com
                                    services, whereby&nbsp;
                                    <a href="https://121directory.com/">
                                      <span style={{ color: "#337ab7" }}>
                                        "rajasthancafe.com"
                                      </span>
                                    </a>
                                    &nbsp;online marketing place advertises the
                                    MERCHANTS business and/or services and/or
                                    products to the general public. Further
                                    described in the Terms and Conditions.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      1.5 ’The MERCHANT’.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      1.5.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The MERCHANT owns and/or operates
                                    collectively; Restaurants, Supermarkets,
                                    Grocery stores, Pharmacies, Florists, Health
                                    and Beauty Salons, and Other businesses
                                    together. The MERCHANT agrees and
                                    authorises&nbsp;
                                    <a href="https://121directory.com/">
                                      <span style={{ color: "#337ab7" }}>
                                        "rajasthancafe.com"
                                      </span>
                                    </a>
                                    &nbsp;to; with the business license no.
                                    [xxxxxx], and registered address [Abu Dhabi,
                                    UAE]
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      1.5.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Receive and transmit customers’ orders
                                    to the MERCHANTS named Business.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      1.5.3
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Accept payments on behalf of the
                                    MERCHANT through&nbsp;
                                    <a href="https://121directory.com/">
                                      <span style={{ color: "#337ab7" }}>
                                        "rajasthancafe.com"
                                      </span>
                                    </a>
                                    &nbsp;Debit or Credit payment methods and
                                    gateways (the “Payment Gateways”).
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      2.0 Definitions and Interpretations.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      2.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The term&nbsp;
                                    <a href="https://121directory.com/">
                                      <span style={{ color: "#337ab7" }}>
                                        "rajasthancafe.com"
                                      </span>
                                    </a>
                                    &nbsp;refers to&nbsp;
                                    <a href="https://121directory.com/">
                                      <span style={{ color: "#337ab7" }}>
                                        "rajasthancafe.com"
                                      </span>
                                    </a>
                                    , affiliate of Dimensions Application L.L.C.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      2.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The term “MERCHANT” refers to the
                                    subscriber listed in section 1 of this
                                    agreement.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      2.3
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The term “Agreement” refers to this
                                    agreement.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      2.4
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The term “ORDER” refers to the Order
                                    placed by the consumer.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      2.5
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The term “Carrier” refers a
                                    third-party delivery provider.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      3.0 The Company’s subscribers and terms
                                      and conditions.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      3.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;This Letter of Agreement shall be
                                    governed by, and subject to, GoOrder.com’s
                                    terms and conditions which are detailed and
                                    available for public viewing on (
                                    <a href="https://121directory.com/">
                                      <span style={{ color: "#337ab7" }}>
                                        "rajasthancafe.com"
                                      </span>
                                    </a>
                                    ) (the “Terms and Conditions”). For
                                    clarification purposes, the term “Agreement”
                                    as used herein shall collectively refers to
                                    this Letter of Agreement and the Terms and
                                    Conditions. By signing this Letter of
                                    Agreement, the Subscriber agrees to be bound
                                    by the Terms and Conditions.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      4.0 The MERCHANT receives orders by
                                      [Select the appropriate option]:
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      4.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Web-Dashboard Integrated to POS
                                    :&nbsp;
                                    <input type="checkbox" />
                                    &nbsp;Yes /&nbsp;
                                    <input type="checkbox" />
                                    &nbsp;No
                                    <br />
                                    *Dimensions is the preferred POS partner.
                                    Other POS solutions can be integrated on
                                    case by case basis.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      4.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Merchant App (No Device
                                    provided):&nbsp;
                                    <input type="checkbox" />
                                    &nbsp;Yes /&nbsp;
                                    <input type="checkbox" />
                                    &nbsp;No
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      5.0 Equipment.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      5.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;If required and agreed,
                                    Rajasthancafe.com shall provide to the
                                    MERCHANT electronic devices the “Devices”)
                                    on a lease basis for the amount as stated in
                                    the below table, enabling the Subscriber to
                                    use the&nbsp;
                                    <a href="https://121directory.com/">
                                      <span style={{ color: "#337ab7" }}>
                                        "rajasthancafe.com"
                                      </span>
                                    </a>
                                    &nbsp;Software and receive Orders.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      5.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;In the instance of the electronic
                                    devises not being returned to
                                    Rajasthancafe.com upon the end-date of the
                                    lease, the MERCHANT is obliged to pay the
                                    amount of the electronic devices in the full
                                    value of the price mentioned in table,
                                    regardless of department
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;500 Aed{" "}
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>&nbsp;</p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      6.0 Subscription.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      6.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The MERCHANT agrees to pay
                                    rajasthancafe a monthly subscription fee of
                                    $ 100 &nbsp;on the basis the MERCHANT
                                    receives an accumulated amount of 60 orders
                                    or more per month.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      6.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;In the circumstance the MERCHANT has
                                    multiple branches registered and using the
                                    services provided by rajasthancafe, each
                                    branch is deemed an individual listing.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      6.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;In the circumstance the MERCHANT has
                                    multiple branches registered and using the
                                    services provided by&nbsp;
                                    <a href="https://121directory.com/">
                                      <span style={{ color: "#337ab7" }}>
                                        "rajasthancafe.com"
                                      </span>
                                    </a>
                                    , each branch is deemed an individual
                                    listing.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      6.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The subscription fee explained in 6.1
                                    of this Agreement applies to each of the
                                    MERCHANTS individual branches and not a
                                    combined calculation or fee.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      7.0 Consumer 5% Cashback Scheme
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      7.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The MERCHANT agrees to partake into
                                    rajasthancafe Consumer Cashback scheme.
                                    Detailed as;
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      7.1.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Each Order placed by the Consumer has
                                    a deduction of 5% from the net order value.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      7.1.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    Consumer 5% Cashback is held in an e-wallet
                                    usable on rajasthancafe platform only.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      7.1.3
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The Consumer has the right to spend
                                    their accumulated 5% Cashback with a
                                    MERCHANT of their choosing
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      7.1.4
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;In the event the MERCHANT receives an
                                    order which is partly paid by the use of the
                                    Consumers e-wallet consisting of the 5%
                                    Cashback rewards scheme, 5% Cashback is not
                                    applicable on the Order.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      8.0 Bank Charges and Gateway Fees.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      8.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The MERCHANT accepts to the Bank and
                                    Gateway Fees set at 3.5% + AED 1.5 per Order
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      9.0 Payment methods.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      9.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Available payment methods offered to
                                    the consumer to process the consumers order
                                    include:
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      9.1.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Cash on delivery;
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      9.1.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Electronic Payment Mechanism: (credit
                                    card/debit card/ net banking transfer and/
                                    or e-wallets); and, Apple Pay or other
                                    authorised payment methods set-out by the
                                    Governments of the United Arab Emirates.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      9.1.3
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Redemption of vouchers and/or discount
                                    coupons (as applicable) approved by&nbsp;
                                    <a href="https://121directory.com/">
                                      <span style={{ color: "#337ab7" }}>
                                        "rajasthancafe.com"
                                      </span>
                                    </a>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      10.0 Payment Settlement Process.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      10.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Payment settlement process for
                                    Electronic Payment Mechanism: Any order
                                    payment amount which is collected by
                                    rajasthancafe.com for, and on behalf of, the
                                    Merchant, through the Electronic Payment
                                    Mechanism, shall be passed on by
                                    rajasthancafe.com to the Merchant within a
                                    period of 7 business/ working days from the
                                    date of payment of the order payment amount
                                    by the Consumer, subject to the deduction of
                                    the following amounts by rajasthancafe.com,
                                    as applicable.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      10.1.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Flat fee for third party deliveries;
                                    if used.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      10.1.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The banks Gateway fees as stated in
                                    section 3 of this Agreement.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      10.1.3
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;5% customer Cashback as stated in
                                    section 3 of this Agreement
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      10.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Payment Settlement for Cash on
                                    delivery transactions
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      10.2.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Cash on delivery transactions that are
                                    completed using third-party delivery drivers
                                    will be collected on the Merchants behalf
                                    and reconciled with the Merchants account on
                                    seven (7) business/working day basis also
                                    considering the deduction of third-party
                                    delivery fees and the agreed 5% customer
                                    Cashback dues.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      10.2.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Cash payments collected by the
                                    Merchants own delivery driver solution is
                                    kept by the Merchant. The 5% guest Cashback
                                    shall be automatically deducted at the time
                                    of the consumer placing the order and added
                                    to the guests personal e-wallet.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      11.0 Third Party Delivery.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      11.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Dependent on the selection made by the
                                    MERCHANT, where the MERCHANT has chosen to
                                    use third-party delivery drivers, the
                                    MERCHANT agrees to the following:
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      11.1.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;MERCHANT must immediately notify
                                    rajasthancafe.com of any eventualities,
                                    including unavailability or MERCHANT's
                                    inability to connect with the systems of
                                    third-party delivery drivers (“Carrier”).
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      11.1.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;MERCHANT is responsible for preparing
                                    the Orders for delivery in a form suitable
                                    for collection, transportation, and delivery
                                    by the Carrier.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      11.1.3
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The Carrier will deliver the Order to
                                    the applicable address as provided by the
                                    MERCHANT. The package shall be up to 10kg
                                    &amp; L43cm X W43cm X H43cm for a scooter.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      11.1.4
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;In case of any complaints from a
                                    Customer to the Carrier about the quality
                                    and quantity of the collected Order, this
                                    will be re-directed to the MERCHANT.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      11.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The Orders for Delivery may not
                                    include:
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      11.2.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Counterfeit goods, products or Orders
                                    that are illegal, guns or weapons, living
                                    organisms or animals, medical waste,
                                    bullion, precious stones, currency,
                                    explosives, ammunition, human remains,
                                    ivory, narcotics, etc.; or
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      11.2.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Goods, products or Orders which have
                                    been classified as hazardous, dangerous,
                                    prohibited, illegal and/or restricted.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      11.2.3
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The Carrier may reject a request for
                                    taking delivery where the delivery zone is
                                    outside the area where the Carrier does not
                                    deliver the above.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      12.0 Delivery Pricing, Fee and Payment.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      12.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Where the MERCHANT has selected to use
                                    a third-party delivery Carrier, the Fee
                                    payable shall include the Delivery Charge
                                    payable to such third party. Any Delivery
                                    Charge payable by the MERCHANT will be paid
                                    by the MERCHANT to rajasthancafe.com and
                                    rajasthancafe.com will be responsible for
                                    paying the Carrier.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      12.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;rajasthancafe.com will collect payment
                                    for all Orders from its Customers via the
                                    use of third party drivers. The MERCHANT
                                    authorises rajasthancafe.com to accept all
                                    Orders on the MERCHANT’s behalf and
                                    authorises rajasthancafe.com to advise
                                    Customers that it is authorised to do so and
                                    that payment to rajasthancafe.com will
                                    discharge the relevant Customer’s payment
                                    obligations to the MERCHANT.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      12.3
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The delivery charges set out by the
                                    third-party carrier are to be paid in full
                                    by the MERCHANT. This amount shall be
                                    deducted from the funds released by
                                    Rajasthancafe.comseven (7) business/working
                                    days from collection.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      12.4
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Own Driver Delivery
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      12.4.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;When delivering the Order by the use
                                    of the MERCHANTS own delivery
                                    driver/service, the MERCHANT has the option
                                    of setting their own delivery fee payable by
                                    the consumer. If the method of payment is
                                    done so by the form of Electronic Payment
                                    Mechanism: (credit card/ debit card), via
                                    Rajasthancafe platform, funds will be
                                    collected by Rajasthancafe.comand released
                                    to the MERCHANT in 7 business/working days
                                    from the date of collection.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      13.0 Pickup timings:
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      13.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Carriers will only wait for up to
                                    fifteen (15) minutes at the pick-up location
                                    for the Order to be collected.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      13.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;If the Carrier has been waiting at the
                                    pick-up location for fifteen (15) minutes or
                                    more, the Carrier will have no obligations
                                    to try and meet the required service levels
                                    including the time of delivery.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      13.3
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;A Carrier will only wait for up to
                                    fifteen (15) mins at the delivery location
                                    for the Customer.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      13.4
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;If the Customer is unavailable to take
                                    possession of the Order within fifteen (15)
                                    minutes, the Carrier will return the Order
                                    to where it was collected from and Carrier
                                    will be entitled to charge the MERCHANT the
                                    relevant Fees as if the delivery had been
                                    completed as a result of the Carrier
                                    returning the Order to where it was
                                    collected from.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      14.0 Cancellation or Rescheduling.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      14.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Any requests for cancellation or
                                    rescheduling must be done via the
                                    rajasthancafe.com or Call Centre by
                                    selecting cancel within the MERCHANTs order
                                    history and are subject to the following
                                    terms:
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      14.1.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;If a Carrier has not yet been assigned
                                    to collect the Order by the time MERCHANT
                                    requested to cancel or reschedule it,
                                    MERCHANT may cancel or reschedule the
                                    request without charge;
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      14.1.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;If a Carrier has already been assigned
                                    to collect the Order and has either (i)
                                    already arrived at MERCHANT’s collection
                                    location or (ii) the request to collect was
                                    made more than fifteen (15) minutes before
                                    MERCHANT requested to cancel or reschedule
                                    it, MERCHANT will be charged the relevant
                                    Fee as if the delivery had been completed;
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      14.1.3
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;If a Carrier cannot complete a
                                    delivery due to an incorrect address, the
                                    Order exceeding the weight and/or dimension
                                    restrictions for the mode of transport
                                    selected, and/or for any other reason, the
                                    request to deliver will be canceled and
                                    MERCHANT will be charged the relevant Fee as
                                    if the delivery had been completed.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      15.0 Online and Offline Settings:
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      15.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The MERCHANT may use “Offline Mode
                                    “only when they are unable to fulfil the
                                    Orders due to temporary lack of logistics
                                    fleet, or where there is a need to stop the
                                    delivery of an Order due to any emergency,
                                    or where the delivery is outside the usual
                                    operating hours of the MERCHANT Outlet
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      15.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The MERCHANT may enable the “Offline
                                    Mode “only for a maximum of 1 hour at a
                                    time.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      15.3
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;rajasthancafe.com will contact the
                                    MERCHANT whenever the MERCHANT is in
                                    “Offline Mode“ for more than an hour and
                                    turn the Outlet to “Online Mode” after this
                                    one hour unless otherwise agreed by the
                                    Parties to maintain “Offline Mode “
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      15.4
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The MERCHANT shall not use “Offline
                                    Mode “during the Outlet’s peak hours unless
                                    otherwise agreed between the Parties. The
                                    Parties acknowledge and agree that a breach
                                    of this clause shall constitute a material
                                    breach of the Agreement.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      16.0 Termination of the agreement.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      16.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;rajasthancafe.com may terminate this
                                    agreement unilaterally at any time. Further
                                    details are provided in rajasthancafe.coms
                                    Terms and Conditions.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      16.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The Merchant has the right to
                                    terminate this Agreement granted 30 days
                                    written notice has been provided.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      17.0 Term.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      17.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;This Agreement shall be effective from
                                    the date first written on page 1 of this
                                    agreement and shall remain in full force and
                                    effect for a period of 1 year. The term of
                                    the Agreement shall automatically extend at
                                    the end of the initial term for a series of
                                    similar terms, unless either Party gives
                                    written notice of non-renewal to the other
                                    party, not later thirty (30) days before the
                                    end of the initial term (or subsequent
                                    terms).
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      18.0 Amendments.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      18.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;No amendment, variation or supplement
                                    to this Letter of Agreement shall be
                                    effective unless it is in writing and signed
                                    by both Parties.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      19.0 Notices.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      19.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Method.
                                    <br />
                                    Any notice or other communication to be
                                    served under or in connection with this
                                    Agreement shall be made in writing and,
                                    unless otherwise stated, served in person or
                                    by post, fax or any electronic method
                                    approved by Parties to the relevant Party at
                                    its address or fax number shown immediately
                                    after its name on the signature page of this
                                    Agreement or such other address or number
                                    notified by it to the other Parties to this
                                    Agreement.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      19.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Effective Service.
                                    <br />
                                    Any notice or other communication served by
                                    registered post, personally or by courier
                                    will, unless otherwise stated, be effective
                                    on delivery if delivered to the relevant
                                    address. A notice or other communication
                                    sent by fax or any other electronic method
                                    will be effective when received in legible
                                    form.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      19.3
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Proof of Service.
                                    <br />
                                    In proving service of any notice or other
                                    communication it will be sufficient to
                                    prove:In the case of a letter, that such
                                    letter was properly stamped, addressed and
                                    placed in the post or in thecase of personal
                                    delivery, was left at the correct address;
                                    and In the case of an email or fax
                                    transmission,that email or fax was duly
                                    transmitted to the email or fax number, as
                                    appropriate, of the addressee referred to in
                                    Clause 1 of this Agreement.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      19.4
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Language of Communication.
                                    <br />
                                    Any notice given under or in connection with
                                    this Agreement will be in English.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      20.0 General.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      20.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Rights Cumulative.
                                    <br />
                                    The rights, powers and remedies provided for
                                    in this Agreement are cumulative and shall
                                    not exclude any other rights, powers and
                                    remedies provided by law.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      20.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Waiver
                                    <br />
                                    No failure by either Party to exercise or
                                    any delay by either Party in exercising any
                                    right or remedy under this Agreement shall
                                    operate as a waiver of such right or remedy,
                                    nor shall any single or partialexercise of
                                    any right or remedy prevent any further or
                                    other exercise of such right or remedy or
                                    the exercise of any other right or remedy.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      20.3
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Entire Agreement.
                                    <br />
                                    This Agreement contains the whole agreement
                                    between the Parties relating to the
                                    transactions contemplated herein and
                                    supersedes all previous agreements between
                                    the Parties relating to the same
                                    transaction.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      20.4
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Severability
                                    <br />
                                    If, at any time, any provision of this
                                    Agreement is or becomes illegal, invalid or
                                    unenforceable in any respect under the law
                                    of any jurisdiction neither the legality,
                                    validity or enforceability of the remaining
                                    provisions of this Agreement, nor the
                                    legality, validity or enforceability of such
                                    provision under the law of any other
                                    jurisdiction, shall in any way be affected
                                    or impaired.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      20.5
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Assignment.
                                    <br />
                                    This Agreement shall be binding on the
                                    Parties, their respective successors and
                                    permitted assigns, heirs and/or legal
                                    representatives.
                                    <br />
                                    Neither Party may assign or transfer any of
                                    its rights or obligations under this
                                    Agreement without the written consent of the
                                    other Party.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      20.6
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Third parties.
                                    <br />
                                    Except as otherwise expressly provided in
                                    this Agreement, the terms of this Agreement
                                    may be enforced only by a party to it.
                                    <br />
                                    Notwithstanding any term of this Agreement,
                                    no consent of a third party is required for
                                    any termination or amendment of this
                                    Agreement.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      20.7
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Counterparts
                                    <br />
                                    This Agreement may be executed in any number
                                    of counterparts and all those counterparts
                                    taken together shall be deemed to constitute
                                    one and the same instrument.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      21.0 Governing Law and jurisdiction.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      21.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Governing Law.
                                    <br />
                                    This Agreement and any non-contractual
                                    obligations arising out of or in connection
                                    with it are governed by the laws of the
                                    Emirate of [Abu Dhabi] and the federal laws
                                    of the UAE.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      21.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;Jurisdiction.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      21.1.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The Courts of [Abu Dhabi] have
                                    exclusive jurisdiction to settle any dispute
                                    arising out of or in connection with this
                                    Agreement (including a dispute relating to
                                    the existence, validity or termination of
                                    this Agreement or any non-contractual
                                    obligation arising out of or in connection
                                    with this Agreement) (a "Dispute").
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      21.1.2
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;The Courts of [Abu Dhabi] are the most
                                    appropriate and convenient courts to settle
                                    Disputes and accordingly no Party will argue
                                    to the contrary.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      22.0 Signatories.
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ backgroundColor: "white" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "#333333" }}>
                                      22.1
                                    </span>
                                  </span>
                                </strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "#333333" }}>
                                    &nbsp;This Agreement was executed by the
                                    duly authorised representatives of the
                                    Parties on the date set out above. In
                                    witness thereof, the Parties have duly
                                    executed this Agreement as of the date first
                                    above written.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Row>
          </div>
        </>
      </div>
      <Footer />
    </>
  );
}
