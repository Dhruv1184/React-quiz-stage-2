import React, { Component } from 'react'
import styling from './Result.module.css'
import { Link } from 'react-router-dom'



class ResultComponent extends Component {
 
  playAgain=()=>{
    window.location.reload(false)
  }
  render() {
    const score = this.props.score
    const percent = (score/15)*100
    const perc= Math.round(percent*100)/100
    const attempt = score + this.props.wrong

    return (
      
      <div className={styling.body}>
        <h1 className={styling.h1}>Result</h1>
        <div className={styling.main}>
            <h2 className={styling.heading1}>You need more practice!</h2>
            <h1 className={styling.score}>Your score is ({perc}%)</h1>
            <div className={styling.flex}>
                <h3>Total number of questions</h3>
                <h3>15</h3>
            </div>
            <div className={styling.flex}>
                <h3>Number of attempted questions</h3>
                <h3>{attempt}</h3>
            </div>
            <div className={styling.flex}>
                <h3>Number of correct answers</h3>
                <h3>{score}</h3>
            </div>
            <div className={styling.flex}>
                <h3>Number of wrong answers</h3>
                <h3>{this.props.wrong}</h3>
            </div>
        </div>
        
          <button className={styling.btn1} onClick={this.playAgain}>Play Again</button>
      
        <Link to='/'>
        <button className={styling.btn2}>Back to home</button>
        </Link>

      </div>
    )
  }
}
export default ResultComponent