import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Dream from "./pages/Dream"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dream/:id" element={<Dream />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
