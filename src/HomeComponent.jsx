import React, { Component } from 'react'
import  style from './HomeComponent.module.css'

class HomeComponent extends Component {
  render() {
    return (
      <div className={style.body}>
        <div className={style.div}>
            <h1 className={style.h1}>Quiz App</h1>
            <button className={style.button}>Play</button>
        </div>
      </div>
    )
  }
}

export default HomeComponent
