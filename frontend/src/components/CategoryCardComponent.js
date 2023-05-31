import React from 'react'
import {Card,Button} from 'react-bootstrap' 
import {LinkContainer} from 'react-router-bootstrap'
const CategoryCardComponent = ({category,idx}) => {

    // const images=[
    //     "/images/Stationary-category.png",
    //     "/images/DailyNeeds-category.png",
    //     "/images/Snacks-category.jpeg",
    //     "/images/pulses-category.jpeg",
    //     "/images/ColdDrinks-category.jpeg",
    //     "/images/Bakery-category.jpeg",
    //     "/images/tablets-category.png",
    //     "/images/tablets-category.png",
    // ]

  return (
    <Card>
      <Card.Img  crossOrigin='anonymous' variant="top" src={category.image ?? null} />
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
        <LinkContainer to={`/product-list/category/${category.name}`}>
            <Button variant="primary">Go to Category</Button>
        </LinkContainer>
        
      </Card.Body>
    </Card>
  );
}

export default CategoryCardComponent