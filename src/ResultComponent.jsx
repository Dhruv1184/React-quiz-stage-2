import React, { Component } from 'react'
import styling from './Result.module.css'
class ResultComponent extends Component {
  render() {
    return (
      <div className={styling.body}>
        <h1 className={styling.h1}>Result</h1>
        <div className={styling.main}>
            <h2 className={styling.heading1}>You need more practice!</h2>
            <h1 className={styling.score}>Your score s 20%</h1>
            <div className={styling.flex}>
                <h3>Total number of questions</h3>
                <h3>0</h3>
            </div>
            <div className={styling.flex}>
                <h3>Number of attempted questions</h3>
                <h3>0</h3>
            </div>
            <div className={styling.flex}>
                <h3>Number of correct answers</h3>
                <h3>0</h3>
            </div>
            <div className={styling.flex}>
                <h3>Number of wrong answers</h3>
                <h3>0</h3>
            </div>
        </div>
        <button className={styling.btn1}>Play Again</button>
        <button className={styling.btn2}>Back to home</button>
      </div>
    )
  }
}
export default ResultComponent