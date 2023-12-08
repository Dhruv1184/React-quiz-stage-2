import React, { Component } from 'react'
import styles from './quiz.module.css'
 class QuizComponent extends Component {
    constructor(){
        super()
        this.state = {
            count : 1
        }
    }

    next = ()=>{
        if (this.state.count < 15){
        this.setState({count : this.state.count+1})
        }
    }

    previous = ()=>{
        if (this.state.count > 1){
        this.setState({count : this.state.count-1})
        }
    }

    quit = () =>{
        window.confirm('Are you sure you want to quit?')
    }

  render() {
    const data = this.props.data()
    return (
      <div className={styles.body}>
        <div className={styles.playarea}>
            <h1 className={styles.heading}>Question</h1>
            <h4 className={styles.number}>{this.state.count} of 15</h4>
            <h3 className={styles.question}>{data[this.state.count-1].question}</h3>
            <div className={styles.option}>
                <div className={styles.box}>
                    <h3>{data[this.state.count-1].optionA}</h3>
                </div>
                <div  className={styles.box}>
                    <h3>{data[this.state.count-1].optionB}</h3>
                </div>
                <div  className={styles.box}>
                    <h3>{data[this.state.count-1].optionC}</h3>
                </div>
                <div  className={styles.box}>
                    <h3>{data[this.state.count-1].optionD}</h3>
                </div>
            </div>
            <button className={styles.btn1} onClick={this.previous}>Previous</button>
            <button className={styles.btn2} onClick={this.next}>Next</button>
            <button className={styles.btn3} onClick={this.quit}>Quit</button>
        </div>
      </div>
    )
  }
}
export default QuizComponent
