import React, { Component } from 'react'
import  style from './HomeComponent.module.css'
import { Link } from 'react-router-dom'
class HomeComponent extends Component {
  render() {
    return (
      <div className={style.body}>
        <div className={style.div}>
            <h1 className={style.h1}>Quiz App</h1>
            <Link to='/quiz'>
            <button className={style.button}>Play</button>
            </Link>
        </div>
      </div>
    )
  }
}

export default HomeComponent
