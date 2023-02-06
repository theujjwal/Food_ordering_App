import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

export default function Cart(props) {
    const cartItems = <ul className={classes['cart-items']}>{[{id:'c1',name:'Sushi',amount:2,price:12.99},].map((item)=><li>{item.name}</li>)}</ul>
  return (
    <Modal onClick={props.onClick}>
        {cartItems}
        <div className={classes.total}>
            <span>total amount</span>
            <span>23.99</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClick}>close</button>
            <button className={classes.button}>order</button>


        </div>
        </Modal>
  )
}
