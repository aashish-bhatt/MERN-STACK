import HomepageComponent from "./components/HomePageComponent";
import {useSelector} from "react-redux";
const Homepage = () => {
  const {categories} = useSelector((state)=>state.getCategories);
  return <HomepageComponent categories={categories }/>;
};

export default Homepage;
