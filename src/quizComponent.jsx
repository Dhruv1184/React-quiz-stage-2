import React, { Component } from 'react'
import styles from './quiz.module.css'

import ResultComponent from './ResultComponent'
 class QuizComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 1,
            score:0,
            wrong: 0,
            prop : this.props.data(),
            result:true
        }
    }

    handelScore = ()=>{
        this.setState({result : !this.state.result})
    }
    HandleClick = (e) =>{
        if (e.target.innerText == this.state.prop[this.state.count-1].answer ){
            this.setState({score: this.state.score + 1})
            if (this.state.count < 15){
                this.setState({count : this.state.count+1})
            }
            else{
                this.setState({result : !this.state.result})
            }
        }
        else{
            alert('Wrong answer')
            this.setState({wrong:this.state.wrong+1})
            if (this.state.count < 15){
                this.setState({count : this.state.count+1})
            }
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
    
    return (
        <>
        {console.log(this.state.prop)}
       {(this.state.result)? 
      <div className={styles.body}>
        <div className={styles.playarea}>
            <h1 className={styles.heading}>Question</h1>
            <h4 className={styles.number}>{this.state.count} of 15</h4>
            <h3 className={styles.question}>{this.state.prop[this.state.count-1].question}</h3>
            <div className={styles.option}>
                <div className={styles.box} onClick={(e)=>this.HandleClick(e)}>
                    <h3 id='opt' >{this.state.prop[this.state.count-1].optionA}</h3>
                </div>
                <div  className={styles.box} onClick={(e)=>this.HandleClick(e)}>
                    <h3 id='opt'>{this.state.prop[this.state.count-1].optionB}</h3>
                </div>
                <div  className={styles.box} onClick={(e)=>this.HandleClick(e)}>
                    <h3 id='opt'>{this.state.prop[this.state.count-1].optionC}</h3>
                </div>
                <div  className={styles.box} onClick={(e)=>this.HandleClick(e)}>
                    <h3 id='opt'>{this.state.prop[this.state.count-1].optionD}</h3>
                </div>
            </div>
            <button className={styles.btn1} onClick={this.previous}>Previous</button>
            <button className={styles.btn2} onClick={this.next}>Next</button>
            <button className={styles.btn3} onClick={this.quit}>Quit</button>
            
            <button className={styles.btn4} onClick={this.handelScore}>Finish</button>
          
        </div>
      </div>
      :
      <div>
            <ResultComponent score = {this.state.score} playAgain = {this.state.result} wrong={this.state.wrong} />
      </div>
  }
      </>
    )
  }
}
export default QuizComponent
