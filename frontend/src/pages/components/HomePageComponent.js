import React from 'react'
import {Row ,Container} from 'react-bootstrap'
import CategoryCardComponent from '../../components/CategoryCardComponent'
import ProductCarouselComponent from '../../components/ProductCarouselComponent'
import { useEffect,useState } from 'react'
const HomepageComponent = ({categories}) => {
  // const categories =[
  //   "Stationary",
  //   "Daily Needs",
  //   "Snacks",
  //   "Pulses",
  //   "Cold Drinks",
  //   "Bakery",
  // ]

  const [mainCategories,setMainCategories] = useState([]);
  useEffect(()=>{
    setMainCategories((cat)=>categories.filter((item)=> !item.name.includes("/")));
  },[categories])

  return (
    <>
    <ProductCarouselComponent/>
    <Container>
    <Row xs={1} md={2} className="g-4 mt-5">
    {
      mainCategories.map((category,idx)=> 
      <CategoryCardComponent key={idx} category={category} idx={idx}/>)
    }
    </Row>
    </Container>
    </>
  )
}

export default HomepageComponent