import React,{Fragment} from 'react'
import mealsImage from '../../assests/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'


export default function Header(props) {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Delicious Food"/>

        </div>


    </React.Fragment>
  )
}
