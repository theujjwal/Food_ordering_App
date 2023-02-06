import { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [cartIsShow,setCartIsShown] = useState(false)
  const showCartHandler = () =>{
    setCartIsShown(true)
  }
  const hideCartHandler =()=>{
    setCartIsShown(false)
  }
  return (

    <Fragment>
      {cartIsShow && <Cart onClick={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <Meals/>

    </Fragment>
  );
}

export default App;
