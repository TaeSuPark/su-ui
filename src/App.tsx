import { Route, Routes } from "react-router-dom"
import Demo from "./pages/Demo"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Demo />} />
    </Routes>
  )
}

export default App
