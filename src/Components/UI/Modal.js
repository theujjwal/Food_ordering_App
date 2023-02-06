import classes from './Modal.module.css';
import React, { Fragment } from 'react'
import ReactDOM  from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick}/>
}
const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.conent}>{props.children}</div>
    </div>
} 
const proptalElement = document.getElementById('overlays')

export default function Modal(props) {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>,proptalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,proptalElement)}
        </Fragment>
  )
}
