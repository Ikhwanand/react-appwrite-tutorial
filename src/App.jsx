import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nodes from "./pages/Nodes"
import LoginRegister from "./pages/LoginRegister"

function App() {
  return (
    <div id="app">
      <div id="container">
        <BrowserRouter>
          <Routes>
            <Route element={<Nodes />} path="/"/>
            <Route element={<LoginRegister />} path="/login"/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
