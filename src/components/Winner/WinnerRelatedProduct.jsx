import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import WinnerRelatedCard from "./WinnerRelatedCard";

export default function WinnerRelatedProduct() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };
  return (
    <>
      <Container fluid className="">
        <Carousel
          ssr
          partialVisbile
          //   deviceType={deviceType}
          itemClass="image-item "
          responsive={responsive}
          slidesToSlide={4}
        >
          {/* <div className="m-2">
            <Link to="property-detail">
              <img
                src="asset/images/sell-product-1.jpg"
                height="300px"
                width="100%"
              />
              <p className="custom-tag">DELHI NCR</p>
            </Link>
          </div> */}

          <WinnerRelatedCard />
          <WinnerRelatedCard />
          <WinnerRelatedCard />
          <WinnerRelatedCard />
          <WinnerRelatedCard />
          <WinnerRelatedCard />
          <WinnerRelatedCard />
        </Carousel>
      </Container>
    </>
  );
}
