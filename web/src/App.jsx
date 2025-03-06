import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskScreen from './pages/TaskScreen'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<TaskScreen />} />
        
    </Routes>
   </BrowserRouter>
  )
}

export default App
