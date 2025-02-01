import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import All_task from './COMPONENTS/All_task'
import Pending_task from './COMPONENTS/Pending_task'
import Completed_task from './COMPONENTS/Completed_task'
import Navbar from './COMPONENTS/Navbar'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/All_task' element={<All_task />} />
            <Route path='/Pending_task' element={<Pending_task />} />
            <Route path='/Completed_task' element={<Completed_task />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
