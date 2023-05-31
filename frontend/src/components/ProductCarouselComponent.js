import React from 'react'
import {Carousel} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
const ProductCarouselComponent = () => {
    const cursorP={
      cursor:"pointer"
    }  
    return (
    <Carousel fade>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{height:"300px", objectFit:"cover"}}
          src="/images/carousel/Stationary.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
          <h3>Stationary</h3>
          </LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"300px", objectFit:"cover"}}
          src="/images/carousel/ColdDrinks.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
        <h3>ColdDrinks</h3>
          </LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"300px", objectFit:"cover"}}
          src="/images/carousel/Bakery.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
            <h3>Bakery</h3>
          </LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductCarouselComponent