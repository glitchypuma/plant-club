import { Route, Routes} from "react-router-dom"
import { Home } from "./pages/Home"
import { Plants } from "./pages/Plants"
import { Account } from "./pages/Account"
import { About } from "./pages/About"
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/plants" element={<Plants />}/>
      <Route path="/account" element={<Account />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
    </>
  )
}

export default App
