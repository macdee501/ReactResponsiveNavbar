import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/shop"></Route>
        <Route path="/contact"></Route>
        <Route path="/about"></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
