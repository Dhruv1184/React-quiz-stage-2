import React from 'react'
// import './App.css'
import HomeComponent from './HomeComponent'
import QuizComponent from './quizComponent'
// import ResultComponent from './ResultComponent'
import Data from './component/questions'
import { Route,Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <div>
        <Routes>
           <Route path='/quiz' element={<QuizComponent data ={Data}/>}></Route>
           <Route path ='/' element={<HomeComponent/>}></Route>
           {/* <Route path ='/result' element={<ResultComponent />}></Route> */}
        </Routes>

        
      </div>
    </>
  )
}

export default App
