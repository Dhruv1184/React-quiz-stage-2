import React from 'react'
// import './App.css'
import HomeComponent from './HomeComponent'
import QuizComponent from './quizComponent'
import ResultComponent from './ResultComponent'
import Data from './component/questions'

function App() {

  return (
    <>
      <div>
        <HomeComponent />
        <QuizComponent data ={Data}/>
        <ResultComponent />
      </div>
    </>
  )
}

export default App
